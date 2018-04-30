import React from 'react';
import PropTypes from 'prop-types';
import Slate from '../lib/slate';
import Moment from 'moment'
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import ContextPortal from '../context/ContextPortal';
// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
// This issue should no longer affect us in our current approach. consider allowing newer version of Slate
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
import Button from '../elements/Button';
import Divider from 'material-ui/Divider';
import AutoReplace from 'slate-auto-replace'
import SuggestionsPlugin from '../lib/slate-suggestions-dist'
import position from '../lib/slate-suggestions-dist/caret-position';
import StructuredFieldPlugin from './StructuredFieldPlugin';
import NoteParser from '../noteparser/NoteParser';
import './FluxNotesEditor.css';

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Plain.deserialize('');
const schema = {
    nodes: {
        paragraph: props => <p {...props.attributes}>{props.children}</p>,
        heading: props => <h1 {...props.attributes}>{props.children}</h1>,
        'bulleted-list-item': props => <li {...props.attributes}>{props.children}</li>,
        'numbered-list-item': props => <li {...props.attributes}>{props.children}</li>,
        'bulleted-list': props => <ul {...props.attributes}>{props.children}</ul>,
        'numbered-list': props => <ol {...props.attributes}>{props.children}</ol>,
    },
    marks: {
        bold: (props) => <strong>{props.children}</strong>,
        italic: (props) => <em>{props.children}</em>,
        underlined: (props) => <u>{props.children}</u>,
    }
};

const structuredFieldTypes = [
    {
        name: 'typeStructuredField',
        value: 'structured_field'
    }
]

// Given  text and starting index, recursively traverse text to find index location of text
function getIndexRangeForCurrentWord(text, index, initialIndex, initialChar) {
    if (index === initialIndex) {
        return {
            start: getIndexRangeForCurrentWord(text, index - 1, initialIndex, initialChar),
            end: getIndexRangeForCurrentWord(text, index + 1, initialIndex, initialChar)
        }
    }
    if (text[index] === initialChar || text[index] === undefined) {
        return index
    }
    if (index < initialIndex) {
        return getIndexRangeForCurrentWord(text, index - 1, initialIndex, initialChar)
    }
    if (index > initialIndex) {
        return getIndexRangeForCurrentWord(text, index + 1, initialIndex, initialChar)
    }
}

class FluxNotesEditor extends React.Component {
    constructor(props) {
        super(props);

        this.contextManager = this.props.contextManager;
        this.structuredFieldMapManager = this.props.structuredFieldMapManager;
        this.updateErrors = this.props.updateErrors;

        this.contextManager.setIsBlock1BeforeBlock2(this.isBlock1BeforeBlock2.bind(this));

        this.didFocusChange = false;
        this.editorHasFocus = false;
        this.lastPosition = { top: 0, left: 0 };

        this.selectingForShortcut = null;
        this.onChange = this.onChange.bind(this);
        this.onSelectionChange = this.onSelectionChange.bind(this);

        this.noteParser = new NoteParser(this.props.shortcutManager, this.props.contextManager);

        // Set the initial state when the app is first constructed.
        this.resetEditorState();

        // setup structured field plugin
        const structuredFieldPluginOptions = {
            contextManager: this.contextManager,
            structuredFieldMapManager: this.structuredFieldMapManager,
            updateErrors: this.updateErrors,
            insertText: this.insertTextWithStructuredPhrases
        };
        structuredFieldTypes.forEach((type) => {
            const typeName = type.name;
            const typeValue = type.value;
            structuredFieldPluginOptions[typeName] = typeValue;
        });

        this.structuredFieldPlugin = StructuredFieldPlugin(structuredFieldPluginOptions);

        // setup suggestions plugin (autocomplete)
        this.suggestionsPluginCreators = SuggestionsPlugin({
            capture: /#([\w\s\-,]*)/,
            onEnter: this.choseSuggestedShortcut.bind(this),
            suggestions: this.suggestionFunction.bind(this, '#'),
            trigger: '#',
        });
        this.suggestionsPluginInserters = SuggestionsPlugin({
            capture: /@([\w\s\-,]*)/,
            onEnter: this.choseSuggestedShortcut.bind(this),
            suggestions: this.suggestionFunction.bind(this, '@'),
            trigger: '@',
        });

        this.plugins = [
            this.suggestionsPluginCreators,
            this.suggestionsPluginInserters,
            this.structuredFieldPlugin
        ];

        // The logic below that builds the regular expression could possibly be replaced by the regular
        // expression stored in NoteParser (this.noteParser is instance variable). Only difference is
        // global flag it looks like? TODO: evaluate
        this.autoReplaceBeforeRegExp = undefined;
        let autoReplaceAfters = [];
        let allShortcutDefinitions = this.props.shortcutManager.getAllShortcutDefinitions();
        allShortcutDefinitions.forEach((def) => {
            let triggers = this.props.shortcutManager.getTriggersForShortcut(def.id);
            const shortcutNamesList = triggers.map(trigger => `${trigger.name}$`);
            autoReplaceAfters = autoReplaceAfters.concat(shortcutNamesList);
        });
        this.autoReplaceBeforeRegExp = new RegExp("(" + autoReplaceAfters.join("|") + ")", 'i');

        // now add an AutoReplace plugin instance for each shortcut we're supporting as well
        this.plugins.push(AutoReplace({
            "trigger": 'space',
            "before": this.autoReplaceBeforeRegExp,
            "transform": this.autoReplaceTransform.bind(this, null)
        }));

        // let's see if we have any regular expression shortcuts
        let triggerRegExp;
        allShortcutDefinitions.forEach((def) => {
            triggerRegExp = def.regexpTrigger;
            if (!Lang.isNull(triggerRegExp) && !Lang.isUndefined(triggerRegExp)) {
                // Modify regex to ensure this pattern only gets replaced if it's right before the cursor.
                //console.log(triggerRegExp);
                //const triggerRegExpModified = new RegExp(triggerRegExp.toString().replace(/\/(.*)\//, '$1$'));
                const triggerRegExpModified = triggerRegExp;
                //console.log(triggerRegExpModified);
                this.plugins.push(AutoReplace({
                    "trigger": 'space',
                    "before": triggerRegExpModified,
                    "transform": this.autoReplaceTransform.bind(this, def)
                }));
            }
        });
    }

    // Reset the editor to the initial state when the app is first constructed.
    resetEditorState() {
        this.state = {
            state: initialState,
            isPortalOpen: false,
            portalOptions: null,
        };

        // this.props.setFullAppState('isNoteViewerEditable', true);
    }

    // Reset editor state and clear context
    resetEditorAndContext() {
        this.resetEditorState();

        // Calls parent function which resets updatedEditorNote to be null
        this.props.handleUpdateEditorWithNote(null);

        // This clears error messages from the editor
        this.structuredFieldMapManager.clearStructuredFieldMap();

        // This clears the contexts so that the tray starts back at the patient context
        this.contextManager.clearContexts();
    }

    suggestionFunction(initialChar, text) {
        if (Lang.isUndefined(text)) return [];
        let shortcuts = this.contextManager.getCurrentlyValidShortcuts(this.props.shortcutManager);
        let suggestionsShortcuts = [];
        const textLowercase = text.toLowerCase();
        shortcuts.forEach((shortcut) => {
            //const triggers = shortcut.getStringTriggers();
            const triggers = this.props.shortcutManager.getTriggersForShortcut(shortcut);
            triggers.forEach((trigger) => {
                const triggerNoPrefix = trigger.name.substring(1);
                if (trigger.name.substring(0, 1) === initialChar && triggerNoPrefix.toLowerCase().includes(textLowercase)) {
                    suggestionsShortcuts.push({
                        "key": triggerNoPrefix,
                        "value": trigger,
                        "suggestion": triggerNoPrefix
                    });
                }
            });
        });
        return suggestionsShortcuts.slice(0, 10);
    }

    choseSuggestedShortcut(suggestion) {
        const {state} = this.state;
        const shortcut = this.props.newCurrentShortcut(null, suggestion.value.name);
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
            return this.openPortalToSelectValueForShortcut(shortcut, true, state.transform()).apply();
        } else {
            const transformBeforeInsert = this.suggestionDeleteExistingTransform(state.transform(), shortcut.getPrefixCharacter());
            const transformAfterInsert = this.insertStructuredFieldTransform(transformBeforeInsert, shortcut).collapseToStartOfNextText().focus();
            return transformAfterInsert.apply();
        }
    }

    insertShortcut(shortcutC, shortcutTrigger, text, transform = undefined, updatePatient = true) {
        if (Lang.isUndefined(transform)) {
            transform = this.state.state.transform();
        }

        // check if shortcutTrigger is currently valid
        if (Lang.isNull(shortcutC) && !this.shortcutTriggerCheck(shortcutTrigger)) {
            return this.insertPlainText(transform, shortcutTrigger);
        }

        let shortcut = this.props.newCurrentShortcut(shortcutC, shortcutTrigger, text, updatePatient);
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions() && text.length === 0) {
            return this.openPortalToSelectValueForShortcut(shortcut, false, transform);
        }
        return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
    }

    autoReplaceTransform(def, transform, e, data, matches) {
        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
        return this.insertShortcut(def, matches.before[0], "", transform).insertText(' ');
    }

    getTextCursorPosition = () => {
        const positioningUsingSlateNodes = () => { 
            const pos = {};
            const parentNode = this.state.state.document.getParent(this.state.state.selection.startKey);
            const el = Slate.findDOMNode(parentNode);
            const children = el.childNodes;

            for (const child of children) {
                if (child.getBoundingClientRect && child.getAttribute("data-key")) {
                    const rect = child.getBoundingClientRect();
                    pos.left = rect.left + rect.width;
                    pos.top = rect.top;
                }
            }
            return pos;
        }

        if (!this.editorHasFocus) {
            if (this.lastPosition.top === 0 && this.lastPosition.left === 0) {   
                this.lastPosition = positioningUsingSlateNodes();
            } 
        } else {
            const pos = position();
            // If position is calculated to be 0, 0, use our old method of calculating position.
            if ((pos.top === 0 && pos.left === 0) || (pos.top === undefined && pos.left === undefined)) {
                this.lastPosition = positioningUsingSlateNodes();
            } else {
                this.lastPosition = pos;
            }
        }
        return this.lastPosition;
    }

    openPortalToSelectValueForShortcut(shortcut, needToDelete, transform) {
        let portalOptions = shortcut.getValueSelectionOptions();

        this.setState({
            isPortalOpen: true,
            portalOptions: portalOptions,
            needToDelete: needToDelete,
        });
        this.selectingForShortcut = shortcut;
        return transform.blur();
    }

    // called from portal when an item is selected (selection is not null) or if portal is closed without
    // selection (selection is null)
    onPortalSelection = (state, selection) => {

        let shortcut = this.selectingForShortcut;
        this.selectingForShortcut = null;
        this.setState({isPortalOpen: false});
        if (Lang.isNull(selection)) {
            // Removes the shortcut from its parent
            shortcut.onBeforeDeleted();
            return state;
        }

        shortcut.clearValueSelectionOptions();
        shortcut.setText(selection.context);
        if (shortcut.isContext()) {
            shortcut.setValueObject(selection.object);
        }
        this.contextManager.contextUpdated();
        let transform;
        if (this.state.needToDelete) {
            transform = this.suggestionDeleteExistingTransform(null, shortcut.getPrefixCharacter());
        } else {
            transform = this.state.state.transform();
        }
        return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus().apply();
    }

    // consider reusing this method to replace code in choseSuggestedShortcut function
    suggestionDeleteExistingTransform(transform = null, prefixCharacter) {
        const {state} = this.state;
        if (Lang.isNull(transform)) {
            transform = state.transform();
        }
        let {anchorText, anchorOffset} = state;
        let anchorKey = state.anchorBlock.key;
        let text = anchorText.text
        if (text.length === 0) {
            const block = state.document.getPreviousSibling(anchorKey);
            if (block) {
                text = block.getFirstText().text;
                anchorOffset = text.length;
            }
        }

        let index = {start: anchorOffset - 1, end: anchorOffset}

        if (text[anchorOffset - 1] !== prefixCharacter) {
            index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, prefixCharacter)
        }

        // const newText = `${text.substring(0, index.start)}`
        const charactersInStructuredPhrase = (text.length - index.start)

        return transform
            .deleteBackward(0)
            .deleteBackward(charactersInStructuredPhrase);

    }

    insertStructuredFieldTransform(transform, shortcut) {
        if (Lang.isNull(shortcut)) return transform.focus();
        let result = this.structuredFieldPlugin.transforms.insertStructuredField(transform, shortcut);
        //console.log(result[0]);
        return result[0];
    }

    onChange = (state) => {
        let indexOfLastNode = state.toJSON().document.nodes.length - 1;
        let endOfNoteKey = state.toJSON().document.nodes[indexOfLastNode].key;
        let endOfNoteOffset = 0;
        // If the editor has no structured phrases, use the number of characters in the first 'node'
        if(Lang.isEqual(indexOfLastNode, 0) && !Lang.isUndefined(state.toJSON().document.nodes["0"].nodes["0"].characters)){
            endOfNoteOffset = state.toJSON().document.nodes["0"].nodes["0"].characters.length;
        } else{
            if(!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText)){
                endOfNoteOffset = this.props.documentText.length;
            }
        }

        // 'copy' the text every time into the note
        // Need to artificially set selection to the whole document
        // state.selection only has a getter for these values so create a new object
        let entireNote = {
            startKey: "0",
            startOffset: 0,
            endKey: endOfNoteKey,
            endOffset: endOfNoteOffset
        };
        let docText = this.structuredFieldPlugin.convertToText(state, entireNote); 
        
        this.props.setFullAppStateWithCallback(function(prevState, props){
            return {documentText: docText};
        });

        // save
        this.props.saveNoteUponKeypress();
        this.setState({
            state: state
        });
    }

    onFocus = () => {
        this.editorHasFocus = true;
    }

    onBlur = () => {
        this.editorHasFocus = false;
    }

    onInput = (event, data) => {
        // Create an updated state with the text replaced.
        var nextState = this.state.state.transform().select({
            anchorKey: data.anchorKey,
            anchorOffset: data.anchorOffset,
            focusKey: data.focusKey,
            focusOffset: data.focusOffset
        }).delete()

        this.insertTextWithStructuredPhrases(data.newText, nextState)
    }

    isBlock1BeforeBlock2(key1, offset1, key2, offset2, state) {
        if (Lang.isUndefined(state)) {
            state = this.state.state;
        }
        if (Lang.isNull(key1)) {
            key1 = state.selection.endKey;
        }
        if (key1 === key2) {
            return offset1 < offset2;
        } else {
            return state.document.areDescendantsSorted(key1, key2);
        }
    }

    onSelectionChange = (selection, state) => {
        this.contextManager.adjustActiveContexts((context) => {
            // return true if context should be active because it's before selection
            return this.isBlock1BeforeBlock2(context.getKey(), 0, selection.endKey, selection.endOffset, state);
        });
        this.contextManager.contextUpdated();
    }

    // This gets called before the component receives new properties
    componentWillReceiveProps = (nextProps) => {

        // Check if the item to be inserted is updated
        if (this.props.summaryItemToInsert !== nextProps.summaryItemToInsert && nextProps.summaryItemToInsert.length > 0) {
            if (this.props.isNoteViewerEditable) {
                this.insertTextWithStructuredPhrases(nextProps.summaryItemToInsert);
                this.props.itemInserted();
            }
        }


       // Check if the updatedEditorNote property has been updated
        if (this.props.updatedEditorNote !== nextProps.updatedEditorNote && !Lang.isNull(nextProps.updatedEditorNote)) {

            // If the updated editor note is an empty string, then add a new blank note. Call method to
            // re initialize editor state and reset updatedEditorNote state in parent to be null
            if (nextProps.updatedEditorNote === "") {
                this.resetEditorAndContext();
            }

            // If the updated editor note is an actual note (existing note), then clear the editor and insert the
            // content of the selected note into the editor and set the editor to read only
            else {

                this.resetEditorAndContext();

                this.insertTextWithStructuredPhrases(nextProps.updatedEditorNote.content, undefined, false);

                // If the note is in progress, set isNoteViewerEditable to true. If the note is an existing note, set isNoteViewerEditable to false
                if (nextProps.updatedEditorNote.signed) {
                    this.props.setFullAppState('isNoteViewerEditable', false);
                } else {
                    this.props.setFullAppState('isNoteViewerEditable', true);
                }
            }
        }

        // Check if the current view mode changes
        if (this.props.currentViewMode !== nextProps.currentViewMode && !Lang.isNull(nextProps.currentViewMode)) {
            this.resetEditorAndContext();
            this.props.handleUpdateEditorWithNote(null);
            this.structuredFieldMapManager.clearStructuredFieldMap();
            this.contextManager.clearContexts();
            this.props.updateSelectedNote(null);
        }
    }

    insertNewLine = (transform) => {
        return transform
            .splitBlock();
    }

    insertTextWithStyles = (transform, text) => {
        let boldStartIndex = text.indexOf('<strong>');
        let boldEndIndex = text.indexOf('</strong>');
        let italicStartIndex = text.indexOf('<em>');
        let italicEndIndex = text.indexOf('</em>');
        let underlinedStartIndex = text.indexOf('<u>');
        let underlinedEndIndex = text.indexOf('</u>');
        let unorderedListStartIndex = text.indexOf('<ul>');
        let unorderedListEndIndex = text.indexOf('</ul>');
        let orderedListStartIndex = text.indexOf('<ol>');
        let orderedListEndIndex = text.indexOf('</ol>');
        let listItemStartIndex = text.indexOf('<li>');
        let listItemEndIndex = text.indexOf('</li>');

        // No styles to be added.
        if (boldStartIndex === -1 && boldEndIndex === -1 
            && italicStartIndex === -1 && italicEndIndex === -1
            && underlinedStartIndex === -1 && underlinedEndIndex === -1
            && unorderedListStartIndex === -1 && unorderedListEndIndex === -1
            && orderedListStartIndex === -1 && orderedListEndIndex === -1
            && listItemStartIndex === -1 && listItemEndIndex === -1) {
            return transform.insertText(text);
        }

        // Order the styles to know which to apply next
        let styleMarkings = [
            { name: 'boldStartIndex', value: boldStartIndex },
            { name: 'boldEndIndex', value: boldEndIndex },
            { name: 'italicStartIndex', value: italicStartIndex },
            { name: 'italicEndIndex', value: italicEndIndex },
            { name: 'underlinedStartIndex', value: underlinedStartIndex },
            { name: 'underlinedEndIndex', value: underlinedEndIndex },
            { name: 'unorderedListStartIndex', value: unorderedListStartIndex },
            { name: 'unorderedListEndIndex', value: unorderedListEndIndex },
            { name: 'orderedListStartIndex', value: orderedListStartIndex },
            { name: 'orderedListEndIndex', value: orderedListEndIndex },
            { name: 'listItemStartIndex', value: listItemStartIndex },
            { name: 'listItemEndIndex', value: listItemEndIndex },
        ];
        styleMarkings.sort((a, b) => a.value - b.value);
        let firstStyle = styleMarkings[styleMarkings.findIndex(a => a.value > -1)];

        if (firstStyle.name === 'boldStartIndex' || firstStyle.name === 'boldEndIndex') {
            this.insertBoldText(transform, text, boldStartIndex, boldEndIndex);
        } else if (firstStyle.name === 'italicStartIndex' || firstStyle.name === 'italicEndIndex') {
            this.insertItalicText(transform, text, italicStartIndex, italicEndIndex);
        } else if (firstStyle.name === 'underlinedStartIndex' || firstStyle.name === 'underlinedEndIndex') {
            this.insertUnderlinedText(transform, text, underlinedStartIndex, underlinedEndIndex);
        } else if (firstStyle.name === 'unorderedListStartIndex') {
            this.startList(transform, text, unorderedListStartIndex, unorderedListEndIndex, 'bulleted-list');
        } else if (firstStyle.name === 'unorderedListEndIndex') {
            this.endList(transform, text, unorderedListStartIndex, unorderedListEndIndex, 'bulleted-list');
        } else if (firstStyle.name === 'orderedListStartIndex') {
            this.startList(transform, text, orderedListStartIndex, orderedListEndIndex, 'numbered-list');
        } else if (firstStyle.name === 'orderedListEndIndex') {
            this.endList(transform, text, orderedListStartIndex, orderedListEndIndex, 'numbered-list');
        } else if (firstStyle.name === 'listItemStartIndex' || firstStyle.name === 'listItemEndIndex') {
            const currentList = styleMarkings.find(a => 
                a.value > -1 &&
                (a.name === 'orderedListStartIndex' || a.name === 'orderedListEndIndex'
                || a.name === 'unorderedListStartIndex' || a.name === 'unorderedListEndIndex'))
            if (currentList.name === 'orderedListStartIndex' || currentList.name === 'orderedListEndIndex') {
                this.insertListItem(transform, text, 'numbered-list');
            } else {
                this.insertListItem(transform, text, 'bulleted-list');
            }
        }
    }

    insertBoldText = (transform, text, startIndex, endIndex) => {
        if (startIndex === -1 && endIndex === -1) {
            return transform.insertText(text);
        }
        this.addStyle(transform, text, startIndex, endIndex, 8, 'bold');
    }

    insertItalicText = (transform, text, startIndex, endIndex) => {
        if (startIndex === -1 && endIndex === -1) {
            return transform.insertText(text);
        }
        this.addStyle(transform, text, startIndex, endIndex, 4, 'italic');
    }

    insertUnderlinedText = (transform, text, startIndex, endIndex) => {
        if (startIndex === -1 && endIndex === -1) {
            return transform.insertText(text);
        }
        this.addStyle(transform, text, startIndex, endIndex, 3, 'underlined');
    }

    startList = (transform, text, startIndex, endIndex, type) => {
        if (startIndex === -1 && endIndex === -1) {
            return transform.insertText(text);
        }

        let { calculatedStartIndex, calculatedEndIndex, startOffset, endOffset } = this.getOffsets(text, startIndex, -1, 4);
        let beforeListText = text.substring(0, calculatedStartIndex);
        let listText = text.substring(calculatedStartIndex + startOffset, calculatedEndIndex);
        let afterListText = text.substring(calculatedEndIndex + endOffset);
        text = beforeListText + listText + afterListText;

        if (beforeListText !== '') {
            transform.insertText(beforeListText);
            transform.splitBlock();
        }
        transform.wrapBlock(type);
        this.insertListItem(transform, listText, type);
    }

    endList = (transform, text, startIndex, endIndex, type) => {
        if (startIndex === -1 && endIndex === -1) {
            return transform.insertText(text);
        }

        let { calculatedStartIndex, calculatedEndIndex, startOffset, endOffset } = this.getOffsets(text, -1, endIndex, 4);
        let beforeListText = text.substring(0, calculatedStartIndex);
        let listText = text.substring(calculatedStartIndex + startOffset, calculatedEndIndex);
        let afterListText = text.substring(calculatedEndIndex + endOffset);
        text = beforeListText + listText + afterListText;

        transform
            .setBlock('line')
            .unwrapBlock('bulleted-list')
            .unwrapBlock('numbered-list');
        this.insertTextWithStyles(transform, afterListText);
    }

    insertListItem = (transform, listText, type) => {
        let bullets = [];
        let liStartIndex = listText.indexOf('<li>');
        let liEndIndex = listText.indexOf('</li>');
        let tag = type === 'numbered-list' ? '<ol>' : '<ul>';
        let nextListStart = listText.indexOf(tag);
        let nextListString = '';
        if (nextListStart > -1) {
            nextListString = listText.substring(nextListStart);
            listText = listText.substring(0, nextListStart);
        }
        let after = '';
        let structuredFieldToFollow = false;
        while(liStartIndex !== -1 || liEndIndex !== -1) {
            let { calculatedStartIndex, calculatedEndIndex, startOffset, endOffset } = this.getOffsets(listText, liStartIndex, liEndIndex, 4);
            let before = listText.substring(0, calculatedStartIndex);
            let during = listText.substring(calculatedStartIndex + startOffset, calculatedEndIndex);
            after = listText.substring(calculatedEndIndex + endOffset);
            listText = before + after;
            bullets.push(during);
            liStartIndex = listText.indexOf('<li>');
            liEndIndex = listText.indexOf('</li>');
            if (liStartIndex > liEndIndex) {
                structuredFieldToFollow = true;
            }
        }

        transform.setBlock(type + '-item');
        for (let i = 0; i < bullets.length; i++) {
            this.insertTextWithStyles(transform, bullets[i]);
            if (structuredFieldToFollow) {
                if (i < bullets.length - 1) {
                    transform.splitBlock();
                }
            } else {
                transform.splitBlock();
            }
        }
        after += nextListString;
        this.insertTextWithStyles(transform, after);
    }

    getOffsets = (text, startIndex, endIndex, wordOffset) => {
        let startOffset = 0; // This represents how many characters to cut off from the text string at the startIndex.
        if (startIndex !== -1) {
            // <someStyle> is in the text string, so increase startOffset by word length to remove the word <someStyle>
            startOffset = wordOffset;
        } else {
            // No HTML style tag present so set startIndex to the beginning of the string and leave startOffset as 0 since no word to remove.
            startIndex = 0; 
        }

        let endOffset = 0; // This represents how many characters to cut off from the text string at the endIndex.
        if (endIndex !== -1) {
            // The word </someStyle> is in the text string, so endOffset is wordOffset + 1 to remove the word </someStyle>
            endOffset = wordOffset + 1;
        } else {
            // No HTML style tag present so set endIndex to the end of the string and leave endOffset as 0 since no word to remove.
            endIndex = text.length;
        }

        if (startIndex > endIndex) {
            // case of </style> text <style>. This happens when style is inserted after structured phrase.
            // Treat this case as only handling the ending tag. Reset start to beginning of word.
            startIndex = 0;
            startOffset = 0;
        }
        return { calculatedStartIndex: startIndex, calculatedEndIndex: endIndex, startOffset, endOffset };
    }

    addStyle = (transform, text, startIndex, endIndex, wordOffset, type) => {
        let { calculatedStartIndex, calculatedEndIndex, startOffset, endOffset } = this.getOffsets(text, startIndex, endIndex, wordOffset);

        let beforeBoldText = text.substring(0, calculatedStartIndex);
        let boldText = text.substring(calculatedStartIndex + startOffset, calculatedEndIndex);
        let afterBoldText = text.substring(calculatedEndIndex + endOffset);
        text = beforeBoldText + boldText + afterBoldText; // Update text to remove <someStyle> </someStyle>
        transform.insertText(beforeBoldText).toggleMark(type);
        this.insertTextWithStyles(transform, boldText);
        transform.toggleMark(type);
        this.insertTextWithStyles(transform, afterBoldText);
    }

    insertPlainText = (transform, text) => {
        // Check for \r\n, \r, or \n to insert a new line in Slate
        let divReturnIndex = -1;
        let returnIndex = text.indexOf("\r\n");
        if (returnIndex === -1) {
            returnIndex = text.indexOf("\r");
        }
        if (returnIndex === -1) {
            returnIndex = text.indexOf("\n");
        }
        if (returnIndex === -1) {
            divReturnIndex = text.indexOf('</div>');
        }
        
        if (returnIndex >= 0) {
            let result = this.insertPlainText(transform, text.substring(0, returnIndex));
            result = this.insertNewLine(result);
            return this.insertPlainText(result, text.substring(returnIndex + 1));
        } else if (divReturnIndex >= 0) {
            let result = this.insertPlainText(transform, text.substring(0, divReturnIndex));
            result = this.insertNewLine(result);
            return this.insertPlainText(result, text.substring(divReturnIndex + 6)); // cuts off </div>
        } else {
            this.insertTextWithStyles(transform, text);
            return transform;
            // return transform.insertText(text);
        }
    }
    /*
     * Handle updates when we have a new
     */
    insertTextWithStructuredPhrases = (textToBeInserted, currentTransform = undefined, updatePatient = true) => {
        let state;
        const currentState = this.state.state;

        let transform = (currentTransform) ? currentTransform : currentState.transform();
        let remainder = textToBeInserted;
        let start, end;
        let before = '', after = '';

        // Open div tags don't trigger any action now, so just remove them.
        if (!Lang.isUndefined(remainder)) {
            remainder = remainder.split('<div>').join('');
        }

        const triggers = this.noteParser.getListOfTriggersFromText(textToBeInserted)[0];

        if (!Lang.isNull(triggers)) {
            triggers.forEach((trigger) => {

                start = remainder.indexOf(trigger.trigger);
                if (start > 0) {
                    before = remainder.substring(0, start);
                    //transform = transform.insertText(before);
                    transform = this.insertPlainText(transform, before);
                }
                remainder = remainder.substring(start + trigger.trigger.length);

                // FIXME: Temporary work around that adds spaces when needed to @-phrases inserted via mic
                if (start !== 0 && trigger.trigger.startsWith('@') && !before.endsWith(' ')) {
                    transform = this.insertPlainText(transform, ' ');
                }

                // Deals with @condition phrases inserted via data summary panel buttons. 
                if (remainder.startsWith("[[")) {
                    end = remainder.indexOf("]]");
                    after = remainder.substring(2, end);
                    // FIXME: 2 is a magic number based on [[ length, ditto for 2 below for ]]
                    remainder = remainder.substring(end + 2);
                    // If there were brackets, but nothing in the brackets, add a space to be inserted, otherwise pulls current data.
                    if (after.length === 0) {
                        after = ' ';
                    }
                    // FIXME: Temporary work around that can parse '@condition's inserted via mic with extraneous space
                } else if (remainder.startsWith(" [[")) {
                    remainder = remainder.replace(/\s+(\[\[\S*\s*.*)/g, '$1');
                    end = remainder.indexOf("]]");
                    // FIXME: 2 is a magic number based on ' [[' length, ditto for 2 below for ]]
                    after = remainder.charAt(2).toUpperCase() + remainder.substring(3, end);
                    remainder = remainder.substring(end + 2);
                } else {
                    after = "";
                }

                transform = this.insertShortcut(trigger.definition, trigger.trigger, after, transform, updatePatient);
            });
        }

        if (!Lang.isUndefined(remainder) && remainder.length > 0) {
            //transform = transform.insertText(remainder);
            transform = this.insertPlainText(transform, remainder);
        }
        state = transform.apply();
        this.setState({state: state});
        //return state;
    }

    /**
     * Check if shortcutTrigger is a shortcut trigger in the list of currently valid shortcuts
     */
    shortcutTriggerCheck = (shortcutTrigger) => {
        const shortcuts = this.contextManager.getCurrentlyValidShortcuts(this.props.shortcutManager);

        // Check if shortcutTrigger is a shortcut trigger in the list of currently valid shortcuts
        return shortcuts.some((shortcut) => {
            const triggers = this.props.shortcutManager.getTriggersForShortcut(shortcut);
            return triggers.some((trigger) => {
                return trigger.name.toLowerCase() === shortcutTrigger.toLowerCase();
            });
        });
    }

    /**
     * Check if the current selection has a mark with `type` in it.
     */
    handleMarkCheck = (type) => {
        const {state} = this.state;
        return state.marks.some(mark => mark.type === type);
    }

    /**
     * Check if the any of the currently selected blocks are of `type`.
     */
    handleBlockCheck = (type) => {
        const {state} = this.state;
        return state.blocks.some((node) => {
            return node.type === type;

        });
    }

    /**
     * Handle any changes to the current mark type.
     */
    handleMarkUpdate = (type) => {
        let {state} = this.state
        state = state
            .transform()
            .toggleMark(type)
            .apply()
        this.setState({state});
    }

    /**
     * Handle any changes to the current block type.
     */
    handleBlockUpdate = (type) => {
        let {state} = this.state;
        const transform = state.transform();
        const { document } = state;
        const DEFAULT_NODE = "line";

        // Handle list buttons.
        if (type === 'bulleted-list' || type === 'numbered-list') {
            const isList = this.handleBlockCheck(type + '-item')

            const isType = state.blocks.some((block) => {
                return !!document.getClosest(block.key, parent => parent.type === type)
            });

            if (isList && isType) {
                transform
                    .setBlock(DEFAULT_NODE)
                    .unwrapBlock('bulleted-list')
                    .unwrapBlock('numbered-list')
            } else if (isList) {
                transform
                    .unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list')
                    .wrapBlock(type)
            } else {
                transform
                    .setBlock(type + '-item')
                    .wrapBlock(type)
            }
        } else {
            // We don't handle any other kinds of block style formatting right now, but if we did it would go here.
        }

        state = transform.apply()
        this.setState({state});

    }

    onCloseClick = () => {
        this.props.setFullAppState('isNoteViewerVisible', false);
        this.setState({
            "targetedDataPanelSize": "50%",
            "notesPanelSize": "10%"
        });
        this.props.setFullAppState('layout', "right-collapsed");
    }

    render = () => {
        const CreatorsPortal = this.suggestionsPluginCreators.SuggestionPortal;
        const InsertersPortal = this.suggestionsPluginInserters.SuggestionPortal;

        // Preset note header information
        let noteTitle = "New Note";
        let date = Moment(new Date()).format('DD MMM YYYY');
        let signedString = "not signed";
        let source = "Dana Farber";

        // If a note is selected, update the note header with information from the selected note
        if (this.props.selectedNote) {
            noteTitle = this.props.selectedNote.subject;
            date = this.props.selectedNote.date;
            source = this.props.selectedNote.hospital;

            if(this.props.selectedNote.signed) {
                signedString = this.props.selectedNote.clinician;
            } else {
                signedString = "not signed";
            }
        }

        let noteDescriptionContent = null;
        if (this.props.patient == null) {
            noteDescriptionContent = "";
        } else {
            noteDescriptionContent = (
                <div id="note-description">
                    <Row end="xs">
                        <Col xs={2}>
                            <p className="note-description-detail-name">Name</p>
                            <p className="note-description-detail-value" id="note-title">{noteTitle}</p>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Date</p>
                            <p className="note-description-detail-value">{date}</p>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Source</p>
                            <p className="note-description-detail-value">{source}</p>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Signed By</p>
                            <p className="note-description-detail-value">{signedString}</p>
                        </Col>
                        <Col xs={4}>
                            <Button
                                raised 
                                className="close-note-btn"
                                disabled={this.context_disabled}
                                onClick={this.props.closeNote}
                                style={{
                                    float: "right",
                                    lineHeight: "2.1rem"
                                }}
                            >
                                <FontAwesome 
                                    name="times"
                                    style={{
                                        color: "red",
                                        marginRight: "5px"
                                    }}
                                /> 
                                <span>
                                    Close
                                </span>
                            </Button>
                           
                        </Col>
                    </Row>

                    <Divider className="divider"/>
                </div>
            );
        }
        let errorDisplay = "";
        if (this.props.errors && this.props.errors.length > 0) {
            errorDisplay = (
                <div id="error">
                    <Divider className="divider"/>
                    <h1 style={{color: 'red'}}>{this.props.errors.join()}</h1>
                    <Divider className="divider"/>
                </div>
            );
        }
        const callback = {}
        let editor = null;
        /**
         * Render the editor, toolbar, dropdown and description for note
         */
        return (
            <div id="clinical-notes" className="dashboard-panel" onClick={(event) => {
                editor.focus();
            }}>
                {noteDescriptionContent}
                <div className="MyEditor-root">
                    <EditorToolbar
                        isReadOnly={!this.props.isNoteViewerEditable}
                        onBlockCheck={this.handleBlockCheck}
                        onBlockUpdate={this.handleBlockUpdate}
                        onMarkCheck={this.handleMarkCheck}
                        onMarkUpdate={this.handleMarkUpdate}
                        patient={this.props.patient}
                    />
                    <div className="editor-content">
                        <Slate.Editor
                            className="editor-panel"
                            placeholder={'Enter your clinical note here or choose a template to start from...'}
                            plugins={this.plugins}
                            readOnly={!this.props.isNoteViewerEditable}
                            state={this.state.state}
                            ref={function (c) {
                                editor = c;
                            }}
                            onChange={this.onChange}
                            onInput={this.onInput}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                            onSelectionChange={this.onSelectionChange}
                            schema={schema}
                        />
                        {errorDisplay}
                    </div>

                    <CreatorsPortal
                        contextPortalOpen={this.state.isPortalOpen}
                        getPosition={this.getTextCursorPosition}
                        state={this.state.state}
                    />
                    <InsertersPortal
                        contextPortalOpen={this.state.isPortalOpen}
                        getPosition={this.getTextCursorPosition}
                        state={this.state.state}
                    />
                    <ContextPortal
                        capture={/@([\w]*)/}
                        callback={callback}
                        contextManager={this.contextManager}
                        contexts={this.state.portalOptions}
                        getPosition={this.getTextCursorPosition}
                        isOpened={this.state.isPortalOpen}
                        onSelected={this.onPortalSelection}
                        onChange={this.onChange}
                        state={this.state.state}
                        trigger={"@"}
                    />
                </div>
            </div>
        );
    }
}

FluxNotesEditor.proptypes = {
    contextManager: PropTypes.object.isRequired,
    errors: PropTypes.array.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    itemInserted: PropTypes.object,
    newCurrentShortcut: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    resetEditorState: PropTypes.func.isRequired,
    resetEditorAndContext: PropTypes.func.isRequired,
    summaryItemToInsert: PropTypes.string,
    shortcutManager: PropTypes.object.isRequired,
    setFullAppState: PropTypes.func.isRequired,
    updateErrors: PropTypes.func.isRequired,
}

export default FluxNotesEditor;
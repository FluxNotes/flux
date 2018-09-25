import React from 'react';
import PropTypes from 'prop-types';
import Slate from '../lib/slate';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import ContextPortal from '../context/ContextPortal';
import SuggestionPortalShortcutSearchIndex from './SuggestionPortalShortcutSearchIndex'
import SuggestionPortalPlaceholderSearchIndex from './SuggestionPortalPlaceholderSearchIndex'
// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
// This issue should no longer affect us in our current approach. consider allowing newer version of Slate
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
import Button from '../elements/Button';
import {TextField, Divider} from 'material-ui';
import AutoReplace from 'slate-auto-replace'
import SuggestionsPlugin from '../lib/slate-suggestions-dist'
import position from '../lib/slate-suggestions-dist/caret-position';
import StructuredFieldPlugin from './StructuredFieldPlugin';
import SingleHashtagKeywordStructuredFieldPlugin from './SingleHashtagKeywordStructuredFieldPlugin'
import NLPHashtagPlugin from './NLPHashtagPlugin'
import NoteParser from '../noteparser/NoteParser';
import './FluxNotesEditor.css';
import { setTimeout } from 'timers';
import NoteContentIndexer from '../patientControl/NoteContentIndexer';

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
        this.plugins = [];
        this.previousState = {};

        this.noteContentIndexer = new NoteContentIndexer();

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
        this.plugins.push(this.structuredFieldPlugin)
        
        // setup single hashtag structured field plugin
        const singleHashtagKeywordStructuredFieldPluginOptions = {
            shortcutManager: this.props.shortcutManager,
            structuredFieldMapManager: this.structuredFieldMapManager,
            createShortcut: this.props.newCurrentShortcut,
            insertStructuredFieldTransform: this.insertStructuredFieldTransform,
        };
        this.singleHashtagKeywordStructuredFieldPlugin = SingleHashtagKeywordStructuredFieldPlugin(singleHashtagKeywordStructuredFieldPluginOptions);
        this.plugins.push(this.singleHashtagKeywordStructuredFieldPlugin)

        // setup NLPHashtagPlugin
        const NLPHashtagPluginOptions = {
            shortcutManager: this.props.shortcutManager,
            contextManager: this.props.contextManager,
            structuredFieldMapManager: this.structuredFieldMapManager,
            createShortcut: this.props.newCurrentShortcut,
            insertStructuredFieldTransformAtRange: this.insertStructuredFieldTransformAtRange,
            getEditorState: () => this.state.state,
            setEditorState: (state) => {
                this.setState({state})
            },
            updateFetchingStatus: this.updateFetchingStatus,
        };
        this.NLPHashtagPlugin = NLPHashtagPlugin(NLPHashtagPluginOptions);
        this.plugins.push(this.NLPHashtagPlugin)
        
        // Track all the indexes needed for suggestions portals
        this.suggestionPortalSearchIndexes = [];
        
        // setup creator suggestions plugin (autocomplete)
        const creatorSuggestionPortalSearchIndex = new SuggestionPortalShortcutSearchIndex([], '#', this.props.shortcutManager);
        this.contextManager.subscribe(creatorSuggestionPortalSearchIndex, creatorSuggestionPortalSearchIndex.updateIndex)
        this.suggestionPortalSearchIndexes.push(creatorSuggestionPortalSearchIndex)
        this.suggestionsPluginCreators = SuggestionsPlugin({
            capture: /#([\w\s\-,]*)/,
            onEnter: this.choseSuggestedShortcut.bind(this),
            suggestions: creatorSuggestionPortalSearchIndex.search,
            trigger: '#',
        });
        this.plugins.push(this.suggestionsPluginCreators)
        
        // setup inserter suggestions plugin (autocomplete)
        const inserterSuggestionPortalSearchIndex = new SuggestionPortalShortcutSearchIndex([], '@', this.props.shortcutManager);
        this.contextManager.subscribe(inserterSuggestionPortalSearchIndex, inserterSuggestionPortalSearchIndex.updateIndex)
        this.suggestionPortalSearchIndexes.push(inserterSuggestionPortalSearchIndex)
        this.suggestionsPluginInserters = SuggestionsPlugin({
            capture: /@([\w\s\-,]*)/,
            onEnter: this.choseSuggestedShortcut.bind(this),
            suggestions: inserterSuggestionPortalSearchIndex.search,
            trigger: '@',
        });
        this.plugins.push(this.suggestionsPluginInserters)

        // Setup suggestions plugin
        const placeholderSuggestionPortalSearchIndex = new SuggestionPortalPlaceholderSearchIndex([], '<', this.props.shortcutManager);        
        this.contextManager.subscribe(placeholderSuggestionPortalSearchIndex, placeholderSuggestionPortalSearchIndex.updateIndex)
        this.suggestionPortalSearchIndexes.push(placeholderSuggestionPortalSearchIndex)
        this.suggestionsPluginPlaceholders = SuggestionsPlugin({
            capture: /<([\w\s\-,>]*)/,
            onEnter: this.choseSuggestedPlaceholder.bind(this),
            suggestions: placeholderSuggestionPortalSearchIndex.search,
            trigger: '<',
        });
        this.plugins.push(this.suggestionsPluginPlaceholders);

        // The logic below that builds the regular expression could possibly be replaced by the regular
        // expression stored in NoteParser (this.noteParser is instance variable). Only difference is
        // global flag it looks like? TODO: evaluate
        this.autoReplaceBeforeRegExp = undefined;
        let autoReplaceAfters = [];
        // Get all non-keyword shortcuts for autoreplace
        const allNonKeywordShortcuts = this.props.shortcutManager.getAllShortcutsWithTriggers();
        const placeholderShortcuts = this.props.shortcutManager.getAllPlaceholderShortcuts();

        allNonKeywordShortcuts.forEach((def) => {
            const triggers = this.props.shortcutManager.getTriggersForShortcut(def.id);
            let shortcutNamesList = triggers.map(trigger => `${trigger.name}$`);

            autoReplaceAfters = autoReplaceAfters.concat(shortcutNamesList);
        });
        placeholderShortcuts.forEach((def) => {
            const triggers = this.props.shortcutManager.getTriggersForShortcut(def.id);
            const shortcutNamesList = triggers.map(trigger => `<${trigger.name.slice(1)}>`);

            autoReplaceAfters = autoReplaceAfters.concat(shortcutNamesList);
        });
        this.autoReplaceBeforeRegExp = new RegExp("(" + autoReplaceAfters.join("|") + ")", 'i');

        // now add an AutoReplace plugin instance for each shortcut we're supporting as well
        // can switch to the commented out trigger to support non-space characters but need to put
        // character used instead of always space when inserting the structured field.
        this.plugins.push(AutoReplace({
            "trigger": /[\s\r\n.!?;,)}\]]/,
            // "trigger": 'space',
            "before": this.autoReplaceBeforeRegExp,
            "transform": this.autoReplaceTransform.bind(this, null)
        }));

        // let's see if we have any regular expression shortcuts
        let triggerRegExp;
        allNonKeywordShortcuts.forEach((def) => {
            triggerRegExp = def.regexpTrigger;
            if (!Lang.isNull(triggerRegExp) && !Lang.isUndefined(triggerRegExp)) {
                // Modify regex to ensure this pattern only gets replaced if it's right before the cursor.
                //console.log(triggerRegExp);
                //const triggerRegExpModified = new RegExp(triggerRegExp.toString().replace(/\/(.*)\//, '$1$'));
                const triggerRegExpModified = triggerRegExp;
                //console.log(triggerRegExpModified);
                this.plugins.push(AutoReplace({
                    "trigger": /[\s\r\n.!?;,)}\]]/,
                    // "trigger": 'space',
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
            openedPortal: null,
            portalOptions: null,
            isEditingNoteName: false,
            isFetchingAsyncData: false,
            loadingTimeWarrantsWarning: false,
            fetchTimeout: null,
            shouldUpdateTemplateShortcuts: true
        };
    }


    updateFetchingStatus = (isFetchingAsyncData) => { 
        if (!isFetchingAsyncData) { 
            // If we're not fetching, clear any lagging timers;
            if (this.state.fetchTimeout !== null) clearTimeout(this.state.fetchTimeout._id)
            this.setState({
                // Make sure loadingTimeWarrantsWarning is false;
                loadingTimeWarrantsWarning: false,
                // Clear fetch timer
                fetchTimeout: null,
            });
        } else { 
            // If we are fetching, set a timer that will display a loading animation in the editor after trigger
            this.setState({
                fetchTimeout: setTimeout (() => {
                    this.setState({
                        // After the wait, display the loading animation
                        loadingTimeWarrantsWarning: true
                    });
                }, 10),
            })  
        }
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

    choseSuggestedShortcut(suggestion) {
        console.log('suggestion: ', suggestion);
        const {state} = this.state;
        const shortcut = this.props.newCurrentShortcut(null, suggestion.value.name, undefined, true, "auto-complete");
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
            return this.openPortalToSelectValueForShortcut(shortcut, true, state.transform()).apply();
        } else {
            const transformBeforeInsert = this.suggestionDeleteExistingTransform(state.transform(), shortcut.getPrefixCharacter());
            const transformAfterInsert = this.insertStructuredFieldTransform(transformBeforeInsert, shortcut).collapseToStartOfNextText().focus();
            return transformAfterInsert.apply();
        }
    }

    newPlaceholder = (placeholderText, data) => {
        const shortcutName = "#" + placeholderText.substring(1, placeholderText.length-1); // strip off < and > and add #
        return this.props.shortcutManager.createPlaceholder(shortcutName, placeholderText, data, this.contextManager, this.props.patient, this.props.selectedNote, this.props.setForceRefresh);
    }

    choseSuggestedPlaceholder(suggestion) {
        const { state } = this.state;

        const transformBeforeInsert = this.suggestionDeleteExistingTransform(state.transform(), '<');
        return this.insertPlaceholder(suggestion.value, transformBeforeInsert).apply();
    }

    insertShortcut = (shortcutC, shortcutTrigger, text, transform = undefined, updatePatient = true, source) => {
        if (Lang.isUndefined(transform)) {
            transform = this.state.state.transform();
        }

        // check if shortcutTrigger is currently valid
        if (!this.shortcutTriggerCheck(shortcutC, shortcutTrigger)) {
            return this.insertPlainText(transform, shortcutTrigger);
        }

        let shortcut = this.props.newCurrentShortcut(shortcutC, shortcutTrigger, text, updatePatient, source);
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions() && text.length === 0) {
            return this.openPortalToSelectValueForShortcut(shortcut, false, transform);
        }
        return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
    }

    updateExistingShortcut = (shortcut, transform = undefined) => {
        if (Lang.isUndefined(transform)) {
            transform = this.state.state.transform();
        }
        return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
    }

    insertPlaceholder = (placeholderText, transform = undefined, data) => {
        if (Lang.isUndefined(transform)) {
            transform = this.state.state.transform();
        }
        const placeholder = this.newPlaceholder(placeholderText, data);

        const result = this.structuredFieldPlugin.transforms.insertPlaceholder(transform, placeholder);
        return result[0].collapseToStartOfNextText().focus();
    }

    autoReplaceTransform(def, transform, e, data, matches) {
        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
        const characterToAppend = e.data ? e.data : String.fromCharCode(data.code);

        // if text starts with '<', insert placeholder
        if (matches.before[0].startsWith("<")) {
            return this.insertPlaceholder(matches.before[0], transform).insertText(characterToAppend);
        }

        return this.insertShortcut(def, matches.before[0], "", transform, true, true, 'typed').insertText(characterToAppend);
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
            if (pos === null || ((pos.top === 0 && pos.left === 0) || (pos.top === undefined && pos.left === undefined))) {
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
            openedPortal: "ContextPortal",
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
        this.setState({ 
            openedPortal: null,
            portalOptions: null, 
        });
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
    suggestionDeleteExistingTransform = (transform = null, prefixCharacter) => {
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

    insertStructuredFieldTransform = (transform, shortcut) => {
        if (Lang.isNull(shortcut)) return transform.focus();
        const result = this.structuredFieldPlugin.transforms.insertStructuredField(transform, shortcut);

        return result[0];
    }

    insertStructuredFieldTransformAtRange = (transform, shortcut, range) => {
        if (Lang.isNull(shortcut)) return transform.focus();
        const result = this.structuredFieldPlugin.transforms.insertStructuredFieldAtRange(transform, shortcut, range);

        return result[0];
    }

    onChange = (state) => {
        let documentText = this.getNoteText(state);
        this.props.updateLocalDocumentText(documentText);

        this.setState({ state });
    }

    getNoteText = (state) => {
        const documentText = this.structuredFieldPlugin.convertToText(state);

        return documentText;
    }

    closeNote = () => {
        this.props.searchIndex.removeDataBySection('Open Note');
        if (this.props.noteAssistantMode === 'pick-list-options-panel') {
            const documentText = this.getNoteText(this.previousState);
            this.revertTemplate();
            this.props.saveNote(documentText);
            this.props.closeNote();
        } else {
            const documentText = this.getNoteText(this.state.state);
            this.props.saveNote(documentText);
            this.props.closeNote();
        }
    }

    onFocus = () => {
        const state = this.state.state;
        const selection = state.selection;
        this.adjustActiveContexts(selection, state);
        this.editorHasFocus = true;
    }

    onBlur = () => {
        this.editorHasFocus = false;
    }

    onInput = (event, data) => {
        if (typeof data === 'string') {
            const str = data;
            data = {
                anchorKey: this.state.state.selection.anchorKey,
                anchorOffset: this.state.state.selection.anchorOffset,
                focusKey: this.state.state.selection.focusKey,
                focusOffset: this.state.state.selection.focusOffset,
                newText: str
            }
        }
        // Create an updated state with the text replaced.
        var nextState = this.state.state.transform().select({
            anchorKey: data.anchorKey,
            anchorOffset: data.anchorOffset,
            focusKey: data.focusKey,
            focusOffset: data.focusOffset
        }).delete()

        this.insertTextWithStructuredPhrases(data.newText, nextState, true, "dictation");
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

    isNodeTypeBetween(key1, key2, typeToFind, state) {
        if (Lang.isUndefined(state)) {
            state = this.state.state;
        }
        if (Lang.isNull(key1)) {
            key1 = state.selection.endKey;
        }
        let beforeKey1 = true;
        let foundTypeBetween = false;
        state.document.forEachDescendant((n) => {
            if (beforeKey1) {
                if (n.key === key1) {
                    beforeKey1 = false;
                } else if (n.key === key2) {
                    return false; // break out of foreach
                }
            } else {
                if (n.key === key2) return false;
                if (n.type === typeToFind) {
                    foundTypeBetween = true;
                    return false;
                }
            }
        });
        return foundTypeBetween;
    }

    onSelectionChange = (selection, state) => {
        this.adjustActiveContexts(selection, state);
    }

    adjustActiveContexts = (selection, state) => {
        this.contextManager.adjustActiveContexts((context) => {
            // return true if context should be active because it's before selection
            // also need to make sure context is in current paragraph or global
            const isBeforeSelection = this.isBlock1BeforeBlock2(context.getKey(), 0, selection.endKey, selection.endOffset, state);
            if (isBeforeSelection) {
                // need to see if we have a paragraph between them now
                if (context.isGlobalContext()) return true;
                return !this.isNodeTypeBetween(context.getKey(), selection.endKey, 'line', state);
            }
            return false;
        });
        this.contextManager.contextUpdated();
    }

    resetShortcutData = (shortcut, transform) => {
        const key = shortcut.getKey();
        transform = transform.setNodeByKey(key, {
            data: {
                shortcut
            }
        });
        return transform;
    }

    scrollToData = (document, shortcutKey) => {
        const node = document.getNode(shortcutKey);

        try {
            const el = Slate.findDOMNode(node);
            if (el && el.scrollIntoView) {
                el.scrollIntoView();
            }
        } catch (e) {
            // DOMNode not found
            return;
        }
    }

    updateTemplateWithPickListOptions = (nextProps) => {
        if (nextProps.shouldUpdateShortcutType) {
            let transform = this.state.state.transform();
            let state = transform.setNodeByKey(nextProps.shortcutKey, nextProps.shortcutType).apply();
            this.scrollToData(state.document, nextProps.shortcutKey);
            this.setState({ state });
        }
        nextProps.selectedPickListOptions.forEach(picklist => {
            if (picklist.selectedOption) {
                const { shortcut } = picklist;
                const { object } = shortcut.getValueSelectionOptions().find(opt => {
                    return opt.context === picklist.selectedOption;
                });
                if (shortcut.getText() !== picklist.selectedOption) {
                    shortcut.setText(picklist.selectedOption);
                    if (shortcut.isContext()) {
                        shortcut.setValueObject(object);

                        let transform = this.state.state.transform();

                        // Update the children of the shortcut whose values just got selected.
                        const childShortcuts = shortcut.getChildren();
                        childShortcuts.forEach(childShortcut => {
                            if (this.shortcutTriggerCheck(childShortcut, childShortcut.initiatingTrigger)) {
                                // Set the text, then change the data of the shortcut to trigger a re-render.
                                const text = childShortcut.determineText(this.contextManager);
                                childShortcut.setText(text);
                                transform = this.resetShortcutData(childShortcut, transform);
                            } else {
                                childShortcut.setText(null);
                                transform = this.resetShortcutData(childShortcut, transform);
                            }
                        });

                        // Force shortcut to re-render with updated data
                        transform = this.resetShortcutData(shortcut, transform);
                        let state = transform.apply();
                        this.setState({ state }, () => {
                            this.scrollToData(state.document, shortcut.getKey());
                        });
                    }
                }
            }
        });
    }

    // This gets called before the component receives new properties
    componentWillReceiveProps = (nextProps) => {
        // Only update text if the shouldEditorContentUpdate is true. For example, this will be false if the user is inserting a template

        // Check if the item to be inserted is updated
        if (nextProps.shouldEditorContentUpdate && this.props.summaryItemToInsert !== nextProps.summaryItemToInsert && nextProps.summaryItemToInsert.length > 0) {
            if (this.props.isNoteViewerEditable) {
                this.insertTextWithStructuredPhrases(nextProps.summaryItemToInsert, undefined, true, nextProps.summaryItemToInsertSource);
                this.props.itemInserted();
            }
        }

        // When the user selects a template, save the state of the editor before it is inserted in case they want to cancel
        if (this.props.contextTrayItemToInsert === null && nextProps.contextTrayItemToInsert !== null) {
            this.previousState = this.state.state;
        }

        // Update pick list selection in real time during template insertion
        if (this.props.noteAssistantMode === 'pick-list-options-panel') {
            this.updateTemplateWithPickListOptions(nextProps);
        }

        if (nextProps.shouldEditorContentUpdate && this.props.contextTrayItemToInsert !== nextProps.contextTrayItemToInsert && !Lang.isNull(nextProps.contextTrayItemToInsert) && nextProps.contextTrayItemToInsert.length > 0) {
            this.insertContextTrayItem(nextProps.contextTrayItemToInsert);
        }

        // Check if the updatedEditorNote property has been updated
        if (nextProps.shouldEditorContentUpdate && this.props.updatedEditorNote !== nextProps.updatedEditorNote && !Lang.isNull(nextProps.updatedEditorNote)) {
            if (this.props.noteAssistantMode === 'pick-list-options-panel') {
                this.revertTemplate();
            }

            // If the updated editor note is an empty string, then add a new blank note. Call method to
            // re initialize editor state and reset updatedEditorNote state in parent to be null
            if (nextProps.updatedEditorNote === "") {
                this.resetEditorAndContext();
            }

            // If the updated editor note is an actual note (existing note), then clear the editor and insert the
            // content of the selected note into the editor and set the editor to read only
            else {
                this.resetEditorAndContext();
                this.insertTextWithStructuredPhrases(nextProps.updatedEditorNote.content, undefined, false, "loaded note");

                // If the note is in progress, set isNoteViewerEditable to true. If the note is an existing note, set isNoteViewerEditable to false
                if (nextProps.updatedEditorNote.signed) {
                    this.props.setNoteViewerEditable(false);
                } else {
                    this.props.setNoteViewerEditable(true);
                }
            }
            this.props.searchIndex.removeDataBySection('Open Note');
            const sectionId = nextProps.updatedEditorNote.signed ? 'signed_notes' : 'in_progress_notes';
            this.props.searchIndex.addSearchableData({
                id: 'open_note_section',
                section: 'Open Note',
                subsection: '',
                valueTitle: 'Section',
                value: 'Open Note',
                onHighlight: null,
                onClick: null
            });
            this.noteContentIndexer.indexData("Open Note", '', nextProps.updatedEditorNote, this.props.searchIndex, this.onOpenNoteSearchResultHighlight, null);
            this.props.searchIndex.removeDataByRef(`clinical_notes_${sectionId}_content_${nextProps.updatedEditorNote.entryInfo.entryId}`);
        }

        // Check if the current view mode changes
        if (nextProps.shouldEditorContentUpdate && this.props.currentViewMode !== nextProps.currentViewMode && !Lang.isNull(nextProps.currentViewMode)) {
            this.resetEditorAndContext();
            this.props.handleUpdateEditorWithNote(null);
            this.structuredFieldMapManager.clearStructuredFieldMap();
            this.contextManager.clearContexts();
            this.props.updateSelectedNote(null);
        }

        // Check if mode is changing from 'pick-list-options-panel' to 'context-tray'
        // This means user either clicked the OK or Cancel button on the pick list options panel
        if (this.props.noteAssistantMode === 'pick-list-options-panel' && nextProps.noteAssistantMode === 'context-tray') {
            this.adjustActiveContexts(this.state.state.selection, this.state.state);
            this.props.contextManager.clearNonActiveContexts();
            this.props.setNoteViewerEditable(true);
            // If the user clicks cancel button, change editor state back to what it was before they clicked the template
            if (nextProps.shouldRevertTemplate) {
                this.revertTemplate();
            }
            const anchorEl = Slate.findDOMNode(this.state.state.anchorBlock);
            if (anchorEl && anchorEl.scrollIntoView) {
                anchorEl.scrollIntoView();
            }
        }

        // The note will still scroll to structured data when the user clicks on `Open Source Note` action but note is already open
        if (this.props.updatedEditorNote === nextProps.updatedEditorNote && this.props.openSourceNoteEntryId === null && nextProps.openSourceNoteEntryId) {
            const shortcutKey = this.structuredFieldMapManager.getKeyFromEntryId(nextProps.openSourceNoteEntryId);

            if (shortcutKey) {
                this.scrollToData(this.state.state.document, shortcutKey);
                this.props.setOpenSourceNoteEntryId(null);
            }
        }
    }

    onOpenNoteSearchResultHighlight = (suggestion) => {
        const {document} = this.state.state;
        let startIndex = suggestion.indices[0];
        let foundNode;
        document.toJSON().nodes.find(node => {
            const nodeLength = this.getLengthOfNode(node);
            if (startIndex <= nodeLength) {
                foundNode = node;
                return true;
            } else {
                startIndex -= nodeLength;
                return false;
            }
        });
        if (foundNode) this.scrollToData(document, foundNode.key);
    }

    getLengthOfNode = (node) => {
        let length = 0;
        if (node.type === 'line') {
            node.nodes.forEach(node => {
                length += this.getLengthOfNode(node);
            });
        } else if (node.characters) {
            length += node.characters.length;
        } else if (node.type === 'structured_field') {
            let shortcut = node.data.shortcut;
            length += shortcut.getText().length;
        }
        return length;
    }

    revertTemplate = () => {
        this.props.changeShortcutType(null, false, null);
        this.setState({ state: this.previousState }, () => {
            this.props.setUndoTemplateInsertion(false);
            this.refs.editor.focus();
        });
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
        const placeholderStartIndex = text.indexOf('<');

        if (returnIndex >= 0) {
            let result = this.insertPlainText(transform, text.substring(0, returnIndex));
            result = this.insertNewLine(result);
            return this.insertPlainText(result, text.substring(returnIndex + 1));
        }
        if (divReturnIndex >= 0) {
            let result = this.insertPlainText(transform, text.substring(0, divReturnIndex));
            result = this.insertNewLine(result);
            return this.insertPlainText(result, text.substring(divReturnIndex + 6)); // cuts off </div>
        }
        if (placeholderStartIndex >= 0) {
            const placeholderEndIndex = text.indexOf('>', placeholderStartIndex);
            const placeholderText = text.slice(placeholderStartIndex, placeholderEndIndex + 1);

            if (this.placeholderCheck(placeholderText)) {
                let remainder = text.slice(placeholderEndIndex + 1);
                let end;
                let after = ""
                let returnStr = text.substring(placeholderEndIndex + 1);
                if (remainder.startsWith("[[")) {
                    end = remainder.indexOf("]]");
                    after = remainder.substring(2, end);
                    returnStr = remainder.substring(end + 2);
                }
                let result = this.insertPlainText(transform, text.substring(0, placeholderStartIndex));
                result = this.insertPlaceholder(placeholderText, transform, after);
                return this.insertPlainText(result, returnStr);
            }
        }

        this.insertTextWithStyles(transform, text);
        // FIXME: Need a trailing character for replacing keywords -- insert temporarily and then delete
        transform.insertText(' ');
        const [newTransform,] = this.singleHashtagKeywordStructuredFieldPlugin.utils.replaceAllRelevantKeywordsInBlock(transform.state.anchorBlock, transform, transform.state)
        return newTransform.deleteBackward(1).focus();
    }

    /*
     * Handle updates when we have a new insert text with structured phrase
     */
    insertTextWithStructuredPhrases = (textToBeInserted, currentTransform = undefined, updatePatient = true, source, arrayOfPickLists) => {
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
        let pickListCount = 0;

        if (!Lang.isNull(triggers)) {
            triggers.forEach((trigger) => {

                start = remainder.indexOf(trigger.trigger);
                if (start > 0) {
                    before = remainder.substring(0, start);
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

                if (arrayOfPickLists && this.noteParser.isPickList(trigger) && !trigger.selectedValue) {
                    transform = this.updateExistingShortcut(arrayOfPickLists[pickListCount].shortcut, transform);
                    pickListCount++;
                } else {
                    transform = this.insertShortcut(trigger.definition, trigger.trigger, after, transform, updatePatient, source);
                }
            });
        }
        if (!Lang.isUndefined(remainder) && remainder.length > 0) {
            transform = this.insertPlainText(transform, remainder);
        }

        const state = transform.apply();

        // When a note is being loaded, scroll to structured data if user opened note using `Open Source Note` action
        if (source === 'loaded note' && this.props.openSourceNoteEntryId) {
            this.setState({ state }, () => {
                const shortcutKey = this.structuredFieldMapManager.getKeyFromEntryId(this.props.openSourceNoteEntryId);

                if (shortcutKey) {
                    setTimeout(() => {
                        this.scrollToData(state.document, shortcutKey)
                        this.props.setOpenSourceNoteEntryId(null);
                    }, 0);
                }
            });
        } else {
            this.setState({ state });
        }
    }

    /**
     *  Checks if any of the shortcuts in the contextTrayItem require the user to choose from pick list
     *  If not, function will call insertTextWithStructuredPhrases to insert completed contextTrayItem into editor
     */
    insertContextTrayItem = (contextTrayItem) => {
        let remainder = contextTrayItem;
        let start, end;
        let localArrayOfPickLists = [];
        const triggers = this.noteParser.getListOfTriggersFromText(contextTrayItem)[0];

        // Loop through shortcut triggers to determine if any of them require users to choose from pick list
        if (!Lang.isNull(triggers)) {
            triggers.forEach((trigger) => {
                start = remainder.indexOf(trigger.trigger);
                remainder = remainder.substring(start + trigger.trigger.length);

                // Check if the shortcut is a pick list. If it is a pick list, check if it already has an option selected
                // If no option is selected, then push the shortcut to the array
                if (this.noteParser.isPickList(trigger) && !(remainder.startsWith("[["))) {
                    localArrayOfPickLists.push(trigger);
                }

                if (remainder.startsWith("[[")) {
                    end = remainder.indexOf("]]");
                    // FIXME: 2 is a magic number based on [[ length, ditto for 2 below for ]]
                    remainder = remainder.substring(end + 2);
                }
            });
        }

        // Build array of pick lists and store options for each pick list
        if (localArrayOfPickLists.length > 0) {
            let localArrayOfPickListsWithOptions = [];
            let shortcutOptions = [];

            localArrayOfPickLists.forEach((pickList) => {
                // Create shortcut from trigger to be inserted before selection chosen. Also uses to get shortcutOptions.
                let shortcut = this.props.shortcutManager.createShortcut(pickList.definition, pickList.trigger, this.props.patient, '', false);
                shortcut.setSource("pick list/template");
                shortcut.initialize(this.props.contextManager, pickList.trigger, false);

                shortcutOptions = shortcut.getValueSelectionOptions();
                localArrayOfPickListsWithOptions.push(
                    {
                        'trigger': pickList.trigger,
                        'options': shortcutOptions,
                        'shortcut': shortcut
                    }
                )
            });

            this.props.handleUpdateArrayOfPickLists(localArrayOfPickListsWithOptions);
            this.props.setNoteViewerEditable(false);
            // Switch note assistant view to the pick list options panel
            this.props.updateNoteAssistantMode('pick-list-options-panel');
            // Insert content by default
            this.insertTextWithStructuredPhrases(contextTrayItem, undefined, true, "Picklist", localArrayOfPickListsWithOptions);
        } else { // If the text to be inserted does not contain any pick lists, insert the text
            this.insertTextWithStructuredPhrases(contextTrayItem, undefined, true, "Shortcuts in Context");
            this.props.updateContextTrayItemToInsert(null);
            this.props.updateNoteAssistantMode('context-tray');
        }
    }

    /**
     * Check if shortcutTrigger is a shortcut trigger in the list of currently valid shortcuts
     * or if the shortcutTrigger matches the shortcut's regexpTrigger
     */
    shortcutTriggerCheck = (shortcutC, shortcutTrigger) => {
        // Check regexpTrigger before checking currently valid shortcuts
        if (!Lang.isNull(shortcutC) && !Lang.isUndefined(shortcutC.regexpTrigger) && !Lang.isNull(shortcutC.regexpTrigger)) {
            const regexpTrigger = new RegExp(shortcutC.regexpTrigger);
            if (regexpTrigger.test(shortcutTrigger))
                return true;
        }

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
     *  Check if text is a placeholder
     *  text should begin with '<' and end with '>'
     *  text within the brackets should match text from placeholder shortcuts
     */
    placeholderCheck = (text) => {
        const { shortcutManager } = this.props;

        if (!text.startsWith("<") || !text.endsWith(">")) return false;
        const placeholderShortcuts = shortcutManager.getAllPlaceholderShortcuts();
        const remainderText = text.slice(1, -1).toLowerCase();

        return placeholderShortcuts.some((placeholderShortcut) => {
            const triggers = shortcutManager.getTriggersForShortcut(placeholderShortcut.id);

            return triggers.some((trigger) => {
                const triggerNoPrefix = trigger.name.slice(1);
                return triggerNoPrefix.toLowerCase() === remainderText;
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
        this.props.setNoteViewerEditable(false);
        this.setState({
            "targetedDataPanelSize": "50%",
            "notesPanelSize": "10%"
        });
        this.props.setLayout("right-collapsed");
    }

    setOpenedPortal = (openedPortal) => {
        this.setState({ openedPortal });
    }

    /**
     * Enable edit mode for a note name
     */
    enableNoteNameEditing = () => {
        this.setState({
            isEditingNoteName: true
        });
    }

    /**
     * Handle the user submitting a new name for a note
     */
    submitNoteNameChange = (e) => {
        if (e.key === "Enter") {
            this.props.selectedNote.subject = e.target.value;
            this.setState({
                isEditingNoteName: false
            });
            if (this.refs.editor) {
                this.refs.editor.focus();
            }
        }
    }

    /**
     * Render a TextField if the user wishes to edit the note name, otherwise render the note name as plain text
     */
    renderNoteNameEditor = (noteTitle, signed) => {
        let noteTag;
        if (signed) {
            noteTag = <p className="note-name" id="note-title">{noteTitle}</p>;
        } else {
            noteTag = (
                <p className="note-name" id="note-title" onClick={this.enableNoteNameEditing}>
                    { this.editNoteTitleButton() }
                    {noteTitle}
                </p>);
        }
        if (this.state.isEditingNoteName) {
            return (
                <div id="text-field-container">
                    <TextField
                        id="note-title-input"
                        autoFocus={true}
                        fullWidth={true}
                        defaultValue={noteTitle}
                        onKeyPress={this.submitNoteNameChange}
                    />
                </div>
            );
        } else {
            return noteTag;
        }
    }

    // Renders the noteDescription of the editor
    renderNoteDescriptionContent = () => { 
        // Preset note header information
        let noteTitle = "New Note";
        let date;
        let authorString = "";
        let dateString = "";
        let clinicianName;
        let source = "Dana Farber";
        let signed = false;

        // If a note is selected, update the note header with information from the selected note
        if (this.props.selectedNote) {
            noteTitle = this.props.selectedNote.subject;
            source = this.props.selectedNote.hospital;

            if(this.props.selectedNote.signed) {
                signed = true;
                date = this.props.selectedNote.signedOn;
                clinicianName = this.props.selectedNote.signedBy;
                authorString = "Signed by: ";
                dateString = "Signed date: "
            } else {
                date = this.props.selectedNote.entryInfo.creationTime.value;
                clinicianName = this.props.selectedNote.createdBy;
                authorString = "Created by: ";
                dateString = "Created date: ";
            }
        }

        if (this.props.patient == null) {
            return "";
        } else {
            return (
                <div id="note-description">
                    <Row start="xs">
                        <Col xs={9}>
                            <Row>
                            {this.renderNoteNameEditor(noteTitle, signed)}
                            </Row>
                            <Row>
                                <Col xs={7}>
                                    <p className="note-description-detail"><span className="note-description-detail-name">{authorString}</span><span className="note-description-detail-value">{clinicianName}</span></p>
                                    <p className="note-description-detail"><span className="note-description-detail-name">Source: </span><span className="note-description-detail-value">{source}</span></p>
                                </Col>
                                <Col xs={5}>
                                    <p className="note-description-detail"><span className="note-description-detail-name">{dateString}</span><span className="note-description-detail-value">{date}</span></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <Button
                                raised
                                className="close-note-btn"
                                disabled={this.context_disabled}
                                onClick={this.closeNote}
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

                    <Divider className="note-description-divider" />
                </div>
            );
        }
    }

    editNoteTitleButton = () => { 
        return ( 
            <svg width="15px" height="15px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" id="edit-note-name-btn">
                <title>Click to edit note title</title>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.6">
                    <g id="7" transform="translate(-533.000000, -403.000000)" fill="#969696" fillRule="nonzero">
                        <g id="angled-pencil" transform="translate(533.000000, 403.000000)">
                            <rect id="Rectangle" x="1" y="15" width="16" height="1"></rect>
                            <g id="Group-2" transform="translate(7.000000, 8.500000) rotate(51.000000) translate(-7.000000, -8.500000) translate(-1.000000, 6.000000)">
                                <rect id="Rectangle-5" x="0" y="0.185028843" width="12" height="4.12132034"></rect>
                                <polygon id="Path-2" points="13 0.185028843 13 4.30634919 15.8955395 2.24568901"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    
    render = () => {
        const CreatorsPortal = this.suggestionsPluginCreators.SuggestionPortal;
        const InsertersPortal = this.suggestionsPluginInserters.SuggestionPortal;
        const PlaceholdersPortal = this.suggestionsPluginPlaceholders.SuggestionPortal;
        
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

        if (this.props.noteAssistantMode === 'poc') {
            return (
                <div id="clinical-notes" className="dashboard-panel">
                    {this.renderNoteDescriptionContent()}
                </div>
            );
        }

        const callback = {}
        const editorClassName = (this.props.selectedNote && this.props.selectedNote.signed)
            ? "editor-panel"
            : "editor-panel in-progress-note";
        /**
         * Render the editor, toolbar, dropdown and description for note
         */
        return (
            <div id="clinical-notes" className="dashboard-panel">
                {this.renderNoteDescriptionContent()}
                <div className="MyEditor-root" onClick={(event) => { this.refs.editor.focus(); }}>
                    <EditorToolbar
                        contextManager={this.props.contextManager}
                        isReadOnly={!this.props.isNoteViewerEditable}
                        loadingTimeWarrantsWarning={this.state.loadingTimeWarrantsWarning}
                        onBlockCheck={this.handleBlockCheck}
                        onBlockUpdate={this.handleBlockUpdate}
                        onMarkCheck={this.handleMarkCheck}
                        onMarkUpdate={this.handleMarkUpdate}
                        patient={this.props.patient}
                    />
                    <div className='editor-content'>
                        <Slate.Editor
                            className={editorClassName}
                            placeholder={'Enter your clinical note here or choose a template to start from...'}
                            plugins={this.plugins}
                            readOnly={!this.props.isNoteViewerEditable}
                            state={this.state.state}
                            ref="editor"
                            onChange={this.onChange}
                            onInput={this.onInput}
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                            autoFocus={true}
                            onSelectionChange={this.onSelectionChange}
                            schema={schema}
                        />
                        {errorDisplay}
                    </div>

                    <CreatorsPortal
                        getPosition={this.getTextCursorPosition}
                        openedPortal={this.state.openedPortal}
                        portalId={"CreatorsPortal"}
                        setOpenedPortal={this.setOpenedPortal}
                        state={this.state.state}
                    />
                    <InsertersPortal
                        getPosition={this.getTextCursorPosition}
                        openedPortal={this.state.openedPortal}
                        portalId={"InsertersPortal"}
                        setOpenedPortal={this.setOpenedPortal}
                        state={this.state.state}
                    />
                    <PlaceholdersPortal
                        getPosition={this.getTextCursorPosition}
                        openedPortal={this.state.openedPortal}
                        portalId={"PlaceholdersPortal"}
                        setOpenedPortal={this.setOpenedPortal}
                        state={this.state.state}
                    />
                    <ContextPortal
                        capture={/@([\w]*)/}
                        callback={callback}
                        contextManager={this.contextManager}
                        contexts={this.state.portalOptions}
                        getPosition={this.getTextCursorPosition}
                        onChange={this.onChange}
                        openedPortal={this.state.openedPortal}
                        onSelected={this.onPortalSelection}
                        state={this.state.state}
                        trigger={"@"}
                    />
                </div>
            </div>
        );
    }
}

FluxNotesEditor.propTypes = {
    arrayOfPickLists: PropTypes.array.isRequired,
    changeShortcutType: PropTypes.func.isRequired,
    closeNote: PropTypes.func.isRequired,
    contextManager: PropTypes.object.isRequired,
    contextTrayItemToInsert: PropTypes.string,
    currentViewMode: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired,
    handleUpdateEditorWithNote: PropTypes.func.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    itemInserted: PropTypes.func.isRequired,
    openSourceNoteEntryId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    newCurrentShortcut: PropTypes.func.isRequired,
    noteAssistantMode: PropTypes.string.isRequired,
    patient: PropTypes.object.isRequired,
    saveNote: PropTypes.func.isRequired,
    selectedNote: PropTypes.object,
    selectedPickListOptions: PropTypes.array.isRequired,
    setForceRefresh: PropTypes.func,
    setLayout: PropTypes.func.isRequired,
    setNoteViewerEditable: PropTypes.func.isRequired,
    setOpenSourceNotEntryId: PropTypes.func,
    setUndoTemplateInsertion: PropTypes.func.isRequired,
    shortcutKey: PropTypes.string,
    shortcutManager: PropTypes.object.isRequired,
    shortcutType: PropTypes.string,
    shouldEditorContentUpdate: PropTypes.bool.isRequired,
    shouldUpdateShortcutType: PropTypes.bool.isRequired,
    shouldRevertTemplate: PropTypes.bool.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired,
    summaryItemToInsert: PropTypes.string.isRequired,
    updatedEditorNote: PropTypes.object,
    updateErrors: PropTypes.func.isRequired,
    updateLocalDocumentText: PropTypes.func.isRequired,
    updateSelectedNote: PropTypes.func.isRequired,
    updateNoteAssistantMode: PropTypes.func.isRequired,
    updateContextTrayItemToInsert: PropTypes.func.isRequired,
};

export default FluxNotesEditor;

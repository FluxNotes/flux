import React from 'react';
import PropTypes from 'prop-types';
import Slate from '../lib/slate';
import Lang from 'lodash';
import ContextPortal from '../context/ContextPortal';
// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
// This issue should no longer affect us in our current approach. consider allowing newer version of Slate
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
import Divider from 'material-ui/Divider';
import AutoReplace from 'slate-auto-replace'
import SuggestionsPlugin from '../lib/slate-suggestions-dist'
import StructuredFieldPlugin from './StructuredFieldPlugin';
import NoteParser from '../noteparser/NoteParser';
import './FluxNotesEditor.css';

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Plain.deserialize('');
const schema = {
    nodes: {
        paragraph: props => <p {...props.attributes}>{props.children}</p>,
        heading: props => <h1 {...props.attributes}>{props.children}</h1>,
        'bulleted-list-item':     props => <li {...props.attributes}>{props.children}</li>,
        'numbered-list-item':     props => <li {...props.attributes}>{props.children}</li>,        
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

//  Helper Functions
//
// Given upper-most dom element of the editor, the current node and state, return the cursor position  
function getPos(domElement, node, state) {
    const offsetx = 0;
    const offsety = 0;
    var pos = { left: 0, top: 0 };
    
    const children = domElement.childNodes;

    for(const child of children) { 
        if (child.getBoundingClientRect && child.getAttribute("data-key")) { 
            const rect = child.getBoundingClientRect();
            pos.left = rect.left + rect.width + offsetx;
            pos.top = rect.top + offsety;
        }
    }
    return pos;
}
// Given a state, return the position of the cursor
function position(state) {
    const parentNode = state.state.document.getParent(state.state.selection.startKey);
    const el = Slate.findDOMNode(parentNode);
    return getPos(el, parentNode, state);
}
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
        this.updateErrors = this.props.updateErrors;
        
        this.contextManager.setIsBlock1BeforeBlock2(this.isBlock1BeforeBlock2.bind(this));
        
        this.didFocusChange = false;
        
        this.selectingForShortcut = null;
        this.onChange = this.onChange.bind(this);
        this.onSelectionChange = this.onSelectionChange.bind(this);


        this.noteParser = new NoteParser(this.props.shortcutManager, this.props.contextManager);
        
        // Set the initial state when the app is first constructed.
        this.resetEditorState();

        // setup structured field plugin
        const structuredFieldPluginOptions = {
            contextManager: this.contextManager,
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
            trigger: '#',
            capture: /#([\w\s\-,]*)/,
            suggestions: this.suggestionFunction.bind(this, '#'),
            onEnter: this.choseSuggestedShortcut.bind(this)
        });
        this.suggestionsPluginInserters = SuggestionsPlugin({
            trigger: '@',
            capture: /@([\w\s\-,]*)/,
            suggestions: this.suggestionFunction.bind(this, '@'),
            onEnter: this.choseSuggestedShortcut.bind(this)
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
            left: 0,
            top: 0
        }
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
        const { state } = this.state; 
        const shortcut = this.props.newCurrentShortcut(null, suggestion.value.name);
        
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
            return this.openPortalToSelectValueForShortcut(shortcut, true, state.transform()).apply();
        } else {
            const transformBeforeInsert = this.suggestionDeleteExistingTransform(state.transform(), shortcut.getPrefixCharacter());
            const transformAfterInsert = this.insertStructuredFieldTransform(transformBeforeInsert, shortcut).collapseToStartOfNextText().focus();
            return transformAfterInsert.apply();
        }
    }
    
    insertShortcut(shortcutC, shortcutTrigger, text, transform = undefined) {
        if (Lang.isUndefined(transform)) {
            transform = this.state.state.transform();
        }
        let shortcut = this.props.newCurrentShortcut(shortcutC, shortcutTrigger);
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
//            console.log(text);
            if (text.length > 0) {
                shortcut.setText(text);
                let portalOptions = shortcut.getValueSelectionOptions();
                portalOptions.forEach((option) => {
                    if (option.context === text) {
                        shortcut.setValueObject(option.object);
                        //this.contextManager.contextUpdated();                        
                    }
                });
                shortcut.clearValueSelectionOptions();
                return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
            } else {
                return this.openPortalToSelectValueForShortcut(shortcut, false, transform);
            }
        } else {
            return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
        }
    }
    
    autoReplaceTransform(def, transform, e, data, matches) {
        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
        return this.insertShortcut(def, matches.before[0], "", transform).insertText(' ');
    }
    
    openPortalToSelectValueForShortcut(shortcut, needToDelete, transform) {
        let portalOptions = shortcut.getValueSelectionOptions();
        let pos = position(this.state);
        
        this.setState({
            isPortalOpen: true,
            portalOptions: portalOptions,
            needToDelete: needToDelete,
            left: pos.left,
            top: pos.top
        });
        this.selectingForShortcut = shortcut;
        return transform.blur();
    }

    // called from portal when an item is selected (context is not null) or if portal is closed without
    // selection (context is null)
    onPortalSelection = (state, context) => {
        this.setState({ isPortalOpen: false });
        if (Lang.isNull(context)) return state;
        let shortcut = this.selectingForShortcut;
        this.selectingForShortcut = null;
        shortcut.clearValueSelectionOptions();
        shortcut.setText(context.context);
        if (shortcut.isContext()) {
            shortcut.setValueObject(context.object);
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
        const { state } = this.state;
        if (Lang.isNull(transform)) {
            transform = state.transform();
        }
        const { anchorText, anchorOffset } = state
        const text = anchorText.text

        let index = { start: anchorOffset - 1, end: anchorOffset }

        if (text[anchorOffset - 1] !== prefixCharacter) {
            index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, prefixCharacter)
        }
            
        const newText = `${text.substring(0, index.start)}`
        return transform
            .deleteBackward(anchorOffset)
            .insertText(newText)    
    }
    
    insertStructuredFieldTransform(transform, shortcut) {
        //console.log(shortcut);
        if (Lang.isNull(shortcut)) return transform.focus();
        let result = this.structuredFieldPlugin.transforms.insertStructuredField(transform, shortcut); //2nd param needs to be Shortcut Object, how to create?
        //console.log(result[0]);
        return result[0];   
    }



    onChange = (state) => {
        this.setState({
            state: state
        });
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
        if (this.props.itemToBeInserted !== nextProps.itemToBeInserted && nextProps.itemToBeInserted.length > 0) {
            this.insertTextWithStructuredPhrases(nextProps.itemToBeInserted);
            this.props.itemInserted();
        }

        if (this.props.updatedEditorNote !== nextProps.updatedEditorNote && !Lang.isNull(nextProps.updatedEditorNote)) {

            // If the updated editor note is an empty string, then we are adding a new blank note. Call method to
            // re initialize editor state and reset updatedEditorNote state in parent to be null
            if (nextProps.updatedEditorNote === "") {

                console.log("updatedEditor Note is updated. Clearing editor state");
                this.resetEditorState();
                this.props.handleUpdateEditorWithNote(null);
                this.structuredFieldPlugin.clearStructuredFieldMap();
                this.contextManager.clearContexts();
            }
        }

        // When current view mode changes do this
        if (this.props.currentViewMode !== nextProps.currentViewMode && !Lang.isNull(nextProps.currentViewMode)) {

            console.log("inside changing current mode");
            // If the updated editor note is an empty string, then we are adding a new blank note. Call method to
            // re initialize editor state and reset updatedEditorNote state in parent to be null
            if (nextProps.updatedEditorNote === "") {
                console.log("currentViewMode is updated. Clearing editor state");
                this.resetEditorState();
                this.props.handleUpdateEditorWithNote(null);
                this.structuredFieldPlugin.clearStructuredFieldMap();
                this.contextManager.clearContexts();
            }
        }
    }
    
    insertNewLine = (transform) => {
        return transform
          .splitBlock();
    }

    insertPlainText = (transform, text) => {
        let returnIndex = text.indexOf("\r");
        if (returnIndex >= 0) {
            let result = this.insertPlainText(transform, text.substring(0, returnIndex));
            result = this.insertNewLine(result);
            return this.insertPlainText(result, text.substring(returnIndex + 1));
        } else {
            return transform.insertText(text);
        }
    }
    /*
     * Handle updates when we have a new
     */
    insertTextWithStructuredPhrases = (textToBeInserted, currentTransform=undefined) => {
        let state;
        const currentState = this.state.state;
        
        // console.log(textToBeInserted);

        let transform = (currentTransform) ? currentTransform : currentState.transform();
        let remainder = textToBeInserted;
        let start, end;
        let before = '', after = '';
        
        //console.log(textToBeInserted);
        const triggers = this.noteParser.getListOfTriggersFromText(textToBeInserted)[0];
        //console.log(triggers);
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

                transform = this.insertShortcut(trigger.definition, trigger.trigger, after, transform);
            });
        }

        if (remainder.length > 0) {
            //transform = transform.insertText(remainder);
            transform = this.insertPlainText(transform, remainder);
        }
        state = transform.focus().apply();
        this.setState({state: state});
        //return state;
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
    handleMarkUpdate = (type) =>  {
        let { state } = this.state
        state = state
         .transform()
         .toggleMark(type)
         .apply()
       this.setState({ state });
    }

      /**
       * Handle any changes to the current block type.
       */
    handleBlockUpdate = (type) =>  {
        let { state } = this.state;
        const transform = state.transform();
        const DEFAULT_NODE = "";

        // Handle list buttons.
        if (type === 'bulleted-list' || type === 'numbered-list') {
          const isList = this.handleBlockCheck(type + '-item')


          if (isList) {
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
        this.setState({ state });
    
    }        

    render = () => {
        const CreatorsPortal = this.suggestionsPluginCreators.SuggestionPortal;
        const InsertersPortal = this.suggestionsPluginInserters.SuggestionPortal;

        let noteDescriptionContent = null;
        if (this.props.patient == null) {
            noteDescriptionContent = "";
        } else {
            noteDescriptionContent = (
                <div id="note-description">
                    <Row>
                        <Col xs={5}>
                            <h1 id="note-title">Pathology Assessment</h1>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Date</p>
                            <p className="note-description-detail-value">20 June 2017</p>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Source</p>
                            <p className="note-description-detail-value">Pathology Report</p>
                        </Col>
                        <Col xs={3}>
                            <p className="note-description-detail-name">Signed By</p>
                            <p className="note-description-detail-value">not signed</p>
                        </Col>
                    </Row>

                    <Divider className="divider"/>
                </div>
            );
        }
        let errorDisplay = "";
        if (this.props.errors && this.props.errors.length > 0) {
            errorDisplay = (
                <div>
                    <Divider className="divider"/>
                    <h1 style={{color:'red'}}>{this.props.errors.join()}</h1>
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
            <div id="clinical-notes" className="dashboard-panel" onClick={(event) => { editor.focus(); }}>
                {noteDescriptionContent}
                <div className="MyEditor-root">
                    <EditorToolbar
                        onMarkCheck={this.handleMarkCheck}
                        onBlockCheck={this.handleBlockCheck}

                        onMarkUpdate={this.handleMarkUpdate}
                        onBlockUpdate={this.handleBlockUpdate}
                        patient={this.props.patient}
                    />
                    <Slate.Editor
                        placeholder={'Enter your clinical note here or choose a template to start from...'}
                        plugins={this.plugins}
                        state={this.state.state}
                        ref={function(c) { editor = c; }}
                        onChange={this.onChange}
                        onInput={this.onInput}
                        onSelectionChange={this.onSelectionChange}
                        schema={schema}
                    />
                    {errorDisplay}
                    <CreatorsPortal 
                        state={this.state.state} />
                    <InsertersPortal
                        state={this.state.state} />
                    <ContextPortal
                        left={this.state.left}
                        top={this.state.top}
                        state={this.state.state}
                        callback={callback}
                        onSelected={this.onPortalSelection}
                        contexts={this.state.portalOptions}
                        capture={/@([\w]*)/}
                        trigger={"@"}
                        onChange={this.onChange}
                        isOpened={this.state.isPortalOpen}
                        contextManager={this.contextManager}
                    />
                </div>
            </div>
        );
    }
}

FluxNotesEditor.proptypes = { 
    onSelectionChange: PropTypes.func.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    itemInserted: PropTypes.object,
    itemToBeInserted: PropTypes.object,
    patient: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    updateErrors: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    resetEditorState: PropTypes.func.isRequired,
}

export default FluxNotesEditor;
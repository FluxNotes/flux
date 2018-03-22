import React from 'react';
import PropTypes from 'prop-types';
import Slate from '../lib/slate';
//import Html from '../lib/slate/serializers/html' not needed, Html is imported in slate/index.js imported one line above
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
import InsertValue from '../shortcuts/InsertValue';
import CreatorChild from '../shortcuts/CreatorChild';
//import Html from 'slate-html-serializer';

const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  pre: 'code',
    em: 'italic',
  strong: 'bold',
  u: 'underline',
}
 
//let key = 1;
/* Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
}*/ 
 
const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()]
      if (!type) return    //   generalize this
      return {
        object: 'block',
        type: type,
        nodes: next(el.childNodes),
      }
    },
    serialize(obj, children, convertedText = null) {
     // if (obj.kind !== 'block') return //   obj.data.get
        console.log("Serialize is running");
        console.log(obj);
        console.log(children);
        console.log(convertedText);
       /* if(!Lang.isUndefined(children[0])){
            children = children[0];
        }*/
        if(obj.type === 'bold'){
            return <strong>{children}</strong>
        } else if(obj.type === 'italic'){
            return <em>{children}</em>
        } else if(obj.type === 'underlined'){
            return <u>{children}</u>
        } else if(obj.type === 'line'){
          //  console.log("Is a line");
            if(React.isValidElement(children)){
                console.log("not returning anything, no styling*********************"); //never happens
                //return children;
            } else{
              //  console.log("not a valid element:");
             //   console.log(children);
                return <div key='0'>{children}</div>
            }
            // pur return div in else
        } else if(obj.type === 'structured_field'){
            // children is empty in structured_field
            //nope console.log("Is a structured_field, returning: " + convertedText);
            let result = "", start, end;
            // Greg recommended just copying this block of code into the rules.serialize() because it does what you want when you have a SF
            // It does the whole string, though, and drops the bold tags
                let shortcut = obj.data.get("shortcut");
                if (shortcut instanceof InsertValue || (shortcut instanceof CreatorChild /*&& Lang.isArray(shortcut.determineText(contextManager)) */)) {
                    let text = shortcut.getText();
                    if (typeof(text) === "string" && text.startsWith(shortcut.getPrefixCharacter())) {
                        text = text.substring(1);
                    }
                    console.log(text);
                    result += `${shortcut.initiatingTrigger}[[${text}]]`;
                } else {
                    result += shortcut.getText();
                }
                // sf
                console.log("SF returns " + result);
                return result;
        }else{
            console.log("returning nothing");
            //  return ( <div>{children}</div> );
            // Don't need to return on every invocation
        }
      
      /* good stuff, just commented to simplify
      switch (obj.type) {
          case 'structured_field': // unsure what to do here
            console.log("2: structured_field " + children);
            return {children} 
        case 'bold':
          return <strong>{children}</strong>
        case 'italic':
          return <em>{children}</em>
        case 'underlined':
          return <u>{children}</u>
        case 'code':
          return (
            <pre>
              <code>{children}</code>
            </pre>
          )
        case 'paragraph':
          return <p>{children}</p>
        case 'quote':
          return <blockquote>{children}</blockquote>
        case 'line':
            console.log("1: line " + children);
            console.log(obj);
    
           return {children} //testing
          /* 
         return  Array.prototype.forEach.call(children, function(child){
              this.serialize(child. children); //or something, they use reduce() accumulator
          });**
        
        default:
            return null
      }*/
    },
  },
  /* Add a new rule that handles marks...
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()]
      if (!type) return
      return {
        object: 'mark',
        type: type,
        nodes: next(el.childNodes),
      }
    },
    serialize(obj, children) {
                console.log(obj);
      console.log(obj.object);
      if (obj.object !== 'mark') return // limits us to mark type...but what is obj.object? not on these objects. Does what it should though with !==
        console.log("Serialize2: ");

      switch (obj.type) {
        case 'bold':
          return <strong>{children}</strong>
        case 'italic':
          return <em>{children}</em>
        case 'underline':
          return <u>{children}</u>
      /*  case 'line':
          console.log("2: line" + children);
           /* return {children} - has this and got:
          1: lineList [ List [ Disease  ], [object Object], List [   ], [object Object], List [  based on  ], [object Object], List [  and  ], [object Object], List [   ], [object Object], List [   ], [object Object], List [ . ] ]
16:20:32.930 invariant.js:42 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.
*
         return Array.prototype.forEach.call(children, function(child){
              this.serialize(child. children); //or something, they use reduce() accumulator
          });* return <strong>{children}</strong>
        case 'structured_field': // unsure what to do here
          console.log("2: structured_field " + children);
          /* return {children} - has this and got:
          1: lineList [ List [ Disease  ], [object Object], List [   ], [object Object], List [  based on  ], [object Object], List [  and  ], [object Object], List [   ], [object Object], List [   ], [object Object], List [ . ] ]
16:20:32.930 invariant.js:42 Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.
*
          return Array.prototype.forEach.call(children, function(child){
              this.serialize(child. children); //or something, they use reduce() accumulator
          }); * return <strong>{children}</strong> **
            default:
            return {children}
      }
    },
  },*/
];
//const initialValue = '<p></p>';
console.log(Slate); //ther isn't a Slate.Node, does Html assume a different version of Slate?
//const test = Slate.Html.deserialize('<em>hi</em> there'); // not a function
//console.log(test);
const html = new Slate.Html({ rules });
console.log(html); // .serialize() takes an object with .nodes, like maybe: ome object containing document: {nodes: [ object: '', nodes: [] ]}

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
            value: '', //html.deserialize(initialValue), param needs to be an object
        };

        // this.props.setFullAppState('isNoteViewerEditable', true);
    }

    // Reset editor state and clear context
    resetEditorAndContext() {
        this.resetEditorState();

        // Calls parent function which resets updatedEditorNote to be null
        this.props.handleUpdateEditorWithNote(null);

        // This clears error messages from the editor
        this.structuredFieldPlugin.clearStructuredFieldMap();

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

        let shortcut = this.props.newCurrentShortcut(shortcutC, shortcutTrigger, updatePatient);
        if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
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
        } else if (text.length > 0) {
            shortcut.setText(text)
            return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
        } else {
            return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
        }
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

    // called from portal when an item is selected (context is not null) or if portal is closed without
    // selection (context is null)
    onPortalSelection = (state, context) => {
        this.setState({isPortalOpen: false});
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
        const {state} = this.state;
        if (Lang.isNull(transform)) {
            transform = state.transform();
        }
        const {anchorText, anchorOffset} = state
        const text = anchorText.text

        let index = {start: anchorOffset - 1, end: anchorOffset}

        if (text[anchorOffset - 1] !== prefixCharacter) {
            index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, prefixCharacter)
        }

        const newText = `${text.substring(0, index.start)}`
        return transform
            .deleteBackward(anchorOffset)
            .insertText(newText)
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
        if(Lang.isEqual(indexOfLastNode, 0)){
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
        let fullText = this.structuredFieldPlugin.convertToText(state, entireNote);
        //console.log(fullText);
        // problem is fullText has been converted but is never added to state, and is not accessed by html.js
        // because it has no notion of text being transformed


        // put styling tags in before saving
        // todo save something more than plain text
        //WRONG: const htmlContents = HTML.serialize(some object containing document: {nodes: [ object: '', nodes: [] ]})
       // console.log(state);// is this the right kind? we need .documents.nodes[0].type == something defined in rules
        if(!Lang.isUndefined(fullText) && !Lang.isUndefined(fullText.length) && fullText.length > 1){
            //Does { render: false } prevent tag duplication? No
            const string = html.serialize(state, {}, this.structuredFieldPlugin.convertToText); //trying options like: {render: false} causes the first error to go away
            // with render: false this is a List of Lists of Lists with text
            
            console.log(string); // to be saved if it has html tags
            // TODO: set the text to the string containing styling tags
            // fullText = string;
        } else{
            console.log("fullText is not defined");
        }


        this.props.setFullAppStateWithCallback(function(prevState, props){
            return {documentText: fullText};
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
        //nicole fix? this.onChange(this.state.state); //do we just need one more thing triggering a 'change' like a extra click?

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
            this.structuredFieldPlugin.clearStructuredFieldMap();
            this.contextManager.clearContexts();
            this.props.updateSelectedNote(null);
        }
    }

    insertNewLine = (transform) => {
        return transform
            .splitBlock();
    }

    insertPlainText = (transform, text) => {
        // Check for \r\n, \r, or \n to insert a new line in Slate
        let returnIndex = text.indexOf("\r\n");
        if (returnIndex === -1) {
            returnIndex = text.indexOf("\r");
        }
        if (returnIndex === -1) {
            returnIndex = text.indexOf("\n");
        }
        
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
    insertTextWithStructuredPhrases = (textToBeInserted, currentTransform = undefined, updatePatient = true) => {
        let state;
        const currentState = this.state.state;

        let transform = (currentTransform) ? currentTransform : currentState.transform();
        let remainder = textToBeInserted;
        let start, end;
        let before = '', after = '';

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

    renderNode = props => {
        switch (props.node.type) {
        case 'code':
            return (
            <pre {...props.attributes}>
                <code>{props.children}</code>
            </pre>
            )
        case 'paragraph':
            return <p {...props.attributes}>{props.children}</p>
        case 'quote':
            return <blockquote {...props.attributes}>{props.children}</blockquote>
        default:
            return  <p {...props.attributes}>{props.children}</p>
        }
    }
 
    // Add a `renderMark` method to render marks.
    renderMark = props => {
        switch (props.mark.type) {
            case 'bold':
                return <strong>{props.children}</strong>
            case 'italic':
                return <em>{props.children}</em>
            case 'underline':
                return <u>{props.children}</u>
            default:
                return <p {...props.attributes}>{props.children}</p>
            }
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
                                    float: "right"
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
                <div>
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
                        onMarkCheck={this.handleMarkCheck}
                        onBlockCheck={this.handleBlockCheck}

                        onMarkUpdate={this.handleMarkUpdate}
                        onBlockUpdate={this.handleBlockUpdate}
                        patient={this.props.patient}

                        isReadOnly={!this.props.isNoteViewerEditable}
                    />
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
                        value={this.state.value}
                        // Add the ability to render our nodes and marks...
                        renderNode={this.renderNode}
                        renderMark={this.renderMark}
                    />
                    {errorDisplay}
                    <CreatorsPortal
                        state={this.state.state}
                        contextPortalOpen={this.state.isPortalOpen}
                        getPosition={this.getTextCursorPosition}/>
                    <InsertersPortal
                        state={this.state.state}
                        contextPortalOpen={this.state.isPortalOpen}
                        getPosition={this.getTextCursorPosition}/>
                    <ContextPortal
                        getPosition={this.getTextCursorPosition}
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
    summaryItemToInsert: PropTypes.string,
    patient: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    updateErrors: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    resetEditorState: PropTypes.func.isRequired,
    resetEditorAndContext: PropTypes.func.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    setFullAppState: PropTypes.func.isRequired,
}

export default FluxNotesEditor;
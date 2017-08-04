import React from 'react';
import Slate from 'slate';
import Lang from 'lodash';

// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
//import Lang from 'lodash'
//import { Set } from 'immutable'
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import AutoReplace from 'slate-auto-replace'
import SuggestionsPlugin from 'slate-suggestions'
import { Editor } from 'slate'
// Shortcut components may not be needed here since a lot of that is taken out - torch
import ProgressionShortcut from '../shortcuts/ProgressionShortcut';
import StagingShortcut from '../shortcuts/StagingShortcut';
// import ToxicityShortcut from '../shortcuts/ToxicityShortcut';
import ShortcutManager from '../shortcuts/ShortcutManager';


import StructuredFieldPlugin from './StructuredFieldPlugin';

// Styling
import './FluxNotesEditor.css';

const suggestions = [
  {
    key: 'staging',
    value: '#staging[',
    suggestion: 'staging' // Can be string or react component 
  },
 {
    key: 'progression',
    value: '#progression[',
    suggestion: 'progression' // Can be string or react component
  },
  {
    key: 'toxicity',
    value: '#toxicity[',
    suggestion: 'toxicity' // Can be string or react component 
  }
];
function getCurrentWord(text, index, initialIndex) {
  if (index === initialIndex) {
    return { start: getCurrentWord(text, index - 1, initialIndex), end: getCurrentWord(text, index + 1, initialIndex) }
  }
  if (text[index] === " " || text[index] === "@" || text[index] === undefined) {
    return index
  }
  if (index < initialIndex) {
    return getCurrentWord(text, index - 1, initialIndex)
  }
  if (index > initialIndex) {
    return getCurrentWord(text, index + 1, initialIndex)
  }
}
///////////////////////////////

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Raw.deserialize(
    {
        nodes: [
            {
                kind: 'block',
                type: 'inline',
                nodes: [
                    {
                        kind: 'text',
                        ranges: [
                            {
                                'text': ""
                            }
                        ]
                    }
                ]
            }
        ]
    }, {terse: true});

const schema = {
    nodes: {
        paragraph: props => <p {...props.attributes}>{props.children}</p>,
        heading: props => <h1 {...props.attributes}>{props.children}</h1>
    },
    marks: {
        bold: (props) => <strong>{props.children}</strong>
    }
};

const structuredFieldTypes = [
    {
        name: 'typeStructuredField',
        value: 'structured_field'
    },
    {
        name: 'typeSubfieldDropdown',
        value: 'sf_subfield_dropdown'
    },
    {
        name: 'typeSubfieldStaticText',
        value: 'sf_subfield_statictext'
    }
]

class FluxNotesEditor extends React.Component {
    constructor(props) {
        super(props);

		this.didFocusChange = false;
		
        // Set the initial state when the app is first constructed.
        this.state = {
            state: initialState //Slate.Raw.deserialize(stateJson, { terse: true })
        }

        // setup structured field plugin
        const structuredFieldPluginOptions = {
            updateEditorState: this.onEditorUpdate,
            updateCurrentShortcutValues: this.onCurrentShortcutValuesUpdate,
			changeCurrentShortcut: props.changeCurrentShortcut
        };
        structuredFieldTypes.forEach((type) => {
            const typeName = type.name;
            const typeValue = type.value;
            structuredFieldPluginOptions[typeName] = typeValue;
        });


        this.structuredFieldPlugin = StructuredFieldPlugin(structuredFieldPluginOptions);

      //  this.plugins = [
      //      this.structuredFieldPlugin
      //  ];
            ////////////////////////////////////////////// plugins defined above in master
        this.suggestionsPlugin = SuggestionsPlugin({
            trigger: '#',
            capture: /#([\w]*)/,
            suggestions,
            onEnter: (suggestion) => {
                console.log("in onENter");
                const { state } = this.state; 
                const { anchorText, anchorOffset } = state
                    const text = anchorText.text

                    let index = { start: anchorOffset - 1, end: anchorOffset }

                    if (text[anchorOffset - 1] !== '#') { //changed to # from @
                    index = getCurrentWord(text, anchorOffset - 1, anchorOffset - 1)
                    }
                    
                    const newText = `${text.substring(0, index.start)} `
                    let transformBeforeInsert = state.transform().deleteBackward(anchorOffset).insertText(newText);
                    let transformAfterInsert = this.insertStructuredFieldTransform(transformBeforeInsert, suggestion.key);
                    return transformAfterInsert.apply();
            }
        });
 
       // do not use onKeyDown, use auto-replace plugin, add to existing global 'plugins' list
        this.plugins = [
                this.structuredFieldPlugin,
                this.suggestionsPlugin,
                AutoReplace({
                    trigger: '[',
                    before: /(#staging)/i,
                    transform: (transform, e, data, matches) => {
                        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
                        return this.insertStructuredFieldTransform(transform, "staging");
                    }
                }),
                AutoReplace({
                    trigger: '[',
                    before: /(#progression)/i,
                    transform: (transform, e, data, matches) => {
                        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
                        return this.insertStructuredFieldTransform(transform, "progression");
                    }
                }),
                 AutoReplace({
                    trigger: '[',
                    before: /(#toxicity)/i,
                    transform: (transform, e, data, matches) => {
                        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
                        return this.insertStructuredFieldTransform(transform, "toxicity");
                    }
                })
        ];
    /////////////////////////////////////////////////////////
    }
    insertStructuredFieldTransform(transform, shortcutType){
        let shortcut = this.props.newCurrentShortcut(shortcutType);
        let result = this.structuredFieldPlugin.transforms.insertStructuredField(transform, shortcut); //2nd param needs to be Shortcut Object, how to create?
        let transformAfterInsert = result[0];
        return transformAfterInsert;
    }

    onEditorUpdate = (newState) => {
		let curSelection = this.state.state.selection;
        console.log(`Plugin updating state`);
        this.setState({
            state: newState
        });
		console.log(newState);
		if (!Lang.isEqual(curSelection, newState.selection)) this.onSelectionChange(newState.selection, newState);
    }
    onCurrentShortcutValuesUpdate = (name, value) => {
		this.props.currentShortcut.updateValue(name, value, false);
    }

    componentDidUpdate = (prevProps, prevState) => {
        //console.log("component did update");
        //console.log(this.state.state.document);
    }

    onChange = (state) => {
        console.log("onChange: START");
        this.setState({
            state: state
        });
        console.log("onChange: DONE");
    }

    onSelectionChange = (selection, state) => {
        this.didFocusChange = this.structuredFieldPlugin.transforms.onSelectionChange(selection, state);
		console.log("onSelectionChange. did focus change = " + this.didFocusChange);
    }
	
	onBlur = (event, data, state, editor) => {
		console.log("onBlur: state.selection.startKey=" + state.selection.startKey);
		if (this.didFocusChange) {
			this.didFocusChange = false;
			event.preventDefault();
			console.log("onBlur: suppress blur. DONE");
			return state;
		}
		console.log("onBlur: let core handle blur. DONE");
		return;
	}

/*	
	insertStructuredField = (shortcutType) => {
        let {state} = this.state;

        // When structure field is inserted, change current shortcut
        let shortcut = this.props.newCurrentShortcut(shortcutType);

        let result = this.structuredFieldPlugin.transforms.insertStructuredField(state.transform(), shortcut);

        //let sf = result[0].state.document.getDescendant(result[1]);
        //let sf_firstChild = sf.nodes.get(0).key;


        // Attempt to delete remove structured field first child but this did not work. First child is the $#8202 unicode and for some reason
        // this gets added when structured field is created. When delete structured field, this character remains as part of the structured field
        // result[0].removeNodeByKey(sf_firstChild);

        let finalResult = result[0].apply();

        console.log(finalResult.document);

        // Adds the inserted structured field into the editor
        this.onChange(
            finalResult
        );
    }
*/

    /**
     * Render the dropdown of suggestions.
     */
    renderDropdown = () => {
        return <div></div>;
    }

    /**
     * Render the dropdown of shorthand suggestions.
     */
    renderShorthandDropdown = () => {
        return <div></div>;
    }

    // This gets called when the before the component receives new properties
    componentWillReceiveProps = (nextProps) => {

        if (this.props.itemToBeInserted !== nextProps.itemToBeInserted) {
            this.handleSummaryUpdate(nextProps.itemToBeInserted);
        }
    }

    /*
     * Handle updates when we have a new
     */
    handleSummaryUpdate = (itemToBeInserted) => {
        const currentState = this.state.state;
        const state = currentState
            .transform()
            .insertText(itemToBeInserted)
            .focus()
            .apply();
        this.setState({state: state});
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
        return state.blocks.some(node => node.type === type);
    }

    render = () => {
        //let {state} = this.state;
        //let isStructuredField = structuredFieldPlugin.utils.isSelectionInStructuredField(state);
        // Extract portal component from the plugin 
        const { SuggestionPortal } = this.suggestionsPlugin;
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
                            <p className="note-description-detail-value">Dr. Brenda Zeiweger</p>
                        </Col>
                    </Row>

                    <Divider className="divider"/>
                </div>
            );
        }
        /**
         * Render the editor, toolbar, dropdown and description for note
         */
        return (
            <div id="clinical-notes" className="dashboard-panel">
                <Paper className="panel-content trio">
                    {noteDescriptionContent}
                    <div className="MyEditor-root">
                        <EditorToolbar
                            onMarkCheck={this.handleMarkCheck}
                            onBlockCheck={this.handleBlockCheck}

                            onMarkUpdate={this.handleMarkUpdate}
                            onBlockUpdate={this.handleBlockUpdate}
                            patient={this.props.patient}
                        />
                        {this.renderDropdown()}
                        {this.renderShorthandDropdown()}
                        <Slate.Editor
                            placeholder={'Enter your clinical note here or choose a template to start from...'}
                            plugins={this.plugins}
                            state={this.state.state}
                            onChange={this.onChange}
                            onSelectionChange={this.onSelectionChange}
							onBlur={this.onBlur}
                            schema={schema}
                        />
 <SuggestionPortal 
   state={this.state.state} />
                    </div>
                </Paper>
            </div>
        );

    }
}

export default FluxNotesEditor;
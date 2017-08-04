import React from 'react';
import Slate from 'slate';

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

import StructuredFieldPlugin from './StructuredFieldPlugin';

// Styling
import './FluxNotesEditor.css';

////////////////////////////////////////may have to move to inside constructor/render - thats how we got to shcema error before
const suggestions = [
  {
    key: 'jon-snow',
    value: '@Jon Snow',
    suggestion: '@Jon Snow' // Can be string or react component 
  },
  // Some other suggestions 
 {
    key: 'johnnycake',
    value: '@Johnnycake',
    suggestion: '@Johnnycake' // Can be string or react component 
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
            trigger: '@',
            capture: /@([\w]*)/,
            suggestions,
            onEnter: (suggestion) => {
                const { state } = this.state // error here because this isn't in the class. 
                // If I move this to the constructor, and the StuggestionPortal declaration to render(), i see an undefined 'schema' error
                // going to start from master now, and add the #staging[ autoReplace, then add the slate-suggestions
                    // then see how to tie them together once both are working.
                    // tying together is not in task 349, but would be nice to type #sta<Down><Enter> and get the whole new shortcut inserted.
                // Modify your state up to your use-cases 
                console.log("Suggestion being triggered! TORCH------------------------");
                console.log("Suggestion being triggered! TORCH-----------------------");
                console.log("Suggestion being triggered! TORCH----------------------");
                const { anchorText, anchorOffset } = state

                    const text = anchorText.text

                    let index = { start: anchorOffset - 1, end: anchorOffset }

                    if (text[anchorOffset - 1] !== '@') {
                    index = getCurrentWord(text, anchorOffset - 1, anchorOffset - 1)
                    }

                    const newText = `${text.substring(0, index.start)}${suggestion.value} `
                return state
                    .transform()
                    .deleteBackward(anchorOffset)
                    .insertText(newText)
                    .apply()
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
                     //   return this.structuredFieldPlugin.transforms.insertStructuredField("staging"); //2nd param needs to be Shortcut Object, how to create?
                        return this.structuredFieldPlugin.transforms.insertStructuredField(new StagingShortcut(() => {}));
                        //#staging[T2 N1 M1 ]
                        // this.insertStructuredField("staging"); is what the button calls
                        //maybe like(stolen from ClinicalNotes):  new StagingShortcut(() => {}, nextProps.currentShortcut.staging)
                    }
                }),
                AutoReplace({
                    trigger: '[',
                    before: /(#progression)/i,
                    transform: (transform, e, data, matches) => {
                        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
                        return this.structuredFieldPlugin.transforms.insertStructuredField("progression"); 
                        //#progression[Stable based on Imaging, Symptoms]
                    }
                }),
                 AutoReplace({
                    trigger: '[',
                    before: /(#toxicity)/i,
                    transform: (transform, e, data, matches) => {
                        // need to use Transform object provided to this method, which AutoReplace .apply()s after return.
                        return this.structuredFieldPlugin.transforms.insertStructuredField("toxicity"); 
                        //#progression[Stable based on Imaging, Symptoms]
                    }
                })
        ];
    /////////////////////////////////////////////////////////
    }

    onEditorUpdate = (newState) => {
        //console.log(`Plugin updating state`);
        this.setState({
            state: newState
        });
    }
    onCurrentShortcutValuesUpdate = (name, value) => {
		this.props.currentShortcut.updateValue(name, value);
    }

    componentDidUpdate = (prevProps, prevState) => {
        //console.log("component did update");
        //console.log(this.state.state.document);
    }

    onChange = (state) => {
        //console.log("Editor onChange updating state.");
        this.setState({
            state: state
        });
    }

    onSelectionChange = (selection, state) => {
        this.structuredFieldPlugin.transforms.onSelectionChange(selection, state);
    }
	
	onBlur = (event, data, state, editor) => {
		event.preventDefault();
		return state;
	}

	// for temporary toolbar buttons
    onInsertStagingStructuredField = () => {
		this.insertStructuredField("staging");
	}
    onInsertProgressionStructuredField = () => {
		this.insertStructuredField("progression");
	}
    onInsertToxicityStructuredField = () => {
		this.insertStructuredField("toxicity");
	}
	
	
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

    renderTemporaryToolbar = () => {
        return (
            <div>
                <div>
                    <button onClick={this.onInsertStagingStructuredField}>Insert Staging Shortcut</button>
                    <button onClick={this.onInsertProgressionStructuredField}>Insert Progression Shortcut</button>
                    <button onClick={this.onInsertToxicityStructuredField}>Insert Toxicity Shortcut</button>
                </div>
            </div>
        );
    }

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
        let {state} = this.state;
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
                        {this.renderTemporaryToolbar()}
                        {this.renderDropdown()}
                        {this.renderShorthandDropdown()}
                        <Slate.Editor
                            placeholder={'Enter your clinical note here or choose a template to start from...'}
                            plugins={this.plugins}
                            state={state}
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
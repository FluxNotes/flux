import React from 'react';
import Slate from 'slate';

// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
import Lang from 'lodash'
//import { Set } from 'immutable'
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import StructuredFieldPlugin from './StructuredFieldPlugin';

// Styling
import './FluxNotesEditor.css';

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Raw.deserialize(
    {
        nodes: [
            {
                kind: 'block',
                type: 'paragraph',
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
            updateCurrentShortcutValues: this.onCurrentShortcutValuesUpdate
        };
        structuredFieldTypes.forEach((type) => {
            const typeName = type.name;
            const typeValue = type.value;
            structuredFieldPluginOptions[typeName] = typeValue;
        });


        this.structuredFieldPlugin = StructuredFieldPlugin(structuredFieldPluginOptions);

        this.plugins = [
            this.structuredFieldPlugin
        ];
    }

    onEditorUpdate = (newState) => {
        console.log(`Plugin updating state`);
        this.setState({
            state: newState
        });
    }
    onCurrentShortcutValuesUpdate = (value) => {

        if (this.props.currentShortcut.getShortcutType() === "staging") {
            if (value.startsWith("T")) {
                this.handleStagingTUpdate(value);
            } else if (value.startsWith("N")) {
                this.handleStagingNUpdate(value);
            } else if (value.startsWith("M")) {
                this.handleStagingMUpdate(value);
            } else {
                console.log("Error: Unexpected value selected in staging dropdown");
            }
        }
        else {
            console.log("Error: Currently, no functionality to update shortcuts that are not staging");
            // TODO: Add functionality to update values in other shortcuts (i.e progression, toxicity)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        //console.log("component did update");
        //console.log(this.state.state.document);
    }

    onChange = (state) => {
        console.log("Editor onChange updating state.");

        this.setState({
            state: state
        });
    }


    onSelectionChange = (selection, state) => {
        this.structuredFieldPlugin.transforms.onSelectionChange(selection, state);
    }


    onInsertStructuredField = () => {
        let {state} = this.state;

        let result = this.structuredFieldPlugin.transforms.insertStructuredField(state.transform());

        //let sf = result[0].state.document.getDescendant(result[1]);
        //let sf_firstChild = sf.nodes.get(0).key;

        // When structure field is inserted, change current shortcut
        this.props.changeCurrentShortcut("staging");

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

    handleStagingTUpdate = (newTValue) => {
        const newStaging = Lang.clone(this.props.currentShortcut.staging);
        newStaging['tumorSize'] = newTValue;
        this.props.currentShortcut.handleStagingUpdate(newStaging);
    }


    handleStagingNUpdate = (newNValue) => {
        const newStaging = Lang.clone(this.props.currentShortcut.staging);
        newStaging['nodeSize'] = newNValue;
        this.props.currentShortcut.handleStagingUpdate(newStaging);
    }

    handleStagingMUpdate = (newMValue) => {
        const newStaging = Lang.clone(this.props.currentShortcut.staging);
        newStaging['metastasis'] = newMValue;
        this.props.currentShortcut.handleStagingUpdate(newStaging);
    }


    renderTemporaryToolbar = () => {

        return (
            <div>
                <div>
                    <button onClick={this.onInsertStructuredField}>Insert Shortcut</button>
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
                            schema={schema}
                        />
                    </div>
                </Paper>
            </div>
        );

    }
}

export default FluxNotesEditor;
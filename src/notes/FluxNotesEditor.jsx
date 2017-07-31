import React from 'react';
import Slate from 'slate';
import Lang from 'lodash';
import StructuredFieldPlugin from './StructuredFieldPlugin.jsx'

// Styling
import './FluxNotesEditor.css';

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Raw.deserialize(
	{     nodes: [
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
	]}, { terse: true });

class FluxNotesEditor extends React.Component {
	constructor(props) {
		super(props);
	
		// Set the initial state when the app is first constructed.
		this.state = {
			state: initialState //Slate.Raw.deserialize(stateJson, { terse: true })
		}
        this.schema = {
            nodes: {
                paragraph:  props => <p {...props.attributes}>{props.children}</p>,
                heading:    props => <h1 {...props.attributes}>{props.children}</h1>
            },
            marks: {
                bold: (props) => <strong>{props.children}</strong>
            }
        }

        this.structuredFieldPlugin = StructuredFieldPlugin({
            updateEditorState: this.onEditorUpdate,
			updateCurrentShortcutValues: this.onCurrentShortcutValuesUpdate
        });

        this.plugins = [
            this.structuredFieldPlugin
        ];
	}

    onEditorUpdate = (newState) => {
        // console.log(`This is where the editor update happens`);
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

    onChange = (state) => {
        // console.log("[FluxNotesEditor] - On change to editor");
        // console.log(this.state.state.selection.startKey)

        this.setState({
            state: state
        });
    }

    onSelectionChange = (state) => {
        // console.log(document.activeElement.parentElement.className === "sf-subfield");
        // console.log(document.activeElement.parentElement);
        // console.log(document.activeElement.parentElement.getAttribute('data-key'));
    }

    onInsertStructuredField = () => {
        let { state } = this.state;

		let  result = this.structuredFieldPlugin.transforms.insertStructuredField(state.transform());

		//let sf = result[0].state.document.getDescendant(result[1]);
		//let sf_firstChild = sf.nodes.get(0).key;

        // When structure field is inserted, change current shortcut
        this.props.changeCurrentShortcut("staging");

		// Attempt to delete remove structured field first child but this did not work. First child is the $#8202 unicode and for some reason
		// this gets added when structured field is created. When delete structured field, this character remains as part of the structured field
		// result[0].removeNodeByKey(sf_firstChild);

		let finalResult = result[0].apply();

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

    renderNormalToolbar = () => {
        return (
			<div>
				<div>
					<button onClick={this.onInsertStructuredField}>Insert Shortcut</button>
				</div>
			</div>
        );
    }

    render = () => {
        let { state } = this.state;
        //let isStructuredField = structuredFieldPlugin.utils.isSelectionInStructuredField(state);
        //{isTable? this.renderTableToolbar() : this.renderNormalToolbar()}
        return (
            <div id="fluxnoteseditor">
				{this.renderNormalToolbar()}
                <Slate.Editor
                    placeholder={'Enter your clinical note here or choose a template to start from...'}
                    plugins={this.plugins}
                    state={state}
                    onChange={this.onChange}
                    schema={this.schema}
                />
            </div>
        );
    }
}

export default FluxNotesEditor;
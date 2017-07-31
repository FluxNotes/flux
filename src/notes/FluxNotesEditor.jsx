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

    // onCurrentShortcutValuesUpdate = (currentShortcut) => {
    	// console.log("updating current shortcut values");
	// 	console.log("current shortcut from state");
	// 	console.log(this.state.state.currentShortcut);
	// }

	// componentDidUpdate = (prevProps, prevState) => {
	// 	console.log("[FluxNotesEditor] - component did update");
	// 	console.log(this.state.state.document);
	// }

    onChange = (state) => {
        // console.log("[FluxNotesEditor] - On change to editor");
        // console.log(this.state.state.selection.startKey)

        this.setState({
            state: state
        });
    }

    /*
     * Determines if the current state is a structured field type that needs checking.
     */
    isRelevantSelection = (state) => {
        const startBlockType = state.startBlock.type
    }

    isSelectionLinkageBroken = (selection) => {

    }

    onSelectionChange = (state) => {
        console.log(document.activeElement.parentElement.className === "sf-subfield");
        console.log(document.activeElement.parentElement);
        console.log(document.activeElement.parentElement.getAttribute('data-key'));

        // if (this.isRelevantSelection(state.startBlock.type)) {
        //     if (this.isSelectionLinkageBroken(state.selection)) {
        //         const
        //     } else {
        //         return state;
        //     }
        // } else {
        //     return state;
        // }


        // const currentElement = document.activeElement;
        // const currentElementSlateKey = currentElement.parentElement.getAttribute('data-key');
        // if(state.startBlock.type === opts.typeStructuredField) {
        //     // Look within nodes array for
        //     currentStructuredField = currentSubFieldFromStructuredField(state, opts)
        // } else if (state.startBlock.type === opts.typeSubfieldDropdown) {
        //     currentStructuredField = currentSubFieldFromDropdown(state, opts)
        // } else {
        //     // Do nothing -- return empty object;
        // }
    }

    onInsertStructuredField = () => {
        let { state } = this.state;

		let  result = this.structuredFieldPlugin.transforms.insertStructuredField(state.transform());

		//let sf = result[0].state.document.getDescendant(result[1]);
		//let sf_firstChild = sf.nodes.get(0).key;

		// set the current shortcut to be what was inserted
		// this.props.currentShortcut = new Shortcut


		// console.log("[onInsertStructuredField] result");
		// console.log(result[0]);
		// console.log(result);

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

	onCurrentShortcutValuesUpdate = (value) => {

		console.log("got value: " + value);

		if (value.startsWith("T")) {
			console.log("got a T value");
			this.handleStagingTUpdate(value);

		} else if (value.startsWith("N")) {
			console.log("got a N value");
			this.handleStagingNUpdate(value);
		} else if (value.startsWith("M")) {
			console.log("got a M value");
			this.handleStagingMUpdate(value);
		} else {
			console.log("Error: unexpected value selected in staging dropdown");
		}






		// this.handleStagingNUpdate(value);
        //
		// this.handleStagingMUpdate(value);


        //TODO: write handle update functions for N and M values
        //TODO: grab selected values from the drop downs and pass them into the update functions for T, N, M
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
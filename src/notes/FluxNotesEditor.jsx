import React from 'react';
import Slate from 'slate';
import StructuredFieldPlugin from './StructuredFieldPlugin.jsx'

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
            updateEditorState: this.onEditorUpdate
        });

        this.plugins = [
            this.structuredFieldPlugin
        ];
	}

    onEditorUpdate = (newState) => { 
        console.log(`This is where the editor update happens`);
        this.setState({
            state: newState
        });
    }

	componentDidUpdate = (prevProps, prevState) => {
		console.log("component did update");
		console.log(this.state.state.document);
	}

    onChange = (state) => {
        console.log("On change to editor");
        console.log(this.state.state.selection.startKey)
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

		console.log("[onInsertStructuredField] result");
		console.log(result[0]);
        console.log(result)

		// Attempt to delete remove structured field first child but this did not work. First child is the $#8202 unicode and for some reason
		// this gets added when structured field is created. When delete structured field, this character remains as part of the structured field
		// result[0].removeNodeByKey(sf_firstChild);

		let finalResult = result[0].apply();

        this.onChange(
			finalResult
        );

    }

    renderNormalToolbar = () => {
        return (
            <div>
                <button onClick={this.onInsertStructuredField}>Insert Shortcut</button>
            </div>
        );
    }

    render = () => {
        let { state } = this.state;
        console.log(`In Render of editor`)
        console.log(state.selection.startKey)
        // let isStructuredField = this.structuredFieldPlugin.utils.isSelectionInStructuredField(state);
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
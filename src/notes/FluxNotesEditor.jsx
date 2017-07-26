import React from 'react';
import Slate from 'slate';
import Lang from 'lodash'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Set } from 'immutable'

import './FluxNotesEditor.css';

const KEY_ENTER     = 'enter';
const KEY_TAB       = 'tab';
const KEY_BACKSPACE = 'backspace';
const KEY_DOWN      = 'down';
const KEY_UP        = 'up';
const KEY_LEFT		= 'left';
const KEY_RIGHT		= 'right';


// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Raw.deserialize(
	{     nodes: [
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
	]}, { terse: true });

const structuredFieldPlugin = StructuredField();

const plugins = [
	structuredFieldPlugin
];

const schema = {
    nodes: {
        paragraph:  props => <p {...props.attributes}>{props.children}</p>,
        heading:    props => <h1 {...props.attributes}>{props.children}</h1>
    },
	marks: {
		bold: (props) => <strong>{props.children}</strong>
	}
};


function onEnter(event, data, state, opts) {
	console.log('onEnter');
/*    event.preventDefault();

    return insertRow(opts, state.transform())
        .apply();*/
}

/**
 * Pressing "Tab" moves the cursor to the next cell
 * and select the whole text
 */
function onTab(event, data, state, opts) {
	console.log('onTab');
/*    event.preventDefault();
    const direction = (data.isShift ? -1 : +1);
    let transform = state.transform();

    // Create new row if needed
    const { startBlock } = state;
    const pos = TablePosition.create(state, startBlock);
    if (pos.isFirstCell() && direction === -1) {
        transform = insertRow(opts, transform, 0);
    } else if (pos.isLastCell() && direction === 1) {
        transform = insertRow(opts, transform);
    }

    // Move
    transform = moveSelectionBy(opts, transform, direction, 0);

    // Select all cell.
    return selectAllText(transform).apply();*/
}

function onBackspace(event, data, state, opts) {
	console.log('onBackspace');

    const { startBlock, startOffset,
        isCollapsed, endBlock } = state;
    //
    // // If a cursor is collapsed at the start of the block, do nothing
    // if (startOffset === 0 && isCollapsed) {
    //     event.preventDefault();
    //     return state;
    // }
    //
    // // If "normal" deletion, we continue
    // if (startBlock === endBlock) {
    //     return;
    // }
    //
    // // If cursor is between multiple blocks,
    // // we clear the content of the cells
    // event.preventDefault();
    //
    // const { blocks, focusBlock } = state;
    // const transform = blocks.reduce(
    //     (tr, block) => {
    //         if (block.type !== opts.typeCell) {
    //             return transform;
    //         }
    //
    //         const cellRange = Slate.Selection.create()
    //             .moveToRangeOf(block);
    //
    //         return tr.deleteAtRange(cellRange);
    //     },
    //     state.transform()
    // );
    //
    // // Clear selected cells
    // return transform
    //     .collapseToStartOf(focusBlock)
    //     .apply();

	console.log("[onBackspace] state] " + state);

	// const newState = state.transform()
	// 	.removeNodeByKey(state.blocks._tail.array[0].key)
	// 	.apply()
    //
	// return newState;

	const subfield = state.startBlock;

	let sf = null;

	if (subfield.type === opts.typeStructuredField) {
		sf = subfield;

		console.log("in structured field. sf: ");
		console.log(sf);
	} else {

		sf = state.document.getParent(subfield.key);

		console.log("not in structured field. sf: ");
		console.log(sf);
	}

	const newState = state.transform()
		// .moveToRangeOf(state.blocks._tail.array[0])
		.moveToRangeOf(sf)
		.delete()
		.apply()
	return newState;
}

function onLeftRight(event, data, state, opts) {
	console.log('onLeftRight');
}

function onUpDown(event, data, state, opts) {
	console.log('onUpDown');
/*
    const direction = data.key === 'up' ? -1 : +1;
    const pos = TablePosition.create(state, state.startBlock);

    if ((pos.isFirstRow() && direction === -1)
        || (pos.isLastRow() && direction === +1)) {
        // Let the default behavior move out of the table
        return state;

    } else {
        event.preventDefault();

        let transform = state.transform();
        transform = moveSelectionBy(
            opts, transform,
            0, data.key === 'up' ? -1 : +1
        );

        return transform.apply();
    }*/
}

function onTab(event, data, state, opts) {
    console.log('onTab');
}

function onShiftTab(event, data, state, opts) {
    console.log('onShiftTab');
}

function onF2(event, data, state, opts) {
    console.log('onF2');
}

function onShiftF2(event, data, state, opts) {
    console.log('onShiftF2');
}

function onCtrl(event, data, state, opts) {
    console.log('onCtrl');
}

function onShift(event, data, state, opts) {
    console.log('onShift');
}

function onCapsLock(event, data, state, opts) {
    console.log('onCapsLock');
}

function createSubfield_Dropdown(opts, spec) {
	return Slate.Block.create({
		type: opts.typeSubfieldDropdown,
		data: {
			value: spec.value,
			items: spec.items
		}
	});
}

function createSubfield_StaticText(opts, text) {
	return Slate.Inline.create({
		type: opts.typeSubfieldStaticText,
		data: {
			text: text
		},
		isVoid: true
	});
}

/**
 * Create a structured field
 *
 * @param {Slate.State} state
 * @param {Object} opts
 * @param {String} type
 * @return {State.Block}
 */
function createStructuredField(opts, type) {
	const shortcut = {tumorSize: null, nodeSize: null, metastasis: null};
    const nodes = [
		createSubfield_StaticText(opts, '#staging['),
		createSubfield_Dropdown(opts, { items: ['T0', 'T1', 'T2', 'T3'], value: shortcut.tumorSize }),
		createSubfield_Dropdown(opts, { items: ['N0', 'N1', 'N2', 'N3'], value: shortcut.nodeSize }),
		createSubfield_Dropdown(opts, { items: ['M0', 'M1'], value: shortcut.metastasis}),
		createSubfield_StaticText(opts, ']')
	];

    let sf = Slate.Block.create({
        type:  opts.typeStructuredField,
        nodes: nodes,
        data: {
            shortcut
        }
    });

	// console.log("sf size: " + sf.nodes.size);
	// // delete first
	// sf.nodes = sf.nodes.delete(0).delete(sf.nodes.size -1);
    //
	// console.log("sf size: " + sf.nodes.size);

	return sf;
}

/*function createParagraphBlock() {
    return Slate.Block.create({
        type:  'paragraph'
    });
}*/

function createInlineBlock(text = '') {
	let nodes = [];
	if (text.length > 0) {
		console.log("got text");
		nodes.push(Slate.Text.create( { "characters": [ Slate.Character.create( {marks: Set() , text: text } ) ] } ));
	}
	return Slate.Block.create({
		type: 'inline',
		nodes: nodes
	});
}

/**
 * Insert a new structured field
 *
 * @param {Object} opts
 * @param {Slate.Transform} transform
 * @return {Slate.Transform}
 */
function insertStructuredField(opts, transform) {
    const { state } = transform;
	//console.log("insertStructuredField: " + state.selection.startKey);
    if (!state.selection.startKey) return false;

    // Create the structured-field node
    const sf = createStructuredField(opts, 'staging');

	console.log("[insertStructuredField] sf");
	console.log(sf);

	if (sf.kind === 'block') {
		return [transform.insertBlock(sf), sf.key];
	} else {
		return [transform.insertInline(sf), sf.key];
	}
}

function StructuredField(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
    opts.typeSubfieldDropdown = opts.typeSubfieldDropdown || 'sf_subfield_dropdown';
	opts.typeSubfieldStaticText = opts.typeSubfieldStaticText || 'sf_subfield_statictext';

    /**
     * Is the selection in a structured field
     */
    function isSelectionInStructuredField(state) {
		//console.log(state.selection.startKey);
        if (!state.selection.startKey) return false;

        const { startBlock } = state;

        // Only handle events in cells
		//console.log(startBlock.type + " ?= " + opts.typeSubfieldDropdown + " ?= " + opts.typeStructuredField);
        return (startBlock.type === opts.typeSubfieldDropdown || startBlock.type === opts.typeSubfieldStaticText || startBlock.type === opts.typeStructuredField); // return true;
		//const parent = state.document.getParent(startBlock.key);
		//console.log("parent = " + parent);
		//return (!Lang.isNull(parent) && parent.type === opts.typeStructuredField);
    }

	function onKeyDown(event, data, state) {
        // Only handle events in cells
        if (!isSelectionInStructuredField(state)) {
			if (data.key === KEY_ENTER) {
				const newState = state
					.transform()
					.insertText('\n')
					.apply();
				console.log('not in structured field and ENTER');
				return newState;
			}
			console.log("not in structured field (" + state.startBlock.type + ") and not ENTER");
            return;
        }

        // Build arguments list
        const args = [
            event, data, state,
            opts
        ];

        switch (data.key) {
        case KEY_ENTER:
            return onEnter(...args);
        case KEY_TAB:
            return onTab(...args);
        case KEY_BACKSPACE:
            return onBackspace(...args);
        case KEY_DOWN:
        case KEY_UP:
            return onUpDown(...args);
		case KEY_LEFT:
		case KEY_RIGHT:
			return onLeftRight(...args);
		default:
			//let chr = String.fromCharCode((96 <= data.code) ? (data.code - 48 * Math.floor(data.code / 48)) : data.code);
			//console.log("onKeyDown: " + data.key + " / " + chr);
			console.log(data);
			//console.log(state.selection);
			event.preventDefault();
			const subfield = state.startBlock;
			//console.log(subfield.type + " => " + subfield.key);
			//console.log(state.selection.type + " => " + state.selection.key);
			let sf = null;
			if (subfield.type === opts.typeStructuredField) {
				sf = subfield;

				console.log("in structured field. sf: " + sf);
			} else {
				//console.log("subfield key = " + subfield.key);


				sf = state.document.getParent(subfield.key);

				console.log("not in structured field. sf: " + sf);

				//console.log("subfield parent: " + sf);
				//console.log(sf.type + " --> key=" + sf.key);
			}
			let nextSibling = state.document.getNextSibling(sf.key);
			//console.log("nextSibling = " + nextSibling);
			if (Lang.isUndefined(nextSibling)) {
				nextSibling = createInlineBlock(data.key);
				console.log(nextSibling + " insert at " + state.document.nodes.size);
				const newState = state
					.transform()
					//.collapseToEndOf(state.document)
					.insertNodeByKey(state.document.key, state.document.nodes.size, nextSibling)
					//.insertNodeByKey(sf.key, sf.nodes.size, nextSibling)
					//.insertBlock(nextSibling)
					.collapseToEndOf(nextSibling).focus()
					.apply();
				//newState = newState.transform().collapseToEndOf(nextSibling).focus().apply();
				return newState;
			} else {
				// TODO
				// insertTextAtRange
				if ((data.code > 47 && data.code < 58)   || // number keys
					data.code === 32 || data.code === 13   || // spacebar & return key(s) (if you want to allow carriage returns)
					(data.code > 64 && data.code < 91)   || // letter keys
					(data.code > 95 && data.code < 112)  || // numpad keys
					(data.code > 185 && data.code < 193) || // ;=,-./` (in order)
					(data.code > 218 && data.code < 223)) {
					const newState = state
						.transform()
						.collapseToStartOf(nextSibling).focus()
						.insertText(String.fromCharCode(data.code))
						.apply();
					console.log('found next sibling and inserted text at start of it');
					return newState;
				} else {
					return;
				}
			}
			
			//return;
        }
		
	}

	const schema = {
		nodes: {
			structured_field:      props => {
				//let starttext = props.node.get('data').get('startText') || '';
				//let endtext = props.node.get('data').get('endText') || '';
				//return <span className='structured-field' {...props.attributes}>{starttext}{props.children}{endtext}</span>;
				return <span className='structured-field' {...props.attributes}>{props.children}</span>;
			},
			sf_subfield_statictext:  props => {
				let text = props.node.get('data').get('text') || '';

				return <span className='sf_subfield_statictext' {...props.attributes}>{text}</span>; //props.children
			},
			sf_subfield_dropdown:    props => {
				//console.log(props);
				let items = props.node.get('data').get('items');
				//let value = props.node.get('data').get('value');
				return (
					<span className='sf-subfield' {...props.attributes}><select>
						{items.map(function(item, index) {
							return <option key={item} value={item}>{item}</option>;
						})}</select></span>
					);
			},
			sf_subfield_dropdown2:    props => {
				//console.log(props);
				let items = props.node.get('data').get('items');
				let value = props.node.get('data').get('value');
				return (
					<span className='sf-subfield' {...props.attributes}><DropDownMenu value={value} onChange={(event, index, value) => value={value}} >
						{items.map(function(item, index) {
							return <MenuItem key={item} value={item} primaryText={item}/>
						})}</DropDownMenu></span>
					);
			}
		},
		rules: [
			{
				match: (node) => {
					return node.kind === 'block' && node.type === 'inline'
				},
				render: (props) => {
					return (
						<span {...props.attributes} style={{ position: 'relative' }}>
							{props.children}
						</span>
					);
				}
			}
		]
	};
	    
	return {
        onKeyDown,

        schema,

        utils: {
            isSelectionInStructuredField
        },

        transforms: {
            insertStructuredField:     insertStructuredField.bind(null, opts)
        }
    };
}

class FluxNotesEditor extends React.Component {
	constructor(props) {
		super(props);
	
		// Set the initial state when the app is first constructed.
		this.state = {
			state: initialState //Slate.Raw.deserialize(stateJson, { terse: true })
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		console.log("component did update");
		console.log(this.state.state.document);
	}

    onChange = (state) => {
        this.setState({
            state: state
        });
    }
	
    onInsertStructuredField = () => {
        let { state } = this.state;

		let  result = structuredFieldPlugin.transforms.insertStructuredField(state.transform());

		//let sf = result[0].state.document.getDescendant(result[1]);

		//let sf_firstChild = sf.nodes.get(0).key;

		console.log("[onInsertStructuredField] result");
		console.log(result[0]);

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
        //let isStructuredField = structuredFieldPlugin.utils.isSelectionInStructuredField(state);

                //{isTable? this.renderTableToolbar() : this.renderNormalToolbar()}
        return (
            <div id="fluxnoteseditor">
				{this.renderNormalToolbar()}
                <Slate.Editor
                    placeholder={'Enter your clinical note here or choose a template to start from...'}
                    plugins={plugins}
                    state={state}
                    onChange={this.onChange}
                    schema={schema}
                />
            </div>
        );
    }
}

export default FluxNotesEditor;
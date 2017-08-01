import React from 'react';
import Slate from 'slate';
import Lang from 'lodash'
import DropdownStructuredComponent from '../structuredfieldcomponents/DropdownStructuredComponent';

const KEY_F2		= 'f2';
const KEY_ENTER     = 'enter';
const KEY_TAB       = 'tab';
const KEY_BACKSPACE = 'backspace';
const KEY_DOWN      = 'down';
const KEY_UP        = 'up';
const KEY_LEFT		= 'left';
const KEY_RIGHT		= 'right';

function createOpts(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
    opts.typeSubfieldDropdown = opts.typeSubfieldDropdown || 'sf_subfield_dropdown';
	opts.typeSubfieldStaticText = opts.typeSubfieldStaticText || 'sf_subfield_statictext';
	return opts;
}

function StructuredFieldPlugin(opts) {
	opts = createOpts(opts);
    /**
     * Is the selection in a structured field
     */
    function isSelectionInStructuredField(state) {
        if (!state.selection.startKey) return false;
        const { startBlock } = state;
        return (startBlock.type === opts.typeSubfieldDropdown || startBlock.type === opts.typeSubfieldStaticText || startBlock.type === opts.typeStructuredField); // return true;
    }

	function onKeyDown(event, data, state, editor) {
        // Only handle events in cells
        if (!isSelectionInStructuredField(state)) {
			if (data.key === KEY_ENTER) {
				const newState = state
					.transform()
					.insertText('\n')
					.apply();
				return newState;
			}
            return;
        }
		if (data.key === 'shift' || data.key === 'alt' || data.key === 'ctrl' || data.key === 'caps lock' || data.key === 'f3') {
			const subfield = state.startBlock;
			console.log(subfield.type + " => " + subfield.key);
			console.log("key code = " + data.code + " / key = " + data.key);
			return;
		}

        // Build arguments list
        const args = [
            event, data, state,
            opts, editor
        ];

        switch (data.key) {
		case KEY_F2:
			return onTab(...args);
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
			const subfield = state.startBlock;
			console.log(subfield.type + " => " + subfield.key);
			let sf = null;
			if (subfield.type === opts.typeStructuredField) {
				sf = subfield;
				//console.log("in structured field. sf: " + sf);
			} else {
				sf = state.document.getParent(subfield.key);
				//console.log("not in structured field. sf: " + sf);
			}
			if ((data.code > 47 && data.code < 58)   || // number keys
				data.code === 32 || data.code === 13   || // spacebar & return key(s) (if you want to allow carriage returns)
				(data.code > 64 && data.code < 91)   || // letter keys
				(data.code > 95 && data.code < 112)  || // numpad keys
				(data.code > 185 && data.code < 193) || // ;=,-./` (in order)
				(data.code > 218 && data.code < 223))
			{
				event.preventDefault();
				let nextSibling = state.document.getNextSibling(sf.key);
				if (Lang.isUndefined(nextSibling)) {
					nextSibling = createInlineBlock(String.fromCharCode(data.code));
					//console.log(nextSibling + " insert at " + state.document.nodes.size);
					const newState = state
						.transform()
						.insertNodeByKey(state.document.key, state.document.nodes.size, nextSibling)
						.collapseToEndOf(nextSibling).focus()
						.apply();
					return newState;
				} else {
					const newState = state
						.transform()
						.collapseToStartOf(nextSibling).focus()
						.insertText(String.fromCharCode(data.code)) //String.fromCharCode(data.code))
						.apply();
					//console.log('found next sibling and inserted text at start of it');
					return newState;
				}
			}
        }
	}

    function onDropdownFocus(proxy, event)  {
		const state = this.getState(); // this is bound to editor. binding to state made it always have old state
        // Get Slate Key of parent element
        const dropdownKey = proxy.target.parentElement.getAttribute('data-key');
        // If current selection is not identical, make it so
        if (dropdownKey !== state.selection.startKey) { 
            /*console.log(`Update slate selection to match HTML focus as they are not the same right now`)
			console.log(state);
            console.log(`HTML focused component key: ${dropdownKey}`)
            console.log(`Slate Selection start key: ${state.selection.startKey}`)*/
            const dropdownNode = state.document.getDescendant(dropdownKey);
            /*console.log(`DropdownNode:`);
            console.log(dropdownNode);*/

            const newState = state.transform().moveToRangeOf(dropdownNode).apply();
            //console.log(`New startKey: ${newState.selection.startKey}`);
            opts.updateEditorState(newState);
        //} else { 
            //console.log(`No need to update state -- selections are in sync`)
            //console.log(state)
        }
    }
	
	const schema = {
		nodes: {
			structured_field:      props => {
				return <span className='structured-field' {...props.attributes}>{props.children}</span>;
			},
			sf_subfield_statictext:  props => {
				let text = props.node.get('data').get('text') || '';
				return <span className='sf_subfield_statictext' {...props.attributes}>{text}</span>; //props.children
			},
			sf_subfield_dropdown:    props => {
				let items = props.node.get('data').get('items');
				//let value = props.node.get('data').get('value');
				return (
					<DropdownStructuredComponent
						handleDropdownFocus={onDropdownFocus.bind(props.editor)}
						else={props.attributes}
						items={items}
					/> 
				);
			},
		},
		rules: [
			{
				match: (node) => {
					return node.kind === 'block' && node.type === 'inline'
				},
				render: (props) => {
					return (
						<span {...props.attributes} style={{ position: 'relative', width:'100%', height:'100%'}}>
							{props.children}
							{props.editor.props.placeholder
								? <Slate.Placeholder
									className={props.editor.props.placeholderClassName}
									node={props.node}
									parent={props.state.document}
									state={props.state}
									style={{position: 'relative',top:'-18px',width:'100%', height:'100%',opacity:'0.333',...props.editor.props.placeholderStyle}}
								  >{props.editor.props.placeholder}
								  </Slate.Placeholder>
								: null}
						</span>
					);
				}
			}
		]
	};
	/*  style for placeholder assumes an 18pt font due to the rendering of a <BR> for an empty text node. Placeholder
		positioning needs to go up 1 line to overlap with that BR so user can click on placeholder message and get
		a cursor. see style top value of -18px  */
	    
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

/**
 * Pressing "Tab" moves the cursor to the next cell
 * and select the whole text
 */
function onTab(event, data, state, opts, editor) {
	console.log('*******************************************************8onTab');
	event.preventDefault();
	const { startBlock } = state;
    console.log("startBlock. type=" + startBlock.type + " / key=" + startBlock.key);
    const direction = (data.isShift ? -1 : +1);
	return moveField(state, opts, direction);
}

function onBackspace(event, data, state, opts) {
	//console.log('onBackspace');
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
	}

	const newState = state.transform()
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

function onEnter(event, data, state, opts) {
	console.log('onEnter');
/*    event.preventDefault();

    return insertRow(opts, state.transform())
        .apply();*/
}

function moveField(state, opts, fieldDelta) {
	let transform = state.transform();
	const { startBlock } = state;
	let block = startBlock;
	//console.log("start block type: " + block.type);
	let i = 0;
	if (fieldDelta > 0) {
		for (i = 0; i < fieldDelta; i++) {
			do {
				block = state.document.getNextSibling(block.key);
				//console.log(block);
			} while (!Lang.isUndefined(block) && block.kind !== 'text' && block.type !== opts.typeSubfieldDropdown);
			if (Lang.isUndefined(block)) {
				let parent = state.document.getParent(startBlock.key);
				block = state.document.getNextSibling(parent.key);
				if (block.kind !== 'text') {
					block = block.nodes[0];
				}
			}
		}
	} else if (fieldDelta < 0) {
		let delta = fieldDelta * -1;
		for (i = 0; i < delta; i++) {
			do {
				block = state.document.getPreviousSibling(block.key);
				//console.log("block: " + block);
				if (block.kind === 'inline' && block.isVoid) {
					// after an inline void, always skip the next one
					block = state.document.getPreviousSibling(block.key);
					block = state.document.getPreviousSibling(block.key);
					//console.log("skipped due to inline void. block: " + block);
				}
			} while (!Lang.isUndefined(block) && block.kind !== 'text' && block.type !== opts.typeSubfieldDropdown);
			if (Lang.isUndefined(block)) {
				let parent = state.document.getParent(startBlock.key);
				block = state.document.getPreviousSibling(parent.key);
				//console.log("left structured field. selection in:")
				//console.log(block);
			}
		}
	}
	//console.log("new selection:");
	//console.log(block);
	if (block.kind !== 'text') console.log("block type: " + block.type);
	//console.log("block key: " + block.key);
	if (fieldDelta < 0) {
		return transform.collapseToEndOf(block).focus().apply();
	} else {
		return transform.collapseToStartOf(block).focus().apply();
	}
}

function createInlineBlock(text = '') {
	let nodes = [];
	if (text.length > 0) {
		console.log("got text");
		nodes.push(Slate.Text.createFromString(text));
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

	//console.log("[insertStructuredField] sf");
	//console.log(sf);

	if (sf.kind === 'block') {
		return [transform.insertBlock(sf), sf.key];
	} else {
		return [transform.insertInline(sf), sf.key];
	}
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

	return sf;
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

export default StructuredFieldPlugin
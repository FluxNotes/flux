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
        //return (startBlock.type === opts.typeSubfieldDropdown || startBlock.type === opts.typeSubfieldStaticText || startBlock.type === opts.typeStructuredField); // return true;
		return (startBlock.type === opts.typeSubfieldDropdown);
    }

	function onKeyDown(event, data, state, editor) {
        if (!isSelectionInStructuredField(state)) {
			switch (data.key) {
				case KEY_ENTER:
					return onOutsideStructuredFieldDropDownEnter(event, data, state, editor, opts);
				case KEY_TAB:
					return onOutsideStructuredFieldDropDownTab(event, data, state, editor, opts);
				case KEY_LEFT:
				case KEY_RIGHT:
					return onOutsideStructuredFieldDropDownLeftRight(event, data, state, editor, opts);
				default:
					return;
			}
        }

        // Build arguments list
        const args = [
            event, data, state,
            opts, editor
        ];

        switch (data.key) {
		case KEY_F2:
			return onF2(...args);
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
			return;
        }
	}

	// This function assumes data-key is on the parentElement or passed in. 
	// If it is not, define your own onDropdownFocus() that locates data-key first before calling this function
    function onDropdownFocus(proxy, event, dataKey = undefined)  {
		//console.log("onDropDownFocus START");
		const state = this.getState(); // this is bound to editor. binding to state made it always have old state
		//console.log(state.selection);
        // Get Slate Key of parent element
		let dropdownKey;
		if(Lang.isUndefined(dataKey)) {
			dropdownKey = proxy.target.parentElement.getAttribute('data-key');
		} else {
			dropdownKey = dataKey;
		}
		const selectedNode = state.document.getParent(state.selection.startKey);
        // If current selection is not identical, make it so
        if (dropdownKey !== selectedNode.key) {  // state.selection.startKey
            ////console.log(`oddf: Drop down focus changed. Update slate selection to match`);
			//console.log(state);
            //console.log(`oddf: HTML focused component key: ${dropdownKey}`);
            //console.log(`oddf: Slate Selection start key : ${state.selection.startKey}`);
			//console.log(`oddf: Selected Node  key        : ${selectedNode.key}`);
            const dropdownNode = state.document.getDescendant(dropdownKey);
            /*console.log(`oddf: DropdownNode:`);
            console.log(dropdownNode);*/

            //const newState = state.transform().moveToRangeOf(dropdownNode).apply();
			const newState = state.transform().collapseToStartOf(dropdownNode).apply();
            ////console.log(`oddf: New startKey: ${newState.selection.startKey}`);
            opts.updateEditorState(newState);
			//console.log("onDropDownFocus DONE (state change)");
        } else { 
			//console.log("onDropDownFocus DONE (no state change)");
        }
    }

	// With the react-select dropdowns, the selected item is e, no longer e.target.value
    function onDropdownSelection(name, e) {
        // console.log("[onDropdownSelection] - hit function");
        // console.log("selected value");
		//console.log(name);

        // Pass selected value to FluxNotesEditor
        opts.updateCurrentShortcutValues(name, e);
        //console.log("!!!!!! selected value: ");
		//console.log(e.target.value);
    }

	let components = {};
	
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
				let name = props.node.get('data').get('name');
				let value = props.node.get('data').get('value');
				let shortcut = props.node.get('data').get('shortcut');
				let ddComponent = (
					<DropdownStructuredComponent
						name={name}
						ref={(c) => { components[name] = c; }}
						handleDropdownFocus={onDropdownFocus.bind(props.editor)}
                        handleDropdownSelection={onDropdownSelection.bind(props.state)}
						else={props.attributes}
						items={items}
						value={value}
					/> 
				);
				shortcut.onValueChange(name, (newValue) => {
					//console.log("new value for " + name + " is " + newValue);
					components[name].setValue(newValue);
				});
				return ddComponent;
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
		onBeforeInput,
        onKeyDown,
        schema,
        utils: {
            isSelectionInStructuredField
        },

        transforms: {
            insertStructuredField:     	insertStructuredField.bind(null, opts),
			onSelectionChange:			onSelectionChange.bind(null, opts)
        }
    };
}

function onOutsideStructuredFieldDropDownTab(event, data, state, editor, opts) {
	//console.log("onOutsideStructuredFieldDropDownTab START.");
	const { startKey } = state;
	//console.log("start offset = " + startOffset);
	const selectedNode = state.document.getDescendant(startKey);
	if (selectedNode.kind === 'text') {
		const parentNode = state.document.getParent(startKey);
		const nextNode = state.document.getNextSibling(parentNode.key);
		if (!Lang.isUndefined(nextNode)) {
			//console.log(selectedNode);
			//console.log(nextNode);
			//console.log(parentNode);
			if (nextNode.kind === 'inline') return;
			if (nextNode.kind === 'block' && nextNode.type === 'structured_field') {
				let node = nextNode.nodes.get(0);
				//console.log("structured field is nextNode");
				//console.log(node);
				while (node.kind !== 'block' && node.type !== opts.typeSubfieldDropdown) {
					node = state.document.getNextSibling(node.key);
				}
				event.preventDefault();
				//console.log("oosfddt: key of node to select: " + node.key);
				//console.log(node);
				const newState = state
					.transform()
					.collapseToStartOf(node)
					.apply();
				//console.log("onOutsideStructuredFieldDropDownTab DONE (state changed).");
				return newState;
			}
		}
	}
	//console.log("onOutsideStructuredFieldDropDownTab DONE (state not changed).");
}

function onOutsideStructuredFieldDropDownEnter(event, data, state, editor, opts) {
	//console.log("structuredFieldPlugin.onOutsideStructuredFieldDropDownEnter");
	const newState = state
		.transform()
		.insertText('\n')
		.apply();
	return newState;
}

function onOutsideStructuredFieldDropDownLeftRight(event, data, state, editor, opts) {
	// console.log("onOutsideStructuredFieldDropDownLeftRight START.");
	const { startKey } = state;
	const { startOffset } = state;
	// console.log("start offset = " + startOffset);
	// console.log("start key = " + startKey);
	const selectedNode = state.document.getDescendant(startKey);

	if (selectedNode.kind === 'text') {
		const offset = (data.key === "left") ? 0 : selectedNode.text.length;
		if (offset === startOffset) { 
			const parentNode = state.document.getParent(startKey);
			const nextNodeToCheck = (data.key === "left") ? state.document.getPreviousSibling(parentNode.key) : state.document.getNextSibling(parentNode.key);
			if (!Lang.isUndefined(nextNodeToCheck)) {
				if (nextNodeToCheck.kind === 'inline') return
				if (nextNodeToCheck.kind === 'block' && nextNodeToCheck.type === 'structured_field') {
					let node = nextNodeToCheck.nodes.get(0);
					// console.log("structured field is nextNodeToCheck");
					// console.log(node);
					while (node.kind !== 'block' && node.type !== opts.typeSubfieldDropdown) {
						node = (data.key === "left") ? state.document.getPreviousSibling(parentNode.key) : state.document.getNextSibling(parentNode.key);;
					}
					event.preventDefault();
					// console.log(node);
					const newState = state
						.transform()
						.collapseToStartOf(node)
						.apply();
					// console.log("onOutsideStructuredFieldDropDownLeftRight DONE (state changed).");
					return newState;
				}
			}
		}
	}
} 

/**
 * Pressing "Tab" moves the cursor to the next cell
 * and select the whole text
 */
function onTab(event, data, state, opts, editor) {
	//console.log('onTab START');
	event.preventDefault();
	//const { startBlock } = state;
    //console.log("startBlock. type=" + startBlock.type + " / key=" + startBlock.key);
    const direction = (data.isShift ? -1 : +1);
	let result = moveField(state, opts, direction);
	//console.log('onTab DONE (state change via moveField)');
	return result;
}

/* 
 * Pressing "F2" does the same thing as Tab
 */
 function onF2(event, data, state, opts, editor) { 
 	return onTab(event, data, state, opts, editor);
 }

function onBackspace(event, data, state, opts) {
	//console.log('onBackspace START');
	//console.log("[onBackspace] state] " + state);

	// const newState = state.transform()
	// 	.removeNodeByKey(state.blocks._tail.array[0].key)
	// 	.apply()
    //
	// return newState;

	const subfield = state.startBlock;

	let sf = null;

	if (subfield.type === opts.typeStructuredField) {
		sf = subfield;

		//console.log("in structured field. sf: ");
		//console.log(sf);
	} else {
		sf = state.document.getParent(subfield.key);
	}

	const newState = state.transform()
		.moveToRangeOf(sf)
		.delete()
		.apply()
	//console.log('onBackspace DONE (state change)');
	return newState;
}


function onLeftRight(event, data, state, opts) {
	console.log('onLeftRight START');
	const direction = data.key === 'left' ? -1 : +1;
	event.preventDefault();
	let result = moveField(state, opts, direction);
	console.log('onLeftRight DONE (state change via moveField)');
	return result;
}

function onUpDown(event, data, state, opts) {

}


function onEnter(event, data, state, opts) {
	event.preventDefault();
	let result = moveField(state, opts, 1);
	return result;
}

function moveField(state, opts, fieldDelta) {
	// console.log("moveField START");
	let transform = state.transform();
	const { startBlock } = state;
	let block = startBlock;
	// console.log("start block type: " + block.type);
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
				console.log("block: " + block);
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
				// console.log("left structured field. selection in:")
				// console.log(block);
			}
		}
	}
	//console.log("new selection:");
	//console.log(block);
	//if (block.kind !== 'text') console.log("block type: " + block.type);
	//console.log("mf: select block key: " + block.key);
	let result;
	if (fieldDelta < 0) {
		result = transform.collapseToEndOf(block).focus().apply();
	} else {
		result = transform.collapseToStartOf(block).focus().apply();
	}
	//console.log("moveField DONE (state change)");
	return result;
}

function createInlineBlock(text = '') {
	let nodes = [];
	if (text.length > 0) {
		//console.log("Create inline block with text=" + text);
		nodes.push(Slate.Text.createFromString(text));
	}
	return Slate.Block.create({
		type: 'inline',
		nodes: nodes
	});
}

function onBeforeInput(event, data, state, editor) {
	////console.log("onBeforeInput START");
	const { selection } = state;
	const node = state.document.getDescendant(selection.startKey);
	//console.log(selection);
	const parentNode = state.document.getParent(selection.startKey);
	if (parentNode.type === "sf_subfield_statictext" || parentNode.type === "structured_field") {
		//console.log("bad selection?");
		//console.log(parentNode.type);
		//console.log(node.kind);
		//console.log(state.document);
		const previousSiblingNode = state.document.getPreviousSibling(selection.startKey);
		//console.log(previousSiblingNode);
		if (!Lang.isUndefined(previousSiblingNode) && previousSiblingNode.kind === 'inline' && previousSiblingNode.isVoid && node.kind === 'text') {
			////console.log("bad selection will be fixed in onBeforeInput");
			event.preventDefault();
			let sf = parentNode;
			let nextSibling = state.document.getNextSibling(sf.key);
			if (Lang.isUndefined(nextSibling)) {
				nextSibling = createInlineBlock("");
				const newState = state
					.transform()
					.insertNodeByKey(state.document.key, state.document.nodes.size, nextSibling)
					.collapseToEndOf(nextSibling).focus()
					.insertText(event.data)
					.apply();
				////console.log("onBeforeInput DONE (with state change)");
				return newState;
			} else {
				const newState = state
					.transform()
					.collapseToStartOf(nextSibling).focus()
					.insertText(event.data)
					.apply();
				////console.log("onBeforeInput DONE (with state change)");
				return newState;
			}
		}
	}
	////console.log("onBeforeInput DONE (NO state change)");
}

function isRelevantSelection(node) { 
	//console.log(node.kind);
	const startBlockType = node.type;
	//return !Lang.isUndefined(structuredFieldTypes.find((type) => type.value === startBlockType));
	return startBlockType === 'sf_subfield_dropdown';
}   

function isSelectionLinkageBroken(selection, parentKey) {
	const dropdownKey = document.activeElement.parentElement.getAttribute('data-key');
	// If current selection is not identical, make it so
	//console.log("osc: key from html dropdown =" + dropdownKey);
	//console.log("osc: slate selected node key=" + selection.startKey);
	//console.log("osc: slate node parent key  =" + parentKey);
	return (dropdownKey !== parentKey);
}

function onSelectionChange(opts, selection, state) {
	let result = false;
	//const num = new Date().getTime();
	//console.log("onSelectionChange START " + num);
	//const node = state.document.getDescendant(selection.startKey);
	//console.log("osc: selection.startKey=" + selection.startKey + " " + num);
	//console.log(selection);
	//console.log(state.selection);
	//console.log(state);
	const parentNode = state.document.getParent(selection.startKey);
	if (isRelevantSelection(parentNode)) { 
		////console.log("osc: within structured field");
		if (isSelectionLinkageBroken(selection, parentNode.key)) {
			////console.log("osc: Slate Selection change. html focus out of sync. fixing. " + num);
			/*console.log(selection.startKey);
			console.log("osc: block with focus currently = " + node.key);
			//console.log(node);
			console.log("osc: block whose corresponding component will get focus: " + parentNode.key);
			//console.log(parentNode);
			console.log("osc: " + parentNode.type);*/
			if (parentNode.type === "sf_subfield_dropdown") {
				//console.log("osc: focus html component " + num);
				//console.log(parentNode);
				const domElement = Slate.findDOMNode(parentNode);
				////console.log(domElement.childNodes[0]);
				domElement.childNodes[0].focus();
				result = true;
			}
		}
		const structuredFieldNode = state.document.getParent(parentNode.key);
		let shortcut = structuredFieldNode.get('data').get('shortcut');
		opts.changeCurrentShortcut(shortcut);
	} else {
		opts.changeCurrentShortcut(null);
	}
	//console.log("onSelectionChange DONE " + num);
	return result;
}

/**
 * Insert a new structured field
 *
 * @param {Object} opts
 * @param {Slate.Transform} transform
 * @return {Slate.Transform}
 */
function insertStructuredField(opts, transform, shortcut) {
    const { state } = transform;
	//console.log("insertStructuredField: " + state.selection.startKey);
    if (!state.selection.startKey) return false;

    // Create the structured-field node
    const sf = createStructuredField(opts, shortcut);

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
 * @param {Object} shortcut
 * @return {State.Block}
 */
function createStructuredField(opts, shortcut) {
	const nodeSpecs = shortcut.getStructuredFieldSpecification();
	let nodes = nodeSpecs.map((spec, index) => {
		if (spec.type === 'staticText') {
			return createSubfield_StaticText(opts, spec.spec.text);
		} else if (spec.type === 'dropDown') {
			return createSubfield_Dropdown(opts, spec.spec, shortcut);
		} else {
			throw new Error("Unsupported type in structured field spec: " + spec.type);
		}
	});

    let sf = Slate.Block.create({
        type:  opts.typeStructuredField,
        nodes: nodes,
		data: {
			shortcut: shortcut
		}
    });

	return sf;
}

function createSubfield_Dropdown(opts, spec, shortcut) {
	const value = shortcut.getValue(spec.name);
	return Slate.Block.create({
		type: opts.typeSubfieldDropdown,
		data: {
			value: value,
			items: spec.items,
			name: spec.name,
			shortcut: shortcut
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
import React from 'react';
import Slate from 'slate';
import Lang from 'lodash'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DropdownStructuredComponent from './../structuredFieldComponents/DropdownStructuredComponent'
import { Set } from 'immutable'

const KEY_ENTER     = 'enter';
const KEY_TAB       = 'tab';
const KEY_BACKSPACE = 'backspace';
const KEY_DOWN      = 'down';
const KEY_UP        = 'up';
const KEY_LEFT      = 'left';
const KEY_RIGHT     = 'right';
const KEY_F2        = 'f2';
const KEY_TEST      = 'end';

function findNextSubField(state, opts) { 
    console.log("In findNextSubField");
    console.log(state)
    console.log(state.blocks.get(0).nodes.forEach((n) => console.log(n)))
    const nextSFSubField = nextSubField(state, opts);
    if (!Lang.isEmpty(nextSFSubField)) {
        const newState = state.transform().moveToRangeOf(nextSFSubField).apply();
        return newState
    } else { 
        return state
    }
}

function nextSubField(state, opts) { 
    const currentStructuredField  = state.startBlock.type === opts.typeStructuredField ? state.startBlock : {};
    const curSFSubField = currentSubField(state, opts)

    // Logging
    console.log(curSFSubField.key)
    currentStructuredField.nodes.map((n) => console.log(n.key > curSFSubField.key));
    const nextSFSubField = currentStructuredField.nodes.find((n) => n.type === opts.typeSubfieldDropdown && n.key > curSFSubField.key);
    console.log(nextSFSubField);
    return nextSFSubField;
}

function currentSubField(state, opts) { 
    // start off empty
    let currentStructuredField = {};
    if(state.startBlock.type === opts.typeStructuredField) { 
        // Look within nodes array for 
        currentStructuredField = currentSubFieldFromStructuredField(state, opts)
    } else if (state.startBlock.type === opts.typeSubfieldDropdown) {
        currentStructuredField = currentSubFieldFromDropdown(state, opts)
    } else { 
        // Do nothing -- return empty object;
    }
    return currentStructuredField;
}

function currentSubFieldFromDropdown(state, opts) { 
    // console.log('Current block is a dropdown element -- looking at parent');
    // console.log(state.startBlock);
}

function currentSubFieldFromStructuredField(state, opts) { 
    state.startBlock.nodes.map((n) => console.log(n.key === document.activeElement.parentElement.getAttribute('data-key')));
    return state.startBlock.nodes.find((n) => n.key === document.activeElement.parentElement.getAttribute('data-key'));
}

function previousSubField(state, opts) { 
    const currentStructuredField  = state.startBlock.type === opts.typeStructuredField ? state.startBlock : {};
    const curSFSubField = currentSubField(state, opts)
    // Logging
    currentStructuredField.nodes.map((n) => console.log(n.key < curSFSubField.key));
    const prevSFSubFields = currentStructuredField.nodes.find((n) => n.type === opts.typeSubfieldDropdown && n.key < curSFSubField.key);
    console.log(prevSFSubFields);
    return prevSFSubFields;
}

function onEnter(event, data, state, opts) {
	console.log('onEnter');
}

/**
 * Pressing "Tab" moves the cursor to 
 */
function onTab(event, data, state, opts) {
	console.log('onTab');
}

function onBackspace(event, data, state, opts) {
	console.log('onBackspace');
	// console.log("[onBackspace] state] " + state);

	// const newState = state.transform()
	// 	.removeNodeByKey(state.blocks._tail.array[0].key)
	// 	.apply()
    //
	// return newState;

	const subfield = state.startBlock;

	let sf = null;

	if (subfield.type === opts.typeStructuredField) {
		sf = subfield;
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
	return sf;
}

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

	if (sf.kind === 'block') {
		return [transform.insertBlock(sf), sf.key];
	} else {
		return [transform.insertInline(sf), sf.key];
	}
}

function StructuredFieldPlugin(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
    opts.typeSubfieldDropdown = opts.typeSubfieldDropdown || 'sf_subfield_dropdown';
	opts.typeSubfieldStaticText = opts.typeSubfieldStaticText || 'sf_subfield_statictext';
    if (Lang.isUndefined(opts.updateEditorState)) { 
        opts.updateEditorState = () => {console.error(`Structured Field is trying to update Slate State but cannot`)};
    } 

    function isStructuredFieldType (type) { 
        return (type === opts.typeSubfieldDropdown || type === opts.typeSubfieldStaticText || type === opts.typeStructuredField);
    }

    /**
     * Is the selection in a structured field
     */
    function isSelectionInStructuredField(state) {
		//console.log(state.selection.startKey);
        if (!state.selection.startKey) return false;

        const { startBlock } = state;
        // console.log('isSelectionInStructuredField: StructuredField block right now');
        // console.log(startBlock);
        // console.log(`Answer: ${isStructuredFieldType(startBlock.type)}`);
        // Only handle events in cells
		//console.log(startBlock.type + " ?= " + opts.typeSubfieldDropdown + " ?= " + opts.typeStructuredField);
        return isStructuredFieldType(startBlock.type); // return true;
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
        case KEY_TEST: 
            event.preventDefault();
            console.log('\n\n\n\nIn Key Test: finding next subfield')
            return findNextSubField(state, opts);
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
        case KEY_F2: 
            return onF2(...args);
		default:
			let chr = String.fromCharCode((96 <= data.code) ? (data.code - 48 * Math.floor(data.code / 48)) : data.code);
			console.log("onKeyDown: " + data.key + " / " + chr);
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

    function onDropdownFocus(proxy, event)  {
        // Get Slate Key of parent element
        const dropdownKey = proxy.target.parentElement.getAttribute('data-key');
        // console.log(proxy.target.parentElement.getAttribute('data-key'));
        // If current selection is not identical, make it so
        if (dropdownKey !== this.selection.startKey) { 
            // console.log(`Trying to update state because selections are off`)
            // console.log(`Dropdown: ${dropdownKey}`)
            // console.log(`Current: ${this.selection.startKey}`)
            const newState = this.transform().selectAll().apply();
            opts.updateEditorState(newState);
        } else { 
            // console.log(`No need to update state -- selections are in sync`)
            // console.log(this)
        }
    }

    function onDropdownSelection(e) {
    	// console.log("[onDropdownSelection] - hit function");
        // console.log("selected value");
        // console.log(e.target.value);

		// Pass selected value to FluxNotesEditor
		opts.updateCurrentShortcutValues(e.target.value);
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
                // console.log(props);
                let items = props.node.get('data').get('items');
                //let value = props.node.get('data').get('value');
                return (
                    <DropdownStructuredComponent
                        handleDropdownFocus={onDropdownFocus.bind(props.state)}
						handleDropdownSelection={onDropdownSelection.bind(props.state)}
                        items={items}
                    /> 
                );
            }, 
            sf_subfield_dropdown2:    props => {
				console.log(props);
				let items = props.node.get('data').get('items');
				let value = props.node.get('data').get('value');
				return (
					<span className='sf-subfield' {...props.attributes}><DropDownMenu value={value} onFocus={onDropdownFocus.bind(props.state)} onChange={(event, index, value) => value={value}} >
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
            insertStructuredField: insertStructuredField.bind(null, opts)
        }
    };
}

export default StructuredFieldPlugin
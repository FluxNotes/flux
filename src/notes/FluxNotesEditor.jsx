import React from 'react';
import Slate from 'slate'
//import PluginEditTable from './lib/';

import './FluxNotesEditor.css';

const KEY_ENTER     = 'enter';
const KEY_TAB       = 'tab';
const KEY_BACKSPACE = 'backspace';
const KEY_DOWN      = 'down';
const KEY_UP        = 'up';

const initialState = Slate.Plain.deserialize('');
/*const initialState = Slate.Raw.deserialize(
	{     "nodes": [
        {
            "kind": "block",
            "type": "paragraph",
            "nodes": [
                {
                    "kind": "text",
                    "ranges": [
                        {
                            "text": ""
                        }
                    ]
                }
            ]
        }
	]}, { terse: true });*/

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
/*    event.preventDefault();

    return insertRow(opts, state.transform())
        .apply();*/
}

/**
 * Pressing "Tab" moves the cursor to the next cell
 * and select the whole text
 */
function onTab(event, data, state, opts) {
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
/*    const { startBlock, startOffset,
        isCollapsed, endBlock } = state;

    // If a cursor is collapsed at the start of the block, do nothing
    if (startOffset === 0 && isCollapsed) {
        event.preventDefault();
        return state;
    }

    // If "normal" deletion, we continue
    if (startBlock === endBlock) {
        return;
    }

    // If cursor is between multiple blocks,
    // we clear the content of the cells
    event.preventDefault();

    const { blocks, focusBlock } = state;
    const transform = blocks.reduce(
        (tr, block) => {
            if (block.type !== opts.typeCell) {
                return transform;
            }

            const cellRange = Slate.Selection.create()
                .moveToRangeOf(block);

            return tr.deleteAtRange(cellRange);
        },
        state.transform()
    );

    // Clear selected cells
    return transform
        .collapseToStartOf(focusBlock)
        .apply();*/
}

function onUpDown(event, data, state, opts) {
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

function createSubfield_Dropdown(opts, spec) {
	return Slate.Block.create({
		type: opts.typeSubfieldDropdown,
		data: {
			values: spec.values
		}
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
    const nodes = [
		createSubfield_Dropdown(opts, { values: ['T0', 'T1', 'T2', 'T3']}),
		createSubfield_Dropdown(opts, { values: ['N0', 'N1', 'N2', 'N3']}),
		createSubfield_Dropdown(opts, { values: ['M0', 'M1']}),
	];
//        .map(i => createRow(opts, columns, textGetter ? textGetter.bind(null, i) : null))
//        .toList();
	const shortcut = {};
    return Slate.Block.create({
        type:  opts.typeStructuredField,
        nodes: nodes,
        data: {
            shortcut,
			startText: "#staging[",
			endText: "]"
        },
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
	console.log("insertStructuredField: " + state.selection.startKey);
    if (!state.selection.startKey) return false;

    // Create the structured-field node
    const sf = createStructuredField(opts, 'staging');

    return transform
        .insertBlock(sf);
}

function StructuredField(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
    opts.typeSubfieldDropdown = opts.typeSubfieldDropdown || 'sf_subfield_dropdown';

    /**
     * Is the selection in a structured field
     */
    function isSelectionInStructuredField(state) {
        if (!state.selection.startKey) return false;

        const { startBlock } = state;

        // Only handle events in cells
        return (startBlock.type === opts.typeSubfieldDropdown);
    }

	function onKeyDown(event, data, state) {
        // Only handle events in cells
        if (!isSelectionInStructuredField(state)) {
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
        }
	}

	const schema = {
		nodes: {
			structured_field:      props => {
				let starttext = props.node.get('data').get('startText') || '';
				let endtext = props.node.get('data').get('endText') || '';
				return <span className='structured-field' {...props.attributes}>{starttext}{props.children}{endtext}</span>;
			},
			sf_subfield_dropdown:    props => {
				let values = props.node.get('data').get('values');
				return (
					<span className='sf-subfield' {...props.attributes}><select>
						{values.map(function(value, index) {
							return <option key={value} value={value}>{value}</option>
						})}</select></span>
					);
			}
		}
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

    onChange = (state) => {
        this.setState({
            state: state
        });
    }

    onInsertStructuredField = () => {
        let { state } = this.state;

        this.onChange(
            structuredFieldPlugin.transforms.insertStructuredField(state.transform())
                .apply()
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
        let isStructuredField = structuredFieldPlugin.utils.isSelectionInStructuredField(state);
		//let isTable = false;

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
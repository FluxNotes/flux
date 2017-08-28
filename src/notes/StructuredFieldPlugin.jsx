import React from 'react';
import Slate from 'slate';

function createOpts(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
	return opts;
}

let structuredFieldMap = new Map();

function StructuredFieldPlugin(opts) {
	opts = createOpts(opts);
    let contextManager = opts.contextManager;
	
    function onKeyDown(event, data, state, editor) {
        console.log("plugin onKeyDown " + state.selection.endKey + " / " + state.selection.endOffset);
    }
    
	function onBeforeChange(state, editor) {
        var deletedKeys = [];
        const nodes = state.document.getInlines();
        if (nodes.size !== structuredFieldMap.size) {
            var currentNodesMap = new Map(nodes.map((i) => [i.key, i]));
            structuredFieldMap.forEach((value, key) => {
                if (!currentNodesMap.has(key)) {
                    deletedKeys.push(key);
                }
            });
        }
        var shortcut;
        let result = state;
        deletedKeys.forEach((key) => {
            shortcut = structuredFieldMap.get(key);
            if (shortcut.onBeforeDeleted()) {
                structuredFieldMap.delete(key);
                contextManager.contextUpdated();
            } else {
                result = editor.getState(); // don't allow state change
                console.log("plugin onBeforeChange. cancel delete " + result.selection.endKey + " / " + result.selection.endOffset);
                //You can not delete " + shortcut.getText() + " as it has child fields.
            }
        });
        return result;
	}
    
    const schema = {
		nodes: {
			structured_field:      props => {
				let shortcut = props.node.get('data').get('shortcut');
				return <span contentEditable={false} className='structured-field' {...props.attributes}>{shortcut.getText()}{props.children}</span>;
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
        onBeforeChange,
        schema,
		
        utils: {
            //isSelectionInStructuredField
        },

        transforms: {
            insertStructuredField:     	insertStructuredField.bind(null, opts)
			//onSelectionChange:			onSelectionChange.bind(null, opts)
        }
    };
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
    if (!state.selection.startKey) return false;

    // Create the structured-field node
    const sf = createStructuredField(opts, shortcut);

    shortcut.setKey(sf.key);
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
	let nodes = [];

    let sf = Slate.Inline.create({
        type:  opts.typeStructuredField,
        nodes: nodes,
		isVoid: true,
		data: {
			shortcut: shortcut
		}
    });
    structuredFieldMap.set(sf.key, shortcut);
	return sf;
}

export default StructuredFieldPlugin
import React from 'react';
import Slate from 'slate';

function createOpts(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
	return opts;
}

function StructuredFieldPlugin(opts) {
	opts = createOpts(opts);
	
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

	return sf;
}

export default StructuredFieldPlugin
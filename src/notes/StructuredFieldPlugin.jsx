import React from 'react';
import Slate from 'slate';
import getWindow from 'get-window'

function createOpts(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
	return opts;
}

let structuredFieldMap = new Map();

function StructuredFieldPlugin(opts) {
	opts = createOpts(opts);
    let contextManager = opts.contextManager;
	let updateErrors = opts.updateErrors;
        
    function onChange(state, editor) {
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
                updateErrors([ "Unable to delete " + shortcut.getLabel() + " because " + shortcut.getChildren().map((child) => { return child.getText(); }).join() + " " + ((shortcut.getChildren().length > 1) ? "depend" : "depends") + " on it." ]);
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
    
    function onPaste(event, data, state, editor) {
        console.log("onPaste");
        console.log(event);
        console.log(data);
    }
    
    function onCut(event, data, state, editor) {
        console.log("onCut");
        this.onCopy(event, data, state, editor); // doesn't change state
        const window = getWindow(event.target)

        // Once the fake cut content has successfully been added to the clipboard,
        // delete the content in the current selection.
        let next;
        window.requestAnimationFrame(() => {
            next = editor
                .getState()
                .transform()
                .delete()
                .apply();

            editor.onChange(next);
        });
        //return next;
        return state;
    }
    
function serializeNode(node, options) {
  const raw = Slate.Raw.serializeNode(node, options)
  const encoded = encode(raw)
  return encoded
}
function encode(object) {
  const string = JSON.stringify(object)
  const encoded = window.btoa(window.encodeURIComponent(string))
  return encoded
}

function convertBlocksToText(state, blocks) {
    let result = "";
    blocks.forEach((blk) => {
        //console.log(blk.kind + "/" + blk.type);
        if (blk.kind === 'block' || (blk.kind === 'inline' && blk.type !== 'structured_field')) {
            result = result + convertBlocksToText(state, blk.nodes);
        } else if (blk.kind === 'text') {
            //console.log(blk.text);
            result = result + blk.text;
        } else if (blk.kind === 'inline' && blk.type === 'structured_field') {
            let shortcut = blk.data.get("shortcut");
            //console.log(`${shortcut.getShortcutType()}[[${shortcut.getText()}]]`);
            result = result + `${shortcut.getShortcutType()}[[${shortcut.getText()}]]`;
        }
    });
    return result;
}

function convertToText(state, selection) {
    const blocksInSelection = state.document.getBlocksAtRange(selection);
    return convertBlocksToText(state, blocksInSelection);
}

    function onCopy(event, data, state, editor) {
        console.log("onCopy");
        //console.log(event);
        console.log(data);
        //event.preventDefault();
        
        let { selection } = state;
   
    const window = getWindow(event.target)
    const native = window.getSelection()
    const { endBlock, endInline } = state
    const isVoidBlock = endBlock && endBlock.isVoid
    const isVoidInline = endInline && endInline.isVoid
    const isVoid = isVoidBlock || isVoidInline

    // If the selection is collapsed, and it isn't inside a void node, abort.
    if (native.isCollapsed && !isVoid) return

    const { fragment } = data
    //const encoded = serializeNode(fragment); // Base64.serializeNode
    const encoded = convertToText(state, selection);
    console.log(encoded);
    const range = native.getRangeAt(0)
    let contents = range.cloneContents()
    let attach = contents.childNodes[0]

    // If the end node is a void node, we need to move the end of the range from
    // the void node's spacer span, to the end of the void node's content.
    if (isVoid) {
      const r = range.cloneRange()
      const node = Slate.Utils.findDOMNode(isVoidBlock ? endBlock : endInline)
      r.setEndAfter(node)
      contents = r.cloneContents()
      attach = contents.childNodes[contents.childNodes.length - 1].firstChild
    }

    // Remove any zero-width space spans from the cloned DOM so that they don't
    // show up elsewhere when pasted.
    const zws = [].slice.call(contents.querySelectorAll('[data-slate-zero-width]'))
    zws.forEach(zw => zw.parentNode.removeChild(zw))

    // COMPAT: In Chrome and Safari, if the last element in the selection to
    // copy has `contenteditable="false"` the copy will fail, and nothing will
    // be put in the clipboard. So we remove them all. (2017/05/04)
/*    if (IS_CHROME || IS_SAFARI) {
      const els = [].slice.call(contents.querySelectorAll('[contenteditable="false"]'))
      els.forEach(el => el.removeAttribute('contenteditable'))
    }*/

    // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
    // in the HTML, and can be used for intra-Slate pasting. If it's a text
    // node, wrap it in a `<span>` so we have something to set an attribute on.
    if (attach.nodeType === 3) {
      const span = window.document.createElement('span')
      span.appendChild(attach)
      contents.appendChild(span)
      attach = span
    }

    attach.setAttribute('data-slate-fragment', encoded)

    // Add the phony content to the DOM, and select it, so it will be copied.
    const body = window.document.querySelector('body')
    const div = window.document.createElement('div')
    div.setAttribute('contenteditable', true)
    div.style.position = 'absolute'
    div.style.left = '-9999px'
    div.appendChild(contents)
    body.appendChild(div)

    // COMPAT: In Firefox, trying to use the terser `native.selectAllChildren`
    // throws an error, so we use the older `range` equivalent. (2016/06/21)
    const r = window.document.createRange()
    r.selectNodeContents(div)
    native.removeAllRanges()
    native.addRange(r)

    // Revert to the previous selection right after copying.
    window.requestAnimationFrame(() => {
      body.removeChild(div)
      native.removeAllRanges()
      native.addRange(range)
    })
        return state;
    }
		
	/*  style for placeholder assumes an 18pt font due to the rendering of a <BR> for an empty text node. Placeholder
		positioning needs to go up 1 line to overlap with that BR so user can click on placeholder message and get
		a cursor. see style top value of -18px  */	    
	return {
        onChange,
        onCut,
        onCopy,
        onPaste,
        schema,
		
        utils: {
            //isSelectionInStructuredField
        },

        transforms: {
            insertStructuredField:     	insertStructuredField.bind(null, opts)
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
import InsertValue from '../shortcuts/InsertValue';
import CreatorChild from '../shortcuts/CreatorChild';
import React from 'react';
import Slate from '../lib/slate';
import Lang from 'lodash';
import getWindow from 'get-window';

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
    let insertText = opts.insertText;

    function clearStructuredFieldMap() {
        structuredFieldMap = new Map();
        return structuredFieldMap;
    }
        
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
    
    const FRAGMENT_MATCHER = / flux-string="([^\s]+)"/;

    function onPaste(event, data, state, editor) {
        //console.log("onPaste");
        const html = data.html || null; //event.clipboardData.getData('text/html') || null;
        //console.log(html);
        let fragment = null;
        if (
            !fragment &&
            html &&
            ~html.indexOf(' flux-string="')
        ) {
            const matches = FRAGMENT_MATCHER.exec(html);
            const [ full, encoded ] = matches; // eslint-disable-line no-unused-vars
            if (encoded) fragment = encoded;
            const decoded = window.decodeURIComponent(window.atob(encoded));
            //console.log(decoded);
            
            // because insertion of shortcuts into the context relies on the current selection, during a paste
            // we override the routine that checks the location of a structured field relative to the selection
            // since we know we are inserting from left to right always. Make sure we restore the normal method
            // when done
            // NoteParser also overrides this function since there is no slate
            const saveIsBlock1BeforeBlock2 = contextManager.getIsBlock1BeforeBlock2();
            contextManager.setIsBlock1BeforeBlock2(() => { return false; });
            insertText(decoded);
            contextManager.setIsBlock1BeforeBlock2(saveIsBlock1BeforeBlock2);
            event.preventDefault();
            return state;
        } else if (data.text) {
            event.preventDefault();
            insertText(data.text);
            return state;
        }
    }
    
    function onCut(event, data, state, editor) {
        //console.log("onCut");
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
        return state;
    }
    
    function convertBlocksToText(state, blocks, startOffset, endOffset) {
        let result = "", start, end;
        blocks.forEach((blk, index) => {
            start = (index === 0) ? start = startOffset : start = 0;
            end = (index === blocks.length - 1) ? end = endOffset : end = -1;
            if (blk.kind === 'block' && blk.type === 'line') {
                result += '\r';
            } else if (blk.kind === 'block' || (blk.kind === 'inline' && blk.type !== 'structured_field')) {
                result += convertBlocksToText(state, blk.nodes, startOffset, endOffset);
            } else if (blk.kind === 'text') {
                result += (end === -1) ? blk.text.substring(start) : blk.text.substring(start, end);
            } else if (blk.kind === 'inline' && blk.type === 'structured_field') {
                // Approach 1: copying this block of code into the rules.serialize() because it does what you want when you have a sturctured field
                let shortcut = blk.data.get("shortcut");
                if (shortcut instanceof InsertValue || (shortcut instanceof CreatorChild && Lang.isArray(shortcut.determineText(contextManager)))) {
                    let text = shortcut.getText();
                    if (typeof(text) === "string" && text.startsWith(shortcut.getPrefixCharacter())) {
                        text = text.substring(1);
                    }
                    result += `${shortcut.initiatingTrigger}[[${text}]]`;
                } else {
                    result += shortcut.getText();
                }
                // end of code block to copy
            }
        });
        return result;
    }

    function convertToText(state, selection) {
        const startBlock = state.document.getDescendant(selection.startKey);
        // state.document. style?
        // This cycles through state.document's descendants/siblings and may not have styling info
        // styling info is in the marks? or somewhere inside state.document.
        console.log(state.document); // has .text which is missing tags, and .nodes which is a complex data structure, perhaps bold marks are in there
        const startOffset = selection.startOffset;
        const endOffset = selection.endOffset;
        let blocks = [];
        const endKey = selection.endKey;
        let block = startBlock;
        let parentBlock, curKey;
        do {
            if (block.kind === 'text') {
                parentBlock = state.document.getParent(block.key);
                if (parentBlock.kind === 'inline' && parentBlock.type === 'structured_field') {
                    block = parentBlock;
                }
            }
            
            blocks.push(block);
            //console.log(block);
            curKey = block.key;
            if (curKey !== endKey) {
                block = state.document.getNextSibling(curKey);
                if (Lang.isUndefined(block)) {
                    block = state.document.getParent(curKey);
                    if (block.kind === 'block' && block.type === 'line') {
                        blocks.push(block);
                        block = state.document.getNextSibling(block.key);
                        //console.log(block);
                        if (block) block = block.getFirstText(); // 1st child
                    }
                }
            } else {
                block = undefined;
            }
        } while (block && block.key !== endKey);
        if (block) blocks.push(block);
        //console.log(blocks);
        return convertBlocksToText(state, blocks, startOffset, endOffset);
    }

    function onCopy(event, data, state, editor) {
        let { selection } = state;
   
        const window = getWindow(event.target);
        const native = window.getSelection();
        const { endBlock, endInline } = state;
        const isVoidBlock = Boolean(endBlock && endBlock.isVoid);
        const isVoidInline = Boolean(endInline && endInline.isVoid);
        const isVoid = isVoidBlock || isVoidInline;

        // If the selection is collapsed, and it isn't inside a void node, abort.
        if (native.isCollapsed && !isVoid) return;

        let fluxString = convertToText(state, selection);
        //console.log("copy: " + fluxString);
        const encoded = window.btoa(window.encodeURIComponent(fluxString));
        const range = native.getRangeAt(0);
        let contents = range.cloneContents();
        let attach = contents.childNodes[0];

        // If the end node is a void node, we need to move the end of the range from
        // the void node's spacer span, to the end of the void node's content.
        if (isVoid) {
            //console.log("isVoid: " + isVoid);
            const r = range.cloneRange();
            const node = Slate.Utils.findDOMNode(isVoidBlock ? endBlock : endInline);
            r.setEndAfter(node);
            contents = r.cloneContents();
            attach = contents.childNodes[contents.childNodes.length - 1].firstChild;
        }

        // Remove any zero-width space spans from the cloned DOM so that they don't
        // show up elsewhere when pasted.
        const zws = [].slice.call(contents.querySelectorAll('[data-slate-zero-width]'));
        zws.forEach(zw => zw.parentNode.removeChild(zw));

        // COMPAT: In Chrome and Safari, if the last element in the selection to
        // copy has `contenteditable="false"` the copy will fail, and nothing will
        // be put in the clipboard. So we remove them all. (2017/05/04)
        if (Slate.IS_CHROME || Slate.IS_SAFARI) {
          const els = [].slice.call(contents.querySelectorAll('[contenteditable="false"]'));
          els.forEach(el => el.removeAttribute('contenteditable'));
        }

        // Set a `flux-string` attribute on a non-empty node, so it shows up
        // in the HTML, and can be used for intra-Slate pasting. If it's a text
        // node, wrap it in a `<span>` so we have something to set an attribute on.
        if (attach.nodeType === 3) {
            //console.log("node type: " + attach.nodeType);
            const span = window.document.createElement('span');
            span.appendChild(attach);
            contents.appendChild(span);
            attach = span;
        }

        //'data-slate-fragment'
        attach.setAttribute('flux-string', encoded);
        if (contents.childNodes.length > 1) {
            contents.childNodes[1].setAttribute('flux-string', encoded);
        }
        //console.log(attach);

        // Add the phony content to the DOM, and select it, so it will be copied.
        const body = window.document.querySelector('body');
        const div = window.document.createElement('div');
        div.setAttribute('contenteditable', true);
        div.style.position = 'absolute';
        div.style.left = '-9999px';
        div.appendChild(contents);
        body.appendChild(div);

        // COMPAT: In Firefox, trying to use the terser `native.selectAllChildren`
        // throws an error, so we use the older `range` equivalent. (2016/06/21)
        const r = window.document.createRange();
        r.selectNodeContents(div);
        native.removeAllRanges();
        native.addRange(r);

        // Revert to the previous selection right after copying.
        window.requestAnimationFrame(() => {
          body.removeChild(div);
          native.removeAllRanges();
          native.addRange(range);
        })
        return state;
    }
		
	/*  style for placeholder assumes an 18pt font due to the rendering of a <BR> for an empty text node. Placeholder
		positioning needs to go up 1 line to overlap with that BR so user can click on placeholder message and get
		a cursor. see style top value of -18px  */	    
	return {
	    clearStructuredFieldMap,
        onChange,
        onCut,
        onCopy,
        onPaste,
        schema,
        convertToText,
		
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
    const properties = {
        type:  opts.typeStructuredField,
        nodes: nodes,
        isVoid: true,
        data: {
            shortcut: shortcut
        }
    };
    let sf = Slate.Inline.create(properties);
    structuredFieldMap.set(sf.key, shortcut);
	return sf;
}

export default StructuredFieldPlugin
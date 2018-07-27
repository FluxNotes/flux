import React from 'react';
import Slate from '../lib/slate';
import Lang from 'lodash';
import getWindow from 'get-window';

function createOpts(opts) {
    opts = opts || {};
    opts.typeStructuredField = opts.typeStructuredField || 'structured_field';
    opts.typePlaceholder = opts.typePlaceholder || 'placeholder';
	return opts;
}


function StructuredFieldPlugin(opts) {
    opts = createOpts(opts);
    let contextManager = opts.contextManager;
    let updateErrors = opts.updateErrors;
    let insertText = opts.insertText;
    const clearStructuredFieldMap = opts.structuredFieldMapManager.clearStructuredFieldMap;

    function onChange(state, editor) {
        var deletedKeys = [];
        const keyToShortcutMap = opts.structuredFieldMapManager.keyToShortcutMap;
        const idToShortcutMap = opts.structuredFieldMapManager.idToShortcutMap;
        const nodes = state.document.getInlines();
        if (nodes.size !== keyToShortcutMap.size) {
            var currentNodesMap = new Map(nodes.map((i) => [i.key, i]));
            keyToShortcutMap.forEach((value, key) => {
                if (!currentNodesMap.has(key)) {
                    deletedKeys.push(key);
                }
            });
        }
        // Sort the keys in reverse order of creation -- new keys are always > old keys
        deletedKeys.sort((a, b) => b - a)
        var shortcut;
        let result = state;
        deletedKeys.forEach((key) => {
            shortcut = keyToShortcutMap.get(key);
            if (shortcut.onBeforeDeleted()) {
                keyToShortcutMap.delete(key);
                idToShortcutMap.delete(shortcut.metadata.id)
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
            structured_field: props => {
                let shortcut = props.node.get('data').get('shortcut');
                return <span contentEditable={false} className='structured-field' {...props.attributes}>{shortcut.getText()}{props.children}</span>;
            },
            placeholder: props => {
                const placeholder = props.node.get('data').get('placeholder');
                return <span contentEditable={false} className='placeholder'>{placeholder.placeholderText}</span>;
            },
        },
        rules: [
            {
                match: (node) => {
                    return node.kind === 'block' && node.type === 'inline'
                },
                render: (props) => {
                    return (
                        <span {...props.attributes} style={{ position: 'relative', width: '100%', height: '100%' }}>
                            {props.children}
                            {props.editor.props.placeholder
                                ? <Slate.Placeholder
                                    className={props.editor.props.placeholderClassName}
                                    node={props.node}
                                    parent={props.state.document}
                                    state={props.state}
                                    style={{ position: 'relative', top: '-18px', width: '100%', height: '100%', opacity: '0.333', ...props.editor.props.placeholderStyle }}
                                >{props.editor.props.placeholder}
                                </Slate.Placeholder>
                                : null}
                        </span>
                    );
                }
            }
        ]
    };

    function convertSlateNodesToText(nodes) {
        let result = '';
        let localStyle = [];
        let markToHTMLTag = { bold: 'strong', italic: 'em', underlined: 'u' };
        nodes.forEach((node, index) => {
            // console.log("node")
            // console.log(node)
            if (node.type === 'line') {
                // This checks whether the current line is the last one to be processed. If it is, then we don't want to add a div set; this will cause newlines to be perpetually added to the end of the note every time it is closed.
                if (index === nodes.length - 1) {
                    result += `${convertSlateNodesToText(node.nodes)}`;
                } else {
                    result += `<div>${convertSlateNodesToText(node.nodes)}</div>`;
                }
            } else if (node.characters && node.characters.length > 0) {
                node.characters.forEach(char => {
                    const inMarksNotLocal = Lang.differenceBy(char.marks, localStyle, 'type');
                    const inLocalNotMarks = Lang.differenceBy(localStyle, char.marks, 'type');
                    if (inMarksNotLocal.length > 0) {
                        inMarksNotLocal.forEach(mark => {
                            result += `<${markToHTMLTag[mark.type]}>`;
                        });
                    }
                    if (inLocalNotMarks.length > 0) {
                        Lang.reverse(inLocalNotMarks).forEach(mark => {
                            result += `</${markToHTMLTag[mark.type]}>`;
                        });
                    }
                    localStyle = char.marks;
                    result += char.text;
                });
                if (localStyle.length > 0) {
                    Lang.reverse(localStyle).forEach(mark => {
                        result += `</${markToHTMLTag[mark.type]}>`;
                    });
                }
            } else if (node.type === 'structured_field') {
                let shortcut = node.data.shortcut;
                result += shortcut.getResultText();
            } else if (node.type === 'placeholder') {
                result += node.data.placeholder.placeholderText;
            } else if (node.type === 'bulleted-list') {
                result += `<ul>${convertSlateNodesToText(node.nodes)}</ul>`;
            } else if (node.type === 'numbered-list') {
                result += `<ol>${convertSlateNodesToText(node.nodes)}</ol>`;
            } else if (node.type === 'bulleted-list-item' || node.type === 'numbered-list-item') {
                // node.nodes will be text here.
                result += `<li>${convertSlateNodesToText(node.nodes)}</li>`;
            }
        });
        return result;
    }

    function convertToText(state) {
        return `${convertSlateNodesToText(state.document.toJSON().nodes)}`;
    }

    function onCopy(event, data, state, editor) {
        const window = getWindow(event.target);
        const native = window.getSelection();
        const { endBlock, endInline } = state;
        const isVoidBlock = Boolean(endBlock && endBlock.isVoid);
        const isVoidInline = Boolean(endInline && endInline.isVoid);
        const isVoid = isVoidBlock || isVoidInline;

        // If the selection is collapsed, and it isn't inside a void node, abort.
        if (native.isCollapsed && !isVoid) return;

        let fluxString = convertToText(state);
        // console.log("copy: " + fluxString);
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

    const FRAGMENT_MATCHER = / flux-string="([^\s]+)"/;

    function onPaste(event, data, state, editor) {
        const html = data.html || null; //event.clipboardData.getData('text/html') || null;)
        if (
            html &&
            ~html.indexOf(' flux-string="')
        ) {
            const matches = FRAGMENT_MATCHER.exec(html);
            const [ full, encoded ] = matches; // eslint-disable-line no-unused-vars
            const decoded = window.decodeURIComponent(window.atob(encoded));
            // console.log("decoded")
            // console.log(decoded)

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
            convertSlateNodesToText: convertSlateNodesToText,
        },

        transforms: {
            insertStructuredField:      	insertStructuredField.bind(null, opts),
            insertPlaceholder:              insertPlaceholder.bind(null, opts),
            insertStructuredFieldAtRange:   insertStructuredFieldAtRange.bind(null, opts)
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
    return insertStructuredFieldAtRange(opts, transform, shortcut, transform.state.selection)
}

function insertStructuredFieldAtRange(opts, transform, shortcut, range) { 
    if (!range.startKey) return false;

    // Create the structured-field node
    const sf = createStructuredField(opts, shortcut);
    shortcut.setKey(sf.key);

    if (sf.kind === 'block') {
		return [transform.insertBlockAtRange(range, sf), sf.key];
	} else {
		return [transform.insertInlineAtRange(range, sf), sf.key];
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
    opts.structuredFieldMapManager.keyToShortcutMap.set(sf.key, shortcut);
    opts.structuredFieldMapManager.idToShortcutMap.set(shortcut.metadata.id, shortcut);
    // console.log("sf")
    // console.log(sf)
	return sf;
}

function insertPlaceholder(opts, transform, placeholder) {
    const { state } = transform;
    if (!state.selection.startKey) return false;

    // Create the placeholder node
    const sf = createPlaceholder(opts, placeholder);

    if (sf.kind === 'block') {
        return [transform.insertBlock(sf)];
    } else {
        return [transform.insertInline(sf)];
    }
}

function createPlaceholder(opts, placeholder) {
    const nodes = [];
    const properties = {
        type: opts.typePlaceholder,
        nodes: nodes,
        isVoid: true,
        data: {
            placeholder
        }
    };
    const sf = Slate.Inline.create(properties);
    opts.structuredFieldMapManager.keyToPlaceholderMap.set(sf.key, placeholder);
    opts.structuredFieldMapManager.idToShortcutMap.set(placeholder.metadata.id, placeholder);
    return sf;
}

export default StructuredFieldPlugin;
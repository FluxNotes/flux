import React from 'react';
import { Inline } from 'slate';
import { findDOMNode, getEventTransfer, setEventTransfer, cloneFragment } from 'slate-react'
import { IS_SAFARI, IS_CHROME, IS_IE } from 'slate-dev-environment'
import Lang from 'lodash';
import getWindow from 'get-window';

function StructuredFieldPlugin(opts) {
    let contextManager = opts.contextManager;
    let updateErrors = opts.updateErrors;
    let insertText = opts.insertText;
    const clearStructuredFieldMap = opts.structuredFieldMapManager.clearStructuredFieldMap;

    function onChange(change) {
        const editorValue = change.value

        var deletedKeys = [];
        const keyToShortcutMap = opts.structuredFieldMapManager.keyToShortcutMap;
        const idToShortcutMap = opts.structuredFieldMapManager.idToShortcutMap;
        const nodes = editorValue.document.getInlinesAtRange(editorValue.selection);
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
        let result = editorValue;
        deletedKeys.forEach((key) => {
            shortcut = keyToShortcutMap.get(key);
            if (shortcut.onBeforeDeleted()) {
                keyToShortcutMap.delete(key);
                idToShortcutMap.delete(shortcut.metadata.id)
                contextManager.contextUpdated();
            } else {
                updateErrors([ "Unable to delete " + shortcut.getLabel() + " because " + shortcut.getChildren().map((child) => { return child.getText(); }).join() + " " + ((shortcut.getChildren().length > 1) ? "depend" : "depends") + " on it." ]);
            }
        });
        return result;
    }

    function convertSlateNodesToText(nodes) {
        let result = '';
        let localStyle = [];
        let markToHTMLTag = { bold: 'strong', italic: 'em', underlined: 'u' };
        nodes.forEach((node, index) => {
            if (node.type === 'line') {
                result += `<div>${convertSlateNodesToText(node.nodes)}</div>`;
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
            } else if (node.type === getStructuredFieldType()) {
                let shortcut = node.data.shortcut;
                result += shortcut.getResultText();
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

    function convertToText(editorValue, selection) {
        return `${convertSlateNodesToText(editorValue.document.toJSON().nodes)}`;
    }


    // ATTEMPT 3: 
    //
    // Old implementation 
    function onCopy(event, change, editor) {
        const state = change.value;
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
        console.log("copy: " + fluxString);
        const encoded = window.btoa(window.encodeURIComponent(fluxString));
        const range = native.getRangeAt(0);
        let contents = range.cloneContents();
        let attach = contents.childNodes[0];

        // If the end node is a void node, we need to move the end of the range from
        // the void node's spacer span, to the end of the void node's content.
        if (isVoid) {
            //console.log("isVoid: " + isVoid);
            const r = range.cloneRange();
            const node = findDOMNode(isVoidBlock ? endBlock : endInline);
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
        if (IS_CHROME || IS_SAFARI) {
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
    function onPaste(event, change, editor) {
        console.log(event.clipboardData)
        const html = event.clipboardData.getData('text/html') || null;
        const text = event.clipboardData.getData('text/plain') || null;
        console.log("html")
        console.log(html)
        console.log("text")
        console.log(text)
        if (
            html &&
            ~html.indexOf(' flux-string="')
        ) {
            const matches = FRAGMENT_MATCHER.exec(html);
            const [ full, encoded ] = matches; // eslint-disable-line no-unused-vars
            const decoded = window.decodeURIComponent(window.atob(encoded));
            console.log("decoded")
            console.log(decoded)

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
            return change;
        } else if (text) {
            event.preventDefault();
            insertText(text);
            return change;
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
                .value
                .change()
                .delete()
                .value;

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
        
        helpers: {
            convertToText: convertToText,
            convertSlateNodesToText: convertSlateNodesToText,
            getStructuredFieldType: getStructuredFieldType,
        },

        components: {
            StructuredField: StructuredField,
        },

        changes: {
            insertStructuredField:     	insertStructuredField.bind(null, opts)
        }
    };
}

/**
 * Insert a new structured field
 *
 * @param {Object} opts
 * @param {Slate.Change} change
 * @return {Array} 
 */
function insertStructuredField(opts, change, shortcut) {
    const { value } = change;
    console.log('insertSrtcutred Field')
    if (!value.selection.startKey) return false;

    // Create the structured-field node
    const sf = createStructuredField(opts, shortcut);
    shortcut.setKey(sf.key);
    if (sf.object === 'block') {
		return [change.insertBlock(sf), sf.key];
	} else {
		return [change.insertInline(sf), sf.key];
	}
}

/**
 * Create a structured field
 *
 * @param {Slate.Value} value
 * @param {Object} opts
 * @param {Object} shortcut
 * @return {Slate.Inline}
 */
function createStructuredField(opts, shortcut) {
    let nodes = [];
    const structuredFieldType = getStructuredFieldType();
    // console.log('structuredFieldType')
    // console.log(structuredFieldType )
    const properties = {
        type:  structuredFieldType,
        nodes: nodes,
        isVoid: true,
        data: {
            shortcut: shortcut,
            anything: "present",
        }
    };
    let sf = Inline.create(properties);
    opts.structuredFieldMapManager.keyToShortcutMap.set(sf.key, shortcut);
    opts.structuredFieldMapManager.idToShortcutMap.set(shortcut.metadata.id, shortcut);
	return sf;
}

/**
 * Defines how to render StructuredFieldNodes
 *
 * @param {Object} props
 * @return {React.Component}
 */

function StructuredField (props) { 
    let shortcut = props.node.get('data').get('shortcut'); 
    return (
        <span 
            contentEditable={false} 
            className={getStructuredFieldType()}
            {...props.attributes}
        >
            {shortcut.getText()}            
            {props.children}
        </span>
    )
}

function getStructuredFieldType () { 
    return 'structured-field'
}

export default StructuredFieldPlugin
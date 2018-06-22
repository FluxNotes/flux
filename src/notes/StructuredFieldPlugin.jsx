import React from 'react';
import { Inline, Range } from 'slate';
import Base64 from 'slate-base64-serializer';
import { findDOMNode, getEventTransfer, setEventTransfer } from 'slate-react'
import { IS_SAFARI, IS_CHROME, IS_IE } from 'slate-dev-environment'
import Lang from 'lodash';
import getWindow from 'get-window';

function StructuredFieldPlugin(opts) {
    let contextManager = opts.contextManager;
    let updateErrors = opts.updateErrors;
    let insertText = opts.insertText;
    const clearStructuredFieldMap = opts.structuredFieldMapManager.clearStructuredFieldMap;

    function convertSlateNodesToText(nodes) {
        let result = '';
        let localStyle = [];
        let markToHTMLTag = { bold: 'strong', italic: 'em', underlined: 'u' };
        nodes.forEach((node, index) => {
            if (node.type === 'line') {
                result += `<div>${convertSlateNodesToText(node.nodes)}</div>`;
            } else if (node.type === getStructuredFieldType()) {
                let shortcut = node.data.shortcut;
                result += shortcut.getResultText();
            } else if (node.object === "text" ) {
                node.leaves.forEach(leaf => {
                    const inMarksNotLocal = Lang.differenceBy(leaf.marks, localStyle, 'type');
                    const inLocalNotMarks = Lang.differenceBy(localStyle, leaf.marks, 'type');
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
                    localStyle = leaf.marks;
                    result += leaf.text;
                });
                if (localStyle.length > 0) {
                    Lang.reverse(localStyle).forEach(mark => {
                        result += `</${markToHTMLTag[mark.type]}>`;
                    });
                }
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
        // If there is a selection obj, use it to make a range and get a fragment accordingly
        const subsectionOfText = selection ? editorValue.document.getFragmentAtRange(Range.create(selection)) : editorValue.document;
        return `${convertSlateNodesToText(subsectionOfText.toJSON().nodes)}`;
    }
    
    function cloneFragment(event, value, fragment = value.fragment) {
        const window = getWindow(event.target)
        const native = window.getSelection()
        const { startKey, endKey } = value
        const startVoid = value.document.getClosestVoid(startKey)
        const endVoid = value.document.getClosestVoid(endKey)
        
        // If the selection is collapsed, and it isn't inside a void node, abort.
        if (native.isCollapsed && !startVoid) return
        
        // Create a fake selection so that we can add a Base64-encoded copy of the
        // fragment to the HTML, to decode on future pastes.
        const encoded = window.btoa(window.encodeURIComponent(fragment));
        // console.log(encoded)
        const range = native.getRangeAt(0)
        let contents = range.cloneContents()
        let attach = contents.childNodes[0]
                
        // Make sure attach is a non-empty node, since empty nodes will not get copied
        Array.from(contents.childNodes).forEach(node => {
            if (node.textContent && node.textContent.trim() !== '') {
                attach = node
            }
        })
        
        // COMPAT: If the end node is a void node, we need to move the end of the
        // range from the void node's spacer span, to the end of the void node's
        // content, since the spacer is before void's content in the DOM.
        if (endVoid) {
            const r = range.cloneRange()
            const node = findDOMNode(endVoid, window)
            r.setEndAfter(node)
            contents = r.cloneContents()
        }
        
        // COMPAT: If the start node is a void node, we need to attach the encoded
        // fragment to the void node's content node instead of the spacer, because
        // attaching it to empty `<div>/<span>` nodes will end up having it erased by
        // most browsers. (2018/04/27)
        if (startVoid) {
            attach = contents.childNodes[0].childNodes[1].firstChild
        }
        
        // Remove any zero-width space spans from the cloned DOM so that they don't
        // show up elsewhere when pasted.
        const ZERO_WIDTH_ATTRIBUTE = 'data-slate-zero-width'
        const ZERO_WIDTH_SELECTOR = `[${ZERO_WIDTH_ATTRIBUTE}]`
        ;[].slice.call(Array.from(contents.querySelectorAll(ZERO_WIDTH_SELECTOR))).forEach(zw => {
            const isNewline = zw.getAttribute(ZERO_WIDTH_ATTRIBUTE) === 'n'
            zw.textContent = isNewline ? '\n' : ''
        })
        
        // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
        // in the HTML, and can be used for intra-Slate pasting. If it's a text
        // node, wrap it in a `<span>` so we have something to set an attribute on.
        if (attach.nodeType == 3) {
            const span = window.document.createElement('span')
            
            // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
            // then leading and trailing spaces will be ignored. (2017/09/21)
            span.style.whiteSpace = 'pre'
            
            span.appendChild(attach)
            contents.appendChild(span)
            attach = span
        }
        
        attach.setAttribute('flux-string', encoded)
        
        // Add the phony content to a div element. This is needed to copy the
        // contents into the html clipboard register.
        const div = window.document.createElement('div')
        div.appendChild(contents)
        
        // For browsers supporting it, we set the clipboard registers manually,
        // since the result is more predictable.
        if (event.clipboardData && event.clipboardData.setData && !IS_IE) {
          try { 
              event.preventDefault()
              event.clipboardData.setData('text/plain', div.textContent)
              event.clipboardData.setData('application/x-slate-fragment', encoded)
              event.clipboardData.setData('text/html', div.innerHTML)
              return
            } catch (err) { 
                // IE will fail on setData for types other than 'text' and 'url'
            }
        }
        
        // COMPAT: For browser that don't support the Clipboard API's setData method,
        // we must rely on the browser to natively copy what's selected.
        // So we add the div (containing our content) to the DOM, and select it.
        const editor = event.target.closest('[data-slate-editor]')
        div.setAttribute('contenteditable', true)
        div.style.position = 'absolute'
        div.style.left = '-9999px'
        editor.appendChild(div)
        native.selectAllChildren(div)
        
        // Revert to the previous selection right after copying.
        window.requestAnimationFrame(() => {
            editor.removeChild(div)
            // removeAllRanges(native)
            const doc = window.document
            if (doc && doc.body.createTextRange) {
                // All IE but Edge
                const range = doc.body.createTextRange()
                range.collapse()
                range.select()
            } else {
                native.removeAllRanges()
            }
            native.addRange(range)
        })
    }

    function isNodeStructuredField(node) { 
        return node.type === getStructuredFieldType();
    }

    function nodesContainStructuredData (nodes) { 
        return nodes.reduce((accumulator, currentNode) => { 
            // is this node or any I've seen before (the accumulator) a structuredFieldNode?
            if (currentNode.type !== "line") { 
                // Any other kind of node other than a line -- we just check the node's type
                return accumulator || isNodeStructuredField(currentNode)
            } else { 
                // A node with 'line' type -- check its children 
                // N.B. we know this node isn't a structuredField since it's a line.
                return accumulator || nodesContainStructuredData(currentNode.nodes)
            }
        }, false)
    }
    
    function selectionContainsStructuredData (editorValue, selection) { 
        // scan the text for the structured fields; if no selection, use full document
        const subsectionOfText = selection ? editorValue.document.getFragmentAtRange(Range.create(selection)) : editorValue.document;
        return nodesContainStructuredData(subsectionOfText.nodes)
    }
    
    function onCopy(event, change, editor) { 
        if (!IS_IE && selectionContainsStructuredData(change.value, change.value.selection)) { 
            let fluxString = convertToText(change.value, change.value.selection);
            cloneFragment(event, change.value, fluxString) 
            event.preventDefault();
            return change.value;
        } else { 
            console.log('not going to copy')
            return null;
        }
    }
    /**
     * Get one of types `TYPES.FRAGMENT`, `TYPES.NODE`, `text/html`, `text/rtf` or
     * `text/plain` from transfers's `data` if possible, otherwise return null.
     *
     * @param {Object} transfer
     * @param {String} type
     * @return {String}
     */

    function getType(transfer, type) {
        if (!transfer.types || !transfer.types.length) {
        // COMPAT: In IE 11, there is no `types` field but `getData('Text')`
        // is supported`. (2017/06/23)
        return type == TEXT ? transfer.getData('Text') || null : null
        }
    
        // COMPAT: In Edge, transfer.types doesn't respond to `indexOf`. (2017/10/25)
        const types = Array.from(transfer.types)
    
        return types.indexOf(type) !== -1 ? transfer.getData(type) || null : null
    }
    /**
     * The transfer types that Slate recognizes.
     *
     */
    const FRAGMENT = 'application/x-slate-fragment';
    const HTML = 'text/html';
    const NODE = 'application/x-slate-node';
    const RICH = 'text/rtf';
    const TEXT = 'text/plain';

    /**
     * Get the type of a transfer from its `data`.
     *
     * @param {Object} data
     * @return {String}
     */

    function getTransferType(data) {
        if (data.fragment) return 'fragment'
        if (data.node) return 'node'
    
        // COMPAT: Microsoft Word adds an image of the selected text to the data.
        // Since files are preferred over HTML or text, this would cause the type to
        // be considered `files`. But it also adds rich text data so we can check
        // for that and properly set the type to `html` or `text`. (2016/11/21)
        if (data.rich && data.html) return 'html'
        if (data.rich && data.text) return 'text'
    
        if (data.files && data.files.length) return 'files'
        if (data.html) return 'html'
        if (data.text) return 'text'
        return 'unknown'
    }
    
    /**
     * Takes text input, checks whether contains embedded data
     * and returns object with original text +/- additional data
     *
     * @param {String} text
     * @return {Object}
     */
    function getEmbeddedTypes(text) {
        const prefix = 'SLATE-DATA-EMBED::'
    
        if (text.substring(0, prefix.length) != prefix) {
            return { TEXT: text }
        }
    
        // Attempt to parse, if fails then just standard text/plain
        // Otherwise, already had data embedded
        try {
           return JSON.parse(text.substring(prefix.length))
        } catch (err) {
            throw new Error('Unable to parse custom Slate drag event data.')
        }
    }
    const FLUX_FRAGMENT_MATCHER = / flux-string="([^\s"]+)"/

    /**
     * Get the transfer data from an `event`.
     *
     * @param {Event} event
     * @return {Object}
     */
    function getEventTransfer(event) {
        // COMPAT: IE 11 doesn't populate nativeEvent with either
        // dataTransfer or clipboardData. We'll need to use the base event
        // object (2018/14/6)
        if (!IS_IE && event.nativeEvent) {
          event = event.nativeEvent;
        }
      
        const transfer = event.dataTransfer || event.clipboardData
        let fragment = getType(transfer, FRAGMENT)
        let node = getType(transfer, NODE)
        const html = getType(transfer, HTML)
        const rich = getType(transfer, RICH)
        let text = getType(transfer, TEXT)
        let files      
      
        // If there isn't a fragment, but there is HTML, check to see if the HTML is
        // actually an encoded fragment.
        if (!fragment && html && ~html.indexOf(' flux-string="')) {
            const matches = FLUX_FRAGMENT_MATCHER.exec(html)
            const [full, encoded] = matches // eslint-disable-line no-unused-vars
            if (encoded) fragment = encoded
        }

        // COMPAT: Edge doesn't handle custom data types
        // These will be embedded in text/plain in this case (2017/7/12)
        if (text) {
            const embeddedTypes = getEmbeddedTypes(text)
            if (embeddedTypes[FRAGMENT]) fragment = embeddedTypes[FRAGMENT]
            if (embeddedTypes[NODE]) node = embeddedTypes[NODE]
            if (embeddedTypes[TEXT]) text = embeddedTypes[TEXT]
        }
      
        // Decode a fragment or node if they exist.
        // if (fragment) fragment = Base64.deserializeNode(fragment);
        if (fragment) fragment = window.decodeURIComponent(window.atob(fragment));
        // if (node) node = Base64.deserializeNode(node);
        if (node) node = window.decodeURIComponent(window.atob(node));
      
        // COMPAT: Edge sometimes throws 'NotSupportedError'
        // when accessing `transfer.items` (2017/7/12)
        try {
            // Get and normalize files if they exist.
            if (transfer.items && transfer.items.length) {
            files = Array.from(transfer.items)
                .map(item => (item.kind == 'file' ? item.getAsFile() : null))
                .filter(exists => exists)
            } else if (transfer.files && transfer.files.length) {
            files = Array.from(transfer.files)
            }
        } catch (err) {
            if (transfer.files && transfer.files.length) {
            files = Array.from(transfer.files)
            }
        }
        // Determine the type of the data.
        const data = { files, fragment, html, node, rich, text }
        data.type = getTransferType(data)
        return data
    }

    function onPaste(event, change, editor) { 
        const transfer = getEventTransfer(event);
        const html = transfer.html;
        if (
            html
            && ~html.indexOf(' flux-string="')) {
            const matches = FLUX_FRAGMENT_MATCHER.exec(html);
            const [ full, encoded ] = matches; // eslint-disable-line no-unused-vars
            const decoded = window.decodeURIComponent(window.atob(encoded));
            // if (fragment) fragment = window.decodeURIComponent(window.atob(fragment));
            // if (node) node = window.decodeURIComponent(window.atob(node));
          
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
            return change;
        } else { 
            return null;
        }
    }

    function onCut(event, change, editor) {
        const changeOccured = this.onCopy(event, change, editor); 
        if (changeOccured === null) { 
            // If there's no change, skip; 
            return null
        } else { 
            // Else, after the fake cut content has successfully been added to the clipboard,
            // delete the content in the current selection.
            const window = getWindow(event.target)
    
            window.requestAnimationFrame(() => {
                // If user cuts a void block node or a void inline node,
                // manually removes it since selection is collapsed in this case.
                const { value } = change
                const { endBlock, endInline, isCollapsed } = value
                const isVoidBlock = endBlock && endBlock.isVoid && isCollapsed
                const isVoidInline = endInline && endInline.isVoid && isCollapsed
        
                if (isVoidBlock) {
                    editor.change(c => c.removeNodeByKey(endBlock.key))
                } else if (isVoidInline) {
                    editor.change(c => c.removeNodeByKey(endInline.key))
                } else {
                    editor.change(c => c.delete())
                }
            });
            return change.value
        }
    }
    
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
    // console.log('insertSrtcutred Field')
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
    const properties = {
        type:  structuredFieldType,
        nodes: nodes,
        isVoid: true,
        data: {
            shortcut: shortcut,
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
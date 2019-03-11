import Placeholder from '../shortcuts/Placeholder';
import InsertValue from '../shortcuts/InsertValue';
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

function stopEventPropagation(e) {
    // Prevent native event handling in Slate
    // Used for inserting text inside an inserter shortcut
    e.preventDefault();
    e.stopPropagation();
}

function applyMarks(marks, transform) {
    marks.forEach(mark => {
        transform = transform.toggleMark(mark.type);
    });
    return transform;
}

function updateShortcut(shortcut, transform, key, label, text) {
    shortcut.setOriginalText(label);
    shortcut.setText(text);
    transform = transform.setNodeByKey(key, {
        data: { shortcut }
    });
    return transform;
}

function updateMaps(shortcut, opts) {
    opts.structuredFieldMapManager.keyToShortcutMap.set(shortcut.getKey(), shortcut);
    opts.structuredFieldMapManager.idToShortcutMap.set(shortcut.uniqueId, shortcut);
    opts.structuredFieldMapManager.idToKeysMap.set(shortcut.uniqueId, [shortcut.getKey()]);
}

function StructuredFieldPlugin(opts) {
    opts = createOpts(opts);
    let contextManager = opts.contextManager;
    let updateErrors = opts.updateErrors;
    let insertText = opts.insertText;
    const clearStructuredFieldMap = opts.structuredFieldMapManager.clearStructuredFieldMap;
    const createShortcut = opts.createShortcut;

    function onKeyDown(e, key, state, editor) {
        const {selection} = state;
        // We want to consider where the cursor is focused if an expanded selection
        const useFocusKey = selection.isExpanded && selection.isBackward;
        const selectionKey = useFocusKey ? selection.focusKey : selection.anchorKey;
        const parentNode = state.document.getParent(selectionKey);
        const shortcut = parentNode.data.get('shortcut');

        // If the previous node is not an inserter,
        // delete the full node when hitting backspace right before it, as it is not editable.
        const previousNode = state.document.getPreviousSibling(state.selection.anchorKey);
        
        if (e.key === 'Backspace' && previousNode) {
            if (previousNode.type === 'structured_field'
                && !(previousNode.data.get('shortcut') instanceof InsertValue)
                && state.selection.anchorOffset === 0 && state.selection.isCollapsed) {
                let transform = state.transform();
                transform = transform.removeNodeByKey(previousNode.key);
                let newState = transform.apply();
                return newState;
            }
        } else if (e.keyCode === 37 && previousNode){
            if(previousNode.type === 'structured_field') {
                let transform = state.transform();
                transform = transform.collapseToStart(previousNode);
                let newState = transform.apply();
                return newState;
            }
        } else if (e.keyCode === 39 && parentNode){
            if ((parentNode.type === 'structured_field') && !(shortcut instanceof InsertValue)) {
                let transform = state.transform();
                transform = transform.collapseToStartOfNextText();
                let newState = transform.apply();
                return newState;
            }
        }

        if (!(shortcut instanceof InsertValue)) return;

        // Arrow keys, shift, escape, tab, numlock, page up/down, etc
        let ignoredKeys = [8, 9, 12, 16, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 93, 144, 145];
        const fKeys = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124];
        ignoredKeys = ignoredKeys.concat(fKeys);
        const { isAlt, isCmd, isCtrl, isLine, isMeta, isMod, isModAlt, isWord } = key;
        const isModifier = isAlt || isCmd || isCtrl || isLine || isMeta || isMod || isModAlt || isWord;

        // Override native typing when typing inside a structured field
        if (shortcut && !Lang.includes(ignoredKeys, e.keyCode) && !isModifier && e.key !== 'Enter') {
            stopEventPropagation(e);

            // Split the inline and insert typed text into new text node
            let transform = state.transform();
            transform = transform.splitInline();
            let newTextNode;
            const key = useFocusKey ? transform.state.selection.focusKey : transform.state.selection.anchorKey;

            // If we expand selection into a different node, text will be deleted
            // We want the cursor to go to the next text in this case instead of the empty zero-width node
            if (selection.isExpanded && selection.focusKey !== selection.anchorKey) {
                newTextNode = transform.state.document.getNextText(key);
            } else {
                newTextNode = transform.state.document.getPreviousText(key);
            }

            transform = transform.collapseToEndOf(newTextNode);
            transform = applyMarks(state.marks, transform);
            transform = transform.insertText(e.key);

            // Create a new shortcut with the trailing shortcut text after split
            const newShortcutNode = transform.state.document.getNextSibling(newTextNode.key);
            let newShortcutId = null;

            // Ignore updating the latter split shortcut if it is deleted by typing a character
            if (newShortcutNode) {
                let shortcutText = newShortcutNode.text;
                if (shortcut.valueObject) {
                    shortcutText = `{"text": "${newShortcutNode.text}", "entryId": "${shortcut.valueObject.entryInfo.entryId}"}`;
                }
                const newShortcut = createShortcut(shortcut.metadata, shortcut.initiatingTrigger, shortcutText, true, shortcut.getSource());
                newShortcut.setKey(newShortcutNode.key);
                newShortcut.setPrevAssociatedShortcutId(shortcut.uniqueId);
                newShortcut.setNextAssociatedShortcutId(shortcut.getNextAssociatedShortcutId());
                newShortcutId = newShortcut.uniqueId;
                transform = updateShortcut(newShortcut, transform, newShortcutNode.key, shortcut.getLabel(), newShortcutNode.text);
                if (shortcut.wasRemovedFromContext) {
                    contextManager.removeShortcutFromContext(newShortcut);
                    newShortcut.setWasRemovedFromContext(true);
                }
                updateMaps(newShortcut, opts);
            }

            // Update the existing shortcut to reflect the leading text after split
            const oldShortcutNode = transform.state.document.getPreviousSibling(newTextNode.key);
            const oldShortcutsNextAssociatedShortcutId = shortcut.getNextAssociatedShortcutId();

            // In the case where there is no prior shortcut node in this block
            // nothing needs to be updated
            if (oldShortcutNode) {
                shortcut.setNextAssociatedShortcutId(newShortcutId);
                transform = updateShortcut(shortcut, transform, oldShortcutNode.key, shortcut.getLabel(), oldShortcutNode.text);
                if (newShortcutNode) {
                    contextManager.removeShortcutFromContext(shortcut);
                    shortcut.setWasRemovedFromContext(true);
                }
            }

            if (oldShortcutsNextAssociatedShortcutId) {
                const trailingThirdShortcut = opts.structuredFieldMapManager.idToShortcutMap.get(oldShortcutsNextAssociatedShortcutId);
                trailingThirdShortcut.setPrevAssociatedShortcutId(newShortcutId);
                const thirdShortcutKey = trailingThirdShortcut.getKey();
                transform = transform.setNodeByKey(thirdShortcutKey, {
                    data: {
                        shortcut: trailingThirdShortcut
                    }
                });
            }

            contextManager.contextUpdated();

            transform = transform.apply();
            editor.onChange(transform);
        } else if (shortcut && e.key === 'Enter') {
            stopEventPropagation(e);

            // Get the current shortcut node before splitting the block
            const oldShortcutNode = state.document.getParent(state.selection.anchorKey);

            // Split block and move focus into the new text node
            let transform = state.transform().splitBlock();
            const key = transform.state.selection.anchorKey;
            const newTextNode = transform.state.document.getPreviousText(key);
            transform = transform.collapseToEndOf(newTextNode);
            transform = applyMarks(state.marks, transform);

            // Create a new shortcut with the trailing shortcut text after split
            const newShortcutNode = transform.state.document.getNextSibling(newTextNode.key);
            let shortcutText = newShortcutNode.text;
            if (shortcut.valueObject) {
                shortcutText = `{"text": "${newShortcutNode.text}", "entryId": "${shortcut.valueObject.entryInfo.entryId}"}`;
            }
            const newShortcut = createShortcut(shortcut.metadata, shortcut.initiatingTrigger, shortcutText, true, shortcut.getSource());
            newShortcut.setKey(newShortcutNode.key);
            newShortcut.setPrevAssociatedShortcutId(shortcut.uniqueId);
            newShortcut.setNextAssociatedShortcutId(shortcut.getNextAssociatedShortcutId());
            const newShortcutId = newShortcut.uniqueId;
            transform = updateShortcut(newShortcut, transform, newShortcutNode.key, shortcut.getLabel(), newShortcutNode.text);
            if (shortcut.wasRemovedFromContext) {
                contextManager.removeShortcutFromContext(newShortcut);
                newShortcut.setWasRemovedFromContext(true);
            }

            // Update the existing shortcut to reflect the leading text after split
            const oldShortcutsNextAssociatedShortcutId = shortcut.getNextAssociatedShortcutId();
            shortcut.setNextAssociatedShortcutId(newShortcutId);
            transform = updateShortcut(shortcut, transform, parentNode.key, shortcut.getLabel(), oldShortcutNode.text);
            contextManager.removeShortcutFromContext(shortcut);
            shortcut.setWasRemovedFromContext(true);

            if (oldShortcutsNextAssociatedShortcutId) {
                const trailingThirdShortcut = opts.structuredFieldMapManager.idToShortcutMap.get(oldShortcutsNextAssociatedShortcutId);
                trailingThirdShortcut.setPrevAssociatedShortcutId(newShortcutId);
                const thirdShortcutKey = trailingThirdShortcut.getKey();
                transform = transform.setNodeByKey(thirdShortcutKey, {
                    data: {
                        shortcut: trailingThirdShortcut
                    }
                });
            }

            transform = transform.apply();

            updateMaps(newShortcut, opts);
            contextManager.contextUpdated();

            editor.onChange(transform);
        }
    }

    function getAllStructuredFields(nodes) {
        let allStructuredFields = [];
        nodes.forEach(node => {
            if (node.type === 'structured_field' || node.type === 'placeholder') {
                allStructuredFields.push(node);
            }
            if (node.nodes) {
                allStructuredFields = allStructuredFields.concat(getAllStructuredFields(node.nodes));
            }
        });
        return allStructuredFields;
    }

    function onChange(state, editor) {
        var deletedKeys = [];
        const keyToShortcutMap = opts.structuredFieldMapManager.keyToShortcutMap;
        const idToShortcutMap = opts.structuredFieldMapManager.idToShortcutMap;
        const idToKeysMap = opts.structuredFieldMapManager.idToKeysMap;
        const nodes = getAllStructuredFields(state.document.toJSON().nodes);

        if (nodes.length !== keyToShortcutMap.size) {
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
                if (shortcut instanceof Placeholder) {
                    opts.structuredFieldMapManager.removePlaceholder(shortcut);
                }
                keyToShortcutMap.delete(key);
                idToShortcutMap.delete(shortcut.uniqueId);
                const updatedShortcutKeys = idToKeysMap.get(shortcut.uniqueId).filter(k => k !== key);
                idToKeysMap.set(shortcut.uniqueId, updatedShortcutKeys);

                // Reset context on previous shortcut when deleting the piece of a shortcut that set the context
                // and another piece is before it.
                // Otherwise, update the previous and next associated shortcuts of neighboring shortcuts to reflect deletion.
                if (!shortcut.wasRemovedFromContext && shortcut.getPrevAssociatedShortcutId()) {
                    const shortcutToSetContext = idToShortcutMap.get(shortcut.getPrevAssociatedShortcutId());
                    shortcutToSetContext.setNextAssociatedShortcutId(null);
                    shortcutToSetContext.setWasRemovedFromContext(false);
                    contextManager.addShortcutToContext(shortcutToSetContext);
                } else {
                    const previousShortcutId = shortcut.getPrevAssociatedShortcutId();
                    const nextShortcutId = shortcut.getNextAssociatedShortcutId();
                    if (previousShortcutId) {
                        const previousShortcut = idToShortcutMap.get(previousShortcutId);
                        previousShortcut.setNextAssociatedShortcutId(nextShortcutId);
                    }
                    if (nextShortcutId) {
                        const nextShortcut = idToShortcutMap.get(nextShortcutId);
                        nextShortcut.setPrevAssociatedShortcutId(previousShortcutId);
                    }
                }

                contextManager.contextUpdated();
            } else {
                result = editor.getState(); // don't allow state change
                updateErrors([ "Unable to delete " + shortcut.getLabel() + " because " + shortcut.getChildren().map((child) => { return child.getText(); }).join() + " " + ((shortcut.getChildren().length > 1) ? "depend" : "depends") + " on it." ]);
            }
        });
        return result;
    }

    // Added a zero-width-space at the end of the structured field so Safari doesn't think we are still typing in a
    // structured field once one has been inserted
    const safariSpacing = Slate.IS_SAFARI ? '\u200B' : '';

    const schema = {
        nodes: {
            structured_field: props => {
                const shortcut = props.node.get('data').get('shortcut');
                if (shortcut instanceof InsertValue) {
                    return <span className='structured-field-inserter' {...props.attributes}>{props.children}{safariSpacing}</span>;
                } else {
                    return <span contentEditable={false} className='structured-field-creator' {...props.attributes}>{props.children}{safariSpacing}</span>;
                }
            },
            bolded_structured_field: props => {
                const shortcut = props.node.get('data').get('shortcut');
                if (shortcut instanceof InsertValue) {
                    return <span className='structured-field-inserter structured-field-bolded' {...props.attributes}>{props.children}{safariSpacing}</span>;
                } else {
                    return <span contentEditable={false} className='structured-field-creator structured-field-bolded' {...props.attributes}>{props.children}</span>;
                }
            },
            structured_field_selected_search_result: props => {
                const shortcut = props.node.get('data').get('shortcut');
                if (shortcut instanceof InsertValue) {
                    return <span className='structured-field-inserter structured-field-selected-search-result' {...props.attributes}>{props.children}{safariSpacing}</span>;
                } else {
                    return <span contentEditable={false} className='structured-field-creator structured-field-selected-search-result' {...props.attributes}>{props.children}</span>;
                }
            },
            structured_field_search_result: props => {
                const shortcut = props.node.get('data').get('shortcut');
                if (shortcut instanceof InsertValue) {
                    return <span className='structured-field-inserter structured-field-search-result' {...props.attributes}>{props.children}{safariSpacing}</span>;
                } else {
                    return <span contentEditable={false} className='structured-field-creator structured-field-search-result' {...props.attributes}>{props.children}</span>;
                }
            },
            placeholder: props => {
                const placeholder = props.node.get('data').get('placeholder');
                const textToDisplay = placeholder.getTextWithStylingToDisplayInNote();

                // Check if textToDisplay is an object or not. If it is an object, then getTextWithStylingToDisplayInNote returned html
                if (typeof textToDisplay === "object") {
                    // Use dangerouslySetInnerHTML to set html
                    return <span contentEditable={false} className='placeholder'><span dangerouslySetInnerHTML={placeholder.getTextWithStylingToDisplayInNote()}/> </span>;
                } else {
                    return <span contentEditable={false} className='placeholder'>{placeholder.getTextWithStylingToDisplayInNote()}</span>;
                }
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
                const shortcut = node.data.shortcut;
                if (shortcut instanceof InsertValue) {
                    // Inserters have characters as their children. Use characters to get current text in the node.
                    result += shortcut.getResultText(node.nodes[0].characters.map(c => c.text).join(''));
                } else {
                    result += shortcut.getResultText();
                }
            } else if (node.type === 'placeholder') {
                result += node.data.placeholder.getResultText();
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

    function convertToText(fragment) {
        return `${convertSlateNodesToText(fragment.toJSON().nodes)}`;
    }

    function onCopy(event, data, state, editor) {
        const window = getWindow(event.target);
        const native = window.getSelection();
        const { endBlock, endInline, document, selection } = state;
        const isVoidBlock = Boolean(endBlock && endBlock.isVoid);
        const isVoidInline = Boolean(endInline && endInline.isVoid);
        const isVoid = isVoidBlock || isVoidInline;
        const { focusKey, anchorKey, focusOffset, anchorOffset } = selection;

        // If the selection is collapsed, and it isn't inside a void node, abort.
        if (native.isCollapsed && !isVoid) return;

        // If the selection is backward, we care about where the selection is focused.
        // Otherwise, we care about the anchor of the selection
        let selectionKey, selectionOffset, moveMethod;
        if (selection.isBackward) {
            selectionKey = focusKey;
            selectionOffset = focusOffset;
            moveMethod = 'moveFocusToEndOf';
        } else {
            selectionKey = anchorKey;
            selectionOffset = anchorOffset;
            moveMethod = 'moveAnchorToEndOf';
        }

        // Get the parent of the Text where the selection is focused or anchored
        const selectionNode = document.getParent(selectionKey);

        // If the selection is focused or anchored at the beginning of a structured field,
        // we want to extend the selection to the text node before the SF
        let fluxString = '';
        if (selectionNode.type === 'structured_field' && selectionOffset === 0) {
            const previousText = document.getPreviousText(selectionKey);
            const newState = state.transform()[moveMethod](previousText).apply();
            fluxString = convertToText(newState.fragment);
        } else {
            fluxString = convertToText(data.fragment);
        }

        const encoded = window.btoa(window.encodeURIComponent(fluxString));
        const range = native.getRangeAt(0);
        let contents = range.cloneContents();
        let attach = contents.childNodes[0];

        // If the end node is a void node, we need to move the end of the range from
        // the void node's spacer span, to the end of the void node's content.
        if (isVoid) {
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
            const span = window.document.createElement('span');
            span.appendChild(attach);
            contents.appendChild(span);
            attach = span;
        }

        //'data-slate-fragment'
        attach.setAttribute('flux-string', encoded);
        if (contents.childNodes.length > 1) {
            contents.childNodes[1].setAttribute('flux-string', encoded);
            if (state.selection.focusOffset === 0) {
                // Reset contenteditable prop to make copy work for editable structured fields
                contents.childNodes[1].setAttribute('contenteditable', false);
            }
        }

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
            // because insertion of shortcuts into the context relies on the current selection, during a paste
            // we override the routine that checks the location of a structured field relative to the selection
            // since we know we are inserting from left to right always. Make sure we restore the normal method
            // when done
            // NoteParser also overrides this function since there is no slate
            const saveIsBlock1BeforeBlock2 = contextManager.getIsBlock1BeforeBlock2();
            contextManager.setIsBlock1BeforeBlock2(() => { return false; });
            insertText(decoded, undefined, true, 'paste');
            contextManager.setIsBlock1BeforeBlock2(saveIsBlock1BeforeBlock2);
            event.preventDefault();
            return state;
        } else if (data.text) {
            event.preventDefault();
            insertText(data.text, undefined, true, 'paste');
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
        onKeyDown,
        onChange,
        onCut,
        onCopy,
        onPaste,
        schema,
        convertToText,

        utils: {
            //isSelectionInStructuredField
            convertSlateNodesToText: convertSlateNodesToText

        },

        transforms: {
            insertStructuredField:      	insertStructuredField.bind(null, opts),
            updateStructuredField:          updateStructuredField.bind(null, opts),
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
    // insertStructuredField originally called insertStructuredFieldAtRange but reverted back to old implementation due to new lines being added
    // return insertStructuredFieldAtRange(opts, transform, shortcut, transform.state.selection)
    const { state } = transform;
    if (!state.selection.startKey) return false;

    // Create the structured-field node
    const sfs = createStructuredField(opts, shortcut);
    sfs.forEach((sf, i) => {
        shortcut.setKey(sf.key);
        if (sf.kind === 'block') {
            transform = transform.insertBlock(sf);
        } else {
            transform = transform.insertInline(sf);
        }
    });
    return [transform, ""];
}

function insertStructuredFieldAtRange(opts, transform, shortcut, range) {
    if (!range.startKey) return false;

    // Create the structured-field node
    const sfs = createStructuredField(opts, shortcut);
    sfs.forEach(sf => {
        shortcut.setKey(sf.key);
        if (sf.kind === 'block') {
            transform = transform.insertBlockAtRange(range, sf);
        } else {
            transform = transform.insertInlineAtRange(range, sf);
        }
    });
    
    return [transform, ""]
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
    let nodes = [Slate.Text.createFromString(String(shortcut.getText()))];
    const isInserter = shortcut instanceof InsertValue;
    if (isInserter) {
        const lines = String(shortcut.getText()).split(/\n\r|\r\n|\r|\n/g);
        let textNodes = [];
        let inlines = [];
        lines.forEach((line, i) => {
            textNodes = [Slate.Text.create({
                characters: Slate.Character.createListFromText(line)
            })];

            const properties = {
                type: opts.typeStructuredField,
                nodes: textNodes,
                data: {
                    shortcut: shortcut
                }
            };

            const inlineNode = Slate.Inline.create(properties);
            let sf;
            if (lines.length === 1) {
                sf = inlineNode;
            } else {
                sf = Slate.Block.create({
                    type: 'line',
                    nodes: [inlineNode],
                });
            }
            opts.structuredFieldMapManager.keyToShortcutMap.set(inlineNode.key, shortcut);

            const shortcutKeys = opts.structuredFieldMapManager.idToKeysMap.get(shortcut.uniqueId) || [];
            shortcutKeys.push(inlineNode.key);
            opts.structuredFieldMapManager.idToKeysMap.set(shortcut.uniqueId, shortcutKeys);

            inlines.push(sf);
        });
        opts.structuredFieldMapManager.idToShortcutMap.set(shortcut.uniqueId, shortcut);
        return inlines;
    }

    const properties = {
        type: opts.typeStructuredField,
        nodes: nodes,
        data: {
            shortcut: shortcut
        }
    };
    let sf = Slate.Inline.create(properties);
    opts.structuredFieldMapManager.keyToShortcutMap.set(sf.key, shortcut);
    opts.structuredFieldMapManager.idToShortcutMap.set(shortcut.uniqueId, shortcut);
    const shortcutKeys = opts.structuredFieldMapManager.idToKeysMap.get(shortcut.uniqueId) || [];
    shortcutKeys.push(sf.key);
    opts.structuredFieldMapManager.idToKeysMap.set(shortcut.uniqueId, shortcutKeys);
    return [sf];
}

function deleteNode(node, transform, isLastBlock) {
    transform = transform.moveToRangeOf(node).deleteBackward();
    if (!isLastBlock) transform = transform.deleteBackward();
    return transform;
}

function updateStructuredField(opts, transform, shortcut) {
    const keyToShortcutMap = opts.structuredFieldMapManager.keyToShortcutMap;
    const idToShortcutMap = opts.structuredFieldMapManager.idToShortcutMap;
    const idToKeysMap = opts.structuredFieldMapManager.idToKeysMap;
    const allKeysForShortcut = idToKeysMap.get(shortcut.uniqueId);
    const contextManager = opts.contextManager;
    if (shortcut.onBeforeDeleted()) {
        if (shortcut instanceof Placeholder) {
            opts.structuredFieldMapManager.removePlaceholder(shortcut);
        }
        allKeysForShortcut.forEach(key => {
            keyToShortcutMap.delete(key);
        });
        idToShortcutMap.delete(shortcut.uniqueId);
        contextManager.contextUpdated();
    }

    const newShortcut = opts.createShortcut(shortcut.metadata, shortcut.initiatingTrigger, shortcut.getText(), true, shortcut.getSource());

    allKeysForShortcut.forEach((key, i) => {
        const shortcutNode = transform.state.document.getNode(key);
        transform = deleteNode(shortcutNode, transform, i === allKeysForShortcut.length - 1);
    });
    // Clear key map after deleting
    idToKeysMap.delete(shortcut.uniqueId);

    const newShortcuts = insertStructuredField(opts, transform, newShortcut);
    transform = newShortcuts[0].moveToEnd();
    return transform;
}

function insertPlaceholder(opts, transform, placeholder) {
    const { state } = transform;
    if (!state.selection.startKey) return false;

    // Create the placeholder node
    const sf = createPlaceholderStructuredField(opts, placeholder);
    placeholder.setKey(sf.key);

    if (sf.kind === 'block') {
        return [transform.insertBlock(sf)];
    } else {
        return [transform.insertInline(sf)];
    }
}

function createPlaceholderStructuredField(opts, placeholder) {
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
    opts.structuredFieldMapManager.keyToShortcutMap.set(sf.key, placeholder);
    opts.structuredFieldMapManager.idToShortcutMap.set(placeholder.uniqueId, placeholder);
    opts.structuredFieldMapManager.idToKeysMap.set(placeholder.uniqueId, [sf.key]);
    opts.structuredFieldMapManager.addPlaceholder(placeholder);
    return sf;
}

export default StructuredFieldPlugin;
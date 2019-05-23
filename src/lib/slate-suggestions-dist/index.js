import React from 'react'
import Portal from './suggestion-portal'
import {
    UP_ARROW_KEY,
    DOWN_ARROW_KEY,
    ENTER_KEY
} from './constants'

function getAllTextExceptIgnoredTypes(node, typesToIgnore) { 
    let text = '';
    // Only look at this node or it's children if its type is not one of the ignored ones
    if (typesToIgnore.indexOf(node.type) === -1) {
        if (node.kind === 'text') {
            // If this is a text node, accumulate the text
            text += node.text
        } else {
            // Else, if this node has any children then recursively look at those too
            if (node.nodes) {
                node.nodes.forEach((curNode) => {
                    text += getAllTextExceptIgnoredTypes(curNode, typesToIgnore);
                });
            }
        }
    }
    return text;
}

function matchTrigger(state, trigger, typesToIgnore) {
    // Get the first block
    const currentNode = state.blocks.first();
    // Get the text for all nodes except those we ignore 
    const potentialText = getAllTextExceptIgnoredTypes(currentNode, typesToIgnore)

    return state.isFocused && trigger.test(potentialText)
}

function SuggestionsPlugin(opts) {
    const capture = opts.capture
    const callback = {}

    function onKeyDown(e, data, state, editor) {
        const keyCode = e.keyCode
        callback.editor = editor

        if (matchTrigger(state, capture, opts.typesToIgnore)) {
            // Prevent default up and down arrow key press when portal is open
            if ((keyCode === UP_ARROW_KEY || keyCode === DOWN_ARROW_KEY)) {
                e.preventDefault()
            }

            // Prevent default return/enter key press when portal is open
            if (keyCode === ENTER_KEY) {
                e.preventDefault()
                // Handle enter
                if (callback.onEnter && callback.suggestion !== undefined) {
                    const newEditorState =  callback.onEnter(callback.suggestion)

                    // Close portal -- resets suggestion to default, so must be done after onEnter
                    if (callback.closePortal) {
                        callback.closePortal()
                    }
                    return newEditorState
                } else { 
                    // Close portal
                    if (callback.closePortal) {
                        callback.closePortal()
                    }
                }
            } else {
                if (callback.onKeyDown) {
                    callback.onKeyDown(keyCode, data);
                }
            }
        }
    }

    return {
        onKeyDown,
        SuggestionPortal: (props) => {
            return (
                <Portal
                    {...props}
                    {...opts}
                    callback={callback}
                />
            );
        }
    }
}

export default SuggestionsPlugin

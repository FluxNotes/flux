import React from 'react'
import Portal from './suggestion-portal'
import {
    UP_ARROW_KEY,
    DOWN_ARROW_KEY,
    ENTER_KEY
} from './constants'

function matchTrigger(editorValue, trigger) {
    const currentNode = editorValue.blocks.first()

    return editorValue.isFocused && trigger.test(currentNode.text)
}

function SuggestionsPlugin(opts) {
    const capture = opts.capture
    const callback = {}

    function onKeyDown(event, change, editor) {
        const keyCode = event.keyCode
        callback.editor = editor

        if (matchTrigger(change.value, capture)) {
            // Prevent default up and down arrow key press when portal is open
            if ((keyCode === UP_ARROW_KEY || keyCode === DOWN_ARROW_KEY)) {
                event.preventDefault()
            }

            // Prevent default return/enter key press when portal is open
            if (keyCode === ENTER_KEY) {
                event.preventDefault()
                // Handle enter
                if (callback.onEnter && callback.suggestion !== undefined) {
                    const newEditorState =  callback.onEnter(change, callback.suggestion)

                    // Close portal -- resets suggestion to default, so must be done after onEnter
                    if (callback.closePortal) {
                        callback.closePortal()
                    }
                    // return newEditorState
                } else { 
                    // Close portal
                    if (callback.closePortal) {
                        callback.closePortal()
                    }
                }
                return true;
            } else {
                if (callback.onKeyDown) {
                    callback.onKeyDown(event);
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

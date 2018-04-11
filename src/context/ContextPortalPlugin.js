import React from 'react'
import Portal from './ContextPortal'
import {
    UP_ARROW_KEY,
    DOWN_ARROW_KEY,
    ENTER_KEY
} from '../lib/slate-suggestions-dist/constants'



function ContextPortalPlugin(opts) {

    const callback = {}

    function onKeyDown(e, data, state, editor) {


        if(!callback.isPortalOpen()) {
            return;
        }
        const keyCode = e.keyCode

        console.log("In context portal plugin's key down: " + keyCode);
        callback.editor = editor


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



    return {
        onKeyDown,
        ContextPortal: (props) => {
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

export default ContextPortalPlugin

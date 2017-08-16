import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from 'material-ui/Button';
import Lang from 'lodash'
import './ShortcutViewer.css';

class ShortcutViewer extends Component {
    /* 
     * Returns JSX element for the initial, no-shorcut state
     */ 
    _getInitialState(initialString) {
        return (
            <span>Choose a template from the left panel</span>
        );
    }

    /* 
     * Returns JSX element for the copy component
     */ 
    _getCopyComponent(string) {
        return (
            <CopyToClipboard text={string}>
                <Button raised
                    className="btn_copy"
                    labelStyle={{
                        textTransform: "none",
                    }}
                    buttonStyle={{
                        textAlign: "left",
                        height: "45px",
                    }}
                    overlayStyle={{
                        padding: "5px 0 4px 0"
                    }}
                    style={{
                        minWidth: "99.8%"                        
                    }}
                    fullWidth={true}
                >
                    <div id="copy-keyword">
                        Copy
                    </div>
                    <div id="copy-content">
                        {string}
                    </div>
                </Button>
            </CopyToClipboard>
        );
    }

    render() {
        let string = "";
        let copyComponent = null;
        let panelContent = null;

        // If there is a currentShortcut, use it in the copy component
        if (this.props.currentShortcut) {
            string = this.props.currentShortcut.getAsString();
            copyComponent = this._getCopyComponent(string);
        }

        // If there is a currentShortcut, display its form; else display initialState
        if (!Lang.isNull(this.props.currentShortcut)) {
            panelContent = this.props.currentShortcut.getForm();
        } else {
            panelContent = this._getInitialState();
        }

        return (
            <div id="shortcut-viewer">
                {panelContent}
                <br/>
                {copyComponent}
            </div>
        )
    }

    
}

export default ShortcutViewer;

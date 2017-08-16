// React imports
import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

// material-ui
import Button from 'material-ui/Button';

// Lodash component
import Lang from 'lodash'

// Styling
import './ShortcutViewer.css';

class ShortcutViewer extends Component {

    render() {

        let string = "";
        let copyComponent = null;
        let panelContent = null;

        if (this.props.currentShortcut) {
            string = this.props.currentShortcut.getAsString();
            copyComponent = this._getCopyComponent(string);
        }

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

    _getInitialState(initialString) {
        return (
            <span>Choose a template from the left panel</span>
        );
    }

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
                        // padding: "5px 0"
                    }}
                    overlayStyle={{
                        padding: "5px 0 4px 0"
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
}

export default ShortcutViewer;

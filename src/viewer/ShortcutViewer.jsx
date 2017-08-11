// React imports
import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

// material-ui
import RaisedButton from 'material-ui/RaisedButton';

// Lodash component
import Lang from 'lodash'

// Styling
import './ShortcutViewer.css';

class ShortcutViewer extends Component {

    render() {

        let string = "";
        let initialString = "Choose a template from the left panel";
        let copyComponent = null;

        if (this.props.currentShortcut == null) {
            copyComponent = null;

        }
        else {
            if (this.props.currentShortcut) {
                string = this.props.currentShortcut.getAsString();
                copyComponent = this._getCopyComponent(string);
            }
        }

        let panelContent = null;
        if (!Lang.isNull(this.props.currentShortcut)) {
            panelContent = this.props.currentShortcut.getForm();
        } else {
            panelContent = this._getInitialState(initialString);
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
            <span>{initialString}</span>
        );
    }

    _getCopyComponent(string) {
        return (
            <CopyToClipboard text={string}>
                <RaisedButton
                    className="btn_copy"
                    labelStyle={{textTransform: "none"}}
                    containerElement="copy-container"

                >
                    <div id="copy-keyword">
                        Copy
                    </div>
                    <div id="copy-content">
                        {string}
                    </div>
                </RaisedButton>
            </CopyToClipboard>
        );
    }
}

export default ShortcutViewer;

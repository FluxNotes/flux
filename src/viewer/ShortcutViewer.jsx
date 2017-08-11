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
        let copyString = "COPY | ";
        let copyComponent = null;
        let disableCopyButton = true;
        let copyKeywordClass = "copy-keyword-disabled";
        let copyContentClass = "copy-content-disabled";

        if (this.props.currentShortcut == null) {
            copyComponent = null;

        }
        else {
            if (this.props.currentShortcut) {
                string = this.props.currentShortcut.getAsString();
                copyString += string;

                if (copyString.indexOf('[') > -1) {
                    disableCopyButton = false;
                    copyKeywordClass = "copy-keyword";
                    copyContentClass = "copy-content";

                } else {
                    disableCopyButton = true;
                    copyKeywordClass = "copy-keyword-disabled";
                    copyContentClass = "copy-content-disabled";
                }
                copyComponent = this._getCopyComponent(string, disableCopyButton, copyKeywordClass, copyContentClass);
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

    _getCopyComponent(string, disableCopyButton, copyKeywordClass, copyContentClass) {
        return (
            <CopyToClipboard text={string}>
                <RaisedButton
                    className="btn_copy"
                    labelStyle={{textTransform: "none"}}
                    containerElement="copy-container"
                    disabled={disableCopyButton}
                >
                    <div id={copyKeywordClass}>
                        Copy
                    </div>
                    <div id={copyContentClass}>
                        {string}
                    </div>
                </RaisedButton>
            </CopyToClipboard>
        );
    }
}

export default ShortcutViewer;

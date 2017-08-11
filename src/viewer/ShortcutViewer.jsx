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

        if (this.props.currentShortcut == null) {
            copyComponent = null;

        }
        else {
            if (this.props.currentShortcut) {
                string = this.props.currentShortcut.getAsString();
                copyString += string;

                if (copyString.indexOf('[') > -1) {
                    console.log("something was input");
                    disableCopyButton = false;

                } else {
                    console.log("nothing input yet");
                    disableCopyButton = true;
                }
                copyComponent = this._getCopyComponent(string, copyString, disableCopyButton);
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
                <RaisedButton
                    className="btn_viewer"
                    label="Reset"
                    onClick={(e) => this._handleResetClick(e)}
                />


                <Divider className="divider"/>

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
    _getCopyComponent(string, copyString, disableCopyButton) {
        return (
            <CopyToClipboard text={string}>
                <RaisedButton
                    className="btn_copy"
                    labelStyle={{textTransform: "none"}}
                    label={copyString}
                    disabled={disableCopyButton}
                    onClick={(e) => this._handleClick(e)}
                />
            </CopyToClipboard>
        );
    }

}

export default ShortcutViewer;

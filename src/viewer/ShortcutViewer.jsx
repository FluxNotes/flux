import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from 'material-ui/Button';
import LandingPageForm from '../forms/LandingPageForm';
import * as forms from '../forms'
import Lang from 'lodash'
import './ShortcutViewer.css';

class ShortcutViewer extends Component {
    /*
     * Returns JSX element for the initial, no-shorcut state
     */
    _getInitialState(initialString) {
        return (
            <div>
                <LandingPageForm/>
            </div>
        );
    }

    /*
     * Returns JSX element for the copy component
     */
    _getCopyComponent(string) {
        return (
            <CopyToClipboard text={string}>
                <div>
                    <Button raised className="btn_copy"
                        style={{
                            textTransform: "none",
                            justifyContent: 'left',
                            minWidth: "99.8%",
                            height: "45px",
                            padding: "5px 0 4px 0",
                            backgroundColor: "white"
                        }}
                    >
                        <div id="copy-keyword">
                            Copy
                        </div>
                        <div id="copy-content">
                            {string}
                        </div>
                    </Button>
                    <span className="helper-text">Click copy button to copy string</span>
                </div>
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
            //panelContent = this.props.currentShortcut.getForm();
            const formSpec = this.props.currentShortcut.getFormSpec();
            panelContent = React.createElement(eval("forms." + formSpec.tagName), formSpec.props, formSpec.children);
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
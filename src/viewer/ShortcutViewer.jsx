import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '../elements/Button';
import LandingPageForm from '../forms/LandingPageForm';
/* eslint-disable no-unused-vars */
import * as forms from '../forms'
/* eslint-enable no-unused-vars */
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
                <div id="copy-component">
                    <Button
                        variant="raised"
                        className="btn_copy"
                        ref="copyButton"
                        style={{
                            textTransform: "none",
                            justifyContent: 'left',
                            minWidth: "99.8%",
                            minHeight: "45px",
                            padding: "5px 0 4px 0",
                            backgroundColor: "white"
                        }}
                        focusRipple={false}
                        onClick={() => {
                            ReactDOM.findDOMNode(this.refs.copyButton).blur();
                        }}
                    >
                        <div id="copy-keyword">
                            Copy
                        </div>
                        <div id="copy-content">
                            {string}
                        </div>
                    </Button>
                    <span className="helper-text-multi-line">When finished selecting values, click on the copy button above and then paste into a note within your EHR</span>
                </div>
            </CopyToClipboard>
        );
    }

    render() {
        let copyComponent = null;
        let panelContent = null;

        // If there is a currentShortcut, use it in the copy component
        if (this.props.currentShortcut) {
            const string = this.props.currentShortcut.getAsString();
            copyComponent = this._getCopyComponent(string);
        }

        // If there is a currentShortcut, display its form; else display initialState
        if (!Lang.isNull(this.props.currentShortcut)) {
            //panelContent = this.props.currentShortcut.getForm();
            const formSpec = this.props.currentShortcut.getFormSpec();
            const currentForm = forms[formSpec.tagName]
            panelContent = React.createElement(currentForm, formSpec.props, formSpec.children);
        } else {
            panelContent = this._getInitialState();
        }

        return (
            <div>
                <div id="shortcut-viewer">
                    <div id="viewer-panel-content">
                        {panelContent}
                    </div>
                    {copyComponent}
                </div>
            </div>
        )
    }
}

ShortcutViewer.propTypes = { 
    currentShortcut: PropTypes.object,
    onShortcutUpdate: PropTypes.func.isRequired
}
export default ShortcutViewer;

// React imports
import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';


// material-ui
// import Paper from 'material-ui/Paper';
// import Divider from 'material-ui/Divider';
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


        if (this.props.currentShortcut == null) {
            string = initialString;
            copyComponent = null;

        }
        else {
            if (this.props.currentShortcut) {
                string = this.props.currentShortcut.getAsString();
                copyString += string;
                copyComponent = this._getCopyComponent(string, copyString);
            }
        }



        let panelContent = null;
        if (!Lang.isNull(this.props.currentShortcut)) {
            panelContent = this.props.currentShortcut.getForm();
        }

        return (
            <div id="shortcut-viewer">


                {/*<CopyToClipboard text={string}>*/}
                {/*<RaisedButton*/}
                {/*className="btn_viewer"*/}
                {/*label="Copy"*/}
                {/*onClick={(e) => this._handleClick(e)}*/}
                {/*/>*/}
                {/*</CopyToClipboard>*/}

                <RaisedButton
                className="btn_viewer"
                label="Reset"
                onClick={(e) => this._handleResetClick(e)}
                />


                <Divider className="divider"/>

                {panelContent}
                <br/>
                <div>
                    {string}
                </div>
                <br/>
                {copyComponent}


            </div>
        )
    }

    _handleClick(e) {
        console.log("clicked copy button")
    }

    _handleResetClick(e) {
        e.preventDefault();
        this.props.onShortcutUpdate(null);
    }

    _getCopyComponent(string, copyString) {
        return (
            <CopyToClipboard text={string}>
                <RaisedButton
                    className="btn_copy"
                    labelStyle={{textTransform: "none"}}
                    label={copyString}
                    onClick={(e) => this._handleClick(e)}
                />
            </CopyToClipboard>
        );
    }

}

export default ShortcutViewer;

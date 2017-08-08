// React imports
import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';


// material-ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

// Lodash component
import Lang from 'lodash'

// Styling
import './ShortcutViewer.css';

class ShortcutViewer extends Component {

    render() {

        let string = "";

        if (this.props.currentShortcut == null) {
            string = "Choose a template from the left panel";
        }
        else {
            if (this.props.currentShortcut) {
                string = this.props.currentShortcut.getAsString();
            }
        }


        let panelContent = null;
        if (!Lang.isNull(this.props.currentShortcut)) {
            panelContent = this.props.currentShortcut.getForm();
        }

        return (
            <div id="shortcut-viewer" className="dashboard-panel">


                {/*<CopyToClipboard text={string}>*/}
                    {/*<RaisedButton*/}
                        {/*className="btn_viewer"*/}
                        {/*label="Copy"*/}
                        {/*onClick={(e) => this._handleClick(e)}*/}
                    {/*/>*/}
                {/*</CopyToClipboard>*/}

                {/*<RaisedButton*/}
                    {/*className="btn_viewer"*/}
                    {/*label="Reset"*/}
                    {/*onClick={(e) => this._handleResetClick(e)}*/}
                {/*/>*/}


                {/*<Divider className="divider"/>*/}
              
                {panelContent}

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
}

export default ShortcutViewer;

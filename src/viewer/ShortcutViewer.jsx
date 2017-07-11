// React imports
import React, {Component} from 'react';

// material-ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
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
        return (
            <div id="shortcut-viewer" className="dashboard-panel">
                <Paper className="panel-content trio">

                        <RaisedButton
                            className="btn_viewer"
                            label="Copy"
                            onClick={(e) => this._handleClick(e)}
                        />

                        <RaisedButton
                            className="btn_viewer"
                            label="Reset"
                            onClick={(e) => this._handleResetClick(e)}
                        />


                    <Divider className="divider"/>
                    <div>
                        {string}
                    </div>
                </Paper>
            </div>
        )
    }

    _handleClick(e) {
        console.log("clicked copy button")
    }

    _handleResetClick(e) {
        e.preventDefault
        this.props.onShortcutUpdate(null);
    }
}

export default ShortcutViewer;

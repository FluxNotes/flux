// React imports
import React, {Component} from 'react';

// material-ui
import Paper from 'material-ui/Paper';
// Styling
import './ShortcutViewer.css';

class ShortcutViewer extends Component {

    render() {

        if (this.props.currentDataItem == null) {
            console.log("current data item is null");
        }
        else {
            console.log("current data is not null");
            console.log(this.props.currentDataItem);
        }
        return (
            <div id="shortcut-viewer" className="dashboard-panel">
                <Paper className="panel-content trio">
                    <div>
                        This is where the shortcut preview goes
                    </div>
                </Paper>
            </div>
        )
    }
}

export default ShortcutViewer;

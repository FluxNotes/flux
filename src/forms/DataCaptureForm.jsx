// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
// Styling
import './DataCaptureForm.css';

class DataCaptureForm extends Component {
  constructor(props) {
        super(props);

        this.state = {

        };
  }

  render() {
    return (
        <Paper className="panel-content trio">
            <h1>Data Capture</h1>
            <Divider className="divider"/>
        </Paper>
    );
  }

}
export default DataCaptureForm;

// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';
// Styling
import './DataCaptureForm.css';

class DataCaptureForm extends Component {
  constructor(props) {
        super(props);
        this.state = {
            dropdownValue: 1
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

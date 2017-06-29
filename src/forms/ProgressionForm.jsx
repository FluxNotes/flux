// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// Libraries
import progressionLookup from '../../lib/progression_lookup';
// Styling
import './ProgressionForm.css';

class ProgressionForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        statusOptions: progressionLookup.getStatusOptions(),
        reasonOptions: progressionLookup.getReasonOptions(),

        currentReasons: []
      };
  }

  _handleStatusSelecion = (e, i) => {
    e.preventDefault();
    console.log(`ProgressionForm._handleStatusSelecion Reason #${i} ${this.state.statusOptions[i].name}`);
    // this.props.onStagingTUpdate(this.state.statusOptions[i].name);
  }

  _handleReasonSelection = (e, i) => {
    e.preventDefault();
    console.log(`ProgressionForm._handleReasonSelection Reason #${i} ${this.state.reasonOptions[i].name}`);
    // this.props.onStagingNUpdate(this.state.reasonOptions[i].name);
  }

  render() {
    return (
        <Paper className="panel-content trio">
            <h1>Patient Progression</h1>
            <Divider className="divider" />

            <h4>Progression Status</h4>
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.statusOptions.findIndex((opt) => opt.name === this.props.progression.status)}
              onChange={this._handleStatusSelecion}
            >
              {this.state.statusOptions.map((status, i) => {
                  return (
                      <MenuItem key={status.name} value={i} primaryText={status.name} />
                  );
              })}
            </SelectField>
        </Paper>
    );
  }
}

export default ProgressionForm;


function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

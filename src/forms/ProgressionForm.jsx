// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
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
        currentStatus: this.props.progression.status,
        currentReasons: []
      };
  }

  _handleStatusSelecion = (e, i) => {
    e.preventDefault();
    const newStatus = this.state.statusOptions[i].name; 
    console.log(`ProgressionForm._handleStatusSelecion Reason #${i} ${newStatus}`);
    const newProgression = this.props.progression; 
    newProgression["status"] = newStatus;
    this.setState({currentStatus: newStatus});
    this.props.onProgressionUpdate(newProgression);
  }

  _handleReasonSelection = (e, i) => {
    e.preventDefault();
    const newStatus = this.state.reasonOptions[i].name; 
    console.log(`ProgressionForm._handleReasonSelection Reason #${i} ${this.state.reasonOptions[i].name}`);
    const newProgression = this.props.progression; 
    newProgression["reason"] = newStatus;
    this.props.onProgressionUpdate(newProgression);
  }

  _renderStatusMenuItem = (status) => { 
    return (
      <MenuItem 
        key={status.name} 
        value={status.name} 
        primaryText={status.name} 
      />
    ) 
  }

  _renderReasonCheckbox = (reason) => {
    return (
      <Checkbox
        label={reason.name}
      />
    )
  }

  render() {
    console.log(this.props.progression.status)
    return (
        <Paper className="panel-content trio">
            <h1>Patient Progression</h1>
            <Divider className="divider" />

            <h4>Progression Status</h4>
            <SelectField
              floatingLabelText="Frequency"
              value={this.props.progression.status}
              onChange={this._handleStatusSelecion}
            >
              {this.state.statusOptions.map((status, i) => {
                  return this._renderStatusMenuItem(status)
              })}
            </SelectField>

            <h4>Progression Reasons</h4>
            {this.state.reasonOptions.map((reason, i) => { 
              return this._renderReasonCheckbox(reason)
            })}
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

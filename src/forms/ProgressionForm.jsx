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
        // Values stored here are reason names, not reason objects
        currentReasons: []
      };
  }

  handleStatusSelecion = (e, i) => {
    e.preventDefault();
    const newStatus = this.state.statusOptions[i].name; 
    console.log(`ProgressionForm.handleStatusSelecion Reason #${i} ${newStatus}`);
    const newProgression = this.props.progression; 
    newProgression["status"] = newStatus;
    this.setState({currentStatus: newStatus});
    this.props.onProgressionUpdate(newProgression);
  }

  handleReasonSelection = (reason, isChecked) => {
    const reasonIndex = this.state.currentReasons.findIndex((r) => r === reason.name);
    if (isChecked) {
      // Index should be -1; if it isn't don't add to array
      if (reasonIndex === -1) {
        this.setState({
          currentReasons: this.state.currentReasons.push(reason.name);
        })
      } else { 
        // Nothing -- the element is already in there
        console.log('This is odd; the element shouldnt have been in our current reasons');
      }
    } else { 
      // Index shouldn't be -1; if it is, don't remove it again;
      if(reasonIndex !== -1) { 
        const filteredReasons = this.state.currentReasons.filter((r) => r !== reason.name);
        this.setState({
          currentReasons: filteredReasons;
        })
      } else { 
        // Nothing -- the element is already removed from the array;
        console.log('Odd: the element should be in our current reasons');
      }
    }
    // const newReason = this.state.reasonOptions[i].name; 
    // console.log(`ProgressionForm.handleReasonSelection Reason #${i} ${this.state.reasonOptions[i].name}`);
    // const newProgression = this.props.progression; 
    // newProgression["reason"].findIndex(e.)

    // if(elemIndex !== -1) {


    // }
    // this.props.onProgressionUpdate(newProgression);
  }

  renderStatusMenuItem = (status) => { 
    return (
      <MenuItem 
        key={status.name} 
        value={status.name} 
        primaryText={status.name} 
      />
    ) 
  }

  renderReasonCheckbox = (reason, i) => {
    return (
      <Checkbox
        key={i}
        onCheck={(e, isChecked) => this.handleReasonSelection(reason, isChecked)}
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
              onChange={this.handleStatusSelecion}
            >
              {this.state.statusOptions.map((status, i) => {
                  return this.renderStatusMenuItem(status)
              })}
            </SelectField>

            <h4>Progression Reasons</h4>
            {this.state.reasonOptions.map((reason, i) => { 
              return this.renderReasonCheckbox(reason, i)
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

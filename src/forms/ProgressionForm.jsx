// React imports
import React, { Component } from 'react';
// material-ui
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
// Libraries
import progressionLookup from '../lib/progression_lookup';
// Styling
import './ProgressionForm.css';

class ProgressionForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        statusOptions: progressionLookup.getStatusOptions(),
        reasonOptions: progressionLookup.getReasonOptions(),
      };
  }

  handleStatusSelecion = (e, i) => {
    e.preventDefault();
    const newStatus = this.state.statusOptions[i].name; 
    console.log(`ProgressionForm.handleStatusSelecion Status #${i} ${newStatus}`);
    const newProgression = { ...this.props.progression}; 
    newProgression["status"] = newStatus;
    this.props.onProgressionUpdate(newProgression);
  }

  handleReasonSelection = (reason, isChecked) => {
    const reasonIndex = this.props.progression.reason.findIndex((r) => r === reason.name);
    if (isChecked) {
      // Index should be -1; if it isn't don't add to array
      if (reasonIndex === -1) {
        console.log(`about to add reason ${reason.name} to list of progression reasons`);
        const newReasons = [...this.props.progression.reason];
        newReasons.push(reason.name);
        const newProgression = { ...this.props.progression}; 
        newProgression["reason"] = newReasons;
        this.props.onProgressionUpdate(newProgression);
      } else { 
        // Nothing -- the element is already in there
        console.log(`Cornercase; the element ${reason.name} shouldnt have been in our current reasons, but it was`);
      }
    } else { 
      // Index shouldn't be -1; if it is, don't remove it again;
      if(reasonIndex !== -1) { 
        console.log(`about to remove element ${reason.name} from progression reasons`);
        const filteredReasons = this.props.progression.reason.filter((r) => r !== reason.name);
        const newProgression = { ...this.props.progression}; 
        newProgression["reason"] = filteredReasons;
        this.props.onProgressionUpdate(newProgression);
      } else { 
        // Nothing -- the element is already removed from the array;
        console.log(`Cornercase: the element ${reason.name} should be in our current reasons, but it isn't`);
      }
    }
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
    

    const isChecked = this.props.progression.reason.some((curReason) => curReason.toLowerCase() === reason.name.toLowerCase());
    return (
      <Checkbox
        key={i}
        checked={isChecked}
        onCheck={(e, isChecked) => this.handleReasonSelection(reason, isChecked)}
        label={reason.name}
      />
    )
  }

  render() {
    return (
        <div>
            <h1>Disease Progression</h1>
            <p id="data-element-description">
              {progressionLookup.getDescription("progression")}
            </p>
            <Divider className="divider" />

            <h4>Progression Status</h4>
            <p id="data-element-description">
              {progressionLookup.getDescription("status")}
            </p>
            <SelectField
              value={this.props.progression.status}
              hintText="Status"
              onChange={this.handleStatusSelecion}
            >
              {this.state.statusOptions.map((status, i) => {
                  return this.renderStatusMenuItem(status)
              })}
            </SelectField>

            <h4>Progression Reasons</h4>
            <p id="data-element-description">
              {progressionLookup.getDescription("reason")}
            </p>
            {this.state.reasonOptions.map((reason, i) => { 
              return this.renderReasonCheckbox(reason, i)
            })}
        </div>
    );
  }
}

export default ProgressionForm;

/*
function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}*/

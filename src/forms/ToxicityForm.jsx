// React imports
import React, { Component } from 'react';
// material-ui
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
// Libraries
import toxicityLookup from '../../lib/toxicity_lookup';
// Styling
import './ToxicityForm.css';

class ToxicityForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        gradeOptions: toxicityLookup.getGradeOptions(),
        adverseEventOptions: toxicityLookup.getAdverseEventOptions(),
        dataSourceConfig: {
          text: 'name',
          value: 'name',
        },
        searchText: ''
      };
  }

  handleGradeSelecion = (e, i) => {
    e.preventDefault();
    const newGrade = this.state.gradeOptions[i].name; 
    console.log(`ToxicityForm.handleGradeSelecion Grade #${i} ${newGrade}`);
    const newToxicity = { ...this.props.toxicity}; 
    newToxicity["grade"] = newGrade;
    this.props.onToxicityUpdate(newToxicity);
  }

  handleUpdateAdverseEventInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
    if(toxicityLookup.isValidAdverseEvent(searchText)) { 
      this.handleAdverseEventSelection(searchText)
    }
  }

  handleAdverseEventSelection = (newAdverseEvent) => {
    console.log(`ToxicityForm.handleAdverseEventSelecion AdverseEvent ${newAdverseEvent}`);
    const newToxicity = { ...this.props.toxicity}; 
    newToxicity["adverseEvent"] = newAdverseEvent;
    this.props.onToxicityUpdate(newToxicity);
  }

  renderGradeMenuItem = (grade) => { 
    return (
      <MenuItem 
        key={grade.name} 
        value={grade.name} 
        primaryText={grade.name} 
      />
    ) 
  }

  render() {
    return (
        <div>
            <h1>Patient Toxicity</h1>
            <Divider className="divider" />

            <h4>Toxicity Grade</h4>
            <SelectField
              floatingLabelText="Grade"
              value={this.props.toxicity.grade}
              onChange={this.handleGradeSelecion}
            >
              {this.state.gradeOptions.map((grade, i) => {
                  return this.renderGradeMenuItem(grade)
              })}
            </SelectField>

            <h4>Adverse Event</h4>
            <AutoComplete
              floatingLabelText="Search through adverse events"
              maxSearchResults={7}
              filter={AutoComplete.fuzzyFilter}
              openOnFocus={true}

              searchText={this.state.searchText}
              onUpdateInput={this.handleUpdateAdverseEventInput}

              dataSource={this.state.adverseEventOptions}
              dataSourceConfig={this.state.dataSourceConfig}
            />
        </div>
    );
  }
}

export default ToxicityForm;

/*
function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}*/

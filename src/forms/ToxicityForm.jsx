// React imports
import React, { Component } from 'react';
// material-ui
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
// Libraries
import toxicityLookup from '../../lib/toxicity_lookup';
// Import Lodash libraries
import Lang from 'lodash'
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
        searchText: '',
        potentialToxicity: null
      };
  }

  /* 
   * Update potential toxicity value
   */
  updatePotentialToxicity = (newToxicity) => { 
    this.setState({ 
      potentialToxicity: newToxicity
    })
  }

  /* 
   * Reset potential toxicity 
   */
  resetPotentialToxicity = () => { 
    this.setState({
      potentialToxicity: null,
      searchText: ""
    })
  }

  /* 
   * Add potential toxicity to parent's list of toxicities 
   */
  addToxicity = () => {
    const oldToxicities = Lang.clone(this.props.toxicity);
    // Only add potentialToxicity if value is non-null
    if(!Lang.isNull(this.state.potentialToxicity)) { 
      oldToxicities.push(this.state.potentialToxicity)
      this.props.onToxicityUpdate(oldToxicities);
      this.resetPotentialToxicity();
    } 
  }

  /* 
   * Remove most recent tox from parent's list of toxicities 
   */
  removeToxicity = () => {
    const oldToxicities = Lang.clone(this.props.toxicity);
    // Only remove last value if oldToxicities is non-empty
    if(!Lang.isEmpty(oldToxicities)) {
      oldToxicities.pop()
      this.props.onToxicityUpdate(oldToxicities);
    } 
  }

  /* 
   * When a valid grade is selected, update potential toxicity 
   */
  handleGradeSelecion = (e, i) => {
    e.preventDefault();
    const newGrade = this.state.gradeOptions[i].name; 
    console.log(`ToxicityForm.handleGradeSelecion Grade #${i} ${newGrade}`);
    let newToxicity;
    if(Lang.isNull(this.state.potentialToxicity)) { 
      newToxicity = {};
    } else { 
      newToxicity = { ...this.state.potentialToxicity}; 
    }
    newToxicity["grade"] = newGrade;
    this.updatePotentialToxicity(newToxicity);
  }

  /* 
   * When a valid adverse event is selected, update potential toxicity 
   */
  handleAdverseEventSelection = (newAdverseEvent) => {
    console.log(`ToxicityForm.handleAdverseEventSelecion AdverseEvent ${newAdverseEvent}`);
    let newToxicity 
    if(Lang.isNull(this.state.potentialToxicity)) { 
      newToxicity = {};
    } else { 
      newToxicity = { ...this.state.potentialToxicity}; 
    }
    newToxicity["adverseEvent"] = newAdverseEvent;
    this.updatePotentialToxicity(newToxicity);
  }

  /* 
   * When new text is available for AE selection, update search text 
   *  and also update potential toxicity when valid
   */
  handleUpdateAdverseEventInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
    if(toxicityLookup.isValidAdverseEvent(searchText)) { 
      this.handleAdverseEventSelection(searchText)
    }
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
    const potentialToxicity = (Lang.isNull(this.state.potentialToxicity) ? {} : this.state.potentialToxicity);
    return (
        <div>
            <h1>Patient Toxicity</h1>
            <Divider className="divider" />

            <h4>Toxicity Grade</h4>
            <SelectField
              floatingLabelText="Grade"
              value={potentialToxicity.grade}
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
            <div id="bottom-buttons">
              <RaisedButton
                  className="toxicity-button"
                  label="Add Current"
                  onClick={(e) => this.addToxicity(e)}
              />
              <RaisedButton
                  className="toxicity-button"
                  label="Remove Recent"
                  onClick={(e) => this.removeToxicity(e)}
              />
            </div> 
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

import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import toxicityLookup from '../lib/toxicity_lookup';
import Lang from 'lodash'
import Array from 'lodash'
import './ToxicityForm.css';

class ToxicityForm extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            gradeOptions: toxicityLookup.getGradeOptions(),
            adverseEventOptions: toxicityLookup.getAdverseEventOptions(),
            // This defines how the autocomplete component indexes the list of adverse events
            dataSourceConfig: {
                text: 'name',
                value: 'name',
            },
            searchText: '',
        }; 
    }

    /* 
     * Update potential toxicity value
     */
    updatePotentialToxicity = (newToxicity) => { 
        this.props.onToxicityUpdate(newToxicity);
    }

    /* 
     * Reset potential toxicity 
     */
    resetPotentialToxicity = () => { 
        this.setState({
            searchText: ""
        })
    }

    /* 
     * Changes the potential toxicity to the provided value
     */
    changePotentialToxicity = (newPotentialToxicity) => { 
        this.setState({ 
            searchText: newPotentialToxicity.adverseEvent
        });
    }

    /* 
     * When a valid grade is selected, update potential toxicity 
     */
    handleGradeSelecion = (e, i, payload) => {
        e.preventDefault();
        const newGrade = payload; 
        const newToxicity = (Lang.isNull(this.props.toxicity)) ? {} : { ...this.props.toxicity}; 
        newToxicity["grade"] = newGrade;
        this.updatePotentialToxicity(newToxicity);
    }
  
    /* 
     * When a valid adverse event is selected, update potential toxicity 
     */
    handleAdverseEventSelection = (newAdverseEvent) => {
        const newToxicity = (Lang.isNull(this.props.toxicity)) ? {} : { ...this.props.toxicity};
        // A null or undefined value for newAdverseEvent should trigger the deletion of the current adverseEvent
        if (Lang.isUndefined(newAdverseEvent) || Lang.isNull(newAdverseEvent)){ 
            delete newToxicity.adverseEvent;
        } else { 
            newToxicity["adverseEvent"] = titlecase(newAdverseEvent);
            // Make sure grade is possible with given new tox
        }
        const potentialGrade = (toxicityLookup.isValidGradeForAdverseEvent(newToxicity.grade, newAdverseEvent)) ? newToxicity.grade : null;
        if(Lang.isNull(potentialGrade)) { 
            delete newToxicity.grade;
        }
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
        } else if (!toxicityLookup.isValidAdverseEvent(searchText) && toxicityLookup.isValidAdverseEvent(this.props.toxicity.adverseEvent)) { 
            this.handleAdverseEventSelection(null)
        }
    }

    /* 
     * Render the grade menu item for the given grade object, 
     *  Update grade description if there is a current adverse event 
     */
    renderGradeMenuItem = (grade, adverseEventName) => { 
        const currentGradeLevel = grade.name;
        let gradeDescription = "";
        if(Lang.isUndefined(adverseEventName)) { 
            gradeDescription = grade.description;
        } else { 
            let adverseEventNameLowerCase = adverseEventName.toLowerCase();
            let adverseEventOptionsLowerCase = this.state.adverseEventOptions.map(function(elem) { elem.name = elem.name.toLowerCase(); return elem; });
            const currentAdverseEvent = Array.find(adverseEventOptionsLowerCase, {name: adverseEventNameLowerCase})
            gradeDescription = currentAdverseEvent[currentGradeLevel];
        }
        const gradeText=`${currentGradeLevel} - ${gradeDescription}`
  
        return (
            <MenuItem 
                key={grade.name} 
                value={grade.name} 
                primaryText={gradeText} 
            />
        ) 
    }
  
    render() {
        let potentialToxicity = Lang.isNull(this.props.toxicity) ? {} : {...this.props.toxicity};
        const potentialGrade = toxicityLookup.isValidGradeForAdverseEvent(potentialToxicity.grade, potentialToxicity.adverseEvent) ? potentialToxicity.grade : null;
        
        return (
            <div>
                <h1>Toxicity</h1>
                <p id="data-element-description">
                    {toxicityLookup.getDescription("toxicity")}
                </p>
                <Divider className="divider" />
    
                <h4>Adverse Event</h4>
                <p id="data-element-description">
                    {toxicityLookup.getDescription("adverseEvent")}
                </p>
                <AutoComplete
                    hintText="Search through adverse events"
                    maxSearchResults={7}
                    filter={AutoComplete.fuzzyFilter}
                    openOnFocus={true}
                    fullWidth={true}
    
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateAdverseEventInput}
    
                    dataSource={this.state.adverseEventOptions}
                    dataSourceConfig={this.state.dataSourceConfig}
                />
    
                <h4>Grade</h4>
                <p id="data-element-description">
                    {toxicityLookup.getDescription("grade")}
                </p>
                <SelectField
                    hintText="Grade"
                    // Value should be potential grade, assuming it's valid
                    value={potentialGrade}
                    onChange={this.handleGradeSelecion}
                    fullWidth={true}
                >
                    {this.state.gradeOptions.map((grade, i) => {
                        if(Lang.isUndefined(potentialToxicity.adverseEvent)) { 
                            return this.renderGradeMenuItem(grade)                      
                        } else { 
                            if (toxicityLookup.isValidGradeForAdverseEvent(grade.name, potentialToxicity.adverseEvent)) {
                                return this.renderGradeMenuItem(grade, potentialToxicity.adverseEvent);
                            } else {
                                // return nothing -- don't render this as an option
                                return null;
                            }
                        }
                    })}
                </SelectField>
            </div>
        );
    }
}

export default ToxicityForm;


function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

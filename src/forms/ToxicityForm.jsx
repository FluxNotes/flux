import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {Row, Col} from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
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
            suggestions: [],
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
    changePotentialToxicity = ({newValue}) => { 
        this.setState({ 
            searchText: newValue
        });
    }

    /* 
     * When a valid grade is selected, update potential toxicity 
     */
    handleGradeSelecion = (e, grade, isSelected) => {
        e.preventDefault();
        if (isSelected) { 
            const newToxicity = (Lang.isNull(this.props.toxicity)) ? {} : { ...this.props.toxicity}; 
            delete newToxicity.grade;
            this.updatePotentialToxicity(newToxicity);
        } else { 
            const newGrade = grade; 
            const newToxicity = (Lang.isNull(this.props.toxicity)) ? {} : { ...this.props.toxicity}; 
            newToxicity["grade"] = newGrade;
            this.updatePotentialToxicity(newToxicity);
        }
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
    handleUpdateAdverseEventInput = (e, {newValue}) => {
        this.setState({
            searchText: newValue,
        });
        if(toxicityLookup.isValidAdverseEvent(newValue)) { 
            this.handleAdverseEventSelection(newValue)
        } else if (!toxicityLookup.isValidAdverseEvent(newValue) && toxicityLookup.isValidAdverseEvent(this.props.toxicity.adverseEvent)) { 
            this.handleAdverseEventSelection(null)
        }
    }

    /* 
     * Render the adverse event  item for the adverse event suggestion
     */    
    getSuggestions = (searchText) => {
        const inputValue = searchText.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0  ? [] : this.state.adverseEventOptions.filter((event) => {
            const name = (Lang.isEmpty(event.name)) ? "" : event.name;
            const description = (Lang.isEmpty(event.description)) ? "" : event.description;
            return (name.toLowerCase().indexOf(inputValue) >= 0 || description.toLowerCase().indexOf(inputValue) >= 0)
        }).slice(0,7);
    };

    /* 
     * When suggestion is clicked, Autosuggest needs to populate the input
     * based on the clicked suggestion. Teach Autosuggest how to calculate the
     * input value for every given suggestion.
     */
    getSuggestionValue = (suggestion) => {
        return suggestion.name
    };

    /* 
     * Autosuggest will call this function every time you need to update suggestions.
     * You already implemented this logic above, so just use it.
     */
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    };

    /* 
     * Autosuggest will call this function every time you need to clear suggestions.
     */
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    /* 
     * Render the adverse event  item for the adverse event suggestion
     */
    renderSuggestion = (suggestion) => {
        return (
            <Row className="adverse-event-suggestion">
                <Col xs={3} className="adverse-event-suggestion-name">
                    {suggestion.name}
                </Col>
                <Col xs={9} className="adverse-event-suggestion-description"> 
                    {suggestion.description}
                </Col> 
            </Row>
        );
    }

    /* 
     * Render the grade menu item for the given grade object, 
     *  Update grade description if there is a current adverse event 
     */
    renderGradeMenuItem = (grade, adverseEventName) => { 
        const currentGradeLevel = grade.name;
        const isDisabled = !toxicityLookup.isValidGradeForAdverseEvent(grade.name, adverseEventName);

        const isSelected = !Lang.isEmpty(this.props.toxicity) && !Lang.isEmpty(this.props.toxicity.grade) && this.props.toxicity.grade === grade.name
        let gradeMenuClass = "grade-menu-item";
        if (isDisabled) { 
            gradeMenuClass += " disabled"
        } else if (isSelected) { 
            gradeMenuClass += " selected"
        }
        let gradeDescription = "";

        if (Lang.isUndefined(adverseEventName)) { 
            gradeDescription = grade.description;
        } else if (isDisabled) { 
            gradeDescription = "";
        } else { 
            const adverseEventNameLowerCase = adverseEventName.toLowerCase();
            const adverseEventOptionsLowerCase = this.state.adverseEventOptions.map(function(elem) { const elemCopy = Lang.clone(elem); elemCopy.name = elemCopy.name.toLowerCase(); return elemCopy; });
            const currentAdverseEvent = Array.find(adverseEventOptionsLowerCase, {name: adverseEventNameLowerCase})
            gradeDescription = currentAdverseEvent[currentGradeLevel];
        }        
        return (
            <div 
                className={gradeMenuClass}
                key={grade.name}
                // onHover
                onClick={(e) => {
                    if (!isDisabled) { 
                        return this.handleGradeSelecion(e, grade.name, isSelected)
                    } 
                }}
            >
                <div className="grade-menu-item-name">
                    {currentGradeLevel}
                </div>
                <div className="grade-menu-item-description"> 
                    {gradeDescription}
                </div> 
            </div>
        ) 
    }
  
    render() {
        let potentialToxicity = Lang.isNull(this.props.toxicity) ? {} : {...this.props.toxicity};        
        const inputProps = {
          placeholder: 'Enter symptom',
          value: this.state.searchText,
          onChange: this.handleUpdateAdverseEventInput
        };

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

                <Autosuggest
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}

                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
    
                <h4>Grade</h4>
                <p id="data-element-description">
                    {toxicityLookup.getDescription("grade")}
                    <span className="helper-text"> Choose one</span>
                </p>
                <div id="grade-menu">
                    {this.state.gradeOptions.map((grade, i) => {
                        if(Lang.isUndefined(potentialToxicity.adverseEvent)) { 
                            return this.renderGradeMenuItem(grade)                      
                        } else { 
                            return this.renderGradeMenuItem(grade, potentialToxicity.adverseEvent);
                        }
                    })}
                </div>
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

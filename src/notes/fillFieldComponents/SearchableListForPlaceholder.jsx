import React, { Component } from 'react';
import ValueSetManager from '../../lib/ValueSetManager';
import SingleChoiceButton from '../../forms/SingleChoiceButton';
import toxicityLookup from '../../lib/toxicreaction_lookup';
import Lang from 'lodash';
import {Row, Col} from 'react-flexbox-grid';
import Autosuggest from 'react-autosuggest';
import './SearchableListForPlaceholder.css';


function titlecase(label) {
    return label.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

class SearchableListForPlaceholder extends Component {
    constructor(props) {
        console.log("are we reconstructing");
        super(props);
        
        // Retrieving valueset of all possible toxicites
        this._options = ValueSetManager.getValueList(this.props.attributeSpec.values.category, this.props.attributeSpec.values.valueSet);

        const adverseEventOptionsIncludingNoSpaces = toxicityLookup.getAdverseEventOptions().map(obj => {
            const objCopy = Lang.clone(obj);
            objCopy.nameNoSpaces = objCopy.name ? objCopy.name.replace(/\s/g,'') : objCopy.name;
            objCopy.descriptionNoSpaces = objCopy.description ? objCopy.description.replace(/\s/g,'') : objCopy.description;
            return objCopy;
        });

       this.state = {
           gradeOptions: toxicityLookup.getGradeOptions(),
           adverseEventOptions: adverseEventOptionsIncludingNoSpaces,
           suggestions: [],
           searchText: ''
       };

       this.topAdverseEvents = this.props.attributeSpec.values.topAdverseEventSection;
    
    }

   
    handleAdverseEventSelection = (newAdverseEvent) => {
        // A null or undefined value for newAdverseEvent should trigger the deletion of the current adverseEvent
        if (Lang.isUndefined(newAdverseEvent) || Lang.isNull(newAdverseEvent)) {
            this.props.updateValue(this.props.attributeSpec, null);
        } else {
            this.props.updateValue(this.props.attributeSpec, newAdverseEvent);
            this.setState({
                searchText: titlecase(newAdverseEvent),
            });
        }
    }

    /*
     * Called whenever a suggestion is selected via mouse or keyboard.
     */
    onSuggestionSelected = (e, {suggestionValue}) => {
        this.handleAdverseEventSelection(suggestionValue);
    }

    /*
     * When new text is available for AE selection, update search text
     *  and also update potential toxicity when valid
     */
    handleUpdateAdverseEventInput = (e, {newValue}) => {
        this.setState({
            searchText: newValue
        });
        
        if (!toxicityLookup.isValidAdverseEvent(newValue) && toxicityLookup.isValidAdverseEvent(newValue)) {
            this.handleAdverseEventSelection(null);
        }
    }

    /*
     * Render the adverse event  item for the adverse event suggestion
     */
    getSuggestions = (searchText) => {
        let inputValue = searchText.trim().toLowerCase().replace(/\s/g,'');
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.state.adverseEventOptions.filter((event) => {
            const nameNoSpaces = (Lang.isEmpty(event.nameNoSpaces)) ? "" : event.nameNoSpaces;
            const descriptionNoSpaces = (Lang.isEmpty(event.descriptionNoSpaces)) ? "" : event.descriptionNoSpaces;
            return (nameNoSpaces.toLowerCase().indexOf(inputValue) >= 0 || descriptionNoSpaces.toLowerCase().indexOf(inputValue) >= 0)
        }).slice(0, 7);
    }

    /*
     * When suggestion is clicked, Autosuggest needs to populate the input
     * based on the clicked suggestion. Teach Autosuggest how to calculate the
     * input value for every given suggestion.
     */
    getSuggestionValue = (suggestion) => {
        return suggestion.name;
    }

    /*
     * Autosuggest will call this function every time you need to update suggestions.
     * You already implemented this logic above, so just use it.
     */
    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    /*
     * Autosuggest will call this function every time you need to clear suggestions.
     */
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    /*
     * Render the adverse event item for the adverse event suggestion
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
     * Formatting function for AutoSuggest input bar to match background color 
     */
    formatInput = inputProps => {
        let inputClassName = "";
        if (this.props.backgroundColor === "lightgrey") {
            inputClassName = 'react-autosuggest__input_grey';
        } else {
            inputClassName = 'react-autosuggest__input';
        }

        return (
            <div>
                <input {...inputProps}  className={inputClassName} />
           </div>
        );
    }

    render() {
        let topAdverseEventSection = null;
        const marginSize = "2px";
        let inputPlaceholder = (this.props.value ? this.props.value : "Enter symptom");
        const inputProps = {
            placeholder: inputPlaceholder,
            value: this.state.searchText,
            onChange: this.handleUpdateAdverseEventInput
        };
        

        if (!Lang.isUndefined(this.topAdverseEvents) && this.topAdverseEvents.length > 0){
           
            let topAdverseEventObjects = this.topAdverseEvents.map((adverseEvent, i) => {
                return toxicityLookup.findAdverseEvent(adverseEvent);
            });

            topAdverseEventSection = (
            <div className="btn-group-adverse-event">
                {topAdverseEventObjects.map((adverseEvent, i) => {
                    if (adverseEvent.description === null) {
                        return "";
                    }
                    const tooltipClass = (adverseEvent.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                    return (
                        <div key={adverseEvent.name} className="tooltip-toxicity-form">
                            <span id={adverseEvent.name} className={tooltipClass}>{adverseEvent.description}</span>
                            <SingleChoiceButton 
                                    buttonKey={i}
                                    buttonText={adverseEvent.name}
                                    onClick={(e) => this.handleAdverseEventSelection(adverseEvent.name)}
                                    isSelected={this.props.value === this.topAdverseEvents[i]}
                                    marginSize={marginSize}
                            />
                        </div>
                    )
                })}
            </div>
            )
        }

        return (
            <div>
                {/* Interface here*/}
                <Autosuggest
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    renderInputComponent={this.formatInput}
                   
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
                {topAdverseEventSection}
            </div>
        );
    }
}

export default SearchableListForPlaceholder;

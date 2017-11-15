import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import {Row, Col} from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import toxicityLookup from '../lib/toxicreactiontotreatment_lookup';
import ToxicReactionToTreatment from '../model/shr/oncology/ToxicReactionToTreatment';
import Lang from 'lodash'
import Array from 'lodash'
import './ToxicityForm.css';

class ToxicityForm extends Component {
    constructor(props) {
        super(props);

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
     * Changes the className for the button to highlight selected attribution
     */
    currentlySelectedAttribution = (attribution) => {
        // What it is checking might need to change if the toxicity.attribution structure changes in Patient
        return this.props.object.causeCategory === attribution.name;
    }

    currentlySelectedAdverseEvent = (adverseEvent) => {
        return this.props.object.adverseEvent === adverseEvent.name ? 'button_selected' : '';
    }

    /*
     * Handle updating the attribution value on toxicity
     */
    handleAttributionSelection = (attribution, isSelected) => {
        if (isSelected) {
            this.props.updateValue("attribution", null);
        } else {
            this.props.updateValue("attribution", attribution.name);
        }
    }

    /*
     * When a valid grade is selected, update potential toxicity
     */
    handleGradeSelection = (e, grade, isSelected) => {
        e.preventDefault();
        if (isSelected) {
            this.props.updateValue("grade", null);
        } else {
            this.props.updateValue("grade", grade);
        }
    }

    /*
     * When a valid adverse event is selected, update potential toxicity
     */
    handleAdverseEventSelection = (newAdverseEvent) => {
        // A null or undefined value for newAdverseEvent should trigger the deletion of the current adverseEvent
        if (Lang.isUndefined(newAdverseEvent) || Lang.isNull(newAdverseEvent)) {
            this.props.updateValue("adverseEvent", null);
        } else {
            this.props.updateValue("adverseEvent", titlecase(newAdverseEvent));
            this.setState({
                searchText: titlecase(newAdverseEvent),
            });
        }

        // Make sure grade is possible with given new tox
        if (!toxicityLookup.isValidGradeForAdverseEvent(this.props.object.adverseEventGrade, newAdverseEvent)) {
            this.props.updateValue("grade", null);
        }
    }

    /*
     * When new text is available for AE selection, update search text
     *  and also update potential toxicity when valid
     */
    handleUpdateAdverseEventInput = (e, {newValue}) => {
        this.setState({
            searchText: newValue,
        });
        if (toxicityLookup.isValidAdverseEvent(newValue)) {
            this.handleAdverseEventSelection(newValue)
        } else if (!toxicityLookup.isValidAdverseEvent(newValue) && toxicityLookup.isValidAdverseEvent(this.props.object.adverseEvent)) {
            this.handleAdverseEventSelection(null)
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
     * Render the grade menu item for the given grade object,
     *  Update grade description if there is a current adverse event
     */
    renderGradeMenuItem = (grade, adverseEventName) => {
        const currentGradeLevel = grade.name;
        const isDisabled = !toxicityLookup.isValidGradeForAdverseEvent(grade.name, adverseEventName);

        const isSelected = !Lang.isEmpty(this.props.object) && !Lang.isEmpty(this.props.object.adverseEvent) && this.props.object.adverseEventGrade === grade.name
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
            const adverseEventOptionsLowerCase = this.state.adverseEventOptions.map(function (elem) {
                const elemCopy = Lang.clone(elem);
                elemCopy.name = elemCopy.name.toLowerCase();
                return elemCopy;
            });
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
                        return this.handleGradeSelection(e, grade.name, isSelected)
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

    /* 
     * Render the attribution button for the given attribution object, 
     */
    renderAttributionButton = (attribution, i) => { 
        const isSelected = this.currentlySelectedAttribution(attribution);
        const buttonClass = isSelected ? 'button_selected' : ''
        const tooltipClass = (attribution.description.length > 100) ? "tooltiptext large" : "tooltiptext";
        const marginSize = "10px";  
        return (
            <div key={attribution.name} className="tooltip">
                <span id={attribution.name} className={tooltipClass}>{attribution.description}</span>
                <Button raised
                    key={i}
                    label={attribution.name}
                    className={buttonClass}
                    style={{
                        marginBottom: marginSize,
                        marginLeft: marginSize,
                        borderRadius: "10px",
                        height: "75px",
                        width: "180px",
                        backgroundColor: "white",
                        textTransform: "none"
                    }}
                    onClick={ () => this.handleAttributionSelection(attribution, isSelected)}
                >{attribution.name}
                </Button>
            </div>
        )
    }

    render() {
        let potentialToxicity = Lang.isNull(this.props.object) ? new ToxicReactionToTreatment() : this.props.object;
        let topAdverseEventSection = null;
        const inputProps = {
            placeholder: 'Enter symptom',
            value: this.state.searchText,
            onChange: this.handleUpdateAdverseEventInput
        };
 
        if (!Lang.isUndefined(this.props.topAdverseEvents) && this.props.topAdverseEvents.length > 0){
            let topAdverseEventObjects = this.props.topAdverseEvents.map((adverseEvent, i) => {
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
                        <div key={adverseEvent.name} className="tooltip">
                            <span id={adverseEvent.name} className={tooltipClass}>{adverseEvent.description}</span>
                            <Button raised
                                key={i}
                                label={adverseEvent.name}
                                onClick={() => this.handleAdverseEventSelection(adverseEvent.name)}
                                className={this.currentlySelectedAdverseEvent(adverseEvent)}
                            >{adverseEvent.name}
                            </Button>
                        </div>
                    )
                })}
            </div>
            )
        }

        let gradesToDisplay = this.state.gradeOptions
        if (!Lang.isUndefined(this.props.gradesToDisplay)) {
            gradesToDisplay = this.state.gradeOptions.filter((g, i) => {
                return (this.props.gradesToDisplay.includes(i+1));
            });
        }

        let customGradePrompt = "";
        if (!Lang.isUndefined(this.props.gradesPrompt)) {
            customGradePrompt = this.props.gradesPrompt;

            return (
                <div>
                    <h1>Toxicity</h1>
                    <p id="data-element-description">
                        {toxicityLookup.getDescription("toxicity")}
                        <br/>
                        <br/>
                        Based on your selections below, the copy button at the bottom will copy a <a href="toxicitySheet.pdf" target="_blank">formatted phrase</a> to paste in your EHR.
                    </p>
                    <Divider className="divider"/>

                    <h4 className="header-spacing">Adverse Event</h4>
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
                    {topAdverseEventSection}
                    <h4 className="header-spacing">Grade</h4>
                    <p id="data-element-description">
                        {toxicityLookup.getDescription("grade")}
                        {customGradePrompt}
                        <span className="helper-text"> Choose one</span>
                    </p>
                    <div id="grade-menu">
                        {gradesToDisplay.map((grade, i) => {
                            if (Lang.isUndefined(potentialToxicity.adverseEvent)) {
                                return this.renderGradeMenuItem(grade)
                            } else {
                                return this.renderGradeMenuItem(grade, potentialToxicity.adverseEvent);
                            }
                        })}
                    </div>
                    <h4 className="header-spacing">Attribution</h4>
                    <p id="data-element-description">
                        {toxicityLookup.getDescription("attribution")}
                        <span className="helper-text"> Choose one</span>
                    </p>

                    <div className="btn-group-attribution">
                        {toxicityLookup.getAttributionOptions().map((attribution, i) => {
                            return this.renderAttributionButton(attribution, i);
                        })}
                    </div>
                </div>
            );
        }
    }
}



export default ToxicityForm;


function titlecase(label) {
    return label.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

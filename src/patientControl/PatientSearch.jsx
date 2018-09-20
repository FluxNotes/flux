import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import SearchSuggestion from './SearchSuggestion.jsx';
import Lang from 'lodash';
import './PatientSearch.css'

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class PatientSearch extends React.Component { 
    constructor(props) { 
        super(props)
        const patient = props.patient;
        this.firstName = patient.getName() ? patient.getName().split(' ')[0] : "";
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            suggestions: [],
            value: ''
        };
    }

    // Creates a regex based on out input value and what we want to search on
    createRegexForSearching = (inputValue) => { 
        //  Establish some common variables for our regex
        const spaceOrNewlineOrPeriod = '(?:[^\\S\\n]|\\.)'; 
        const possibleTrigger = '(?:#|@|\\S*\\[\\[|\\]\\]){0,1}';
        const escapedInput = `${escapeRegExp(inputValue)}`
        // combines for our pattern; adds capture group for snapshot of information
        const inputPattern = `(?:${spaceOrNewlineOrPeriod}${possibleTrigger}${escapedInput}|^${possibleTrigger}${escapedInput})`;
        const regex = new RegExp(inputPattern, "gim");

        return regex;
    }

    getNoteContentWithoutStyle = (noteContent) => {
        let noteContentWithoutStyle = noteContent;

        // Remove HTML tags
        noteContentWithoutStyle = noteContentWithoutStyle.replace(/<(div|\/div|strong|\/strong|em|\/em|u|\/u|ul|\/ul|ol|\/ol|li|\/li){0,}>/g, "");
        // Remove brackets from @ structured phrases
        noteContentWithoutStyle = noteContentWithoutStyle.replace(/@(.*?)\[\[(.*?)\]\]/g, (match, g1, g2) => g2);
        // Removed brackets from # structured phrases
        noteContentWithoutStyle = noteContentWithoutStyle.replace(/#(.*?)\[\[(.*?)\]\]/g, (match, g1, g2) => `#${g1}`);

        return noteContentWithoutStyle;
    }

    // Used by AutoSuggest to get a list of suggestions based on the current search's InputValue
    getSuggestions = (inputValue) => {
        let suggestions = [];
        const regex = new RegExp(escapeRegExp(inputValue), "gi");

        this.props.searchIndex.searchableData.forEach(obj => {
            let suggestion;

            // obj.note means this should be a clinicalNote suggestion
            if (obj.note) {
                suggestion = {
                    date: obj.note.signedOn || obj.note.createdOn,
                    subject: obj.note.subject,
                    inputValue: inputValue,
                    note: obj.note,
                    valueTitle: obj.valueTitle,
                    contentSnapshot: obj.value,
                    source: "clinicalNote",
                    onHighlight: obj.onHighlight
                };

                // If searching content of note, remove styling from content before executing regex
                if (obj.note.content === obj.value) {
                    const noteContentWithoutStyle = this.getNoteContentWithoutStyle(obj.value);
                    const noteRegex = this.createRegexForSearching(inputValue);
                    let contentMatches = noteRegex.exec(noteContentWithoutStyle);

                    while (contentMatches) { 
                        // Want a snapshot of text; use index and continue 100 chars
                        suggestion.contentSnapshot = noteContentWithoutStyle.slice(contentMatches.index, contentMatches.index + 100)
                        suggestion.matchedOn = "contentSnapshot";
                        // Clone the object
                        suggestions.push(Lang.clone(suggestion));
                        contentMatches = noteRegex.exec(noteContentWithoutStyle);
                    }
                } else {
                    const contentMatches = regex.exec(obj.value);

                    if (contentMatches) {
                        suggestion.matchedOn = 'contentSnapshot';
                        suggestions.push(suggestion);
                    }
                }
            } else {
                suggestion = {
                    section: obj.section,
                    subsection: obj.subsection,
                    contentSnapshot: obj.value,
                    valueTitle: obj.valueTitle,
                    inputValue,
                    matchedOn: "",
                    source: 'structuredData',
                }
                const contentMatches = regex.exec(obj.value);

                if (contentMatches) {
                    suggestion.matchedOn = "contentSnapshot";
                    suggestions.push(suggestion);
                }
            }

            const contentMatches = regex.exec(obj.valueTitle);
            if (!suggestion.matchOn && contentMatches) {
                suggestion.matchedOn = "valueTitle";
                suggestions.push(suggestion);
            }
        });

        return suggestions;
    }

    // Teach Autosuggest how to calculate the input value for every given suggestion.
    getSuggestionValue = suggestion => { 
        return this.state.value;
    }

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };
  
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };
  
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
  

    // Will be called every time suggestion is selected via mouse or keyboard.
    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        if (suggestion.note) {
            this.props.setSearchSelectedItem(suggestion.note)
        } else {
            this.props.moveTargetedDataPanelToSubsection(suggestion.section, suggestion.subsection);
        }

        this.refs.autosuggest.input.blur();
    }

    onSuggestionHighlighted = ({suggestion}) => {
        if (!Lang.isNull(suggestion)) {
            if (suggestion.onHighlight) {
                suggestion.onHighlight(suggestion);
            } else if (suggestion.source !== "clinicalNote") {
                this.props.moveTargetedDataPanelToSubsection(suggestion.section, suggestion.subsection);
            }
        }
    }

    // When the input is focused, Autosuggest will consult this function when to render suggestions
    shouldRenderSuggestions = (value) => {
        return value.trim().length > 2;
    }

    // Defines how to render the suggestion
    renderSuggestion = (suggestion) => {
        return <SearchSuggestion 
            suggestion={suggestion}
        />
    }

    // Customize the input component to include the search icon
    renderInputComponent = (inputProps) => (
        <div>
            <span className="fa fa-search search-icon"></span>
            <input {...inputProps} />
        </div>
    );

    render () { 
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: `Search ${this.firstName}'s notes`,
            value,
            onChange: this.onChange
        };
      
        return (
            <div id="patient-search">
                <Autosuggest
                    ref="autosuggest"
                    getSuggestionValue={this.getSuggestionValue}
                    inputProps={inputProps}
                    onSuggestionHighlighted={this.onSuggestionHighlighted}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    onSuggestionSelected={this.onSuggestionSelected}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    renderInputComponent={this.renderInputComponent}
                    renderSuggestion={this.renderSuggestion}
                    shouldRenderSuggestions={this.shouldRenderSuggestions}
                    suggestions={suggestions}
                    focusInputOnSuggestionClick={false}
                />
            </div>
        );
    }
}

PatientSearch.propTypes = {
    setSearchSelectedItem: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    searchIndex: PropTypes.object.isRequired
};

export default PatientSearch;

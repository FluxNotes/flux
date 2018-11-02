import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import SearchSuggestion from './SearchSuggestion.jsx';
import Lang from 'lodash';
import { CircularProgress } from 'material-ui';
import './PatientSearch.css'

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class PatientSearch extends React.Component { 
    constructor(props) { 
        super(props)
        const patient = props.patient;
        this.firstName = patient.getName() ? patient.getName().split(' ')[0] : "";
        this.debounceGetSuggestions = Lang.debounce(this.getSuggestions, 500);
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            suggestions: [],
            openNoteSuggestions: [],
            value: '',
            previousSuggestion: null,
            loading: false
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
        let results = this.props.searchIndex.search(inputValue);
        results.forEach(result => {
            let suggestion;
            if (result.note) {
                suggestion = {
                    date: result.note.signedOn || result.note.createdOn,
                    subject: result.note.subject,
                    inputValue: inputValue,
                    note: result.note,
                    valueTitle: result.valueTitle,
                    contentSnapshot: this.getNoteContentWithoutStyle(result.value),
                    source: "clinicalNote",
                    section: result.section,
                    matchedOn: result.valueTitle === "Content" ? "contentSnapshot" : "valueTitle",
                    onHighlight: result.onHighlight,
                    onClick: result.onClick,
                    score: result.score,
                    indices: result.indices
                }
            } else {
                suggestion = {
                    section: result.section,
                    subsection: result.subsection,
                    contentSnapshot: result.value,
                    valueTitle: result.valueTitle,
                    inputValue,
                    matchedOn: "",
                    source: 'structuredData',
                    onHighlight: result.onHighlight,
                    score: result.score,
                    field: result.field
                }
            }
            suggestions.push(suggestion);
        });
        this.props.setSearchSuggestions(suggestions);
        this.setState({ suggestions, loading: false });
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
            loading: true,
        });
        this.debounceGetSuggestions(value);
    };
  
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.props.setSearchSuggestions([]);
        this.setState({
            suggestions: [],
            openNoteSuggestions: []
        });
    };
  

    // Will be called every time suggestion is selected via mouse or keyboard.
    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        if (suggestion.onClick) {
            suggestion.onClick(suggestion);
        }

        this.setState({ previousSuggestion: null });
        this.refs.autosuggest.input.blur();
    }

    onSuggestionHighlighted = ({suggestion}) => {
        const {previousSuggestion} = this.state;
        if (previousSuggestion && previousSuggestion.onHighlight) previousSuggestion.onHighlight(previousSuggestion, true);
        if (!Lang.isNull(suggestion) && suggestion.onHighlight) {
            suggestion.onHighlight(suggestion);
        }

        this.setState({
            previousSuggestion: suggestion
        });
    }

    // When the input is focused, Autosuggest will consult this function when to render suggestions
    shouldRenderSuggestions = (value) => {
        return value.trim().length > 1;
    }

    // Defines how to render the suggestion
    renderSuggestion = (suggestion) => {
        return <SearchSuggestion 
            suggestion={suggestion}
        />
    }

    // Customize the input component to include the search icon
    renderInputComponent = (inputProps) => {
        const icon = this.state.loading ? <CircularProgress className="loading-spinner" size={20} /> : <span className="fa fa-search search-icon"></span>;
        return (
            <div>
                {icon}
                <input {...inputProps} />
            </div>
        );
    }

    render () { 
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: `Search ${this.firstName}'s record`,
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
    searchIndex: PropTypes.object.isRequired,
    setOpenNoteSearchSuggestions: PropTypes.func,
    setSearchSuggestions: PropTypes.func
};

export default PatientSearch;

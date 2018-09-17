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

    // Based on searchInput, check a note's meatdata for any matches  
    searchNoteMetaData = (inputValue, note) => { 
        const newSuggestion = this.createNewSuggestion(inputValue, note);
        const regex = this.createRegexForSearching(inputValue)
        const relevantNoteMetadata = (
            note.signedOn + ' ' + 
            note.entryInfo.creationTime.value + ' ' +
            note.subject + ' ' +
            note.hospital
        ).toLowerCase();

        const metadataMatches = regex.exec(relevantNoteMetadata);
        if(metadataMatches) {
            // Determine what we matched with -- track that in suggestions metadata.
            let matchedMetaData; 
            let date;
            if (note.signedOn) {
                date = note.signedOn;
            } else {
                date = note.entryInfo.creationTime.value;
            }

            if (date && date.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                matchedMetaData = "date";
            } else if (note.subject && note.subject.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                matchedMetaData = "subject";
            } else if (note.hospital && note.hospital.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                matchedMetaData = "hospital";
            }
            // Add additional metadata, push to suggestions
            newSuggestion.contentSnapshot = note.content.slice(0, 25);
            newSuggestion.matchedOn = matchedMetaData;
            return newSuggestion
        } else { 
            // Return nothing
            return null
        }
    }

    // basic template for creating a newSuggestion
    createNewSuggestion = (inputValue, note) => { 
        let date;
        if (note.signedOn) {
            date = note.signedOn;
        } else {
            date = note.entryInfo.creationTime.value;
        }
        return { 
            date: date,
            subject: note.subject,
            hospital: note.hospital,
            inputValue: inputValue,
            note: note,
            source: "clinicalNote"
        }
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
        return regex
    }

    getNotesWithoutStyle = (notes) => {
        const notesCopy = Lang.cloneDeep(notes);
        notesCopy.forEach((note) => {
            let noteContent = note.content;
            // Remove HTML tags
            noteContent = noteContent.replace(/<(div|\/div|strong|\/strong|em|\/em|u|\/u|ul|\/ul|ol|\/ol|li|\/li){0,}>/g, "");
            // Remove brackets from @ structured phrases
            noteContent = noteContent.replace(/@(.*?)\[\[(.*?)\]\]/g, (match, g1, g2) => g2);
            // Removed brackets from # structured phrases
            noteContent = noteContent.replace(/#(.*?)\[\[(.*?)\]\]/g, (match, g1, g2) => `#${g1}`);
            note.content = noteContent;
        });
        return notesCopy;
    }

    getNoteSuggestions = (inputValue) => {
        const notes = this.props.patient.getNotes();
        const notesWithoutStyle = this.getNotesWithoutStyle(notes);
        const suggestions =  notesWithoutStyle.reduce((suggestions, note) => {
            // If we have long-enough input and there is content in the note
            if (note.content && inputValue && inputValue.length >= 2) {
                const regex = this.createRegexForSearching(inputValue)
                // Search note content
                const relevantNoteContent = (note.content);
                let contentMatches = regex.exec(relevantNoteContent);
                // NewSuggestion object -- to be pushed with relevant data if there's a match
                if (contentMatches) { 
                    let newSuggestion = this.createNewSuggestion(inputValue, note);
                    // For each match, add a suggestion.
                    while (contentMatches) { 
                        // Want a snapshot of text; use index and continue 100 chars
                        newSuggestion.contentSnapshot = relevantNoteContent.slice(contentMatches.index, contentMatches.index + 100)
                        newSuggestion.matchedOn = "contentSnapshot";
                        // Clone the object
                        suggestions.push(Lang.clone(newSuggestion));
                        contentMatches = regex.exec(relevantNoteContent);
                    }
                } else {
                    // Search note metadata
                    const newSuggestionBasedOnMetadata = this.searchNoteMetaData(inputValue, note);
                    (newSuggestionBasedOnMetadata && suggestions.push(newSuggestionBasedOnMetadata))
                }
            }
            return suggestions;
        }, []); 
        return suggestions;
    }

    getStructuredDataSuggestions = (inputValue) => {
        let suggestions = [];
        const regex = new RegExp(escapeRegExp(inputValue), "gi");
        this.props.searchIndex.searchableData.forEach(obj => {
            let suggestion = {
                section: obj.section,
                subsection: obj.subsection,
                contentSnapshot: obj.value,
                valueTitle: obj.valueTitle,
                inputValue,
                matchedOn: "",
                source: "structuredData"
            }
            let contentMatches = regex.exec(obj.value);
            if (contentMatches) {
                suggestion.matchedOn = "contentSnapshot";
                suggestions.push(suggestion);
            }
            contentMatches = regex.exec(obj.valueTitle);
            if (contentMatches) {
                suggestion.matchedOn = "valueTitle";
                suggestions.push(suggestion);
            }
        });

        return suggestions;
    }

    // Used by AutoSuggest to get a list of suggestions based on the current search's InputValue
    getSuggestions = (inputValue) => {
        let noteSuggestions = this.getNoteSuggestions(inputValue);
        let structuredDataSuggestions = this.getStructuredDataSuggestions(inputValue);

        return structuredDataSuggestions.concat(noteSuggestions);
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
        if (suggestion.source === "clinicalNote") {
            const contextNotes = this.props.patient.getNotes();
            const selectedNote = contextNotes.find(note => note.entryInfo.entryId === suggestion.note.entryInfo.entryId);

            this.props.setSearchSelectedItem(selectedNote);
        } else {
            this.props.moveTargetedDataPanelToSubsection(suggestion.section, suggestion.subsection);
        }
        this.refs.autosuggest.input.blur();
    }

    onSuggestionHighlighted = ({suggestion}) => {
        if (!Lang.isNull(suggestion)) {
            if (suggestion.source !== "clinicalNote") {
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

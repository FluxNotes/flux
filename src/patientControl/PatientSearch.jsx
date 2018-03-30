import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import SearchSuggestion from './SearchSuggestion.jsx';
import SearchInput from './SearchInput.jsx';
import Lang from 'lodash';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        width: "25vw",
        minWidth: "250px",
        zIndex: 1,
        marginTop: theme.spacing.unit,
        right: 0,
        padding: "8px auto",
        maxHeight:"300px",
        overflowY: "auto"
    }
});


function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

class PatientSearch extends React.Component { 
    constructor(props) { 
        super(props)
        const patient = props.patient;
        const firstName = patient.getName() ? patient.getName().split(' ')[0] : "";
        this.state = {
            firstName: firstName,
        };
    }

    findThisItem = (note) => {
        this.props.setFullAppState('searchSelectedItem', note)
    }

    getSuggestions(inputValue) {
        const notes = this.props.patient.getNotes();
        return notes.reduce((suggestions, note) => {
            // If we have long-enough input and there is content in the note
            if (note.content && inputValue && inputValue.length >= 2) {
                //  Establish some common variables for our regex
                const spaceOrNewlineOrPeriod = '(?:[^\\S\\n]|\\.)'; 
                const possibleTrigger = '(?:#|@|\\S*\\[\\[|\\]\\]){0,1}';
                const escapedInput = `${escapeRegExp(inputValue)}`
                // combines for our pattern; adds capture group for snapshot of information
                const inputPattern = `(?:${spaceOrNewlineOrPeriod}${possibleTrigger}${escapedInput}|^${possibleTrigger}${escapedInput})`;
                const regex = new RegExp(inputPattern, "gim");
                // Search note content
                const relevantNoteContent = (note.content);
                let contentMatches = regex.exec(relevantNoteContent);
                // NewSuggestion object -- to be pushed with relevant data if there's a match
                let newSuggestion = { 
                    date: note.date,
                    subject: note.subject,
                    hospital: note.hospital,
                    inputValue: inputValue,
                    note: note,
                }
                if (contentMatches) { 
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
                    const relevantNoteMetadata = (
                        note.date + ' ' +
                        note.subject + ' ' +
                        note.hospital
                    ).toLowerCase();
                    const metadataMatches = regex.exec(relevantNoteMetadata);

                    if(metadataMatches) {
                        let matchedMetaData; 
                        if (note.date.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                            matchedMetaData = "date";
                        } else if (note.subject.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                            matchedMetaData = "subject";
                        } else if (note.hospital.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                            matchedMetaData = "hospital";
                        }
                        // Add additional metadata, push to suggestions
                        newSuggestion.contentSnapshot = note.content.slice(0, 25);
                        newSuggestion.matchedOn = matchedMetaData;
                        suggestions.push(newSuggestion);
                    }
                }
            }
            return suggestions;
        }, []); 
    }

    render () { 
        const { classes, setFullAppState } = this.props;

        return (
            <div className={classes.root}>
                <Downshift
                    defaultHighlightedIndex={0}
                    itemToString={() => ""}
                >
                    {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex, selectItem }) => {
                        return (
                            <div className={classes.container}>
                                <SearchInput
                                    fullWidth={true}
                                    classes={classes}
                                    InputProps={getInputProps({
                                        placeholder: `Search ${this.state.firstName}'s notes`,
                                        id: 'integration-downshift-simple',
                                        onKeyDown: (event) => {
                                            if (event.key === 'Enter' && this.getSuggestions(inputValue)[highlightedIndex]) {
                                                const selectedElement = this.getSuggestions(inputValue)[highlightedIndex];
                                                this.findThisItem(selectedElement.note);
                                                selectItem("");
                                            }
                                        },
                                    })}
                                />
                                {isOpen 
                                    ? (
                                        <Paper className={classes.paper} square>
                                            {this.getSuggestions(inputValue).map((suggestion, index) => { 
                                                return (
                                                    <SearchSuggestion
                                                        suggestion={suggestion}
                                                        key={suggestion.date + suggestion.subject + index}
                                                        index={index}
                                                        itemProps={getItemProps({ item: "" })}
                                                        highlightedIndex={highlightedIndex}
                                                        selectedItem={selectedItem}
                                                        setFullAppState={setFullAppState}
                                                    />
                                                );
                                            })}
                                            
                                        </Paper>
                                    ) 
                                    : null
                                }
                            </div>
                        );
                    }}
                </Downshift>
            </div>
        );
    }
}

PatientSearch.propTypes = {
    classes: PropTypes.object.isRequired,
    setFullAppState: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientSearch);

import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import SearchSuggestion from './SearchSuggestion.jsx';
import SearchInput from './SearchInput.jsx';

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
        width: "400px",
        zIndex: 1,
        marginTop: theme.spacing.unit,
        // top: 0,
        right: 0,
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

    getSuggestions(inputValue) {
        const notes = this.props.patient.getNotes();

        return notes.reduce((suggestions, note) => {
            // const str = `([^\\S\n]\\S*){0,2}${escapeRegExp(inputValue.toLowerCase())}(\\S*[^\\S\n]\\S*){0,2}`
            // const str = `([^\\S\n]\\S*[^\\S\n]){0,1}${escapeRegExp(inputValue.toLowerCase())}([^\\S\n]\\S*){0,2}`
            // const str = `${escapeRegExp(inputValue.toLowerCase())}(\\S*[^\\S\n]\\S*){0,2}`
            // const str = `([^\\S\n]){0,1}${escapeRegExp(inputValue.toLowerCase())}(\\S*[^\\S\n]\\S*){0,2}`
            //TODO: Fix to search for best options, not just the first five. 

            // If we need more suggestions and there is content in the note
            if (suggestions.length < 5 && note.content && inputValue) {
                const space = '([^\\S\\n])'; 
                const escInput = escapeRegExp(inputValue.toLowerCase());
                const continueToNextWord = '(\\S*[^\\S\\n]\\S*){0,2}';
                const possibleTrigger = '(@|#){0,1}'
                const strVar = `(${space}${possibleTrigger}${escInput}${continueToNextWord}|^${possibleTrigger}${escInput}${continueToNextWord})`
                const regex = new RegExp(strVar);
                const result = regex.exec(note.content.toLowerCase());
                if (result) { 
                    suggestions.push({
                        date: note.date,
                        subject: note.subject,
                        noteReference: {
                            shrId: note.entryInfo.shrId, 
                            entryId: note.entryInfo.entryId,
                        },
                        contentSnapshot: result[0].slice(0, 25), 
                        note: note
                    });    
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
                    // Define what the search-bar is going to look like. 
                    render={({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => {
                        return (
                            <div className={classes.container}>
                                <SearchInput
                                    fullWidth={true}
                                    classes={classes}
                                    InputProps={getInputProps({
                                        placeholder: `Search ${this.state.firstName}'s record`,
                                        id: 'integration-downshift-simple',
                                    })}
                                />
                                {isOpen 
                                    ? (
                                        <Paper className={classes.paper} square>
                                            {this.getSuggestions(inputValue).map((suggestion, index) => { 
                                                console.log(suggestion)
                                                return (
                                                    <SearchSuggestion
                                                        suggestion={suggestion}
                                                        key={suggestion.date + suggestion.subject}
                                                        index={index}
                                                        itemProps={getItemProps({ item: suggestion.contentSnapshot })}
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
                />
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

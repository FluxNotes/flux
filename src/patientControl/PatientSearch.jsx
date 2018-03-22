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
        width: "25vw",
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

    openNote = (note) => {
        this.props.setFullAppState('searchSelectedItem', note)

        // this.props.setFullAppState("noteClosed", false);
        // this.props.setFullAppState('layout', "split");
        // this.props.setFullAppState('isNoteViewerVisible', true);
        // // Don't start saving until there is content in the editor
        // if (!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText) && this.props.documentText.length > 0) {
        //     if (Lang.isEqual(this.props.currentlyEditingEntryId, -1)) {
        //         this.saveEditorContentsToNewNote();
        //     } else {
        //         this.updateExistingNote();
        //     }
        // }
        // this.props.updateCurrentlyEditingEntryId(note.entryInfo.entryId);
        // // the lines below are duplicative
        // this.props.updateSelectedNote(note);
        // this.props.loadNote(note);

        // // If the note selected is an In-Progress note, switch to the context tray else use the clinical-notes view
        // if (isInProgressNote) {
        //     this.props.setFullAppState('isNoteViewerEditable', true);
        //     this.toggleView("context-tray");
        // } else {
        //     this.props.setFullAppState('isNoteViewerEditable', false);
        //     this.toggleView("clinical-notes");
        // }
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
                    defaultHighlightedIndex={0}
                >
                    {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => {
                        return (
                            <div className={classes.container}>
                                <SearchInput
                                    fullWidth={true}
                                    classes={classes}
                                    InputProps={getInputProps({
                                        placeholder: `Search ${this.state.firstName}'s record`,
                                        id: 'integration-downshift-simple',
                                        onKeyDown: (event) => {
                                            if (event.key === 'Enter') {
                                                // Prevent Downshift's default 'Enter' behavior.
                                                // event.preventDownshiftDefault = true;
                                                const selectedElement = this.getSuggestions(inputValue)[highlightedIndex];
                                                this.openNote(selectedElement.note);
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

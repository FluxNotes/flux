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
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
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
        let count = 0;
        const notes = this.props.patient.getNotes();
        console.log(notes);

        return notes.filter((note) => {
            const keep =
                (!inputValue || note.content.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
                count < 5;

            if (keep) {
                count += 1;
            }

            return keep;
        }).map((note) => {
            const str = `([^\S\n]\\S*){0,2}${escapeRegExp(inputValue.toLowerCase())}([^\S\n]\\S*){0,2}`
            const regex = new RegExp(str);
            const result = regex.exec(note.content.toLowerCase());
            return {
                label: `${note.date} - ${note.subject}`,
                noteReference: `ShrId: ${note.entryInfo.shrId}, Entry: ${note.entryInfo.entryId}`,
                contentSnapshot: result[0].slice(0, 25), 
            }    
        }); 
    }

    render () { 
        const { classes, patient } = this.props;

        return (
            <div className={classes.root}>
                <Downshift>
                  {
                    // Define what the search-bar is going to look like. 
                    ({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
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
                                                key={suggestion.label}
                                                index={index}
                                                itemProps={getItemProps({ item: suggestion.label })}
                                                highlightedIndex={highlightedIndex}
                                                selectedItem={selectedItem}
                                            />
                                        );
                                    })}
                                    
                                </Paper>
                            ) 
                            : null
                        }
                      </div>
                    )
                  }
                </Downshift>
            </div>
        );
    }
}

PatientSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  patient: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientSearch);

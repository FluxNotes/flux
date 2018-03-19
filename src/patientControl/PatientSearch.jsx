import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import SearchSuggestion from './SearchSuggestion.jsx';
import SearchInput from './SearchInput.jsx';

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
];

function getSuggestions(inputValue) {
    let count = 0;

    return suggestions.filter(suggestion => {
        const keep =
            (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
            count < 5;

        if (keep) {
            count += 1;
        }

        return keep;
    });
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
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
    },
    chip: {
        margin: `${theme.spacing.unit}px ${theme.spacing.unit / 4}px`,
    },
});

class PatientSearch extends React.Component { 
    render () { 
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Downshift>
                  {
                    ({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
                      <div className={classes.container}>
                        <SearchInput
                            fullWidth={true}
                            classes={classes}
                            InputProps={getInputProps({
                                placeholder: 'Search a country (start with a)',
                                id: 'integration-downshift-simple',
                            })}
                        />
                        {isOpen 
                            ? (
                                <Paper className={classes.paper} square>
                                    {getSuggestions(inputValue).map((suggestion, index) =>
                                        <SearchSuggestion
                                            suggestion={suggestion}
                                            index={index}
                                            itemProps={getItemProps({ item: suggestion.label })}
                                            highlightedIndex={highlightedIndex}
                                            selectedItem={selectedItem}
                                        />
                                    )}
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
};

export default withStyles(styles)(PatientSearch);

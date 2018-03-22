import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { InputAdornment } from 'material-ui/Input';
import './SearchInput.css';

class SearchInput extends React.Component {
    render () { 
        const { InputProps, classes, ref, ...other } = this.props;
        return (
            <TextField
                {...other}
                inputRef={ref}
                InputProps={{
                    classes: {
                        input: `${classes.input} input-ellipsis`,
                    },
                    startAdornment: <InputAdornment position="start"><span className="fa fa-search search-icon"></span></InputAdornment>,
                    ...InputProps,
                }}
            />
        );
    }
}

SearchInput.propTypes = {
    fullWidth: PropTypes.bool,
    classes: PropTypes.object,
    InputProps: PropTypes.object,
};

export default SearchInput;
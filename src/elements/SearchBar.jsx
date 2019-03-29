import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import './SearchBar.css'

export default class SearchBar extends Component {
    render () { 
        return (
            <div id="search-container">
                <span className="fa fa-search search-icon"></span>
                <TextField
                    className="search-text"
                    label={this.props.label}
                    value={this.props.searchString}
                    onChange={(event) => this.props.handleSearch(event.target.value)}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    searchString: PropTypes.string,
    handleSearch: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

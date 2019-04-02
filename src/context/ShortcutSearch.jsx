import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import './ShortcutSearch.css'

export default class ShortcutSearch extends Component {
    render() {
        return (
            <div id="shortcut-search">
                <div className="shortcut-search-container">
                    <TextField
                        className="shortcut-search-text"
                        label="Search shortcuts"
                        onChange={(event) => this.props.handleSearch(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}

ShortcutSearch.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lang from 'lodash';
import TextField from 'material-ui/TextField';

import './ShortcutSearch.css'

export default class ShortcutSearch extends Component {
    render () { 
        let totalShown, countBeforeSearch;
        return (
            <div id="shortcut-search">
                <div className="shortcut-search-container">
                    <div className="shortcut-search-title">
                        <div>Filter:</div>
                        <div className="count">(showing {totalShown} of {countBeforeSearch})</div>
                    </div>

                    <TextField
                        className="shortcut-search-text"
                        label="Search shortcuts"
                        value={this.props.searchString}
                        onChange={(event) => this.props.handleSearch(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}

ShortcutSearch.proptypes = {
    context: PropTypes.object,
    contextManager: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui';
import FontAwesome from 'react-fontawesome';

import './OptionsCheckboxList.css';

export default class OptionsCheckboxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: true
        };
    }

    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    toggleAll = () => {
        const { options, selectedOptions } = this.props;
        if (options.length === selectedOptions.length) {
            this.props.setSelected([]);
        } else {
            this.props.setSelected(options.map(option => option.option));
        }
    }

    toggleOption(option) {
        const { selectedOptions } = this.props;
        const newOptions = selectedOptions.slice();
        const optionIndex = selectedOptions.indexOf(option.option);

        if (optionIndex !== -1) {
            newOptions.splice(optionIndex, 1);
            this.props.setSelected(newOptions);
        } else {
            newOptions.push(option.option);
            this.props.setSelected(newOptions);
        }
    }

    renderOptions = () => {
        const { options, selectedOptions } = this.props;

        return (
            <div className="selection-options">
                {options.map((option, i) => {
                    return (
                        <FormControl key={i} className="selection-options__selection">
                            <FormLabel>
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox
                                            checked={selectedOptions.indexOf(option.option) !== -1}
                                            onChange={() => this.toggleOption(option)}
                                            value={option.option}
                                            className="checkbox" />
                                    }
                                    label={<span className="selection-options__title">{option.option}</span>}
                                />
                            </FormLabel>
                        </FormControl>
                    );
                })}
            </div>
        );
    }

    renderOptionsHeader = () => {
        const { optionsHeader, selectedOptions, options } = this.props;

        const checked = selectedOptions.length === options.length;
        const indeterminate = selectedOptions.length > 0 && !checked;

        return (
            <FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            indeterminate={indeterminate}
                            onChange={this.toggleAll}
                            value={optionsHeader}
                            className="checkbox" />
                    }
                    label={
                        <span>
                            <span className="header-title">{optionsHeader}</span>
                            <span className="selected-count">{selectedOptions.length}/{options.length}</span>
                        </span>
                    }
                />
            </FormLabel>
        );
    }

    render() {
        const { expanded } = this.state;
        const expandIcon = expanded ? 'angle-down' : 'angle-right';

        return (
            <div className="options-checkbox-list">
                <div className="options-checkbox-list__header">
                    <FontAwesome name={expandIcon} className="expand-icon" fixedWidth onClick={this.handleExpand} />
                    {this.renderOptionsHeader()}
                </div>

                {expanded &&
                    <div className="options-checkbox-list__options">{this.renderOptions()}</div>
                }
            </div>
        );
    }
}

OptionsCheckboxList.propTypes = {
    optionsHeader: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOptions: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired
}

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

    toggleOption(option) {
        this.props.setSelected(option, !this.props.options.options[option].selected);
    }

    renderOptions = () => {
        const { options } = this.props.options;

        return (
            <div className="selection-options">
                {Object.keys(options).map((key, i) => {
                    const { selected, displayText, minValue, maxValue, value } = options[key];
                    const hasRange = minValue !== undefined && maxValue !== undefined;
                    const optionText = hasRange ? `${displayText}: ${minValue}-${maxValue}` : `${displayText}: ${value}`;

                    return (
                        <FormControl key={key} className="selection-options__selection">
                            <FormLabel>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selected}
                                            onChange={() => this.toggleOption(key)}
                                            value={displayText}
                                            className="checkbox" />
                                    }
                                    label={<span className="selection-options__title">{optionText}</span>}
                                />
                            </FormLabel>
                        </FormControl>
                    );
                })}
            </div>
        );
    }

    renderOptionsHeader = () => {
        const { displayText, selected, options } = this.props.options;
        const optionKeys = Object.keys(options);
        const selectedOptions = optionKeys.filter((key) => options[key].selected);

        const indeterminate = !selected && selectedOptions.length > 0;

        return (
            <FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selected}
                            indeterminate={indeterminate}
                            onChange={() => this.props.setAllSelected(!selected)}
                            value={displayText}
                            className="checkbox" />
                    }
                    label={
                        <span>
                            <span className="header-title">{displayText}</span>
                            <span className="selected-count">{selectedOptions.length}/{optionKeys.length}</span>
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
    options: PropTypes.object.isRequired,
    setSelected: PropTypes.func.isRequired,
    setAllSelected: PropTypes.func.isRequired
}

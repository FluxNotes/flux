import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui';
import FontAwesome from 'react-fontawesome';

import OptionsRangeSelector from '../OptionsRangeSelector/OptionsRangeSelector';

import './OptionsCheckboxList.css';

export default class OptionsCheckboxList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: true,
            openRangeSelector: { age: false, diagnosedAge: false }
        };
    }

    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    handleOpenRangeSelector = option => {
        this.setState(({ openRangeSelector }) => ({ openRangeSelector: { ...openRangeSelector, [option]: true } }));
    }

    handleCloseRangeSelector = option => {
        this.setState(({ openRangeSelector }) => ({ openRangeSelector: { ...openRangeSelector, [option]: false } }));
    }

    toggleOption = option => {
        this.props.setSelected(option, !this.props.options.options[option].selected);
    }

    renderOptions = () => {
        const { category, patientAge, selectSimilarPatientOptionRange } = this.props;
        const { options } = this.props.options;
        const { openRangeSelector } = this.state;

        return (
            <div className="selection-options">
                {Object.keys(options).map((key, i) => {
                    const {
                        selected, displayText, minValue, maxValue, defaultMinValue, defaultMaxValue, value, unit
                    } = options[key];
                    const hasRange = minValue !== undefined && maxValue !== undefined;
                    const optionText = <span className="display-text">{`${displayText}: ${value}`}</span>;

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
                                    label={
                                        <span className="selection-options__title">
                                            {!hasRange && optionText}
                                            {hasRange && <span className="display-text">{displayText}: </span>}
                                        </span>
                                    }
                                />
                            </FormLabel>

                            {hasRange &&
                                <div>
                                    <span className="range" onClick={() => this.handleOpenRangeSelector(key)}>
                                        {minValue}-{maxValue}
                                    </span>
                                    {openRangeSelector[key] &&
                                        <ClickAwayListener onClickAway={() => this.handleCloseRangeSelector(key)}>
                                            <OptionsRangeSelector
                                                className={displayText}
                                                name={displayText}
                                                unit={unit}
                                                value={value}
                                                min={minValue}
                                                max={maxValue}
                                                defaultMin={defaultMinValue}
                                                defaultMax={defaultMaxValue}
                                                patientAge={patientAge}
                                                category={category}
                                                keyy={key}
                                                selectSimilarPatientOptionRange={selectSimilarPatientOptionRange}
                                            />
                                        </ClickAwayListener>
                                    }
                                </div>
                            }
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
    category: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    patientAge: PropTypes.number.isRequired,
    setSelected: PropTypes.func.isRequired,
    setAllSelected: PropTypes.func.isRequired,
    selectSimilarPatientOptionRange: PropTypes.func.isRequired
}

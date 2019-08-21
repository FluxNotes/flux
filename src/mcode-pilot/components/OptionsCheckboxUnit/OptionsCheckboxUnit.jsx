import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui';

import OptionsRangeSelector from '../OptionsRangeSelector/OptionsRangeSelector';


export default class OptionsCheckboxUnit extends Component {
    constructor(props) {
        super(props);

        this.currentSelect = false;
        this.currentTime = 0;
        this.state = {
            openRangeSelector: false
        };

        this.toggleOption = this.toggleOption.bind(this);
        this.handleCloseRangeSelector = this.handleCloseRangeSelector.bind(this);
        this.handleOpenRangeSelector = this.handleOpenRangeSelector.bind(this);
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.selected!==this.currentSelect || this.state.openRangeSelector !== nextState.openRangeSelector;
    }
    componentDidUpdate(prevProps) {
        this.currentSelect = this.props.selected;
    }
    handleOpenRangeSelector() {
        this.setState({ openRangeSelector: true });
    }

    handleCloseRangeSelector() {
        this.setState({ openRangeSelector: false });
    }

    toggleOption() {
        this.props.toggleOption(this.props.name);
    }

    render() {
        const { openRangeSelector} = this.state;
        const { selected, name,displayText,hasRange,optionText, minValue, maxValue, unit, value, defaultMinValue, defaultMaxValue, category, selectSimilarPatientOptionRange} = this.props;
        return (
            <div className="options-checkbox-unit">
                <FormControl key={name} className="selection-options__selection">
                    <FormLabel>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selected}
                                    onChange={this.toggleOption}
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
                            <span className="range" onClick={this.handleOpenRangeSelector}>
                                {minValue}-{maxValue}
                            </span>
                            {openRangeSelector &&
                                <ClickAwayListener onClickAway={this.handleCloseRangeSelector}>
                                    <OptionsRangeSelector
                                        className={displayText}
                                        name={displayText}
                                        unit={unit}
                                        value={value}
                                        min={minValue}
                                        max={maxValue}
                                        defaultMin={defaultMinValue}
                                        defaultMax={defaultMaxValue}
                                        category={category}
                                        keyy={name}
                                        selectSimilarPatientOptionRange={selectSimilarPatientOptionRange}
                                    />
                                </ClickAwayListener>
                            }
                        </div>
                    }
                </FormControl>
            </div>
        );
    }
}

OptionsCheckboxUnit.propTypes = {
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    displayText: PropTypes.string.isRequired,
    hasRange: PropTypes.bool.isRequired,
    optionText: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    selectSimilarPatientOptionRange: PropTypes.func.isRequired,
};

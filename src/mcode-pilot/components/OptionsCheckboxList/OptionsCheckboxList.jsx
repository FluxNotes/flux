import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui';
import FontAwesome from 'react-fontawesome';
import FilterOptions from '../../utils/FilterOptions';

import OptionsRangeSelector from '../OptionsRangeSelector/OptionsRangeSelector';
import OptionsCheckboxUnit from '../OptionsCheckboxUnit/OptionsCheckboxUnit';

import './OptionsCheckboxList.css';

export default class OptionsCheckboxList extends Component {
    constructor(props) {
        super(props);
        this.fOptions = new FilterOptions({});
        this.name = this.props.category;
        this.selectListLen = 0;
        this.currentTime = 0;
        this.state = {
            expanded: true
        };
    }

    componentDidMount() {
        this.selectListLen = this.fOptions.recursiveFilterSearch(this.props.options).filter((option) => { return option.selected; }).length;
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.currentTime = Date.now();
        return this.selectListLen !== this.fOptions.recursiveFilterSearch(nextProps.options).filter((option) => { return option.selected; }).length || this.state.expanded !== nextState.expanded;
    }

    componentDidUpdate(prevProps) {
        this.selectListLen = this.fOptions.recursiveFilterSearch(prevProps.options).filter((option) => { return option.selected; }).length;
        console.log(Date.now()-this.currentTime);
    }
    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    toggleOption = option => {
        this.props.setSelected(option, !this.props.options.options[option].selected);
    }

    renderOptions = () => {
        const { category, selectSimilarPatientOptionRange } = this.props;
        const { options } = this.props.options;

        return (
            <div className="selection-options">
                {Object.keys(options).map((key, i) => {
                    const {
                        selected, displayText, minValue, maxValue, defaultMinValue, defaultMaxValue, value, unit
                    } = options[key];
                    const hasRange = minValue !== undefined && maxValue !== undefined;
                    const optionText = <span className="display-text">{`${displayText}: ${value}`}</span>;

                    return (
                        <OptionsCheckboxUnit
                            key = {key}
                            name = {key}
                            selected = {selected}
                            displayText = {displayText}
                            minValue = {minValue}
                            maxValue = {maxValue}
                            defaultMinValue = {defaultMinValue}
                            defaultMaxValue = {defaultMaxValue}
                            value = {value}
                            hasRange = {hasRange}
                            optionText = {optionText}
                            toggleOption = {this.toggleOption}
                            unit = {unit}
                            category = {category}
                            selectSimilarPatientOptionRange = {selectSimilarPatientOptionRange}


                        >

                        </OptionsCheckboxUnit>
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
    setSelected: PropTypes.func.isRequired,
    setAllSelected: PropTypes.func.isRequired,
    selectSimilarPatientOptionRange: PropTypes.func.isRequired
};

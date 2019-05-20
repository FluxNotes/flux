import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import Slider from 'rc-slider';

import './OptionsRangeSelector.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class OptionsRangeSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            minValue: props.min,
            maxValue: props.max
        };
    }

    handleResetRange = () => {
        const { defaultMin, defaultMax, category, keyy, selectSimilarPatientOptionRange } = this.props;
        this.setState({ minValue: defaultMin, maxValue: defaultMax });
        selectSimilarPatientOptionRange(category, keyy, defaultMin, defaultMax);
    }

    handleChange = values => {
        const { category, keyy, selectSimilarPatientOptionRange } = this.props;
        const minValue = values[0];
        const maxValue = values[1];
        this.setState({ minValue, maxValue });
        selectSimilarPatientOptionRange(category, keyy, minValue, maxValue);
    }

    render() {
        const { name, unit, value } = this.props;
        const { minValue, maxValue } = this.state;

        return (
            <Paper className="options-range-selector">
                <div className="header">
                    <div className="title">
                        <span className="name">{name} </span>
                        <span className="unit">({unit})</span>
                    </div>

                    <div className="reset-range" onClick={this.handleResetRange}>set to default</div>
                </div>

                <div className="range-selector">
                    <Range
                        className="selector"
                        min={0}
                        max={120}
                        value={[minValue, maxValue]}
                        defaultValue={[minValue, maxValue]}
                        onChange={value => this.handleChange(value)}
                        marks={{ [value]: value }}
                        step={1}
                        getTooltipContainer={() => document.querySelector(".selector")}
                        tipFormatter={value => `${value}`}
                        tipProps={{
                            placement: 'top',
                            visible: true,
                            getTooltipContainer: () => document.querySelector(".selector")
                        }} />
                </div>
            </Paper>
        );
    }
}

OptionsRangeSelector.propTypes = {
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultMin: PropTypes.number.isRequired,
    defaultMax: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    keyy: PropTypes.string.isRequired,
    selectSimilarPatientOptionRange: PropTypes.func.isRequired
};

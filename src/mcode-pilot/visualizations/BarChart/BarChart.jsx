import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './BarChart.css';

export default class BarChart extends Component {
    render() {
        const { numerator, denominator, compareToNumerator, compareToDenominator, active } = this.props;
        const survivedPercent = numerator / denominator * 100;
        const compareToPercent = compareToNumerator / compareToDenominator * 100;
        const percentChange = survivedPercent - compareToPercent;
        const roundedPercent = Math.floor(survivedPercent - compareToPercent);

        let mainStyle, changeStyle, textStyle;
        if (percentChange < 0) {
            // style for when survival decreases (red)
            mainStyle = {"width": `${survivedPercent}%`, "backgroundColor": "#9e9e9e" };
            changeStyle = {"width": `${Math.abs(percentChange)}%`, "backgroundColor": "#e13949" };
            textStyle = { "color": "#d9534f" };
        } else {
            // styles for when survival increases (green)
            mainStyle = { "width": `${compareToPercent}%`, "backgroundColor": "#9e9e9e" };
            changeStyle = { "width": `${percentChange}%`, "backgroundColor": "#91bd7b" };
            textStyle = { "color": "#5cb85c" };
        }

        return (
            <div className="bar-chart">
                <div>
                    <p className="bar-chart-text">{Math.floor(survivedPercent)}%</p>
                    {!active && roundedPercent !== 0 &&
                        <p className="bar-chart-text right-text" style={textStyle}>
                            <FontAwesome className="tiny-arrow fas" name={roundedPercent > 0 ? "caret-up" : "caret-down"} />
                            {Math.abs(roundedPercent)}%
                        </p>
                    }
                </div>
                <div className="progress-bar">
                    <div className="prog-fill" style={mainStyle}></div>
                    <div className="prog-fill" style={changeStyle}></div>
                </div>
            </div>
        );
    }
}

BarChart.propTypes = {
    numerator: PropTypes.number,
    denominator: PropTypes.number,
    compareToNumerator: PropTypes.number,
    compareToDenominator: PropTypes.number,
    active: PropTypes.bool
};

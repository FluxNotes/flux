import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './BarChart.css';

export default class BarChart extends Component {
    getStyles = (survivedPercent, compareToPercent, percentChange, roundedPercent) => {
        let mainStyle, changeStyle, textStyle, changeType;
        if (percentChange < 0) {
            // style for when survival decreases (red)
            mainStyle = {"width": `${survivedPercent}%`};
            changeStyle = {"width": `${Math.abs(roundedPercent)}%`};
            changeType=false;
        } else {
            // styles for when survival increases (green)
            mainStyle = { "width": `${compareToPercent}%`};
            changeStyle = { "width": `${percentChange}%`};
            changeType=true;
        }

        return { mainStyle, changeStyle, textStyle, changeType};
    }

    render() {
        const { numerator, denominator, compareToNumerator, compareToDenominator } = this.props;
        const hasCompare = compareToNumerator !== null && compareToNumerator !== null;
        const survivedPercent = numerator / denominator * 100;

        let mainStyle = {"width": `${survivedPercent}%`};
        let changeStyle, textStyle, changeType, compareToPercent, roundedPercent, percentChange;
        if (hasCompare) {
            compareToPercent = compareToNumerator / compareToDenominator * 100;
            roundedPercent = Math.floor(survivedPercent - compareToPercent);
            percentChange = survivedPercent - compareToPercent;
            const styles = this.getStyles(survivedPercent, compareToPercent, percentChange, roundedPercent);
            mainStyle = styles.mainStyle;
            changeStyle = styles.changeStyle;
            textStyle = styles.textStyle;
            changeType = styles.changeType;
        }
        return (
            <div className="bar-chart">
                <div className="bar-chart__top">
                    <p className="bar-chart-text">{Math.floor(survivedPercent)}%</p>
                    {hasCompare && !isNaN(percentChange) && roundedPercent !== 0 &&
                        <p className={"bar-chart-text right-text " + (changeType?"increase":"decrease")}>
                            <FontAwesome className="tiny-arrow fas" name={roundedPercent > 0 ? "caret-up" : "caret-down"} />
                            {Math.abs(roundedPercent)}%
                        </p>
                    }
                </div>

                <div className="bar-chart__bottom">
                    <div className="progress-bar">
                        <div className="prog-fill" style={mainStyle}></div>
                        {hasCompare && <div className={"prog-fill " + (changeType?"increase":"decrease")} style={changeStyle}></div>}
                        <div className="prog-fill-empty"></div>
                    </div>
                </div>
            </div>
        );
    }
}

BarChart.propTypes = {
    numerator: PropTypes.number,
    denominator: PropTypes.number,
    compareToNumerator: PropTypes.number,
    compareToDenominator: PropTypes.number
};

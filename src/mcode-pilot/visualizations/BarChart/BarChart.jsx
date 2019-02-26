import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './BarChart.css';

export default class BarChart extends Component {
    getStyles = (survivedPercent, compareToPercent, percentChange, roundedPercent) => {
        let mainStyle, changeStyle, textStyle;
        if (percentChange < 0) {
            // style for when survival decreases (red)
            mainStyle = {"width": `${survivedPercent}%`, "backgroundColor": "#9e9e9e" };
            changeStyle = {"width": `${Math.abs(roundedPercent)}%`, "background": `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                #EC9696 2px,
                #EC9696 4px
              ),
              linear-gradient(
                to bottom,
                #9e9e9e,
                #9e9e9e
              )`  };
            textStyle = { "color": "#d9534f" };
        } else {
            // styles for when survival increases (green)
            mainStyle = { "width": `${compareToPercent}%`, "backgroundColor": "#9e9e9e" };
            changeStyle = { "width": `${percentChange}%`, "backgroundColor": "#91bd7b" };
            textStyle = { "color": "#5cb85c" };
        }

        return { mainStyle, changeStyle, textStyle };
    }

    render() {
        const { numerator, denominator, compareToNumerator, compareToDenominator } = this.props;
        const hasCompare = compareToNumerator !== null && compareToNumerator !== null;
        const survivedPercent = numerator / denominator * 100;

        let mainStyle = {"width": `${survivedPercent}%`, "backgroundColor": "#9e9e9e" };
        let changeStyle, textStyle, compareToPercent, roundedPercent, percentChange;
        if (hasCompare) {
            compareToPercent = compareToNumerator / compareToDenominator * 100;
            roundedPercent = Math.floor(survivedPercent - compareToPercent);
            percentChange = survivedPercent - compareToPercent;
            const styles = this.getStyles(survivedPercent, compareToPercent, percentChange, roundedPercent);
            mainStyle = styles.mainStyle;
            changeStyle = styles.changeStyle;
            textStyle = styles.textStyle;
        }

        return (
            <div className="bar-chart">
                <div className="bar-chart__top">
                    <p className="bar-chart-text">{Math.floor(survivedPercent)}%</p>
                    {hasCompare && !isNaN(percentChange) && roundedPercent !== 0 &&
                        <p className="bar-chart-text right-text" style={textStyle}>
                            <FontAwesome className="tiny-arrow fas" name={roundedPercent > 0 ? "caret-up" : "caret-down"} />
                            {Math.abs(roundedPercent)}%
                        </p>
                    }
                </div>

                <div className="bar-chart__bottom">
                    <div className="progress-bar">
                        <div className="prog-fill" style={mainStyle}></div>
                        {hasCompare && <div className="prog-fill" style={changeStyle}></div>}
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

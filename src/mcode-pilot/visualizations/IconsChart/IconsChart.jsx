import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './IconsChart.css';

export default class IconsChart extends Component {
    render() {
        const { type, numSurvive, additionalNumSurvive, selectedIndex, treatment } = this.props;
        const numDie = 100 - numSurvive;

        let circlesSurvive = [];
        for (let i = 0; i < numSurvive; i++) {
            const klass = i >= (numSurvive - additionalNumSurvive) ? `additional index-color-${selectedIndex}` : 'survive';

            circlesSurvive.push(
                <div className={`icons-chart__circle ${klass}`} key={i}></div>
            );
        }

        let circlesDie = [];
        for (let i = 0; i < numDie; i++) {
            circlesDie.push(<div className="icons-chart__circle die" key={i}></div>);
        }

        return (
            <div className="icons-chart">
                <div className="icons-survival-text">
                    <div className="survive">
                        {numSurvive}/100 survive with
                        {type === 'additional' && <span> additional</span>}
                        <span className={`selected-treatment index-color-${selectedIndex}`}> {treatment}</span>
                        {type === 'alone' && <span> alone</span>}
                    </div>

                    <div className="die">
                        {numDie}/100 die with
                        {type === 'additional' && <span> additional</span>}
                        <span className={`selected-treatment index-color-${selectedIndex}`}> {treatment}</span>
                        {type === 'alone' && <span> alone</span>}
                    </div>
                </div>

                <div className="icons-chart__display">
                    {circlesSurvive}
                    {circlesDie}
                </div>
            </div>
        );
    }
}

IconsChart.propTypes = {
    type: PropTypes.string.isRequired, // 'alone' or 'additional'
    numSurvive: PropTypes.number.isRequired,
    additionalNumSurvive: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    treatment: PropTypes.string.isRequired
};

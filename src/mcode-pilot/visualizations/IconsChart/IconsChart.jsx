import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './IconsChart.css';

export default class IconsChart extends Component {
    render() {
        const { numSurvive, treatment, yearsSurvival } = this.props;
        if (!treatment) return <div className="icons-chart helper-text">No treatment selected.</div>;
        const numDie = 100 - numSurvive;

        let circlesSurvive = [];
        for (let i = 0; i < numSurvive; i++) {
            const klass = i >= numSurvive ? 'additional' : 'survive';

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
                <div className="icons-chart__display">
                    {circlesSurvive}
                    {circlesDie}
                </div>

                <div className="icons-survival-text">
                    <div className="survive">
                        {numSurvive}/100 survive {yearsSurvival} years with
                        <span className="selected-treatment"> {treatment}</span>
                    </div>

                    <div className="die">
                        {numDie}/100 die within {yearsSurvival} years with
                        <span className="selected-treatment"> {treatment}</span>
                    </div>
                </div>
            </div>
        );
    }
}

IconsChart.propTypes = {
    numSurvive: PropTypes.number,
    treatment: PropTypes.string,
    yearsSurvival: PropTypes.string
};

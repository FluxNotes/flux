import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TreatmentOptionsOutcomesTable from '../TreatmentOptionsOutcomesTable/TreatmentOptionsOutcomesTable';
import TreatmentOptionsOutcomesIcons from '../TreatmentOptionsOutcomesIcons/TreatmentOptionsOutcomesIcons';

import './TreatmentOptionsOutcomes.css';

export default class TreatmentOptionsOutcomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            outcomesToggle: 'table',
            timescaleToggle: 5
        };
    }

    handleToggleTimescale = (time) => {
        this.setState({ timescaleToggle: time });
    }

    handleToggleOutcomes = () => {
        this.setState({ outcomesToggle: this.state.outcomesToggle === "table" ? "icons" : "table" });
    }

    renderTableIcon() {
        return (
            <svg height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.75H15.25V15.25H0.75V0.75Z" strokeWidth="1.5" />
                <path d="M8 0.5V15.5" strokeWidth="1.5" />
                <path d="M0.5 8H15.5" strokeWidth="1.5" />
            </svg>
        );
    }

    renderIconsIcon() {
        return (
            <svg height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.97674 5.67948L6.07668 10.25H0.75V0.75H15.25V4.91309H6.72656H5.95998L5.97674 5.67948Z" strokeWidth="1.5" />
                <path d="M9.02326 12.3205L8.92332 7.75H15.25V16.25H0.75V13.0869H8.27344H9.04002L9.02326 12.3205Z" strokeWidth="1.5" />
            </svg>
        );
    }

    renderToggleButtons = () => {
        const { outcomesToggle, timescaleToggle } = this.state;
        const timeScales = [1, 3, 5];

        return (
            <div className="treatment-options-outcomes__toggle">
                <div className="timescale-toggles">
                    {outcomesToggle === "icons" && timeScales.map((time, i) =>
                        <div
                            className={`timescale-toggle ${timescaleToggle === time ? 'active' : ''}`}
                            onClick={() => this.handleToggleTimescale(time)}
                            key={i}>
                            {time} yr
                        </div>)
                    }
                </div>

                <div
                    className={`toggle-icon table-toggle ${outcomesToggle === "table" ? "active" : ""}`}
                    onClick={() => this.handleToggleOutcomes()}>
                    {this.renderTableIcon()}
                    <div className="toggle-text">table</div>
                </div>

                <div
                    className={`toggle-icon icons-toggle ${outcomesToggle === "icons" ? "active" : ""}`}
                    onClick={() => this.handleToggleOutcomes()}>
                    {this.renderIconsIcon()}
                    <div className="toggle-text">icons</div>
                </div>
            </div>
        );
    }

    render() {
        const { outcomesToggle, timescaleToggle } = this.state;
        const { similarPatientTreatmentsData, similarPatientTreatments } = this.props;

        return (
            <div className="treatment-options-outcomes">
                {this.renderToggleButtons()}

                {outcomesToggle === "table" ?
                    <TreatmentOptionsOutcomesTable
                        similarPatientTreatments={similarPatientTreatments}
                        similarPatientTreatmentsData={similarPatientTreatmentsData}
                    />
                    :
                    <TreatmentOptionsOutcomesIcons
                        similarPatientTreatmentsData={similarPatientTreatmentsData}
                        timescaleToggle={timescaleToggle}
                    />
                }
            </div>
        );
    }
}

TreatmentOptionsOutcomes.propTypes = {
    similarPatientTreatments: PropTypes.array.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
};

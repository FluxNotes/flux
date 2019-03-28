import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import BarChart from '../../visualizations/BarChart/BarChart';
import TableLegend from '../../visualizations/TableLegend/TableLegend';
import TreatmentsPopover from '../TreatmentsPopover/TreatmentsPopover';

import './TreatmentOptionsOutcomes.css';

export default class TreatmentOptionsOutcomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            includedOpen: false,
            comparedOpen: false,
            outcomesToggle: "table",
            timescaleToggle: 5
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.closePoppers);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closePoppers);
    }

    closePoppers = ({ target }) => {
        if (this.state.includedOpen) {
            let el = target;
            while (el) {
                if (el === this.refs['included-popper-target']) {
                    break;
                }
                el = el.parentNode;
            }
            if (!el) {
                this.setState({ includedOpen: false });
            }
        }

        if (this.state.comparedOpen) {
            let el = target;
            while (el) {
                if (el === this.refs['compare-popper-target']) {
                    break;
                }
                el = el.parentNode;
            }
            if (!el) {
                this.setState({ comparedOpen: false });
            }
        }
    };

    handleOpenIncluded = () => {
        this.setState({ includedOpen: true });
    }

    handleOpenCompared = () => {
        this.setState({ comparedOpen: true });
    }

    handleToggleOutcomes = () => {
        this.setState({ outcomesToggle: this.state.outcomesToggle === "table" ? "icons" : "table" });
    }

    handleToggleTimescale = (time) => {
        this.setState({ timescaleToggle: time});
    }

    toggleTreatment = (treatmentType) => (event, selected) => {
        const treatment = event.target.value;
        const key = `${treatmentType}Treatments`;

        if (!selected) {
            const index = this.props[key].indexOf(treatment);
            if (index !== -1) {
                const treatments = this.props[key].slice();
                treatments.splice(index, 1);
                this.props.selectTreatments(key, treatments);
            }
        } else if (!this.props[key].includes(treatment)) {
            this.props.selectTreatments(key, [...this.props[key], treatment]);
        }
    }

    renderBarChart = (row, compareRow, survivalRate) => {
        const { totalPatients } = row;

        return (
            <BarChart
                numerator={row[survivalRate]}
                denominator={totalPatients}
                compareToNumerator={compareRow ? compareRow[survivalRate] : null}
                compareToDenominator={compareRow ? compareRow.totalPatients : null}
            />
        );
    }

    renderRow(row, compareRow) {
        if (row == null || row.length === 0) return null;

        const { displayName, totalPatients, sideEffects } = row;
        const topSideEffects = Object.keys(sideEffects.effects).map((sideEffect) => ({
            sideEffect, occurrences: sideEffects.effects[sideEffect]
        })).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <div className="table-row flex">
                <div className="flex-2 flex-padding treatment-name">{displayName}</div>
                <div className="flex-1 flex-padding total-patients">({totalPatients})</div>

                <div className="flex flex-6 flex-padding flex-center">
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'oneYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'threeYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'fiveYrSurvival')}</div>
                </div>

                <div className="flex flex-4 flex-padding flex-center top-side-effects">
                    <div>
                        {topSideEffects.map(({ sideEffect, occurrences }, i) =>
                            <div key={i} className="side-effect">
                                {`${sideEffect} `}
                                ({Math.floor(occurrences / totalPatients * 100)}%)
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    renderComparedRow = (treatmentData, i, includedRow) => {
        return (
            <div key={i}>
                {this.renderRow(treatmentData, includedRow)}
            </div>
        );
    }

    renderHeader = () => {
        return (
            <div className="treatment-options-outcomes__header">
                <div className="flex-2 flex-padding"></div>
                <div className="flex-1 flex-padding user-icon"><FontAwesome name="user" /></div>

                <div className="flex-6 flex-padding">
                    <div className="header-title">Overall survival rates</div>
                    <div className="flex">
                        <div className="flex-1">1 yr</div>
                        <div className="flex-1">3 yr</div>
                        <div className="flex-1">5 yr</div>
                    </div>
                </div>

                <div className="flex-4 flex-padding">
                    <div className="header-title">Reporting severe side effects</div>
                    <div>leading cause</div>
                </div>
            </div>
        );
    }

    renderTableIcon() {
        return (
            <svg height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.75H15.25V15.25H0.75V0.75Z" strokeWidth="1.5"/>
                <path d="M8 0.5V15.5" strokeWidth="1.5"/>
                <path d="M0.5 8H15.5" strokeWidth="1.5"/>
            </svg>
        );
    }

    renderIconsIcon() {
        return (
            <svg height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.97674 5.67948L6.07668 10.25H0.75V0.75H15.25V4.91309H6.72656H5.95998L5.97674 5.67948Z" strokeWidth="1.5"/>
                <path d="M9.02326 12.3205L8.92332 7.75H15.25V16.25H0.75V13.0869H8.27344H9.04002L9.02326 12.3205Z" strokeWidth="1.5"/>
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

    renderOutcomesTable = () => {
        const { includedOpen, comparedOpen } = this.state;
        const {
            similarPatientTreatments,
            includedTreatments,
            includedTreatmentData,
            comparedTreatments,
            comparedTreatmentData
        } = this.props;
        const noIncludedRow = includedTreatmentData.length === 0;

        return (
            <div>
                {this.renderHeader()}

                <div className="treatment-options-outcomes__table">
                    <div className="included-treatments">
                        <div>
                            <span className="treatments-title">include only:</span>
                            <span className="select-treatments" onClick={this.handleOpenIncluded} ref="included-popper-target">
                                <span className="popover-text">add/remove</span>
                                {includedOpen &&
                                    <TreatmentsPopover
                                        className="included-popover"
                                        title="include these treatments"
                                        treatments={similarPatientTreatments}
                                        selectedTreatments={includedTreatments}
                                        toggleTreatments={this.toggleTreatment('included')}
                                    />
                                }
                            </span>
                        </div>

                        {!noIncludedRow ? this.renderRow(includedTreatmentData[0], includedTreatmentData[0]) :
                            <div className="table-row flex helper-text">
                                No data. Choose a different selection or similar patients criteria.
                            </div>
                        }
                    </div>

                    <div className="compared-treatments">
                        <div>
                            <span className="treatments-title">combine with:</span>
                            <span className="select-treatments" onClick={this.handleOpenCompared} ref="compare-popper-target">
                                <span className="popover-text">select treatments</span>
                                {comparedOpen &&
                                    <TreatmentsPopover
                                        className="compared-popover"
                                        title="compare across these treatments"
                                        treatments={similarPatientTreatments}
                                        selectedTreatments={comparedTreatments}
                                        toggleTreatments={this.toggleTreatment('compared')}
                                    />
                                }
                            </span>
                        </div>

                        {comparedTreatmentData.map((treatmentData, i) =>
                            this.renderComparedRow(treatmentData, i, noIncludedRow ? null : includedTreatmentData[0])
                        )}
                    </div>
                </div>

                {!noIncludedRow &&
                    <TableLegend includedRow={includedTreatmentData[0]} />
                }
            </div>
        );
    }

    renderOutcomesIcons = () => {
        const { includedTreatmentData, comparedTreatmentData } = this.props;
        const { timescaleToggle } = this.state;
        if (includedTreatmentData.length === 0) return <div className="note">No included treatment chosen.</div>;

        const survivalMap = { 1: 'oneYrSurvival', 3: 'threeYrSurvival', 5: 'fiveYrSurvival' };
        const numSurvive = Math.floor(includedTreatmentData[0][survivalMap[timescaleToggle]] / includedTreatmentData[0].totalPatients * 100);
        const numDie = 100 - numSurvive;

        let circlesSurvive = [];
        for (let i = 0; i < numSurvive; i++) {
            circlesSurvive.push(<div className="icons-chart__circle survive" key={i}></div>);
        }

        let circlesDie = [];
        for (let i = 0; i < numDie; i++) {
            circlesDie.push(<div className="icons-chart__circle die" key={i}></div>);
        }

        return (
            <div className="treatment-options-outcomes__icons">
                <div className="icons-survival-text">
                    <div className="survive">
                        {numSurvive}/100 survive with {includedTreatmentData[0].displayName} alone
                    </div>

                    <div className="die">
                        {numDie}/100 die with {includedTreatmentData[0].displayName} alone
                    </div>
                </div>

                <div className="icons-chart">
                    {circlesSurvive}
                    {circlesDie}
                </div>

                <div className="icons-interaction">
                    <div className="interaction-included">
                        <FontAwesome name="caret-right" /> {includedTreatmentData[0].displayName} alone
                    </div>

                    {comparedTreatmentData.map((treatment, i) =>
                        <div className="interaction-combined" key={i}>+ {treatment.displayName}</div>
                    )}
                </div>
            </div>
        );
    }

    render() {
        const { outcomesToggle } = this.state;

        return (
            <div className="treatment-options-outcomes">
                {this.renderToggleButtons()}
                {outcomesToggle === "table" ? this.renderOutcomesTable() : this.renderOutcomesIcons()}
            </div>
        );
    }
}

TreatmentOptionsOutcomes.propTypes = {
    similarPatientTreatments: PropTypes.array.isRequired,
    includedTreatments: PropTypes.array.isRequired,
    includedTreatmentData: PropTypes.array.isRequired,
    comparedTreatments: PropTypes.array.isRequired,
    comparedTreatmentData: PropTypes.array.isRequired,
    selectTreatments: PropTypes.func.isRequired
};

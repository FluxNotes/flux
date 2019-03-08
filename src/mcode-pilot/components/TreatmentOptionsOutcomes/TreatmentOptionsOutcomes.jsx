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
            comparedOpen: false
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

    render() {
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
            <div className="treatment-options-outcomes">
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
}

TreatmentOptionsOutcomes.propTypes = {
    similarPatientTreatments: PropTypes.array.isRequired,
    includedTreatments: PropTypes.array.isRequired,
    includedTreatmentData: PropTypes.array.isRequired,
    comparedTreatments: PropTypes.array.isRequired,
    comparedTreatmentData: PropTypes.array.isRequired,
    selectTreatments: PropTypes.func.isRequired
};

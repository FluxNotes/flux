import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import { isSame, getCombinations } from '../../utils/arrayCompare';

import BarChart from '../../visualizations/BarChart/BarChart';
import TableLegend from '../../visualizations/TableLegend/TableLegend';
import TreatmentsPopover from '../TreatmentsPopover/TreatmentsPopover';

import './TreatmentOptionsOutcomes.css';

const TREATMENT_NAMES = {
    'noTreatment': 'none (actively monitoring)',
    'chemotherapy': 'chemotherapy',
    'hormonal': 'hormonal therapy',
    'surgery': 'surgery',
    'radiation': 'radiation therapy'
};

const SIDE_EFFECT_NAMES = {
    'hotFlash': 'Hot Flashes',
    'decLibido': 'Decreased Libido',
    'fatigue': 'Fatigue',
    'nauseaVomiting': 'Nausea/Vomiting',
    'anemia': 'Anemia',
    'bowelDys': 'Bowel Dysfunction',
    'erectileDys': 'Erectile Dysfunction',
    'weightLoss': 'Weight Loss',
    'urinaryDys': 'Urinary Dysfunction'
};

export default class TreatmentOptionsOutcomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            similarPatientTreatments: this.generateSimilarPatientTreatments(props.similarPatients),
            includedTreatments: [ 'surgery', 'radiation' ],
            comparedTreatments: [ 'chemotherapy', 'hormonal' ],
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

    componentWillReceiveProps(nextProps) {
        if (this.props.similarPatients !== nextProps.similarPatients) {
            this.setState({ similarPatientTreatments: this.generateSimilarPatientTreatments(nextProps.similarPatients) });
        }
    }

    generateSimilarPatientTreatments(similarPatients) {
        return Array.from(similarPatients.reduce((acc, { treatments }) => {
            treatments.forEach((treatment) => acc.add(treatment));
            return acc;
        }, new Set())).sort();
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
            const index = this.state[key].indexOf(treatment);
            if (index !== -1) {
                const treatments = this.state[key].slice();
                treatments.splice(index, 1);
                this.setState({ [key]: treatments });
            }
        } else if (!this.state[key].includes(treatment)) {
            this.setState({ [key]: [...this.state[key], treatment] });
        }
    }

    initializeRow(name) {
        return {
            id: _.uniqueId('row_'),
            name,
            totalPatients: 0,
            oneYrSurvival: 0,
            threeYrSurvival: 0,
            fiveYrSurvival: 0,
            sideEffects: {
                totalReporting: 0,
                effects: {}
            }
        };
    }

    generateRow(patients, treatments) {
        if (patients.length === 0) return [];

        const treatmentName = _.isArray(treatments) ? treatments.map(name => TREATMENT_NAMES[name]).join(' & ') : TREATMENT_NAMES[treatments];
        let row = this.initializeRow(treatmentName);
        patients.forEach(patient => {
            row.totalPatients += 1;

            const survivalYears = Math.floor(patient.diseaseStatus.survivalMonths / 12);
            if (survivalYears >= 1) row.oneYrSurvival += 1;
            if (survivalYears >= 3) row.threeYrSurvival += 1;
            if (survivalYears >= 5) row.fiveYrSurvival += 1;

            if (patient.sideEffects.length > 0) {
                row.sideEffects.totalReporting += 1;
                patient.sideEffects.forEach(sideEffect => {
                    if (!row.sideEffects.effects[sideEffect]) row.sideEffects.effects[sideEffect] = 0;
                    row.sideEffects.effects[sideEffect] += 1;
                })
            }
        });

        return row;
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
        if (row.length === 0) return null;

        const { name, totalPatients, sideEffects } = row;
        const topSideEffects = Object.keys(sideEffects.effects).map((sideEffect) => ({
            sideEffect, occurrences: sideEffects.effects[sideEffect]
        })).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <div className="table-row flex">
                <div className="flex-2 flex-padding treatment-name">{name}</div>
                <div className="flex-1 flex-padding total-patients">({totalPatients})</div>

                <div className="flex flex-6 flex-padding flex-center">
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'oneYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'threeYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'fiveYrSurvival')}</div>
                </div>

                <div className="flex flex-4 flex-padding flex-center">
                    <div>
                        {topSideEffects.map(({ sideEffect, occurrences }, i) =>
                            <div key={i}>
                                {`${SIDE_EFFECT_NAMES[sideEffect] || sideEffect} `}
                                ({Math.floor(occurrences / totalPatients * 100)}%)
                            </div>
                        )}
                    </div>
                </div>
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

    renderComparedRow = (treatmentCombination, i, includedRow) => {
        const { similarPatients } = this.props;
        const comparedPatients = similarPatients.filter(patient => isSame(patient.treatments, treatmentCombination));

        return (
            <div key={i}>
                {this.renderRow(this.generateRow(comparedPatients, treatmentCombination), includedRow)}
            </div>
        );
    }

    render() {
        const { similarPatientTreatments, includedTreatments, comparedTreatments, includedOpen, comparedOpen } = this.state;
        const { similarPatients } = this.props;
        const includedTreatmentPatients = similarPatients.filter(patient => isSame(patient.treatments, includedTreatments));
        const comparedTreatmentCombinations = getCombinations(comparedTreatments).filter(treatments =>
            treatments.length !== includedTreatments.length || !includedTreatments.every(treatment => treatments.includes(treatment))
        );
        const includedRow = this.generateRow(includedTreatmentPatients, includedTreatments);
        const noIncludedRow = includedRow.length === 0;

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
                                        treatmentNames={TREATMENT_NAMES}
                                    />
                                }
                            </span>
                        </div>

                        {!noIncludedRow ? this.renderRow(includedRow, includedRow) :
                            <div className="table-row flex helper-text">
                                No data. Choose a different selection or similar patients criteria.
                            </div>
                        }
                    </div>

                    <div className="compared-treatments">
                        <div>
                            <span className="treatments-title">compare with:</span>
                            <span className="select-treatments" onClick={this.handleOpenCompared} ref="compare-popper-target">
                                <span className="popover-text">select treatments</span>
                                {comparedOpen &&
                                    <TreatmentsPopover
                                        className="compared-popover"
                                        title="compare across these treatments"
                                        treatments={similarPatientTreatments}
                                        selectedTreatments={comparedTreatments}
                                        toggleTreatments={this.toggleTreatment('compared')}
                                        treatmentNames={TREATMENT_NAMES}
                                    />
                                }
                            </span>
                        </div>

                        {comparedTreatmentCombinations.map((treatmentCombination, i) =>
                            this.renderComparedRow(treatmentCombination, i, noIncludedRow ? null : includedRow)
                        )}
                    </div>
                </div>
                <TableLegend includedRow={includedRow} treatmentNames={TREATMENT_NAMES}/>
            </div>
        );
    }
}

TreatmentOptionsOutcomes.propTypes = {
    similarPatients: PropTypes.array.isRequired
};

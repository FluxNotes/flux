import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import isSame from '../../utils/arrayCompare';
import BarChart from '../../visualizations/BarChart/BarChart';

import './TreatmentOptionsOutcomes.css';

const TREATMENT_NAMES = {
    'noTreatment': 'none (actively monitoring)',
    'chemo': 'chemotherapy',
    'hormonal': 'hormonal therapy',
    'surgery': 'surgery',
    'radiation': 'radiation'
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
            includedTreatments: [ 'surgery', 'radiation' ],
            comparedTreatments: [ 'chemo', 'hormonal' ]
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.similarPatients !== this.props.similarPatients) {
    //         this.setState({
    //             rows: this.generateRows(nextProps.similarPatients)
    //         });
    //     }
    // }

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

        const rowMappings = {};
        similarPatients.forEach((patient) => {
            const treatments = patient.treatments.sort().join(' & ');
            const category = treatments === 'noTreatment' ? NO_TREATMENT : treatments;

        patients.forEach(patient => {
            row.totalPatients += 1;

            const survivalYears = Math.floor(patient.diseaseStatus.survivalMonths / 12);
            if (survivalYears >= 1) row.oneYrSurvival += 1;
            if (survivalYears >= 3) row.threeYrSurvival += 1;
            if (survivalYears >= 5) row.fiveYrSurvival += 1;

            if (patient.sideEffects.length > 0) {
                row.sideEffects.totalReporting += 1;
                patient.sideEffects.forEach((sideEffect) => {
                    if (!row.sideEffects.effects[sideEffect]) row.sideEffects.effects[sideEffect] = 0;
                    row.sideEffects.effects[sideEffect] += 1;
                })
            }
        });

        return row;
    }

    // generateRows(similarPatients) {
    //     if (similarPatients.length === 0) return [];

    //     const rowMappings = {};
    //     similarPatients.forEach((patient) => {
    //         const treatments = patient.treatments.sort().join(' & ');
    //         // const category = treatments[0] === 'noTreatment' ? NO_TREATMENT : treatments;
    //         const category = TREATMENT_NAMES[treatments[0]];
    //         if (!rowMappings[category]) rowMappings[category] = this.initializeRow(category);

    //         const row = rowMappings[category];
    //         row.totalPatients += 1;

    //         const survivalYears = Math.floor(patient.diseaseStatus.survivalMonths / 12);
    //         if (survivalYears >= 1) row.oneYrSurvival += 1;
    //         if (survivalYears >= 3) row.threeYrSurvival += 1;
    //         if (survivalYears >= 5) row.fiveYrSurvival += 1;

    //         if (patient.sideEffects.length > 0) {
    //             row.sideEffects.totalReporting += 1;
    //             patient.sideEffects.forEach((sideEffect) => {
    //                 if (!row.sideEffects.effects[sideEffect]) row.sideEffects.effects[sideEffect] = 0;
    //                 row.sideEffects.effects[sideEffect] += 1;
    //             })
    //         }
    //     });

    //     const keys = Object.keys(rowMappings).sort();
    //     const rows = keys.map((key) => rowMappings[key]);

    //     // set active row
    //     (rows.find((row) => row.name === NO_TREATMENT) || rows[0]).active = true;

    //     return rows;
    // }

    renderBarChart = (row, compareRow, survivalRate) => {
        const { totalPatients } = row;

        return (
            <BarChart
                numerator={row[survivalRate]}
                denominator={totalPatients}
                compareToNumerator={compareRow[survivalRate]}
                compareToDenominator={compareRow.totalPatients}
                active={false}
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
                <div className="flex-2 flex-padding">{name}</div>
                <div className="flex-1 flex-padding total-patients">({totalPatients})</div>

                <div className="flex flex-6 flex-padding flex-center">
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'oneYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'threeYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'fiveYrSurvival')}</div>
                </div>

                <div className="flex flex-4 flex-padding flex-center">
                    <div className="flex-1">{Math.floor(sideEffects.totalReporting / totalPatients * 100)}%</div>

                    <div className="flex-3">
                        {topSideEffects.map(({ sideEffect, occurrences }, i) =>
                            <div key={i}>
                                {`${SIDE_EFFECT_NAMES[sideEffect]} `}
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
                    <div className="flex">
                        <div className="flex-1">all</div>
                        <div className="flex-3">leading cause</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { includedTreatments, comparedTreatments } = this.state;
        const { similarPatients } = this.props;
        const includedTreatmentPatients = similarPatients.filter(patient => isSame(patient.treatments, includedTreatments));
        const includedRow = this.generateRow(includedTreatmentPatients, includedTreatments);
        console.debug('comparedTreatments', comparedTreatments);
        console.debug('similarPatients', similarPatients);

        return (
            <div className="treatment-options-outcomes">
                {this.renderHeader()}

                <div className="treatment-options-outcomes__table">
                    <div className="included-treatments">
                        <div>include only:</div>
                        {this.renderRow(includedRow, includedRow)}
                    </div>

                    <div className="compared-treatments">
                        <div>combine with:</div>
                        {comparedTreatments.map(treatment =>
                            {this.renderRow(this.generateRow(similarPatients, includedRow))}
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

TreatmentOptionsOutcomes.propTypes = {
    similarPatients: PropTypes.array.isRequired
};

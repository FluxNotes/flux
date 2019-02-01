import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import BarChart from '../../visualizations/BarChart/BarChart';

import './TreatmentOptionsOutcomes.css';

const NO_TREATMENT = 'none (actively monitoring)';
const SIDE_EFFECT_NAMES = {
    "hotFlash": "Hot Flashes",
    "decLibido": "Decreased Libido",
    "fatigue": "Fatigue",
    "nauseaVomiting": "Nausea/Vomiting",
    "anemia": "Anemia",
    "bowelDys": "Bowel Dysfunction",
    "erectileDys": "Erectile Dysfunction",
    "weightLoss": "Weight Loss",
    "urinaryDys": "Urinary Dysfunction"
};

export default class TreatmentOptionsOutcomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: {},
            rows: this.generateRows(props.similarPatients)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.similarPatients !== this.props.similarPatients) {
            this.setState({
                rows: this.generateRows(nextProps.similarPatients)
            });
        }
    }

    buildRow(name) {
        return {
            id: _.uniqueId('row_'),
            name,
            active: false,
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

    generateRows(similarPatients) {
        if (similarPatients.length === 0) return [];

        const rowMappings = {};
        similarPatients.forEach((patient) => {
            const treatments = patient.treatments.sort().join(' & ');
            const category = (treatments === 'noTreatment' || treatments === '') ? NO_TREATMENT : treatments;

            if (!rowMappings[category]) rowMappings[category] = this.buildRow(category);

            const row = rowMappings[category];
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

        const keys = Object.keys(rowMappings).sort();
        const rows = keys.map((key) => rowMappings[key]);

        // set active row
        (rows.find((row) => row.name === NO_TREATMENT) || rows[0]).active = true;

        return rows;
    }

    setActiveRow(activeRow) {
        this.setState({
            rows: this.state.rows.map(row => {
                row.active = row === activeRow;
                return row;
            })
        });
    }

    renderBarChart = (row, survivalRate) => {
        const { active, totalPatients } = row;
        const activeRow = this.state.rows.find(row => row.active);

        return (
            <BarChart
                numerator={row[survivalRate]}
                denominator={totalPatients}
                compareToNumerator={activeRow[survivalRate]}
                compareToDenominator={activeRow.totalPatients}
                active={active}
            />
        );
    }

    renderRow(row) {
        const { id, name, active, totalPatients, sideEffects } = row;
        const topSideEffects = Object.keys(sideEffects.effects).map((sideEffect) => ({
            sideEffect, occurrences: sideEffects.effects[sideEffect]
        })).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <div className={"table-row flex " + (active ? "selected" : "")} key={id} onClick={() => this.setActiveRow(row)}>
                <div className="flex-2 flex-padding">{name}</div>
                <div className="flex-1 flex-padding total-patients">({totalPatients})</div>

                <div className="flex flex-6 flex-padding flex-center">
                    <div className="flex-1">{this.renderBarChart(row, 'oneYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, 'threeYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, 'fiveYrSurvival')}</div>
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

    render() {
        return (
            <div className="treatment-options-outcomes">
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

                <div className="treatment-options-outcomes__table">
                    {this.state.rows.map(row => this.renderRow(row))}
                </div>
            </div>
        );
    }
}

TreatmentOptionsOutcomes.propTypes = {
    similarPatients: PropTypes.array.isRequired
};

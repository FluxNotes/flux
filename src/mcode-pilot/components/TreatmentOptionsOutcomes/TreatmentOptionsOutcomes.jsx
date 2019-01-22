import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableCell, TableHead, TableBody, TableRow } from 'material-ui/Table';

import BarChart from '../../visualizations/BarChart';

import './TreatmentOptionsOutcomes.css';

const NO_TREATMENT = 'none (actively monitoring)';
const sideEffectNames = {
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

let _rowId = 0;
function buildRow(name) {
    return {
        id: ++_rowId,
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

    generateRows(similarPatients) {
        if (similarPatients.length === 0) {
            return [];
        }

        const rowMappings = {};
        similarPatients.forEach((patient) => {
            const treatments = patient.treatments.sort().join(' & ');
            const category = treatments === 'noTreatment' ? NO_TREATMENT : treatments;

            if (!rowMappings[category]) {
                rowMappings[category] = buildRow(category);
            }

            const row = rowMappings[category];
            row.totalPatients += 1;

            const survivalYears = Math.floor(patient.diseaseStatus.survivalMonths / 12);
            if (survivalYears >= 1) {
                row.oneYrSurvival += 1;
            }
            if (survivalYears >= 3) {
                row.threeYrSurvival += 1;
            }
            if (survivalYears >= 5) {
                row.fiveYrSurvival += 1;
            }

            if (patient.sideEffects.length > 0) {
                row.sideEffects.totalReporting += 1;
                patient.sideEffects.forEach((sideEffect) => {
                    if (!row.sideEffects.effects[sideEffect]) {
                        row.sideEffects.effects[sideEffect] = 0;
                    }
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

    createHeader(headers) {
        const subheaders = [];
        const header = headers.map((thisHeader, index) => {
            // header type selection
            // bold: default
            // centered: centers the text (non-bold)
            const type = thisHeader.type ? thisHeader.type : "bold";
            if (thisHeader.subheaders) {
                subheaders.push(...thisHeader.subheaders)
            } else if(type === "bold") {
                // give lone headers an empty subheader so they're aligned
                subheaders.push(...[""]);
            }

            return (
                <TableCell
                    key={index}
                    className={`outcome-${type}-header`}
                    // !: only allows max two tiered headers/subheaders
                    rowSpan={!thisHeader.subheaders && type !== "bold" ? 2 : 1}
                    colSpan={thisHeader.subheaders ? thisHeader.subheaders.length : 1}>
                    {thisHeader.header}
                </TableCell>
            );
        })

        const subheader = subheaders.map((subList, index) =>
            <TableCell key={index}>{subList}</TableCell>
        );

        return { header, subheader };
    }

    setActiveRow(activeRow) {
        this.setState({
            rows: this.state.rows.map((row) => {
                row.active = row === activeRow;
                return row;
            })
        });
    }

    renderRow(row) {
        const {
            id,
            name,
            active,
            totalPatients,
            sideEffects
        } = row;
        const activeRow = this.state.rows.find((row) => row.active);

        const topSideEffects = Object.keys(sideEffects.effects).map((sideEffect) => ({ sideEffect, occurrences: sideEffects.effects[sideEffect] })).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <TableRow key={id} onClick={() => this.setActiveRow(row)} selected={active} classes={{ selected: 'row-selected' }}>
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell>
                    ({totalPatients})
                </TableCell>
                {['oneYrSurvival', 'threeYrSurvival', 'fiveYrSurvival'].map((prop, i) =>
                    <TableCell key={i}>
                        <BarChart
                            numerator={row[prop]}
                            denominator={totalPatients}
                            compareToNumerator={activeRow[prop]}
                            compareToDenominator={activeRow.totalPatients}
                            active={active}
                        />
                    </TableCell>
                )}
                <TableCell>
                    {Math.floor(sideEffects.totalReporting / totalPatients * 100)}%
                </TableCell>
                <TableCell>
                    <ul>
                        {topSideEffects.map(({ sideEffect, occurrences }, i) =>
                            <li key={i}>
                                {`${sideEffectNames[sideEffect]} `}
                                ({Math.floor(occurrences / totalPatients * 100)}%)
                            </li>
                        )}
                    </ul>
                </TableCell>
            </TableRow>
        );
    }

    render() {
        const header = (this.createHeader(this.props.headers));

        return (
            <div className="outcome-list">
                <Table>
                    {/* Top Level Header */}
                    <TableHead>
                        <TableRow className="outcome-header">
                            {header.header}
                        </TableRow>

                        {/* Subheaders */}
                        <TableRow className="outcome-subheader">
                            {header.subheader}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.rows.map(row => this.renderRow(row))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

TreatmentOptionsOutcomes.propTypes = {
    headers: PropTypes.array.isRequired,
    similarPatients: PropTypes.array.isRequired
};

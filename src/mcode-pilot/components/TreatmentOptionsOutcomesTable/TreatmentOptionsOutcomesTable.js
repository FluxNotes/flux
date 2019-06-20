import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import BarChart from '../../visualizations/BarChart/BarChart';
import MenuItem from '../../../elements/MenuItem';
import Select from '../../../elements/Select';
import TableLegend from '../../visualizations/TableLegend/TableLegend';

import './TreatmentOptionsOutcomesTable.css';

export default class TreatmentOptionsOutcomesTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideEffectSelection: 'Most Common',
            sideEffects: [],
            sortColumn: '',
            sortDirection: 0
        };
    }

    componentDidMount() {
        document.addEventListener('click', this.closePoppers);
        this.handleChangeSort('totalPatients');
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closePoppers);
    }

    handleChangeEffect = (effect) => {
        this.setState({ sideEffectSelection: effect.target.value });
    }

    handleChangeSort = (column) => {
        const { sortColumn } = this.state;
        // sort direction is represented by a 0 (no sorting), 1 (ascending), or 2 (descending)
        if (column === sortColumn) {
            this.setState(prevState => ({ sortDirection: (prevState.sortDirection + 1) % 3 }));
        } else {
            this.setState({ sortColumn: column });
            // reset to 1 when a different column is clicked
            this.setState({ sortDirection: 1 });
        }
    }

    gatherSideEffects = (similarPatientTreatmentsData) => {
        const allTreatmentData = [...similarPatientTreatmentsData];
        const allEffects = allTreatmentData.map((e) => (Object.keys(e.sideEffects.effects)));
        const result = allEffects.reduce((p, c) => {
            // concat the arrays, filter out duplicate entries
            return p.concat(c.filter((cx) => { return p.indexOf(cx) < 0; }));
        }, []);
        return result;
    }

    treatmentCompare(propName) {
        if (propName === 'totalPatients') {
            // sort by number of patients, no need to get ratio
            return function(a,b) {
                return b[propName] - a[propName];
            };
        } else {
            return function(a,b) {
                return b[propName] / b['totalPatients'] - a[propName] / a['totalPatients'];
            };
        }

    }

    alphabeticalCompare(a, b) {
        const displayA = a.displayName;
        const displayB = b.displayName;
        if (displayA < displayB) return -1;
        if (displayA > displayB) return 1;
        return 0;
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

    renderTreatmentRow(row, compareRow = null) {
        const { sideEffectSelection } = this.state;
        if (row == null || row.length === 0) return null;

        const { displayName, totalPatients, sideEffects } = row;
        const topSideEffects = Object.keys(sideEffects.effects).map(sideEffect => {
            return { sideEffect, occurrences: sideEffects.effects[sideEffect] };
        }).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <div className="table-row flex" key={row.id}>
                <div className="flex-2 flex-padding treatment-name">{displayName}</div>
                <div className="flex-1 flex-padding total-patients">({totalPatients})</div>

                <div className="flex flex-6 flex-padding flex-center">
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'oneYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'threeYrSurvival')}</div>
                    <div className="flex-1">{this.renderBarChart(row, compareRow, 'fiveYrSurvival')}</div>
                </div>

                <div className="flex flex-4 flex-padding top-side-effects">
                    {sideEffectSelection === "Most Common"
                        ? topSideEffects.map(({ sideEffect, occurrences }, i) =>
                            <div key={i} className="side-effect">
                                {`${sideEffect.toLowerCase()} `}
                                ({Math.floor(occurrences / totalPatients * 100)}%)
                            </div>
                        )
                        :
                        <div className="side-effect-percent">
                            {sideEffects.effects[sideEffectSelection]
                                ? Math.floor(sideEffects.effects[sideEffectSelection] / totalPatients * 100)
                                : 0
                            }%
                        </div>
                    }
                </div>
            </div>
        );
    }

    renderHeader = () => {
        const { similarPatientTreatmentsData } = this.props;
        const { sideEffectSelection, sortColumn, sortDirection } = this.state;
        const sortName = sortDirection === 2 ? "sort-up" : sortDirection === 1 ? "sort-down" : "sort";
        const sort1 = sortColumn === "oneYrSurvival";
        const sort3 = sortColumn === "threeYrSurvival";
        const sort5 = sortColumn === "fiveYrSurvival";
        const sortP = sortColumn === "totalPatients";
        const sideEffects = this.gatherSideEffects(similarPatientTreatmentsData);

        return (
            <div className="treatment-options-outcomes-table__header">
                <div className="flex-2 flex-padding"></div>
                <div className="flex-1 flex-padding user-icon">
                    <span onClick={ () => { this.handleChangeSort("totalPatients"); }} className="header-space">
                        <FontAwesome name="user" />
                        <FontAwesome className={(sortP && sortDirection?"sort-selected":"") + " sort-arrows fas"} name={sortP ? sortName : "sort"} />
                    </span>
                </div>

                <div className="flex-6 flex-padding">
                    <div className="header-title">Overall survival rates</div>
                    <div className="flex">
                        <div className="flex-1">
                            <span onClick={ () => { this.handleChangeSort("oneYrSurvival"); }} className="header-space">
                                1 yr  <FontAwesome className={(sort1 && sortDirection?"sort-selected":"") + " sort-arrows fas"} name={sort1 ? sortName : "sort"} />
                            </span>
                        </div>
                        <div className="flex-1">
                            <span onClick={ () => { this.handleChangeSort("threeYrSurvival"); }} className="header-space">
                                3 yr  <FontAwesome className={(sort3 && sortDirection?"sort-selected":"") + " sort-arrows fas"} name={sort3 ? sortName : "sort"} />
                            </span>
                        </div>
                        <div className="flex-1">
                            <span onClick={ () => { this.handleChangeSort("fiveYrSurvival"); }} className="header-space">
                                5 yr  <FontAwesome className={(sort5 && sortDirection?"sort-selected":"") + " sort-arrows fas"} name={sort5 ? sortName : "sort"} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex-4 flex-padding">
                    <div className="header-title">Side Effects</div>
                    <div id="ccp-table-select">
                        <Select
                            value={sideEffectSelection}
                            onChange={this.handleChangeEffect}
                            name="sideEffect"
                            className="custom-select"
                        >
                            <MenuItem value="Most Common" className="side-effect-option">
                                <em>Most Common</em>
                            </MenuItem>

                            {sideEffects.map(effect => {
                                return (
                                    <MenuItem value={effect} key={effect} className="side-effect-option">
                                        {effect.toLowerCase()}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { compareRow, sortDirection, sortColumn } = this.state;
        const { similarPatientTreatmentsData } = this.props;

        if (sortDirection) { // it could be ascending or descending, but it's sorted
            similarPatientTreatmentsData.sort(this.treatmentCompare(sortColumn));
            if (sortDirection === 2) { // descending
                similarPatientTreatmentsData.reverse();
            }
        } else {
            similarPatientTreatmentsData.sort(this.alphabeticalCompare);
        }

        return (
            <div className="treatment-options-outcomes-table">
                {this.renderHeader()}

                <div className="treatment-options-outcomes-table__table">
                    {similarPatientTreatmentsData.map(treatmentData => this.renderTreatmentRow(treatmentData))}
                </div>

                <TableLegend compareRow={compareRow} />
            </div>
        );
    }
}

TreatmentOptionsOutcomesTable.propTypes = {
    similarPatientTreatments: PropTypes.array.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
};

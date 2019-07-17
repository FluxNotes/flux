import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import BarChart from '../../visualizations/BarChart/BarChart';
import MenuItem from '../../../elements/MenuItem';
import Select from '../../../elements/Select';
import TableLegend from '../../visualizations/TableLegend/TableLegend';
import CompareUnselectedIcon from './CompareUnselectedIcon';
import CompareSelectedIcon from './CompareSelectedIcon';
import PersonIcon from './PersonIcon';

import './TreatmentOptionsOutcomesTable.css';

export default class TreatmentOptionsOutcomesTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideEffectSelection: 'Most Common',
            sideEffects: []
        };
    }

    handleChangeEffect = effect => {
        this.setState({ sideEffectSelection: effect.target.value });
    }

    gatherSideEffects = similarPatientTreatmentsData => {
        const allTreatmentData = [...similarPatientTreatmentsData];
        const allEffects = allTreatmentData.map(effect => Object.keys(effect.sideEffects.effects));
        return allEffects.reduce((p, c) => {
            // concat the arrays, filter out duplicate entries
            return p.concat(c.filter(cx => p.indexOf(cx) < 0));
        }, []);
    }

    getSortClass = sortType => {
        const { sortDirection } = this.props;
        return `sort-arrows fas ${sortType && sortDirection ? 'sort-selected' : ''}`;
    }

    renderBarChart = (row, compareRow, survivalRate) => {
        const { totalPatients, survivorsPerYear } = row;
        const numerator = survivorsPerYear[survivalRate];
        const compareNumerator = compareRow ? compareRow.survivorsPerYear[survivalRate]: null;
        return (
            <BarChart
                numerator={numerator}
                denominator={totalPatients}
                compareToNumerator={compareNumerator}
                compareToDenominator={compareRow ? compareRow.totalPatients : null}
            />
        );
    }

    renderTreatmentRow(row, isSelectedTreatment = false) {
        const { selectedTreatment, setSelectedTreatment, timescale } = this.props;
        const { sideEffectSelection } = this.state;
        if (row == null || row.length === 0) return null;

        console.debug('selectedTreatment', selectedTreatment);
        console.debug('row', row);

        const { displayName, totalPatients, sideEffects } = row;
        const topSideEffects = Object.keys(sideEffects.effects).map(sideEffect => {
            return { sideEffect, occurrences: sideEffects.effects[sideEffect] };
        }).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <div className={`table-row flex ${isSelectedTreatment ? 'selected-treatment' : ''}`} key={row.id}>
                <div className="flex-2 flex-padding treatment-name">
                    <div className="select-icon">
                        {isSelectedTreatment
                            ? <CompareSelectedIcon onClick={() => setSelectedTreatment(null)} />
                            : <CompareUnselectedIcon onClick={() => setSelectedTreatment(row)} />
                        }
                    </div>

                    <div className="display-name">{displayName}</div>
                </div>

                <div className="flex-1 flex-padding total-patients">({totalPatients})</div>

                <div className="flex flex-6 flex-padding flex-center">
                    {timescale.map((timescaleYear) => {
                        return (
                            <div key={timescaleYear} className="flex-1">
                                {this.renderBarChart(row, selectedTreatment, timescaleYear)}
                            </div>
                        );
                    })}
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
        const { similarPatientTreatmentsData, changeSort, selectedTreatment, sortColumn, sortDirection } = this.props;
        const { sideEffectSelection } = this.state;
        const sortName = sortDirection === 2 ? 'sort-up' : sortDirection === 1 ? 'sort-down' : 'sort';
        const sortP = sortColumn === 'totalPatients';
        const sideEffects = this.gatherSideEffects(similarPatientTreatmentsData);

        return (
            <div className="treatment-options-outcomes-table__header">
                <div className="flex-2 flex-padding compare-header">
                    {selectedTreatment ? 'comparing against' : 'compare'}
                </div>

                <div className="flex-1 flex-padding user-icon">
                    <span onClick={() => changeSort('totalPatients')} className="header-space">
                        <PersonIcon />
                        <FontAwesome className={this.getSortClass(sortP)} name={sortP ? sortName : 'sort'} />
                    </span>
                </div>

                <div className="flex-6 flex-padding">
                    <div className="header-title">Overall survival rates</div>

                    <div className="flex">
                        {this.props.timescale.map(timescaleYear => {
                            return (
                                <div className="flex-1" key={timescaleYear}>
                                    <span onClick={ () => { changeSort(timescaleYear); }} className="header-space">
                                        {timescaleYear} yr  <FontAwesome className={this.getSortClass(sortColumn === timescaleYear)} name={sortColumn === timescaleYear?sortName: "sort"} />
                                    </span>
                                </div>
                            );
                        })}
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
        const { selectedTreatment, similarPatientTreatmentsData } = this.props;

        return (
            <div className="treatment-options-outcomes-table">
                {this.renderHeader()}

                <div className="treatment-options-outcomes-table__table">
                    {similarPatientTreatmentsData.length === 0 &&
                        <div className="helper-text">
                            No data. Choose a different selection or similar patients criteria.
                        </div>
                    }

                    {selectedTreatment && this.renderTreatmentRow(selectedTreatment, true)}
                    {similarPatientTreatmentsData.map(treatmentData => {
                        if (!selectedTreatment || treatmentData.id !== selectedTreatment.id) {
                            return this.renderTreatmentRow(treatmentData);
                        }
                        return null;
                    })}
                </div>

                <TableLegend compareRow={selectedTreatment} />
            </div>
        );
    }
}

TreatmentOptionsOutcomesTable.propTypes = {
    changeSort: PropTypes.func.isRequired,
    selectedTreatment: PropTypes.object,
    setSelectedTreatment: PropTypes.func.isRequired,
    similarPatientTreatments: PropTypes.array.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortDirection: PropTypes.number.isRequired,
    timescale: PropTypes.array.isRequired
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BarChart from '../../visualizations/BarChart/BarChart';
import TableLegend from '../../visualizations/TableLegend/TableLegend';
import CompareUnselectedIcon from './CompareUnselectedIcon';
import CompareSelectedIcon from './CompareSelectedIcon';
import TreatmentOptionsOutcomesHeaders from './TreatmentOptionsOutcomesHeaders';
import './TreatmentOptionsOutcomesTable.css';

export default class TreatmentOptionsOutcomesTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideEffectSelection: 'Most Common',
            sideEffects: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.similarPatientTreatmentsData !== this.props.similarPatientTreatmentsData) {
            const selected = nextProps.selectedTreatment;
            const selectedTreatmentInData =
                selected != null &&
                nextProps.similarPatientTreatmentsData.findIndex(el => el.displayName === selected.displayName) !== -1;
            if (!selectedTreatmentInData) {
                // if selected treatment no longer in data, set selected treatment to null
                nextProps.setSelectedTreatment(null);
            } else {
                // otherwise update selected treatment
                const newSelectedTreatment = nextProps.similarPatientTreatmentsData.find(treatment => {
                    return treatment.displayName === nextProps.selectedTreatment.displayName;
                });
                nextProps.setSelectedTreatment(newSelectedTreatment);
            }
        }
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
        const { selectedTreatment, setSelectedTreatment, timescale, showSideEffects } = this.props;
        const { sideEffectSelection } = this.state;
        if (row == null || row.length === 0) return null;

        const { displayName, totalPatients, sideEffects } = row;
        const topSideEffects = Object.keys(sideEffects.effects).map(sideEffect => {
            return { sideEffect, occurrences: sideEffects.effects[sideEffect] };
        }).sort((a, b) => b.occurrences - a.occurrences).slice(0, 2);

        return (
            <tr className={`table-row ${isSelectedTreatment ? 'selected-treatment' : ''}`} key={row.id}>
                <td className="treatment-name">
                    <div className="flex flex-center">
                        <div className="select-icon">
                            {isSelectedTreatment
                                ? <CompareSelectedIcon onClick={() => setSelectedTreatment(null)} />
                                : <CompareUnselectedIcon row={row} onClick={setSelectedTreatment} />
                            }
                        </div>

                        <div className="display-name">{displayName}</div>
                    </div>
                </td>

                <td className="total-patients">({totalPatients})</td>

                {timescale.map((timescaleYear) => {
                    return (
                        <td key={timescaleYear}>
                            {this.renderBarChart(row, selectedTreatment, timescaleYear)}
                        </td>
                    );
                })}

                {showSideEffects &&
                    <td className="top-side-effects">
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
                    </td>
                }
            </tr>
        );
    }

    renderHeader = () => {
        const { similarPatientTreatmentsData, changeSort, selectedTreatment, sortColumn, sortDirection, timescale } = this.props;
        const { sideEffectSelection } = this.state;
        const sortName = sortDirection === 2 ? 'sort-up' : sortDirection === 1 ? 'sort-down' : 'sort';
        const sortP = sortColumn === 'totalPatients';
        const sideEffects = this.gatherSideEffects(similarPatientTreatmentsData);
        const selectedTreatmentBool = selectedTreatment!==undefined && selectedTreatment!==null;
        return (
            <TreatmentOptionsOutcomesHeaders
                changeSort = {changeSort}
                selectedTreatment = {selectedTreatmentBool}
                sideEffectSelection = {sideEffectSelection}
                sortName = {sortName}
                sortP = {sortP}
                sideEffects = {sideEffects}
                sortColumn = {sortColumn}
                timescale = {timescale}
                sortDirection = {sortDirection}
                handleChangeEffect = {this.handleChangeEffect}
            />
        );
    }

    render() {
        const { selectedTreatment, similarPatientTreatmentsData } = this.props;

        return (
            <table className="treatment-options-outcomes-table">
                {this.renderHeader()}

                <tbody className="treatment-options-outcomes-table__table">
                    {similarPatientTreatmentsData.length === 0 &&
                        <tr>
                            <td className="helper-text" colSpan="6">
                                No data. Choose a different selection or similar patients criteria.
                            </td>
                        </tr>
                    }

                    {selectedTreatment && this.renderTreatmentRow(selectedTreatment, true)}
                    {similarPatientTreatmentsData.map(treatmentData => {
                        if (!selectedTreatment || treatmentData.displayName !== selectedTreatment.displayName) {
                            return this.renderTreatmentRow(treatmentData);
                        }
                        return null;
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="6">
                            <TableLegend compareRow={selectedTreatment} />
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

TreatmentOptionsOutcomesTable.propTypes = {
    changeSort: PropTypes.func.isRequired,
    selectedTreatment: PropTypes.object,
    setSelectedTreatment: PropTypes.func.isRequired,
    showSideEffects: PropTypes.bool.isRequired,
    similarPatientTreatments: PropTypes.array.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortDirection: PropTypes.number.isRequired,
    timescale: PropTypes.array.isRequired
};

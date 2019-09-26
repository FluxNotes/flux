import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BarChart from '../../visualizations/BarChart/BarChart';
import TableLegend from '../../visualizations/TableLegend/TableLegend';
import CompareUnselectedIcon from './CompareUnselectedIcon';
import CompareSelectedIcon from './CompareSelectedIcon';
import TreatmentOptionsOutcomesHeaders from './TreatmentOptionsOutcomesHeaders';

import './TreatmentOptionsOutcomesTable.css';

export default class TreatmentOptionsOutcomesTable extends Component {
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
        const { setSelectedSideEffects } = this.props;
        setSelectedSideEffects(effect.target.value);
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

    setSelectedTreatment = (event, treatment) => {
        return this.props.setSelectedTreatment(treatment);
    }

    renderTreatmentRow(row, isSelectedTreatment = false) {
        const { selectedTreatment, setSelectedTreatment, timescale, showSideEffects, selectedSideEffects } = this.props;
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
                                : <CompareUnselectedIcon row={row} onClick={this.setSelectedTreatment} />
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
                        {selectedSideEffects === "Most Common"
                            ? topSideEffects.map(({ sideEffect, occurrences }, i) =>
                                <div key={i} className="side-effect">
                                    {`${sideEffect.toLowerCase()} `}
                                    ({Math.floor(occurrences / totalPatients * 100)}%)
                                </div>
                            )
                            :
                            <div className="side-effect-percent">
                                {sideEffects.effects[selectedSideEffects]
                                    ? Math.floor(sideEffects.effects[selectedSideEffects] / totalPatients * 100)
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
        const {
            changeSort,
            selectedSideEffects,
            selectedTreatment,
            showSideEffects,
            sideEffects,
            sortColumn,
            sortDirection,
            timescale
        } = this.props;
        const sortName = sortDirection === 2 ? 'sort-up' : sortDirection === 1 ? 'sort-down' : 'sort';
        const sortP = sortColumn === 'totalPatients';
        const selectedTreatmentBool = selectedTreatment !== undefined && selectedTreatment !== null;

        return (
            <TreatmentOptionsOutcomesHeaders
                changeSort={changeSort}
                handleChangeEffect={this.handleChangeEffect}
                selectedSideEffects={selectedSideEffects}
                selectedTreatment={selectedTreatmentBool}
                showSideEffects={showSideEffects}
                sideEffects={sideEffects}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                sortName={sortName}
                sortP={sortP}
                timescale={timescale}
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
    selectedSideEffects: PropTypes.string.isRequired,
    selectedTreatment: PropTypes.object,
    setSelectedSideEffects: PropTypes.func.isRequired,
    setSelectedTreatment: PropTypes.func.isRequired,
    showSideEffects: PropTypes.bool.isRequired,
    sideEffects: PropTypes.array.isRequired,
    similarPatientTreatments: PropTypes.array.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortDirection: PropTypes.number.isRequired,
    timescale: PropTypes.array.isRequired
};

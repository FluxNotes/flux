import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import MenuItem from '../../../elements/MenuItem';
import Select from '../../../elements/Select';
import PersonIcon from './PersonIcon';
import { isSame } from '../../utils/arrayOperations';
import './TreatmentOptionsOutcomesTable.css';

export default class TreatmentOptionsOutcomesHeaders extends Component {
    shouldComponentUpdate(nextProps) {
        const { selectedTreatment, sideEffectSelection, sortP, sortName, sortColumn, sideEffects } = this.props;
        if (nextProps.selectedTreatment === selectedTreatment
            && nextProps.sortP === sortP
            && nextProps.sortName === sortName
            && nextProps.sortColumn === sortColumn
            && isSame(nextProps.sideEffects, sideEffects)
            && nextProps.sideEffectSelection === sideEffectSelection) {
            return false;
        } else {
            return true;
        }
    }

    getSortClass = sortType => {
        const { sortDirection } = this.props;
        return `sort-arrows fas ${sortType && sortDirection ? 'sort-selected' : ''}`;
    }

    render() {
        const {
            changeSort,
            handleChangeEffect,
            selectedTreatment,
            showSideEffects,
            sideEffects,
            sideEffectSelection,
            sortColumn,
            sortName,
            sortP
        } = this.props;
        return (
            <thead className="treatment-options-outcomes-table__header">
                <tr>
                    <td colSpan="2" />
                    <td colSpan={this.props.timescale.length} className="header-title">Overall survival rates</td>
                    {showSideEffects && <td>Side Effects</td>}
                </tr>

                <tr>
                    <td className="compare-header">
                        {selectedTreatment ? 'comparing against' : 'compare'}
                    </td>

                    <td className="user-icon">
                        <span onClick={() => changeSort('totalPatients')} className="header-space">
                            <PersonIcon />
                            <FontAwesome className={this.getSortClass(sortP)} name={sortP ? sortName : 'sort'} />
                        </span>
                    </td>

                    {this.props.timescale.map(timescaleYear => {
                        return (
                            <td key={timescaleYear}>
                                <span onClick={() => changeSort(timescaleYear)} className="header-space">
                                    {timescaleYear} yr
                                    <FontAwesome
                                        className={this.getSortClass(sortColumn === timescaleYear)}
                                        name={sortColumn === timescaleYear ? sortName: "sort"}
                                    />
                                </span>
                            </td>
                        );
                    })}

                    {showSideEffects &&
                        <td id="ccp-table-select">
                            <Select
                                value={sideEffectSelection}
                                onChange={handleChangeEffect}
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
                        </td>
                    }
                </tr>
            </thead>
        );
    }
}

TreatmentOptionsOutcomesHeaders.propTypes = {
    changeSort: PropTypes.func.isRequired,
    selectedTreatment: PropTypes.bool,
    showSideEffects: PropTypes.bool.isRequired,
    sortColumn: PropTypes.string.isRequired,
    sortDirection: PropTypes.number.isRequired,
    timescale: PropTypes.array.isRequired
};

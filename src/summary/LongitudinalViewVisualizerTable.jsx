import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import _ from 'lodash';
import moment from 'moment';
import './LongitudinalViewVisualizerTable.css';
import propTypes from 'prop-types';

export default class LongitudinalViewVisualizerTable extends Component {

    /*
    Assigns an id to each row
    */
    createData(name, unit, data, id, bands) {
        return { name, unit, data, id, bands }; //the names given here are the keys and the values passed into those parameters become the key's values
    }
    gatherTableValues() {
        const tableValues = [];
        const predates = [];
        const { dataInfo } = this.props;
        for (let index = 0; index < this.props.dataInfo.length; index++) {
            tableValues.push(this.createData(this.props.dataInfo[index].name, this.props.dataInfo[index].unit, Object.values(this.props.dataInfo[index].datesAndData), index, this.props.dataInfo[index].bands));
            predates.push(Object.keys(this.props.dataInfo[index].datesAndData));
        }
        const dates = _.uniq(_.flattenDeep(predates));
        const sortFunction = (date1,date2) => {
            const moment1 = new moment(date1, "DD MMM YYYY");
            const moment2 = new moment(date2, "DD MMM YYYY");
            if (moment1 < moment2) {
                return -1;
            }
            if (moment1 > moment2) {
                return 1;
            }
            return 0;
        };
        dates.sort(sortFunction);
        for (let dateIndex = 0; dateIndex < dates.length; dateIndex++) { //for each section, check to see if each date is in its list of dates.  If it is not, add an empty string to its array of data, at the dataIndex
            dataInfo.forEach((obj) => {
                if (!Object.keys(obj.datesAndData).includes(dates[dateIndex])) {
                    tableValues[dataInfo.indexOf(obj)].data.splice(dateIndex, 0, "");
                }
            });
        }
        return [tableValues, dates];
    }
    renderHeader(dates) {
        let currYear = null;
        return (
            <TableHead>
                <TableRow>
                    <TableCell></TableCell><TableCell></TableCell>
                    {dates.map((date) => {
                        if (date.substring(7) !== currYear) {
                            currYear = date.substring(7);
                            return <TableCell key={date} className='table-header'>{currYear}</TableCell>;
                        }
                        return <TableCell key={date}></TableCell>;
                    })}
                </TableRow>
                <TableRow>
                    <TableCell className='table-header'>{this.props.subsectionLabel}</TableCell>
                    <TableCell className='table-header'>Unit</TableCell>
                    {dates.map(function (date) { //makes a new date column-heading for each date in the dates object defined in the constructor
                        return <TableCell className='table-header' key={date}>{date.substring(0, 7)}</TableCell>;
                    }
                    )}
                </TableRow>
            </TableHead>

        );
    }
    renderData(tableValues) {
        return tableValues.map(n => { //n is a row in the table
            const matchingSubsection = this.props.tdpSearchSuggestions.find(s => {
                return s.section === this.props.conditionSectionName && s.valueTitle === 'Subsection' && s.subsection === n.name;
            });
            const subsectionClassName = matchingSubsection ? 'highlighted' : '';
            return (
                <TableRow key={n.id}>
                    <TableCell className={subsectionClassName}>
                        {n.name}
                    </TableCell>
                    <TableCell>{n.unit}</TableCell>
                    {Object.entries(n)[2][1].map((value, newkey) => {
                        const matchingDataPoint = this.props.tdpSearchSuggestions.find(s => {
                            return s.section === this.props.conditionSectionName && value !== '' && s.contentSnapshot.includes(value);
                        });
                        const cellClassName = matchingDataPoint ? 'highlighted' : '';
                        const bands = tableValues[tableValues.indexOf(n)].bands;
                        if (!bands || ((bands[1].high === 'max' || value < bands[1].high) && (bands[1].low === 'min' || value > bands[1].low))) {
                            return <TableCell style={{color: 'black'}} key={newkey} className={cellClassName}>{value}</TableCell>;
                        } else {
                            return <TableCell style={{color: 'red'}} key={newkey} className = {cellClassName}>{value}</TableCell>;
                        }
                    })}
                </TableRow>
            );
        });
    }
    render() {
        const [tableValues, dates] = this.gatherTableValues();

        return (
            <div className='tabular-list table-scrollable'> {/* tabular-list brings in all the right formatting stuff so that the table format matches the rest of the tables*/}
                <Table >
                    {this.renderHeader(dates)}
                    <TableBody>
                        {this.renderData(tableValues)}
                    </TableBody>
                </Table>
            </div>
        );
    }
};

LongitudinalViewVisualizerTable.propTypes = {
    dataInfo: propTypes.array.isRequired,
    tdpSearchSuggestions: propTypes.array,
    conditionSectionName: propTypes.string
};
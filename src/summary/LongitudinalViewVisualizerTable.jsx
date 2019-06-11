import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import _ from 'lodash';
import moment from 'moment';
import './LongitudinalViewVisualizerTable.css';


export default class LongitudinalViewVisualizerTable extends Component {

    constructor(props) {
        super(props);
        this.columns = { 'date 1': [1, 2, 3, 4, 5], 'date 2': [4, 5, 6, 7, 8], 'date 3': [7, 8, 9, 10, 11], 'date 4': [10, 11, 12, 13, 14], 'date 5': [13, 14, 15, 16, 17] };//where our array of dates will go (have to combine dates from all mini tables, sort, and delete duplicates)
    }
    /*
    Assigns an id to each row
    */
    createData(labName, unit, data, id, bands) {
        return { labName, unit, data, id, bands }; //the names given here are the keys and the values passed into those parameters become the key's values
    }
    gatherTableValues() {
        const tableValues = [];
        const predates = [];
        const { labDataInfo } = this.props;
        for (let labIndex = 0; labIndex < this.props.labDataInfo.length; labIndex++) {
            tableValues.push(this.createData(this.props.labDataInfo[labIndex].labName, this.props.labDataInfo[labIndex].labUnit, Object.values(this.props.labDataInfo[labIndex].datesAndData), labIndex, this.props.labDataInfo[labIndex].bands));
            predates.push(Object.keys(this.props.labDataInfo[labIndex].datesAndData));
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
        for (let dateIndex = 0; dateIndex < dates.length; dateIndex++) { //for each lab, check to see if each date is in its list of dates.  If it is not, add an empty string to its array of lab data, at the dataIndex
            labDataInfo.forEach((labObj) => {
                if (!Object.keys(labObj.datesAndData).includes(dates[dateIndex])) {
                    tableValues[labDataInfo.indexOf(labObj)].data.splice(dateIndex, 0, "");
                }
            });
        }
        return [tableValues, dates];
    }

    render() {
        const [tableValues, dates] = this.gatherTableValues();
        return (
            <div className='tabular-list' > {/* tabular-list brings in all the right formatting stuff so that the table format matches the rest of the tables*/}
                <Table style={{width: 'fit-content'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lab Name</TableCell>
                            <TableCell className='table-header'>Unit</TableCell>
                            {dates.map(function (date) { //makes a new date column-heading for each date in the dates object defined in the constructor
                                return <TableCell className='table-header' key={date}>{date}</TableCell>;
                            }
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableValues.map(n => { //n is a row in the table
                            console.log("n: " + n);
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.labName}
                                    </TableCell>
                                    <TableCell>{n.unit}</TableCell>
                                    {Object.entries(n)[2][1].map((value, newkey) => {
                                        if (value < tableValues[tableValues.indexOf(n)].bands[1].high && value > tableValues[tableValues.indexOf(n)].bands[1].low) {
                                            return <TableCell style={{color: 'black'}} key={newkey}>{value}</TableCell>;
                                        } else {
                                            return <TableCell style={{color: 'red'}} key={newkey}>{value}</TableCell>;
                                        }
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
};


import React, { Component } from 'react';
import Table, { TableHead, TableBody, TableCell, TableRow } from 'material-ui/Table';
import _ from 'lodash';


export default class LongitudinalViewVisualizerTable extends Component {

    constructor(props) {
        super(props);
        this.columns = { 'date 1': [1, 2, 3, 4, 5], 'date 2': [4, 5, 6, 7, 8], 'date 3': [7, 8, 9, 10, 11], 'date 4': [10, 11, 12, 13, 14], 'date 5': [13, 14, 15, 16, 17] };//where our array of dates will go (have to combine dates from all mini tables, sort, and delete duplicates)
    }
    /*
    Assigns an id to each row
    */
    createData(labName, unit, data, id) { //datesOrData is dates if it's the first row of the table and data if not
        return { labName, unit, data, id }; //the names given here are the keys and the values passed into those parameters become the key's values
    }
    gatherTableValues() {
        const tableValues = [];
        const predates = [];
        for (let labIndex = 0; labIndex < this.props.labDataInfo.length; labIndex++) {
            tableValues.push(this.createData(this.props.labDataInfo[labIndex].labName, this.props.labDataInfo[labIndex].labUnit, Object.values(this.props.labDataInfo[labIndex].datesAndData), labIndex));
            predates.push(Object.keys(this.props.labDataInfo[labIndex].datesAndData));
        }
        const dates = _.uniq(_.flattenDeep(predates));
        // const dates = middates.sort((a,b) => {
        //     return a.getTime() -b.getTime()
        // });
        console.log(dates);
        return [tableValues, dates];
    }
    // compareByDate(date1, date2){
    //     const year1 = date1.substring(7);
    //     const year2 = date2.substring(7);
    //     const month1 = date1.substring(3,6);
    //     const month2 = date2.substring(3,6);
    //     const day1 = date1.substring(0,2);
    //     const day2 = date2.substring(0,2);
    //     if(year1 != year2){
    //         return year1.compareTo(year2);
    //     } else if(month1 != month2){
    //         return month1.compareTo(month2);
    //     } else {
    //         return day1.compareTo(day2);
    //     }
    // } 
    render() {
        const { labDataInfo } = this.props;
        const [tableValues, dates] = this.gatherTableValues();
        return (
            <div className='tabular-list'> {/* tabular-list brings in all the right formatting stuff so that the table format matches the rest of the tables*/}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lab Name</TableCell>
                            <TableCell>Unit</TableCell>
                            {dates.map(date => { //makes a new date column-heading for each date in the dates array defined in the constructor
                                return <TableCell key={date}>{date}</TableCell>;
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
                                        return <TableCell key={newkey}>{value}</TableCell>; //why not just put n in the table cell?
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


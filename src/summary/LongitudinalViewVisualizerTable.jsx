import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableHead, TableBody, TableFooter, TableCell, TableRow } from 'material-ui/Table';


export default class LongitudinalViewVisualizerTable extends Component {

    constructor(props) {
        super(props);
        this.columns = { 'date 1': [1, 2, 3, 4, 5], 'date 2': [4, 5, 6, 7, 8], 'date 3': [7, 8, 9, 10, 11], 'date 4': [10, 11, 12, 13, 14], 'date 5': [13, 14, 15, 16, 17] };//where our array of dates will go (have to combine dates from all mini tables, sort, and delete duplicates)
    }
    /*
    Assigns an id to each row
    */
    createData(labName, unit, datesOrData, id = 0) { //datesOrData is dates if it's the first row of the table and data if not
        return { labName, unit, datesOrData, id }; //the names given here are the keys and the values passed into those parameters become the key's values
    }

    render() {
        //in place of 'Frozen yoghurt' will be the name of the lab (labs[id]?), 159 will be the unit (units[id]?, etc.), this.dates will be the data (or date if first row) (could be an array
        //of all the data for that lab or could be data[column_number] a bunch of times/for each data column in the row if the data is stored by date/column instead of by lab/row)
        const tableValues = [ //tableValues is every value in the table, row by row
            this.createData('Frozen yoghurt', 159, this.columns), //id for this one is 0 since 0 is the default and no id is given in calling createData
            this.createData('Frozen', 159, this.columns, 1),
            this.createData('Frozen yoghurt', 159, this.columns, 2),
            this.createData('Frozen yoghurt', 159, this.columns, 3),
            this.createData('Frozen yoghurt', 159, this.columns, 4),
        ]; //there's one this.createData call for each row in the table (for each lab)

        const dates = Object.keys(this.columns); //an array of all the dates
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
                                    {Object.entries(this.dates).map(function (key) {
                                        return <TableCell key={key} > {key[1][n.id]}</TableCell>;
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


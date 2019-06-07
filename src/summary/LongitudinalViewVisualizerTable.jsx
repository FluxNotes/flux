import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableHead, TableBody, TableFooter, TableCell, TableRow } from 'material-ui/Table';


export default class LongitudinalViewVisualizerTable extends Component {

    constructor(props) {
        super(props);
        this.dates = ['date 1', 'date 2', 'date 3', 'date 4']; //where our array of dates will go (have to combine dates from all mini tables, sort, and delete duplicates)
    }
    /*
    Assigns an id to each row
    */
    createData(labName, unit, datesOrData, id = 0) { //datesOrData is dates if it's the first row of the table and data if not
        return { labName, unit, datesOrData, id }; //why is this in squiggly brackets? I think it's an object but there are no key value pairs
    }

    render() {
        //in place of 'Frozen yoghurt' will be the name of the lab (labs[id]?), 159 will be the unit (units[id]?, etc.), this.dates will be the data (or date if first row) (could be an array
        //of all the data for that lab or could be data[column_number] a bunch of times/for each data column in the row if the data is stored by date/column instead of by lab/row)
        const tableValues = [ //tableValues is every value in the table, row by row
            this.createData('Frozen yoghurt', 159, this.dates), //id for this one is 0 since 0 is the default and no id is given in calling createData
            this.createData('Frozen yoghurt', 159, this.dates, 1),
            this.createData('Frozen yoghurt', 159, this.dates, 2),
            this.createData('Frozen yoghurt', 159, this.dates, 3),
            this.createData('Frozen yoghurt', 159, this.dates, 4),
        ]; //there's one this.createData call for each row in the table (for each lab)

        return (
            <div className='tabular-list'> {/* tabular-list brings in all the right formatting stuff so that the table format matches the rest of the tables*/}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lab Name</TableCell>
                            <TableCell>Unit</TableCell>
                            {this.dates.map(function (date) { //makes a new date column-heading for each date in the dates array defined in the constructor
                                return <TableCell key={date}>{date}</TableCell>;
                            }
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableValues.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.labName}
                                    </TableCell>
                                    <TableCell numeric>{n.unit}</TableCell>
                                    {this.dates.map(function (date) {
                                        return <TableCell key={date}>{date}</TableCell>;
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


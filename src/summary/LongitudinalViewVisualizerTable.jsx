import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableHead, TableBody, TableFooter, TableCell, TableRow } from 'material-ui/Table';


export default class LongitudinalViewVisualizerTable extends React.Component {
    constructor(props) {
        super(props);
        this.dates = ['date 1', 'date 2', 'date 3', 'date 4'];
    }
    createData(labName, unit, dates, id=0) { //dates is an array of the lab dates
        return { id, labName, unit, dates };
    }

    render() {
        const data = [
            this.createData('Frozen yoghurt', 159, this.dates),
            this.createData('Frozen yoghurt', 159, this.dates, 1),
            this.createData('Frozen yoghurt', 159, this.dates, 2),
            this.createData('Frozen yoghurt', 159, this.dates, 3),
            this.createData('Frozen yoghurt', 159, this.dates, 4),
        ];

        return (
            <div className='tabular-list'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lab Name</TableCell>
                                <TableCell>Unit</TableCell>
                                {this.dates.map(function (date) { 
                                return <TableCell key={date}>{date}</TableCell> }
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            {n.labName}
                                        </TableCell>
                                        <TableCell numeric>{n.unit}</TableCell>
                                        {this.dates.map(function (date) {return <TableCell key={date}>{date}</TableCell> })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
            </div>
        );
    }
};


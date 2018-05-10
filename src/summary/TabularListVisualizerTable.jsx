import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableHead, TableBody, TableFooter, TablePagination, TableRow } from 'material-ui/Table';

export default class TabularListVisualizerTable extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            page: 0
        };
    }

    render() {
        const { headers, rows } = this.props;
        const { page } = this.state;

        const sliceStart = page * 10;
        const displayedRows = rows.length > 10 ? rows.slice(sliceStart, sliceStart + 10) : rows;

        return (
            <Table>
                {headers &&
                    <TableHead>{headers}</TableHead>
                }

                <TableBody>
                    {displayedRows}
                </TableBody>

                {rows.length > 10 &&
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                              colSpan={3}
                              count={rows.length}
                              rowsPerPage={10}
                              page={page}
                              onChangePage={(event, page) => this.setState({ page })}
                              rowsPerPageOptions={[]}
                              onChangeRowsPerPage={() => null}
                            />
                        </TableRow>
                    </TableFooter>
                }
            </Table>
        );
    }
}

TabularListVisualizerTable.propTypes = {
    headers: PropTypes.object,
    rows: PropTypes.array
}

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Table, { TableCell, TableHead, TableBody, TableFooter, TablePagination, TableRow } from 'material-ui/Table';
import './TreatmentOptionsOutcomes.css';


  let id = 0;
  function createData(name) {
    id += 1;
    return {id, name};
  }
  
  const rows = [
    createData('surgery & radiation'),
    createData('hormonal therapy'),
    createData('chemotherapy'),
    createData('none (actively monitoring)'),
  ];
  
  function TreatmentOptionsOutcomes(props) {
    return (
        <div className="outcome-list">
        <Table >
          {/* Top Level Header */}

          <TableHead >
            <TableRow className="outcome-header">
              <TableCell rowSpan={2}>select to compare</TableCell>
              <TableCell className="outcome-center-header" rowSpan={2}><span className="fa fa-user user-icon"></span></TableCell>
              <TableCell className="outcome-bold-header" colSpan={3}>Overall survival rates</TableCell>
              <TableCell className="outcome-bold-header" rowSpan={2}>Change in ECOG score</TableCell>
              <TableCell className="outcome-bold-header" colSpan={2}>Hospitalization due to side effects</TableCell>
            </TableRow>
            {/* Subheaders */}
            <TableRow className="outcome-subheader">

              <TableCell >1 yr</TableCell>
              <TableCell >2 yr</TableCell>
              <TableCell >5 yr</TableCell>

              <TableCell >all</TableCell>
              <TableCell >leading cause</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell   component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >({Math.round(Math.random()*100)})</TableCell>
                  <TableCell ><div className="prog-fill-top"><div className="prog-fill" style={{"width":Math.random()*100}}></div></div></TableCell>
                  <TableCell ><div className="prog-fill-top"><div className="prog-fill" style={{"width":Math.random()*100}}></div></div></TableCell>
                  <TableCell ><div className="prog-fill-top"><div className="prog-fill" style={{"width":Math.random()*100}}></div></div></TableCell>
                  <TableCell > 0.5 .4</TableCell>
                  <TableCell > 15% ^4</TableCell>
                  <TableCell > neuropathy (4%) <br /> other thing (19%)</TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </div>

    );
  }
  
  TreatmentOptionsOutcomes.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (TreatmentOptionsOutcomes);
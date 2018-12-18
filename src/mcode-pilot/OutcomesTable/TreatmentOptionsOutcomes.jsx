import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table, { TableCell, TableHead, TableBody, TableRow } from 'material-ui/Table';
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
  

  export default class TreatmentOptionsOutcomes extends Component {
    constructor(props) {
      super(props);

      this.state = {
          placeholder:{}
      };

  }

    createHeader(headers) {
      // iterator key
      let id = 0;

      const subheaders = [];
      const header = headers.map(thisHeader=>{
        // header type selection
        // bold: default
        // centered: centers the text (non-bold)
        const type = thisHeader.type?thisHeader.type:"bold";
        const subBool = thisHeader.hasOwnProperty('subheaders');
        if(subBool){
          subheaders.push(...thisHeader["subheaders"])
        }
        // !: could cause problems if headers change order
        // or more get added to the front.
        id++; 
        return (<TableCell 
          key={id}
          className={"outcome-"+type+"-header"}
          // !: only allows max two tiered headers/subheaders
          rowSpan={subBool?1:2}
          colSpan={subBool?thisHeader.subheaders.length:1}>
          {thisHeader.header}
          </TableCell>)
      })

      const subheader = subheaders.map(subList=>{
        id++;
          return (<TableCell key={id}>{subList}</TableCell>)
      })

      return {header, subheader};
    }
    render(){
      const header = (this.createHeader(this.props.headers));
      return (
        <div className="outcome-list">
        <Table >
          {/* Top Level Header */}
          <TableHead >
            <TableRow className="outcome-header">
              {header.header}
            </TableRow>
            {/* Subheaders */}
            <TableRow className="outcome-subheader">
              {header.subheader}
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
                  <TableCell > 15% ^ 4</TableCell>
                  <TableCell > neuropathy (4%) <br /> other thing (19%)</TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </div>

    );
    }
    
  }
  
  TreatmentOptionsOutcomes.propTypes = {
    headers: PropTypes.array.isRequired,
  };
  
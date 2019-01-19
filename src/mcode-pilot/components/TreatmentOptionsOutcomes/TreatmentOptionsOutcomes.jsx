import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableCell, TableHead, TableBody, TableRow } from 'material-ui/Table';
import BarChart from '../Visualizations/BarChart';
import './TreatmentOptionsOutcomes.css';
import outcome_survival from '../mock-data/outcome_survival';
let id = 0;
function createData(name) {
    id += 1;
    return { id, name };
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
            placeholder: {},
            activeRow:'none (actively monitoring)'
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.similarPatientProps !== this.props.similarPatientProps) {
            this.props.processSimilarPatientOutcomes();
        }
    }

    createHeader(headers) {
        const subheaders = [];
        const header = headers.map((thisHeader, index) => {
            // header type selection
            // bold: default
            // centered: centers the text (non-bold)
            const type = thisHeader.type ? thisHeader.type : "bold";
            if (thisHeader.subheaders) {
                subheaders.push(...thisHeader.subheaders)
            } else if(type === "bold") {
                // give lone headers an empty subheader so they're aligned
                subheaders.push(...[""]);
            }

            return (
                <TableCell
                    key={index}
                    className={`outcome-${type}-header`}
                    // !: only allows max two tiered headers/subheaders
                    rowSpan={!thisHeader.subheaders && type !== "bold" ? 2 : 1}
                    colSpan={thisHeader.subheaders ? thisHeader.subheaders.length : 1}>
                    {thisHeader.header}
                </TableCell>
            );
        })

        const subheader = subheaders.map((subList, index) =>
            <TableCell key={index}>{subList}</TableCell>
        );

        return { header, subheader };
    }

    setActiveRow(row){
        this.setState({activeRow:row})
    }
    render() {
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
                            const outcome1Yr = outcome_survival[row.name].yr1;
                            return (
                                <TableRow key={row.id} onClick={()=>{this.setState({activeRow:row.name})}}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >({outcome1Yr.survived+outcome1Yr.cancerDeath+outcome1Yr.otherDeath})</TableCell>
                                    {Object.keys(outcome_survival[row.name]).map(year=>{
                                        return(<TableCell key={row.id+year}>
                                            
                                            <BarChart 
                                                values={outcome_survival[row.name][year]}
                                                compareTo={outcome_survival[this.state.activeRow][year]}
                                                active={row.name === this.state.activeRow}/>
                                        </TableCell>)
                                    })}
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
    similarPatientProps: PropTypes.object.isRequired,
    processSimilarPatientOutcomes: PropTypes.func.isRequired
};

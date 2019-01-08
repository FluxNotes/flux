import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableCell, TableHead, TableBody, TableRow } from 'material-ui/Table';
import BarChart from '../Visualizations/BarChart';
import './TreatmentOptionsOutcomes.css';

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

const outcome_survival = {
    'none (actively monitoring)':{
        'yr1':{
            'survived':67,
            'cancerDeath': 37,
            'otherDeath': 5
        },
        'yr2':{
            'survived': 54,
            'cancerDeath': 50,
            'otherDeath':10
        },
        'yr3':{
            'survived':43,
            'cancerDeath':61,
            'otherDeath':4
        }
    },
    'chemotherapy':{
        'yr1':{
            'survived':14,
            'cancerDeath':3,
            'otherDeath':1
        },
        'yr2':{
            'survived':12,
            'cancerDeath':5,
            'otherDeath':1
        },
        'yr3':{
            'survived':11,
            'cancerDeath':6,
            'otherDeath':1
        }

    },
    'hormonal therapy':{
        'yr1':{
            'survived':43,
            'cancerDeath':23,
            'otherDeath':43
        },
        'yr2':{
            'survived':145,
            'cancerDeath':27,
            'otherDeath':35
        },
        'yr3':{
            'survived':32,
            'cancerDeath':34,
            'otherDeath':31
        }
    },
    'surgery & radiation':{
        'yr1':{
            'survived':23,
            'cancerDeath':32,
            'otherDeath':5
        },
        'yr2':{
            'survived':19,
            'cancerDeath':35,
            'otherDeath':4
        },
        'yr3':{
            'survived':15,
            'cancerDeath':37,
            'otherDeath':4
        }
    }
}

export default class TreatmentOptionsOutcomes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: {},
            activeRow:'none (actively monitoring)'
        };
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
            }else if(type === "bold") {
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
            )
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
                            return (
                                <TableRow key={row.id} onClick={()=>{this.setState({activeRow:row.name})}}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    {/* outcome_survival is mock data and will need to be replaced */}
                                    <TableCell >({outcome_survival[row.name].yr1.survived+outcome_survival[row.name].yr1.cancerDeath+outcome_survival[row.name].yr1.otherDeath})</TableCell>
                                    {Object.keys(outcome_survival[row.name]).map(year=>{
                                        // 
                                        return(<TableCell key={row.id+year}>
                                            
                                            <BarChart 
                                                values={outcome_survival[row.name][year]}
                                                compareTo={outcome_survival[this.state.activeRow][year]}
                                                active={row.name == this.state.activeRow}/>
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
};

// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

// Styling
import './DataSummary.css';


class DataSummary extends Component {

    constructor(props) {
        super(props);

        this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this)
    }

    handleHER2StatusChange(newStatus) {
        console.log(this);
        this.props.onHER2StatusChange(newStatus);
    }


    render() {

        // Current Staging
        const StageString = 'Stage: IIA';
        const StageSubElementsString = 'T2, N0, M0';
        const StageCheckboxChecked = (this.props.StageStatus !== "");

        // Pathology Results
        const HGAString = 'HGA: HG2';
        const HER2StatusString = `HER2 Status: +`;
        const ERStatusString = `ER Status: +`;
        const PRStatusString = `PR Status: +`;
        // const HER2StatusString = `HER2 Status: ${this.props.HER2Status}`;
        // const ERStatusString = `ER Status: ${this.props.ERStatus}`;
        // const PRStatusString = `PR Status: ${this.props.PRStatus}`;
        const HER2CheckboxChecked = (this.props.HER2Status !== "");
        const ERCheckboxChecked = (this.props.ERStatus !== "");
        const PRCheckboxChecked = (this.props.PRStatus !== "");

        // Event Dates
        const DiagnosisDateString = 'Diagnosis: 05/16/2012';
        const DiagnosisString = 'Breast Cancer - Stage IIA';
        const SurgeryDateString = 'Surgery: 06/20/2012';
        const SurgeryString = 'Lumpectomy/sentinel/lymph node biopsy';
        const RecurrenceDateString = 'Recurrence: 08/02/2015';


        return (
            <div id="data-summary">
                <List>
                    <Subheader>Current Staging</Subheader>
                    <ListItem primaryText={StageString} leftCheckbox={<Checkbox checked={StageCheckboxChecked}/>}/>
                    <ListItem id="staging-subelements" primaryText={StageSubElementsString}/>
                </List>
                <List>
                    <Subheader>Pathology Results</Subheader>
                    <ListItem primaryText={HGAString} leftCheckbox={<Checkbox checked={true}/>}/>
                    <ListItem primaryText={HER2StatusString} leftCheckbox={<Checkbox checked={true}/>}/>
                    <ListItem primaryText={ERStatusString} leftCheckbox={<Checkbox checked={true}/>}/>
                    <ListItem primaryText={PRStatusString} leftCheckbox={<Checkbox checked={true}/>}/>
                    {/*<ListItem primaryText={HER2StatusString} leftCheckbox={<Checkbox checked={HER2CheckboxChecked}/>}/>*/}
                    {/*<ListItem primaryText={ERStatusString} leftCheckbox={<Checkbox checked={ERCheckboxChecked}/>}/>*/}
                    {/*<ListItem primaryText={PRStatusString} leftCheckbox={<Checkbox checked={PRCheckboxChecked}/>}/>*/}
                </List>
                <List>
                    <Subheader>Event Dates</Subheader>
                    <ListItem primaryText={DiagnosisDateString} leftCheckbox={<Checkbox checked={true}/>}/>
                    <ListItem id="diagnosis" primaryText={DiagnosisString}/>
                    <ListItem primaryText={SurgeryDateString} leftCheckbox={<Checkbox checked={true}/>}/>
                    <ListItem primaryText={SurgeryString}/>
                    <ListItem primaryText={RecurrenceDateString} leftCheckbox={<Checkbox checked={true}/>}/>
                </List>
            </div>
        );
    }
}

DataSummary.propTypes = {
    StageStatus: PropTypes.string,
    HER2Status: PropTypes.string,
    ERStatus: PropTypes.string,
    PRStatus: PropTypes.string,
    onHER2StatusChange: PropTypes.func.isRequired,

}

export default DataSummary;
// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
// Material UI component imports
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
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
        // const HER2StatusString = `HER2 Status: +`;
        // const ERStatusString = `ER Status: +`;
        // const PRStatusString = `PR Status: +`;
        const HER2StatusString = `HER2 Status: ${this.props.HER2Status}`;
        const ERStatusString = `ER Status: ${this.props.ERStatus}`;
        const PRStatusString = `PR Status: ${this.props.PRStatus}`;
        const HER2CheckboxChecked = (this.props.HER2Status !== "");
        const ERCheckboxChecked = (this.props.ERStatus !== "");
        const PRCheckboxChecked = (this.props.PRStatus !== "");

        // Event Dates
        const DiagnosisDateString = 'Diagnosis: 05/16/2012';
        const DiagnosisString = 'Breast Cancer - Stage IIA';
        const DiagnosisCheckboxChecked = (this.props.DiagnosisStatus !== "");
        const SurgeryDateString = 'Surgery: 06/20/2012';
        const SurgeryString = 'Lumpectomy/sentinel/lymph node biopsy';
        const SurgeryCheckboxChecked = (this.props.SurgeryStatus !== "");
        const RadiationString = 'Radiation: 07/12/2012 - 08/16/2012';
        const RadiationCheckboxChecked = (this.props.RadiationStatus !== "");
        const RecurrenceDateString = 'Recurrence: ';
        const RecurrenceCheckboxChecked = (this.props.RecurrenceStatus !== "");


        return (
            <Paper zDepth={1}>
                <div id="data-summary">

                    <h1>Patient Summary</h1>
                    <List>
                        <h3>Current Staging</h3>
                        <ListItem primaryText={StageString} leftCheckbox={<Checkbox checked={StageCheckboxChecked}/>}/>
                        <ListItem className="sub-list" primaryText={StageSubElementsString}/>
                    </List>
                    <Divider />
                    <List>
                        <h3>Pathology Results</h3>
                        <ListItem primaryText={HGAString} leftCheckbox={<Checkbox checked={true}/>}/>
                        <ListItem primaryText={HER2StatusString} leftCheckbox={<Checkbox checked={true}/>}/>
                        <ListItem primaryText={ERStatusString} leftCheckbox={<Checkbox checked={true}/>}/>
                        <ListItem primaryText={PRStatusString} leftCheckbox={<Checkbox checked={true}/>}/>
                        {/*<ListItem primaryText={HER2StatusString}*/}
                                  {/*leftCheckbox={<Checkbox checked={HER2CheckboxChecked}/>}/>*/}
                        {/*<ListItem primaryText={ERStatusString} leftCheckbox={<Checkbox checked={ERCheckboxChecked}/>}/>*/}
                        {/*<ListItem primaryText={PRStatusString} leftCheckbox={<Checkbox checked={PRCheckboxChecked}/>}/>*/}
                    </List>
                    <Divider />
                    <List>
                        <h3>Event Dates</h3>
                        <ListItem primaryText={DiagnosisDateString}
                                  leftCheckbox={<Checkbox checked={DiagnosisCheckboxChecked}/>}/>
                        <ListItem className="sub-list" primaryText={DiagnosisString}/>
                        <ListItem primaryText={SurgeryDateString}
                                  leftCheckbox={<Checkbox checked={SurgeryCheckboxChecked}/>}/>
                        <ListItem className="sub-list" primaryText={SurgeryString}/>
                        <ListItem primaryText={RadiationString}
                                  leftCheckbox={<Checkbox checked={RadiationCheckboxChecked}/>}/>
                        <ListItem primaryText={RecurrenceDateString} leftCheckbox={<Checkbox checked={false}/>}/>
                    </List>
                </div>
            </Paper>
        );
    }
}

DataSummary.propTypes = {
    StageStatus: PropTypes.string,
    HER2Status: PropTypes.string,
    ERStatus: PropTypes.string,
    PRStatus: PropTypes.string,
    onHER2StatusChange: PropTypes.func.isRequired,
    DiagnosisStatus: PropTypes.string,
    SurgeryStatus: PropTypes.string,
    RadiationStatus: PropTypes.string,
    RecurrenceStatus: PropTypes.string,

}

export default DataSummary;
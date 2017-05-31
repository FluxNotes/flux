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
// Flexbox
import { Grid, Row, Col } from 'react-flexbox-grid';

// Styling
import './DataSummary.css';

class DataSummary extends Component {

    constructor(props) {
        super(props);

        this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this)
        this.handleERStatusChange   = this.handleERStatusChange.bind(this)
        this.handlePRStatusChange   = this.handlePRStatusChange.bind(this)
        // this.handleItemSelected = this.handleItemSelected.bind(this) // did the binding with => down in the html. this is redundant
    }

    handleHER2StatusChange (newStatus) {
      this.props.onHER2StatusChange(newStatus);
    }

    handleERStatusChange (newStatus) {
      this.props.onERStatusChange(newStatus);
    }

    handlePRStatusChange (newStatus) {
      this.props.onPRStatusChange(newStatus);
    }
    
    handleItemSelected(e, itemString, subItemString) {
        if (subItemString) {
            this.props.onSummaryItemSelected(itemString, subItemString);
        } else {
            this.props.onSummaryItemSelected(itemString, "");
        }
    }

    render() {

        // Current Staging

        const StageString = 'Stage: IIA';
        const StageSubElementsString = 'T2, N0, M0';
        // const StageCheckboxChecked = (this.props.StageStatus !== "");
        // const StageString = 'Stage:';
        // const StageSubElementsString = 'T: N: M: ';
        const StageCheckboxChecked = false;

        // Pathology Results
        const HGAString = 'HGA: HG2';
        // const HER2StatusString = `HER2 Status: +`;
        // const ERStatusString = `ER Status: +`;
        // const PRStatusString = `PR Status: +`;
        const HER2StatusString = `HER2 Status: ${this.props.HER2Status}`;
        const ERStatusString = `ER Status: ${this.props.ERStatus}`;
        const PRStatusString = `PR Status: ${this.props.PRStatus}`;
        const HGACheckboxChecked = (this.props.HGAStatus !== "");
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
        const RadiationDateString = 'Radiation: 07/12/2012 - 08/16/2012';
        const RadiationCheckboxChecked = (this.props.RadiationStatus !== "");
        const TamoxifenDateString = 'Tamoxifen: 09/01/2012 - 07/01/2014';
        const TamoxifenCheckboxChecked = (this.props.TamoxifenStatus !== "");
        const RecurrenceDateString = 'Recurrence: 08/02/2015';
        const RecurrenceCheckboxChecked = (this.props.RecurrenceStatus !== "");

        return (
            <div id="data-summary">
                <h1>Patient Summary</h1>
                <Paper zDepth={1}>
                    <Grid fluid id="summary-panels">
                        <Row className="summary-panel">
                            <Col sm={12}>
                                <Paper zDepth={1}>
                                    <List className="summary-content">
                                        <h3>Current Staging</h3>
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, StageString, StageSubElementsString)}>{StageString}</span>} 
                                            leftCheckbox={<Checkbox checked={StageCheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            className="sub-list" 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, StageString, StageSubElementsString)}>{StageSubElementsString}</span>}
                                        />
                                    </List>
                                </Paper>
                            </Col>
                        </Row>
                        <Row className="summary-panel">
                            <Col sm={12}>
                                <Paper zDepth={1}>
                                    <List className="summary-content">
                                        <h3>Pathology Results</h3>
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, HGAString)}>{HGAString}</span>} 
                                            leftCheckbox={<Checkbox checked={HGACheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, HER2StatusString)}>{HER2StatusString}</span>} 
                                            leftCheckbox={<Checkbox checked={HER2CheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, ERStatusString)}>{ERStatusString}</span>} 
                                            leftCheckbox={<Checkbox checked={ERCheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, PRStatusString)}>{PRStatusString}</span>} 
                                            leftCheckbox={<Checkbox checked={PRCheckboxChecked}/>}
                                        />
                                    </List>
                                </Paper>
                            </Col>
                        </Row>
                        <Row className="summary-panel">
                            <Col sm={12}>
                                <Paper zDepth={1}>
                                    <List className="summary-content">
                                        <h3>Event Dates</h3>
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, DiagnosisDateString, DiagnosisString)}>{DiagnosisDateString}</span>}
                                            leftCheckbox={<Checkbox checked={DiagnosisCheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            className="sub-list" 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, DiagnosisDateString, DiagnosisString)}>{DiagnosisString}</span>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, SurgeryDateString, SurgeryString)}>{SurgeryDateString}</span>}
                                            leftCheckbox={<Checkbox checked={SurgeryCheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            className="sub-list" 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, SurgeryDateString, SurgeryString)}>{SurgeryString}</span>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, RadiationDateString)}>{RadiationDateString}</span>}
                                            leftCheckbox={<Checkbox checked={RadiationCheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, TamoxifenDateString)}>{TamoxifenDateString}</span>}
                                            leftCheckbox={<Checkbox checked={TamoxifenCheckboxChecked}/>}
                                        />
                                        <ListItem 
                                            primaryText={<span onClick={(e) => this.handleItemSelected(e, RecurrenceDateString)}>{RecurrenceDateString}</span>} 
                                            leftCheckbox={<Checkbox checked={RecurrenceCheckboxChecked}/>}
                                        />
                                    </List>
                                </Paper>
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

DataSummary.propTypes = {
    StageStatus: PropTypes.string,
    HGAStatus: PropTypes.string,
    HER2Status: PropTypes.string,
    ERStatus: PropTypes.string,
    PRStatus: PropTypes.string,
    onHER2StatusChange: PropTypes.func.isRequired,
    onERStatusChange: PropTypes.func.isRequired,
    onPRStatusChange: PropTypes.func.isRequired,
    DiagnosisStatus: PropTypes.string,
    SurgeryStatus: PropTypes.string,
    RadiationStatus: PropTypes.string,
    TamoxifenStatus: PropTypes.string,
    RecurrenceStatus: PropTypes.string,
    onSummaryItemSelected: PropTypes.func.isRequired
}

export default DataSummary;
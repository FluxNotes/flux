import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from '../elements/Button';
import SummaryHeader from '../summary/SummaryHeader';
import ConditionSelection from '../summary/ConditionSelection'
import ClinicalEventSelection from '../summary/ClinicalEventSelection'
import './PatientControlPanel.css';

class PatientControlPanel extends Component {
    render() {
        const { patient } = this.props;
        const login = (this.props.supportLogin) ? ( <Button style={{color:"#17263f"}}>Dr. X123 Y987</Button> ) : "";
        const firstName = patient.getName().split(' ')[0];
        const patientConditions = this.props.patient ? this.props.patient.getConditions() : [];
        return (
            <div className="patient-control-panel">
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col sm={2}>
                                <Row middle="xs">
                                    <Col sm={3}>
                                        <img src="fluxnotes_logo_color.png" height="40px" width="30px" alt="Flux Notes logo" />&nbsp;&nbsp;
                                    </Col>
                                    <Col sm={9}>
                                        <div className="title">
                                            {this.props.appTitle}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col sm={7}>
                                <SummaryHeader
                                    photo={patient.getMostRecentPhoto()}
                                    patientName={patient.getName()}
                                    mrn={patient.getMRN()}
                                    dateOfBirth={patient.getPersonOfRecord().dateOfBirth.value}
                                    age={patient.getAge()}
                                    administrativeSex={patient.getPersonOfRecord().administrativeGender.value}
                                    address={patient.getCurrentHomeAddress()} />
                            </Col>
                            <Col sm={2}>
                                <div id="condition-summary-section" className="dashboard-panel panel-content">
                                    <Grid fluid>
                                        <Row middle="xs">
                                            <Col sm={6}>
                                                <h3>Workflow</h3>
                                                <ClinicalEventSelection
                                                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                                                    clinicalEvent={this.props.clinicalEvent}
                                                    setFullAppState={this.props.setFullAppState}
                                                />
                                            </Col>

                                            <Col sm={4}>
                                                <ConditionSelection
                                                    conditions={patientConditions}
                                                    setFullAppState={this.props.setFullAppState}
                                                />
                                            </Col>


                                        </Row>
                                    </Grid>
                                </div>
                                </Col>
                            <Col sm={1}>
                                <Row middle="xs">
                                    <Col sm={1}>

                                    </Col>

                                    <Col sm={4}>
                                        {login}
                                    </Col>

                                    <Col sm={1}>
                                        <div className="vertical-divider"></div>
                                    </Col>

                                    <Col sm={6}>
                                        <div className="search-wrapper">
                                            <span className="fa fa-search search-icon"></span>
                                            <Input
                                                id="search"
                                                placeholder={`${firstName} search...`}
                                                className="search-field"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

PatientControlPanel.propTypes = {
    appTitle: PropTypes.string.isRequired,
    supportLogin: PropTypes.bool.isRequired,
    patient: PropTypes.object.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    possibleClinicalEvents: PropTypes.array.isRequired,
    setFullAppState: PropTypes.func.isRequired
};

export default PatientControlPanel;

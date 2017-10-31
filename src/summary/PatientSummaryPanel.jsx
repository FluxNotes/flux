import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

import SummaryHeader from './SummaryHeader';
import ConditionSelection from './ConditionSelection';
import ClinicalEventSelection from './ClinicalEventSelection';
import './PatientSummaryPanel.css';

export default class PatientSummaryPanel extends Component {

    render() {
        const { patient, clinicalEvent } = this.props;
        const conditions = patient.getConditions();
        return (
            <div className="patient-summary-panel">
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col sm={6}>
                                <SummaryHeader
                                    photo={patient.getMostRecentPhoto()}
                                    patientName={patient.getName()}
                                    mrn={patient.getMRN()}
                                    dateOfBirth={patient.getPersonOfRecord().dateOfBirth}
                                    age={patient.getAge()}
                                    administrativeSex={patient.getPersonOfRecord().administrativeGender}
                                    address={patient.getCurrentHomeAddress()} />
                            </Col>

                            <Col sm={6}>
                                <Row start="xs">
                                    <Col sm={6} id="clinicalEventSelector">
                                        <ClinicalEventSelection
                                            possibleClinicalEvents={this.props.possibleClinicalEvents}
                                            clinicalEvent={clinicalEvent}
                                            setFullAppState={this.props.setFullAppState} 
                                        />
                                    </Col>

                                    <Col sm={6} className="condition">
                                        <ConditionSelection
                                            conditions={conditions}
                                            setFullAppState={this.props.setFullAppState} 
                                        />
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

PatientSummaryPanel.propTypes = {
    patient: PropTypes.object,
    setFullAppState: PropTypes.func.isRequired
};

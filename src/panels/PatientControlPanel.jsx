import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from '../elements/Button';
import SummaryHeader from '../summary/SummaryHeader';
import './PatientControlPanel.css';

class PatientControlPanel extends Component {
    render() {
        const {patient} = this.props;
        const login = (this.props.supportLogin) ? ( <Button style={{color: "#17263f"}}>Dr. X123 Y987</Button> ) : "";
        const firstName = patient.getName().split(' ')[0];
        const patientConditions = this.props.patient ? this.props.patient.getConditions() : [];
        return (
            <div className="patient-control-panel">
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col sm={2}>
                                <Row middle="xs">
                                    <Col sm={12}>
                                        <img src="fluxnotes_logo_color.png" height="40px" width="30px" alt="Flux Notes logo" />
                                        <span className="title">
                                            &nbsp; {this.props.appTitle}
                                        </span>
                                    </Col>
                                    <span className="login">{login}</span>
                                </Row>
                            </Col>

                            <Col sm={7}>
                                <SummaryHeader
                                    patientConditions={patientConditions}
                                    setFullAppState={this.props.setFullAppState}
                                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                                    clinicalEvent={this.props.clinicalEvent}
                                    photo={patient.getMostRecentPhoto()}
                                    patientName={patient.getName()}
                                    mrn={patient.getMRN()}
                                    dateOfBirth={patient.getPersonOfRecord().dateOfBirth.value}
                                    age={patient.getAge()}
                                    administrativeSex={patient.getPersonOfRecord().administrativeGender.value}
                                    address={patient.getCurrentHomeAddress()}
                                    setFullAppState={this.props.setFullAppState}
                                    layout={this.props.layout}
                                />
                            </Col>

                            <Col sm={3}>
                                <Row middle="xs">
                                    <Col sm={2}>
                                    </Col>
                                    <Col sm={1}>
                                        <div className="vertical-divider"></div>
                                    </Col>
                                    <Col sm={9}>
                                        <div className="search-wrapper">
                                            <span className="fa fa-search search-icon"></span>
                                            <Input
                                                id="search"
                                                placeholder={`Search ${firstName}'s Record...`}
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
    setFullAppState: PropTypes.func.isRequired,
    layout: PropTypes.string
};

export default PatientControlPanel;

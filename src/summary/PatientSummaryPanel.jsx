import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

import SummaryHeader from './SummaryHeader';
import ConditionSelection from './ConditionSelection';
import './PatientSummaryPanel.css';

export default class PatientSummaryPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { activeConditionIndex: 0 };
    }

    changeConditionIndex(newIndex) {
        this.setState({ activeConditionIndex: newIndex });
    }

    render() {
        const { patient } = this.props;
        const { activeConditionIndex } = this.state;
        const conditions = patient.getConditions();

        return (
            <div className="patient-summary-panel">
                <Paper className="panel-content">
                    <Grid className="FullApp-content" fluid>
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
                                <ConditionSelection
                                    conditions={conditions}
                                    activeConditionIndex={activeConditionIndex}
                                    changeConditionIndex={this.changeConditionIndex}
                                    setFullAppState={this.props.setFullAppState} />
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

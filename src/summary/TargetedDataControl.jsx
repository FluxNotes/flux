import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ConditionSelection from './ConditionSelection'
import ClinicalEventSelection from './ClinicalEventSelection'
import 'font-awesome/css/font-awesome.min.css';
import './TargetedDataControl.css';

class TargetedDataControl extends Component {

    render() {
        return (
            <div id="condition-summary-section" className="dashboard-panel panel-content">
                <Grid fluid>
                    <Row middle="xs">
                        <Col sm={6}>
                            <h3>Workflow</h3>
                            <ClinicalEventSelection
                                possibleClinicalEvents={this.props.possibleClinicalEvents}
                                clinicalEvent={this.props.appState.clinicalEvent}
                                setFullAppState={this.props.setFullAppState}
                            />
                        </Col>

                        <Col sm={4}>
                            <ConditionSelection
                                conditions={this.props.appState.patient.getConditions()}
                                setFullAppState={this.props.setFullAppState}
                            />
                        </Col>

                        <Col sm={2}>
                            <h3>Data</h3>
                            image1 image2
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

TargetedDataControl.propTypes = {
};

export default TargetedDataControl;

import React, {Component} from 'react';
import ConditionSelection from './ConditionSelection'
import ClinicalEventSelection from './ClinicalEventSelection'
import 'font-awesome/css/font-awesome.min.css';
import './TargetedDataControl.css';

class TargetedDataControl extends Component {

    render() {
         // TODO reformat Workflow-was-Event to drop-down like Condition is
         console.log(this.props.setFullAppState);
        return (
            <div id="condition-summary-section" className="dashboard-panel panel-content">
                <h3>Workflow</h3>
                <ClinicalEventSelection
                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                    clinicalEvent={this.props.appState.clinicalEvent}
                    setFullAppState={this.props.setFullAppState}
                />
                <ConditionSelection 
                    conditions={this.props.appState.patient.getConditions()}
                    setFullAppState={this.props.setFullAppState}
                />
                <h3>Data</h3>
                image1 image2
            </div>
        );
    }
}

TargetedDataControl.propTypes = {
};

export default TargetedDataControl;

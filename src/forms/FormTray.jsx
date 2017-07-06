// React imports
import React, {Component} from 'react';
// Our components
import StagingForm from './StagingForm';
import TemplateForm from './TemplateForm';
import DataCaptureForm from './DataCaptureForm';
// material-ui
import Paper from 'material-ui/Paper';
// Styling
import './FormTray.css';

class FormTray extends Component {
    /*
     need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
     to the correct entry form for the structured field. on exit, set to null.
     */

    render() {
        let panelContent = null;
        if (this.props.withinStructuredField == null) {
            //console.log("FormTray. selectedText = " + this.props.selectedText);

            // When select text in the notes section, change the panel content
            if (this.props.selectedText != null) {

                panelContent = (
                    <DataCaptureForm
                        // Staging Form data
                        onStagingTUpdate={this.props.onStagingTUpdate}
                        onStagingNUpdate={this.props.onStagingNUpdate}
                        onStagingMUpdate={this.props.onStagingMUpdate}
                        onStageUpdate={this.props.onStageUpdate}

                        calculateStage={this.props.calculateStage}

                        tumorSize={this.props.tumorSize}
                        nodeSize={this.props.nodeSize}
                        metastasis={this.props.metastasis}
                        stage={this.props.stage}
                    />
                );

            } else {
                panelContent = (
                    <TemplateForm
                        patient={this.props.patient}
                    />
                );
            }
        } else {

            panelContent = (
                <StagingForm
                    // Update functions
                    onStagingTUpdate={this.props.onStagingTUpdate}
                    onStagingNUpdate={this.props.onStagingNUpdate}
                    onStagingMUpdate={this.props.onStagingMUpdate}
                    onStageUpdate={this.props.onStageUpdate}
                    // Helper functions
                    calculateStage={this.props.calculateStage}
                    // Properties
                    tumorSize={this.props.tumorSize}
                    nodeSize={this.props.nodeSize}
                    metastasis={this.props.metastasis}
                    stage={this.props.stage}
                />
            );
        }
        return (
            <div id="forms-panel" className="dashboard-panel">
                <Paper className="panel-content trio">
                {panelContent}
                </Paper>
            </div>
        )
    }
}

export default FormTray;

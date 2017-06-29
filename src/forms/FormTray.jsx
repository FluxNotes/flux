// React imports
import React, { Component } from 'react';
// Our components
import StagingForm from './StagingForm';
import ProgressionForm from './ProgressionForm';
import TemplateForm from './TemplateForm';
// Styling
import './FormTray.css';

class FormTray extends Component {
  /*
    need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
    to the correct entry form for the structured field. on exit, set to null.
  */

  render() {
    let panelContent = null;
    if (this.props.withinStructuredField === null) {
        panelContent = (
            <TemplateForm />
        );
    } else if (this.props.withinStructuredField === "staging") {
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
    } else if (this.props.withinStructuredField === "progression") { 
        panelContent = (
            <ProgressionForm
                // Update functions
                onProgressionUpdate={this.props.onProgressionUpdate}
                // Properties
                progression={this.props.progression}
            />
        );
    }
    return (
      <div id="forms-panel" className="dashboard-panel">
        {panelContent}
      </div>
    )
  }
}

export default FormTray;

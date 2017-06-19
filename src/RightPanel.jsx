// React imports
import React, { Component } from 'react';
// Our components
import StagingForm from './StagingForm';
import Templates from './Templates';
// Styling
import './RightPanel.css';

class RightPanel extends Component {
  /*
    need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
    to the correct entry form for the structured field. on exit, set to null.
  */

  render() {
    let panelContent = null;
    if (this.props.withinStructuredField == null) {
        panelContent = (
            <Templates />
        );
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
        {panelContent}
      </div>
    )
  }
}

export default RightPanel;

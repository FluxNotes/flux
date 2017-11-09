import React, {Component} from 'react';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import TimelinePanel from '../timeline/TimelinePanel';

import './SummaryPanel.css';

class SummaryPanel extends Component { 
    render () { 
        return (
            <div>
                <h1 className="panel-heading">
                    Condition Summary
                </h1>
                <DataSummaryPanel
                    isWide={this.props.isWide}
                    patient={this.props.appState.patient}
                    condition={this.props.appState.condition}
                    summaryMetadata={this.props.appState.summaryMetadata}
                    onItemClicked={this.props.handleSummaryItemSelected}
                    allowItemClick={true}
                />
                <h1 className="panel-heading">
                    Timeline 
                </h1>
                <TimelinePanel
                    isWide={this.props.isWide}
                    patient={this.props.appState.patient} 
                    condition={this.props.appState.condition}
                />
            </div>
        );
    }
}

export default SummaryPanel;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import TimelinePanel from '../timeline/TimelinePanel';
import './SummaryPanel.css';

class SummaryPanel extends Component { 
    render () { 
        return (
            <div>
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

SummaryPanel.proptypes = { 
    isWide: PropTypes.bool.isRequired,
    possibleClinicalEvents: PropTypes.array.isRequired,
    appState: PropTypes.shape({
        patient: PropTypes.object.isRequired,
        condition: PropTypes.object,
        summaryMetadata: PropTypes.object.isRequired
    }).isRequired,
    itemInserted: PropTypes.func.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired
}

export default SummaryPanel;
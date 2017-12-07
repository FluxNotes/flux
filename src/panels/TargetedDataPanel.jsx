import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TargetedDataSubpanel from '../summary/TargetedDataSubpanel';
import TimelinePanel from '../timeline/TimelinePanel';
import Minimap from '../lib/react-minimap/react-minimap.js';
import '../lib/react-minimap/react-minimap.css'
import TargetedDataControl from '../summary/TargetedDataControl'
import './TargetedDataPanel.css';

class TargetedDataPanel extends Component { 
    render () { 
        // The class associated with 
        const minimapAttribute = "data-test-summary-section";
        return (
            <div>
                <TargetedDataControl
                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                    clinicalEvent={this.props.appState.clinicalEvent}
                    setFullAppState={this.props.setFullAppState}
                    patient={this.props.appState.patient}
                />
                <Minimap 
                    selector={`[${minimapAttribute}]`}
                    className="fitted-panel"
                    titleAttribute={minimapAttribute}
                    width={80}
                    isFullHeight={true}
                >   
                    <div id="summary-subpanel">
                        <div className="summary-section">
                            <TargetedDataSubpanel
                                isWide={this.props.isWide}
                                patient={this.props.appState.patient}
                                condition={this.props.appState.condition}
                                summaryMetadata={this.props.appState.summaryMetadata}
                                onItemClicked={this.props.handleSummaryItemSelected}
                                allowItemClick={true}
                            />
                        </div>
                    </div> 
                </Minimap>
            </div>
        );
    }
}

TargetedDataPanel.proptypes = { 
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

export default TargetedDataPanel;
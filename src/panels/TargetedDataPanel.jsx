import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TargetedDataSubpanel from '../summary/TargetedDataSubpanel';
import Minimap from '../lib/react-minimap/react-minimap.js';
import '../lib/react-minimap/react-minimap.css'
import './TargetedDataPanel.css';

class TargetedDataPanel extends Component { 
    componentWillReceiveProps(nextProps) { 
        if (nextProps.targetedDataPanelSize !== this.props.targetedDataPanelSize) { 
            this.forceUpdate()
        }
    }

    render () { 
        // The css data attribute associated with the minimap
        const minimapAttribute = "data-test-summary-section";
        // const visibility = (this.props.isTargetedDataSubpanelVisible ? "visible" : "hidden")
        // const styles = {
        //     visibility: visibility
        // };
        
        return (
            <div>
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
    appState: PropTypes.shape({
        patient: PropTypes.object.isRequired,
        condition: PropTypes.object,
        summaryMetadata: PropTypes.object.isRequired
    }).isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    isWide: PropTypes.bool.isRequired,
    itemInserted: PropTypes.func.isRequired,
    isTargetedDataSubpanelVisible: PropTypes.bool,
    possibleClinicalEvents: PropTypes.array.isRequired,
}

export default TargetedDataPanel;
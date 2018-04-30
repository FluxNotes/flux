import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TargetedDataSubpanel from '../summary/TargetedDataSubpanel';
import Minimap from '../lib/react-minimap/react-minimap.js';
import '../lib/react-minimap/react-minimap.css'
import './TargetedDataPanel.css';

export default class TargetedDataPanel extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.targetedDataPanelSize !== this.props.targetedDataPanelSize) {
            this.forceUpdate();
        }
    }

    render () {
        // The css data attribute associated with the minimap
        const minimapAttribute = 'data-test-summary-section';
        const shortTitleAttribute = 'data-minimap-short-title';

        return (
            <div className="targeted-data-panel">
                <Minimap
                    selector={`[${minimapAttribute}]`}
                    className="fitted-panel"
                    titleAttribute={minimapAttribute}
                    shortTitleAttribute={shortTitleAttribute}
                    width={80}
                    isFullHeight={true}
                >
                    <div id="summary-subpanel">
                        <div className="summary-section">
                            <TargetedDataSubpanel
                                isWide={this.props.isWide}
                                patient={this.props.appState.patient}
                                condition={this.props.appState.condition}
                                clinicalEvent={this.props.appState.clinicalEvent}
                                summaryMetadata={this.props.summaryMetadata.getMetadata()}
                                allowItemClick={this.props.isNoteViewerEditable}
                                actions={this.props.actions}
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
    }).isRequired,
    actions: PropTypes.array.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    isTargetedDataSubpanelVisible: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
    itemInserted: PropTypes.func.isRequired,
    possibleClinicalEvents: PropTypes.array.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    targetedDataPanelSize: PropTypes.string.isRequired,
}

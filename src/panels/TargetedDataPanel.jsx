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

    moveToSection(sectionName) {
        return this.minimap.moveToSection(sectionName);
    }

    moveToSubsection(sectionName, subsectionName) {
        return this.minimap.moveToSubsection(sectionName, subsectionName);
    }

    moveToSubsectionFromSearch(suggestion) {
        this.moveToSubsection(suggestion.section, suggestion.subsection);
    }
    
    getConditionMetadata() {
        const { condition } = this.props.appState;
        const summaryMetadata = this.props.summaryMetadata.getMetadata();
        let codeSystem, code, conditionMetadata = null;

        if (condition != null) {
            codeSystem = condition.codeSystem;
            code = condition.code;
            conditionMetadata = summaryMetadata[codeSystem + "/" + code];
        }

        if (condition == null || conditionMetadata == null) {
            conditionMetadata = summaryMetadata["default"];
        }

        return conditionMetadata;
    }

    render () {
        // The css data attribute associated with the minimap
        const minimapAttribute = 'data-test-summary-section';
        const shortTitleAttribute = 'data-minimap-short-title';
        const conditionMetadata = this.getConditionMetadata();

        // if (conditionMetadata.sections.length > 1) {
            return (
                <div className="targeted-data-panel">
                    <Minimap
                        selector={`[${minimapAttribute}]`}
                        className="fitted-panel"
                        titleAttribute={minimapAttribute}
                        shortTitleAttribute={shortTitleAttribute}
                        width={80}
                        isFullHeight={true}
                        ref={(minimap) => { this.minimap = minimap; }}
                    >
                        <div id="summary-subpanel">
                            <div className="summary-section">
                                <TargetedDataSubpanel
                                    actions={this.props.actions}
                                    forceRefresh={this.props.forceRefresh}
                                    allowItemClick={this.props.isNoteViewerEditable}
                                    clinicalEvent={this.props.appState.clinicalEvent}
                                    condition={this.props.appState.condition}
                                    isWide={this.props.isWide}
                                    loginUser={this.props.loginUser}
                                    preferenceManager={this.props.preferenceManager}
                                    patient={this.props.appState.patient} 
                                    setForceRefresh={this.props.setForceRefresh}                                                              
                                    conditionMetadata={conditionMetadata}
                                    searchIndex={this.props.searchIndex}
                                    moveToSubsectionFromSearch={this.moveToSubsectionFromSearch.bind(this)}
                                    />
                            </div>
                        </div>
                    </Minimap>
                </div>
            );    
        // } else {
        //     return (
        //         <div className="targeted-data-panel">
        //             <div id="summary-subpanel">
        //                 <div className="summary-section">
        //                     <TargetedDataSubpanel
        //                         actions={this.props.actions}
        //                         forceRefresh={this.props.forceRefresh}
        //                         allowItemClick={this.props.isNoteViewerEditable}
        //                         clinicalEvent={this.props.appState.clinicalEvent}
        //                         condition={this.props.appState.condition}
        //                         isWide={this.props.isWide}
        //                         loginUser={this.props.loginUser}
        //                         patient={this.props.appState.patient} 
        //                         setForceRefresh={this.props.setForceRefresh}                                                              
        //                         conditionMetadata={conditionMetadata}
        //                         searchIndex={this.props.searchIndex}
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     );    
        // }
    }
}

TargetedDataPanel.proptypes = {
    actions: PropTypes.array.isRequired,
    appState: PropTypes.shape({
        patient: PropTypes.object.isRequired,
        clinicalEvent: PropTypes.object.isRequired,
        condition: PropTypes.object,
    }).isRequired,
    forceRefresh: PropTypes.bool,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    isTargetedDataSubpanelVisible: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
    loginUser: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    setForceRefresh: PropTypes.func.isRequired,
    targetedDataPanelSize: PropTypes.string.isRequired,
    searchIndex: PropTypes.object.isRequired,
}

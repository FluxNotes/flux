import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TargetedDataPanel from '../panels/TargetedDataPanel';
import './CompassAppDashboard.css';

export default class CompassAppDashboard extends Component {
    moveTargetedDataPanelToSection = (sectionName) => {
        return this.targetedDataPanel.moveToSection(sectionName);
    }

    moveTargetedDataPanelToSubsection = (sectionName, subsectionName) => {
        return this.targetedDataPanel.moveToSubsection(sectionName, subsectionName);
    }

    render() {
        const targetedDataPanelStyles = {
            "width": '100%',
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };

        return (
            <div id="core-cancer-pilot-dashboard-content" style={{display: "flex"}}>
                <div className="right-border-box" style={targetedDataPanelStyles}>
                    <TargetedDataPanel
                        actions={this.props.actions}
                        forceRefresh={this.props.forceRefresh}
                        appState={this.props.appState}
                        highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                        isNoteViewerEditable={false}
                        isTargetedDataSubpanelVisible={true}
                        isWide={true}
                        loginUser={this.props.loginUser}
                        preferenceManager={this.props.preferenceManager}
                        summaryMetadata={this.props.summaryMetadata}
                        setForceRefresh={this.props.setForceRefresh}
                        targetedDataPanelSize={'100%'}
                        ref={(tdp) => { this.targetedDataPanel = tdp; }}
                        searchIndex={this.props.searchIndex}
                        searchSuggestions={this.props.searchSuggestions}
                        setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                        isAppBlurred={this.props.isAppBlurred}
                        setAppBlur={this.props.setAppBlur}
                    />
                </div>
            </div>
        );
    }
}

CompassAppDashboard.propTypes = {
    actions: PropTypes.array.isRequired,
    appState: PropTypes.object.isRequired,
    dataAccess: PropTypes.object.isRequired,
    forceRefresh: PropTypes.bool,
    loginUser: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    searchSelectedItem: PropTypes.object,
    setForceRefresh: PropTypes.func.isRequired,
    setFullAppStateWithCallback: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    searchIndex: PropTypes.object.isRequired,
    searchSuggestions: PropTypes.array,
    highlightedSearchSuggestion: PropTypes.object
};

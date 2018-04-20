import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TargetedDataPanel from '../panels/TargetedDataPanel';
import NotesPanel from '../panels/NotesPanel';
import './ClinicianDashboard.css';

export default class ClinicianDashboard extends Component {
    constructor() {
        super();

        this.state = {
            targetedDataPanelSize: "default",
            notesPanelSize: "default"
        };
    }

    // Performs any initialization that needs to happen when the component mounts, specifically:
    // - Set layout to the task's default if there's a task and no layout to start.
    componentWillMount = () => {
        const currentClinicalEvent = this.props.appState.clinicalEvent;
        const currentLayout = this.props.appState.layout;

        if (!currentLayout && currentClinicalEvent) {
            this.changeLayoutBasedOnClinicalEvent(currentClinicalEvent);
            this.noteViewerBasedOnClinicalEvent(currentClinicalEvent);
            this.noteEditableBasedOnClinicalEvent(currentClinicalEvent);
        } else if (currentLayout && currentClinicalEvent) {
            this.initializePanelSizesBasedOnLayout(currentLayout);
        }
    }

    // Performs any updates based on changes to the state, specifically:
    // - Updates the layout when the task changes.
    componentWillReceiveProps = (nextProps) => {
        // If the clinical event has changed, update the layout and if the note editor should be viewable and editable
        // based on the clinical event
        if (nextProps.appState.clinicalEvent !== this.props.appState.clinicalEvent) {
            this.changeLayoutBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
            this.noteViewerBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
            this.noteEditableBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
        }
        if (nextProps.appState.layout !== this.props.appState.layout) {
            this.initializePanelSizesBasedOnLayout(nextProps.appState.layout)
        }
    }

    // Updates the layout value based on the current clinical event
    changeLayoutBasedOnClinicalEvent = (clinicalEvent) => {
        switch (clinicalEvent) {
            case "pre-encounter":
                this.props.setFullAppState('layout', "right-collapsed");
                break;
            case "encounter":
                this.props.setFullAppState('layout', "left-collapsed");
                break;
            case "post-encounter":
                this.props.setFullAppState('layout', "split");
                break;
            default:
                this.props.setFullAppState('layout', '');
        }
    }

    // Based on a currentLayout, set a default panel size
    initializePanelSizesBasedOnLayout = (currentLayout) => {
        let newTargetedDataPanelSize = "";
        let newNotesPanelSize = "";
        switch (currentLayout) {
            case "left-collapsed":
                newTargetedDataPanelSize = "25%";
                newNotesPanelSize = "75%";
                break;
            case "right-collapsed":
                newTargetedDataPanelSize = "75%";
                newNotesPanelSize = "25%";
                break;
            case "split":
                newTargetedDataPanelSize = "40%";
                newNotesPanelSize = "60%";
                break;
            default:
                newTargetedDataPanelSize = "40%";
                newNotesPanelSize = "60%";
        }

        this.setState({
            "targetedDataPanelSize": newTargetedDataPanelSize,
            "notesPanelSize": newNotesPanelSize,
        });
    }

    // Based on currentClinicalEvent, determines if a note should be viewed
    noteViewerBasedOnClinicalEvent = (currentClinicalEvent) => {
        switch (currentClinicalEvent) {
            case "pre-encounter":
                this.props.setFullAppState('isNoteViewerVisible', false);
                break;
            case "encounter":
                this.props.setFullAppState('isNoteViewerVisible', true);
                break;
            case "post-encounter":
                this.props.setFullAppState('isNoteViewerVisible', true);
                break;
            default:
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined noteViewerBasedOnClinicalEvent value.`);
                this.props.setFullAppState('isNoteViewerVisible', false);
                return;
        }
    }

    // Based on currentClinicalEvent, determines if a note should be editable
    noteEditableBasedOnClinicalEvent = (currentClinicalEvent) => {
        switch (currentClinicalEvent) {
            case "pre-encounter":
                this.props.setFullAppState('isNoteViewerEditable', false);
                break;
            case "encounter":
                this.props.setFullAppState('isNoteViewerEditable', true);
                break;
            case "post-encounter":
                this.props.setFullAppState('isNoteViewerEditable', true);
                break;
            default:
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined noteEditableBasedOnClinicalEvent value.`);
                this.props.setFullAppState('isNoteViewerEditable', false);
                return;
        }
    }

    // Based on currentLayout, determines if the targetedDataSubpanel should be visible.
    isTargetedDataSubpanelVisible = (currentLayout) => {
        switch (currentLayout) {
            case "left-collapsed":
                return false;
            case "right-collapsed":
                return true;
            case "split":
                return true;
            default:
                // console.warn(`The layout provided, ${currentLayout}, does not have a defined isTargetedDataSubpanelVisibile value.`);
                return true;
        }
    }

    render() {
        const currentLayout = this.props.appState.layout;
        const isNoteViewerVisible = this.props.appState.isNoteViewerVisible;
        const isNoteViewerEditable = this.props.appState.isNoteViewerEditable;

        const targetedDataPanelStyles = {
            "width": this.state.targetedDataPanelSize,
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };
        const notesPanelStyles = {
            "width": this.state.notesPanelSize,
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };

        const isTargetedDataSubpanelVisible = this.isTargetedDataSubpanelVisible(currentLayout);
        const isTargetedDataPanelWide = (parseFloat(this.state.targetedDataPanelSize) > 60);

        return (
            <div id="clinician-dashboard-content" style={{display: "flex"}}>
                <div className="right-border-box" style={targetedDataPanelStyles}>
                    <TargetedDataPanel
                        isWide={isTargetedDataPanelWide}
                        isTargetedDataSubpanelVisible={isTargetedDataSubpanelVisible}
                        isNoteViewerEditable={isNoteViewerEditable}
                        targetedDataPanelSize={this.state.targetedDataPanelSize}
                        {...this.props}
                    />
                </div>
                <div style={notesPanelStyles}>
                    <NotesPanel
                        loginUser={this.props.loginUser}
                        contextManager={this.props.contextManager}
                        errors={this.props.appState.errors}
                        isNoteViewerVisible={isNoteViewerVisible}
                        isNoteViewerEditable={isNoteViewerEditable}
                        itemInserted={this.props.itemInserted}
                        handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                        newCurrentShortcut={this.props.newCurrentShortcut}
                        patient={this.props.appState.patient}
                        documentText={this.props.appState.documentText}
                        openClinicalNote={this.props.appState.openClinicalNote}
                        shortcutManager={this.props.shortcutManager}
                        summaryItemToInsert={this.props.appState.summaryItemToInsert}
                        updateErrors={this.props.updateErrors}
                        updateLayoutOnNewNoteClicked={this.updateLayoutOnNewNoteClicked}
                        currentViewMode={this.props.appState.clinicalEvent}
                        setFullAppState={this.props.setFullAppState}
                        setFullAppStateWithCallback={this.props.setFullAppStateWithCallback}
                        noteClosed={this.props.appState.noteClosed}
                        setOpenClinicalNote={this.props.setOpenClinicalNote}
                        searchSelectedItem={this.props.searchSelectedItem}
                        structuredFieldMapManager={this.props.structuredFieldMapManager}
                        dataAccess={this.props.dataAccess}
                    />
                </div>
            </div>
        );
    }
}

ClinicianDashboard.proptypes = {
    appState: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    dataAccess: PropTypes.object.isRequired,
    handleShortcutUpdate: PropTypes.func.isRequired,
    handleStructuredFieldEntered: PropTypes.func.isRequired,
    handleStructuredFieldExited: PropTypes.func.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    actions: PropTypes.array.isRequired,
    itemInserted: PropTypes.func.isRequired,
    updateErrors: PropTypes.func.isRequired,
    onContextUpdate: PropTypes.func.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    possibleClinicalEvents: PropTypes.array.isRequired,
    setFullAppState: PropTypes.func.isRequired,
    setFullAppStateWithCallback: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    updateLayoutOnNewNoteClicked: PropTypes.func.isRequired,
    currentViewMode: PropTypes.object.isRequired,
    searchSelectedItem: PropTypes.object,
    structuredFieldMapManager: PropTypes.object,
};

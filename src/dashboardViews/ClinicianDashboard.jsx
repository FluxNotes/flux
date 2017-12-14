import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import TargetedDataPanel from '../panels/TargetedDataPanel';
import NotesPanel from '../panels/NotesPanel';
import './ClinicianDashboard.css';

class ClinicianDashboard extends Component { 
    // constructor() { 
    //     super();
    //     // this.possible
    // }

    // Performs any initialization that needs to happen when the component mounts, specifcally: 
    // - Set layout to the task's default if there's a task and no layout to start.
    componentWillMount = () => { 
        if (!this.props.appState.layout && this.props.appState.clinicalEvent) {  
            this.changeLayoutBasedOnClinicalEvent(this.props.appState.clinicalEvent);
        }
    }

    // Performs anyupdates based on changes to the state, specifically: 
    // - Updates the layout when the task changes.
    componentWillReceiveProps = (nextProps) => { 
        if (nextProps.appState.clinicalEvent !== this.props.appState.clinicalEvent) { 
            this.changeLayoutBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
        }
    }

    // Updates the layout value based on the current clinical event
    changeLayoutBasedOnClinicalEvent = (clinicalEvent) => { 
        switch(clinicalEvent) { 
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

    isNoteViewerVisible = (currentClinicalEvent) => { 
        switch(currentClinicalEvent) { 
            case "pre-encounter":
                return false;
            case "encounter":
                return true;
            case "post-encounter":
                return true;
            default: 
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined isNoteViewerVisible value.`);
                return true;
        } 
    }

    isNoteViewerEditable = (currentClinicalEvent) => { 
        switch(currentClinicalEvent) { 
            case "pre-encounter":
                return false;
            case "encounter":
                return true;
            case "post-encounter":
                return true;
            default: 
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined isNoteViewerEditable value.`);
                return true;
        } 
    }

    getPanelDimensions = (currentLayout) => { 
        switch(currentLayout) { 
            case "left-collapsed":
                return {
                    "targetedDataPanelSize" : 3,
                    "notesPanelSize" : 9
                };
            case "right-collapsed":
                return {
                    "targetedDataPanelSize" : 9,
                    "notesPanelSize" : 3
                };
            case "split":
                return {
                    "targetedDataPanelSize" : 4,
                    "notesPanelSize" : 8
                };
            default: 
                console.warn(`The layout provided, ${currentLayout}, does not have defined panelDimensions.`);
                return {
                    "targetedDataPanelSize" : 4,
                    "notesPanelSize" : 8
                };
        }
    }

    isTargetedDataSubpanelVisibile = (currentLayout) => { 
        switch(currentLayout) { 
            case "left-collapsed":
                return false;
            case "right-collapsed":
                return true;
            case "split":
                return true;
            default: 
                console.warn(`The layout provided, ${currentLayout}, does not have a defined isTargetedDataSubpanelVisibile value.`);
                return true;
        }
    }


    render () { 
        const currentClinicalEvent = this.props.appState.clinicalEvent;

        const isNoteViewerVisible = this.isNoteViewerVisible(this.props.appState.clinicalEvent);
        const isNoteViewerEditable = this.isNoteViewerEditable(this.props.appState.clinicalEvent);
        const isTargetedDataSubpanelVisibile = this.isTargetedDataSubpanelVisibile(this.props.appState.layout)
        const panelDimensions = this.getPanelDimensions(this.props.appState.layout);

        return (
            <Row center="xs" id="post-encounter-view-content">
                <Col sm={panelDimensions.targetedDataPanelSize} className="right-border-box">
                    <TargetedDataPanel
                        isWide={false}
                        isTargetedDataSubpanelVisibile={isTargetedDataSubpanelVisibile}
                        {...this.props}
                    />
                </Col>
                <Col sm={panelDimensions.notesPanelSize}>
                    <NotesPanel
                        isNoteViewerVisible={isNoteViewerVisible}
                        isNoteViewerEditable={isNoteViewerEditable}
                        handleSelectionChange={this.props.handleSelectionChange}
                        newCurrentShortcut={this.props.newCurrentShortcut}
                        itemInserted={this.props.itemInserted}
                        summaryItemToBeInserted={this.props.appState.SummaryItemToInsert}
                        patient={this.props.appState.patient}
                        contextManager={this.props.contextManager}
                        shortcutManager={this.props.shortcutManager}
                        updateErrors={this.props.updateErrors}
                        errors={this.props.appState.errors}
                        handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                    />
                </Col>
            </Row>
        );
    }
}

ClinicianDashboard.proptypes = {
    possibleClinicalEvents: PropTypes.array.isRequired,
    dataAccess: PropTypes.object.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    setFullAppState: PropTypes.func.isRequired,
    updateErrors: PropTypes.func.isRequired,
    onContextUpdate: PropTypes.func.isRequired,
    itemInserted: PropTypes.func.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    handleShortcutUpdate: PropTypes.func.isRequired,
    handleStructuredFieldEntered: PropTypes.func.isRequired,
    handleStructuredFieldExited: PropTypes.func.isRequired,
    handleSelectionChange: PropTypes.func.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired
};

export default ClinicianDashboard;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { Row, Col } from 'react-flexbox-grid';
import TargetedDataPanel from '../panels/TargetedDataPanel';
import NotesPanel from '../panels/NotesPanel';
import './ClinicianDashboard.css';

class ClinicianDashboard extends Component { 
    constructor() { 
        super();

        this.state = { 
            targetedDataPanelSize: "default",
            notesPanelSize: "default"
        };
    }

    // Performs any initialization that needs to happen when the component mounts, specifcally: 
    // - Set layout to the task's default if there's a task and no layout to start.
    componentWillMount = () => { 
        const currentClinicalEvent = this.props.appState.clinicalEvent;
        const currentLayout = this.props.appState.layout; 

        if (!currentLayout && currentClinicalEvent) {  
            this.changeLayoutBasedOnClinicalEvent(currentClinicalEvent);
        } else if (currentLayout && currentClinicalEvent) { 
            this.initializePanelSizesBasedOnLayout(currentLayout);
        }
    }

    // Performs anyupdates based on changes to the state, specifically: 
    // - Updates the layout when the task changes.
    componentWillReceiveProps = (nextProps) => { 
        if (nextProps.appState.clinicalEvent !== this.props.appState.clinicalEvent) { 
            this.changeLayoutBasedOnClinicalEvent(nextProps.appState.clinicalEvent);
        }
        if (nextProps.appState.layout !== this.props.appState.layout) {
            console.log('changing layout should result in new default sizes');
            this.initializePanelSizesBasedOnLayout(nextProps.appState.layout)
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

    // Based on a currentLayout, set a default panel size
    initializePanelSizesBasedOnLayout = (currentLayout) => { 
        let newTargetedDataPanelSize = "";
        let newNotesPanelSize = "";
        switch(currentLayout) { 
            case "left-collapsed":
                    newTargetedDataPanelSize = "25%";
                    newNotesPanelSize = "75%";
                    break;
            case "right-collapsed":
                    newTargetedDataPanelSize = "75%";
                    newNotesPanelSize = "25%";
                    break;
            case "split":
                    newTargetedDataPanelSize = "33.33%";
                    newNotesPanelSize = "66.66%";
                    break;
            default: 
                console.warn(`The layout provided, ${currentLayout}, does not have defined panelDimensions.`);
                newTargetedDataPanelSize = "33.33%";
                newNotesPanelSize = "66.66%";
        }   

        this.setState({
            "targetedDataPanelSize" : newTargetedDataPanelSize,
            "notesPanelSize" : newNotesPanelSize,
        });
    }

    // Based on currentClinicalEvent, determines if a 
    noteViewerBasedOnClinicalEvent = (currentClinicalEvent) => { 
        switch(currentClinicalEvent) { 
            case "pre-encounter":
                return false;
            case "encounter":
                return true;
            case "post-encounter":
                return true;
            default: 
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined noteViewerBasedOnClinicalEvent value.`);
                return true;
        } 
    }

    noteEditableBasedOnClinicalEvent = (currentClinicalEvent) => { 
        switch(currentClinicalEvent) { 
            case "pre-encounter":
                return false;
            case "encounter":
                return true;
            case "post-encounter":
                return true;
            default: 
                console.warn(`The task provided, ${currentClinicalEvent}, does not have a defined noteEditableBasedOnClinicalEvent value.`);
                return true;
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
        const currentLayout = this.props.appState.layout; 

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

        console.log(targetedDataPanelStyles)
        console.log(notesPanelStyles)

        const isNoteViewerVisible            = this.noteViewerBasedOnClinicalEvent(currentClinicalEvent);
        const isNoteViewerEditable           = this.noteEditableBasedOnClinicalEvent(currentClinicalEvent);
        const isTargetedDataSubpanelVisibile = this.isTargetedDataSubpanelVisibile(currentLayout);
        // const panelDimensions                = this.getPanelDimensions(currentLayout);

        return (
            <div id="post-encounter-view-content" style={{display: "flex"}}>
                <div className="right-border-box" style={targetedDataPanelStyles}>
                    <TargetedDataPanel
                        isWide={false}
                        isTargetedDataSubpanelVisibile={isTargetedDataSubpanelVisibile}
                        targetedDataPanelSize={this.state.targetedDataPanelSize}
                        {...this.props}
                    />
                </div>
                <div style={notesPanelStyles}>
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
                </div>
            </div>
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
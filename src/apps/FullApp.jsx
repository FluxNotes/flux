import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import DashboardViewManager from '../dashboardViews/DashboardViewManager'
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import SummaryMetadata from '../summary/SummaryMetadata';
import Lang from 'lodash';
import './FullApp.css';

const theme = createMuiTheme({
    palette: {
        primary: { ...lightBlue, A700: '#1384b5' },
        secondary: { ...green, A400: '#00e677' },
        error: red
    }
});

class FullApp extends Component {
    constructor(props) {
        super(props);
        this.possibleClinicalEvents = [
            "pre-encounter", 
            "encounter", 
            "post-encounter"
        ];

        if (Lang.isUndefined(this.props.dataSource)) {
            this.dataAccess = new DataAccess("HardCodedReadOnlyDataSource");
        } else {
            this.dataAccess = new DataAccess(this.props.dataSource);
        }

        //let patient = new Patient();
        let patient = this.dataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
        this.summaryMetadata = new SummaryMetadata();
        this.shortcutManager = new ShortcutManager(this.props.shortcuts);
        this.contextManager = new ContextManager(patient, this.onContextUpdate);

        this.state = {
            patient: patient,
            condition: null,
            clinicalEvent: "post-encounter",
            errors: [],
            SummaryItemToInsert: '',
            selectedText: null,
            summaryMetadata: this.summaryMetadata.getMetadata(),
            contextManager: this.contextManager
        };
    }

    // pass this function to children to set full app global state
    setFullAppState = (state, value) => {
        this.setState({ [state]: value });
    }

    // Updates the context manager in it's state 
    onContextUpdate = () => {
        this.setState({ contextManager: this.contextManager });
    }

    // Update the errors based on the argument provided 
    updateErrors = (errors) => {
        this.setState({ errors });
    }

    // Determines the item to be inserted
    itemInserted = () => {
        this.setState({ SummaryItemToInsert: '' });
    }

    // Given a shortcutClass, a type and an object, create a new shortcut and change errors is needed. 
    newCurrentShortcut = (shortcutC, shortcutType, obj) => {
        let newShortcut = this.shortcutManager.createShortcut(shortcutC, shortcutType, this.handleShortcutUpdate, obj);
        const errors = newShortcut.validateInCurrentContext(this.contextManager);
        if (errors.length > 0) {
            errors.forEach((error) => {
                console.error(error);
            });
            newShortcut = null;
        } else {
            newShortcut.initialize(this.contextManager, shortcutType);
        }
        this.updateErrors(errors);
        return newShortcut;
    }

    // Update shortcuts and update patients accordignly 
    handleShortcutUpdate = (s) =>{
        let p = this.state.patient;
        s.updatePatient(p, this.contextManager);
    }

    // Update the current structured field we're within.
    handleStructuredFieldEntered = (field) => {
        this.setState({
            withinStructuredField: field
        })
    }

    // Update the current structured field to be null
    handleStructuredFieldExited = (field) => {
        this.setState({
            withinStructuredField: null
        })
    }

    // Update the selected text 
    handleSelectionChange = (selectedText) => {
        this.setState({
            selectedText: selectedText
        })
    }

    // Update the summaryitemtoinsert based on the item given
    handleSummaryItemSelected = (item) =>{
        if (item) {
            if (item.shortcut) {
                this.setState({SummaryItemToInsert: `${item.shortcut}[[${item.value}]]`});
            } else if (item.value) {
                this.setState({SummaryItemToInsert: item.value});
            } else {
                this.setState({SummaryItemToInsert: item});
            }
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="FullApp">
                    <DashboardViewManager
                        // App default settings
                        title={this.props.display}
                        supportLogin={true}
                        possibleClinicalEvents={this.possibleClinicalEvents}
                        dataAccess={this.dataAccess}
                        summaryMetadata={this.summaryMetadata}
                        shortcutManager={this.shortcutManager}
                        contextManager={this.contextManager}

                        // State
                        appState={this.state}

                        // Functions
                        setFullAppState={this.setFullAppState}
                        updateErrors={this.updateErrors}
                        onContextUpdate={this.onContextUpdate}
                        itemInserted={this.itemInserted}
                        newCurrentShortcut={this.newCurrentShortcut}
                        handleShortcutUpdate={this.handleShortcutUpdate}
                        handleStructuredFieldEntered={this.handleStructuredFieldEntered}
                        handleStructuredFieldExited={this.handleStructuredFieldExited}
                        handleSelectionChange={this.handleSelectionChange}
                        handleSummaryItemSelected={this.handleSummaryItemSelected}
                    />
                    
                </div>
            </MuiThemeProvider>
        );
    }
}

FullApp.proptypes = { 
    dataSource: PropTypes.string.isRequired,
    shortcuts: PropTypes.array.isRequired, 
    display: PropTypes.string.isRequired
}

export default FullApp;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import DashboardManager from '../dashboard/DashboardManager'
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import SummaryMetadata from '../summary/SummaryMetadata';
import PatientControlPanel from '../panels/PatientControlPanel';
import Lang from 'lodash';
import '../styles/FullApp.css';

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
        this.dashboardManager = new DashboardManager();
        this.shortcutManager = new ShortcutManager(this.props.shortcuts);
        this.contextManager = new ContextManager(patient, this.onContextUpdate);

        this.state = {
            clinicalEvent: "post-encounter",
            condition: null,
            contextManager: this.contextManager,
            errors: [],
            layout: "",
            patient: patient,
            selectedText: null,
            superRole: 'Clinician',
            SummaryItemToInsert: '',
            summaryMetadata: this.summaryMetadata.getMetadata(),
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
    handleSummaryItemSelected = (item, arrayIndex = -1) =>{
        if (item) {
            // calls to this method from the buttons on a ListType pass in 'item' as an array.
            if(Lang.isArray(item) && arrayIndex >= 0){
                this.setState({SummaryItemToInsert: item[arrayIndex]});
            } else if (item.shortcut) {
                this.setState({SummaryItemToInsert: `${item.shortcut}[[${item.value}]]`});
            } else if (item.value) {
                this.setState({SummaryItemToInsert: item.value});
            } else {
                this.setState({SummaryItemToInsert: item});
            }
        }
    }

    render() {
        // Get the Current Dashboard based on superRole of user
        const CurrentDashboard = this.dashboardManager.getDashboardForSuperRole(this.state.superRole);
        return (
            <MuiThemeProvider theme={theme}>
                <div className="FullApp">
                    <div className="FullApp-content">
                        <Grid className="FullApp-content" fluid>
                            <Row center="xs">
                                <Col sm={12}>
                                    <PatientControlPanel
                                        appTitle={this.props.display}
                                        supportLogin={true}
                                        patient={this.state.patient}
                                        possibleClinicalEvents={this.possibleClinicalEvents}
                                        clinicalEvent={this.state.clinicalEvent}
                                        setFullAppState={this.setFullAppState}
                                        layout={this.state.layout}
                                    />
                                </Col>
                            </Row>

                            <CurrentDashboard
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
                        </Grid>
                    </div>
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
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Lang from 'lodash';

import SecurityManager from '../security/SecurityManager';
import DashboardManager from '../dashboard/DashboardManager';
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import SummaryMetadata from '../summary/SummaryMetadata';
import PatientControlPanel from '../panels/PatientControlPanel';
import '../styles/FullApp.css';

const theme = createMuiTheme({
    palette: {
        primary: {...lightBlue, A700: '#1384b5'},
        secondary: {...green, A400: '#00e677'},
        error: red
    }
});

export default class FullApp extends Component {
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
        
        let patientId = DataAccess.DEMO_PATIENT_ID;
        if (props.patientId) {
            patientId = props.patientId;
        }

        let patient = this.dataAccess.getPatient(patientId);
        this.summaryMetadata = new SummaryMetadata();
        this.dashboardManager = new DashboardManager();
        this.shortcutManager = new ShortcutManager(this.props.shortcuts);
        this.contextManager = new ContextManager(patient, this.onContextUpdate);
        this.securityManager = new SecurityManager();

        this.state = {
            clinicalEvent: "pre-encounter",
            condition: null,
            contextManager: this.contextManager,
            errors: [],
            layout: "",
            isNoteViewerVisible: false,
            isNoteViewerEditable: false,
            patient: patient,
            selectedText: null,
            documentText: null,
            loginUser: "",
            superRole: 'Clinician', // possibly add that to security manager too
            summaryItemToInsert: '',
            summaryMetadata: this.summaryMetadata.getMetadata(),
            noteClosed: false,

        };

        /*  actions is a list of actions passed to the visualizers
         *  TODO: Add additional properties that define the criteria in which an action should be available(missing, signed, unsigned, editor open etc...)
         *  Each action has following properties:
         *      type     Indicates the type of action.  Can be 'structured-data' or 'missing-data'
         *      handler  Function defined in FullApp that performs some action when the item is clicked
         *      text     Text to display for this action in the Menu
         *      icon     FontAwesome(?) icon to display
         *      isNoteOpen      Boolean whether note action can happen if note is editable or not
         *      actionCriteria       What criteria this action is avalaible for 
         */
        this.actions = [
            {
                type: "structured-data",
                handler: this.handleSummaryItemSelected,
                text: "Insert $(elementText)",
                icon: "plus",
                isNoteEditable: true,
                actionCriteria: {}

            }
        ]
    }

    // On component mount, grab the username of the logged in user
    componentDidMount() {
        const userProfile = this.securityManager.getUserProfile();

        if (userProfile) {
            this.setState({loginUser: userProfile.getUserName()});
        } else {
            console.error("Login failed");
        }
    }

    // pass this function to children to set full app global state
    setFullAppState = (state, value) => {
        this.setState({[state]: value});
    }

    // Same function as 'setFullAppState' except this function uses a callback
    setFullAppStateWithCallback = (state, callback) => {
        this.setState(state, callback);
    }

    // Updates the context manager in it's state
    onContextUpdate = () => {
        this.setState({contextManager: this.contextManager});
    }

    // Update the errors based on the argument provided
    updateErrors = (errors) => {
        this.setState({errors});
    }

    // Determines the item to be inserted
    itemInserted = () => {
        this.setState({summaryItemToInsert: ''});
    }

    // Given a shortcutClass, a type and an object, create a new shortcut and change errors is needed.
    newCurrentShortcut = (shortcutC, shortcutType, updatePatient = true) => {
        let newShortcut = this.shortcutManager.createShortcut(shortcutC, shortcutType, this.handleShortcutUpdate);
        const errors = newShortcut.validateInCurrentContext(this.contextManager);
        if (errors.length > 0) {
            errors.forEach((error) => {
                console.error(error);
            });
            newShortcut = null;
        } else {
            newShortcut.initialize(this.contextManager, shortcutType, updatePatient);
        }
        this.updateErrors(errors);
        return newShortcut;
    }

    // Update shortcuts and update patients accordingly
    handleShortcutUpdate = (s) => {
        let p = this.state.patient;
        let note = this.state.openClinicalNote;
        s.updatePatient(p, this.contextManager, note);
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
    
    setOpenClinicalNote = (openClinicalNote) => {
        this.setState({
            openClinicalNote: openClinicalNote
        });
    }

    // Update the summaryItemToInsert based on the item given
    handleSummaryItemSelected = (item, arrayIndex = -1) => {
        if (item) {
            if (Lang.isArray(item.value)) item.value = item.value[0];
            // calls to this method from the buttons on a ListType pass in 'item' as an array.
            if (Lang.isArray(item) && arrayIndex >= 0) {
                // If the object to insert has an associated shortcut, is will be an object like {name: x, shortcut: z}
                if(Lang.isObject(item[arrayIndex])){
                    this.setState({ SummaryItemToInsert: `${item[arrayIndex].shortcut}[[${item[arrayIndex].name}]]` });
                } else {
                    this.setState({ SummaryItemToInsert: item[arrayIndex]});
                }
            } else if (item.shortcut) {
                this.setState({ summaryItemToInsert: `${item.shortcut}[[${item.value}]]` });
            } else if (item.value) {
                this.setState({ summaryItemToInsert: item.value });
            } else {
                this.setState({ summaryItemToInsert: item });
            }
        }
    }

    render() {
        // Get the Current Dashboard based on superRole of user
        const CurrentDashboard = this.dashboardManager.getDashboardForSuperRole(this.state.superRole);

        return (
            <MuiThemeProvider theme={theme}>
                <div className="FullApp">
                    <Grid className="FullApp-content" fluid>
                        <Row center="xs">
                            <Col sm={12}>
                                <PatientControlPanel
                                    appTitle={this.props.display}
                                    supportLogin={true}
                                    loginUser={this.state.loginUser}
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
                            loginUser={this.state.loginUser}
                            possibleClinicalEvents={this.possibleClinicalEvents}
                            dataAccess={this.dataAccess}
                            summaryMetadata={this.summaryMetadata}
                            shortcutManager={this.shortcutManager}
                            contextManager={this.contextManager}

                            // State
                            appState={this.state}

                            // Functions
                            setFullAppState={this.setFullAppState}
                            setFullAppStateWithCallback={this.setFullAppStateWithCallback}
                            updateErrors={this.updateErrors}
                            onContextUpdate={this.onContextUpdate}
                            itemInserted={this.itemInserted}
                            newCurrentShortcut={this.newCurrentShortcut}
                            handleShortcutUpdate={this.handleShortcutUpdate}
                            handleStructuredFieldEntered={this.handleStructuredFieldEntered}
                            handleStructuredFieldExited={this.handleStructuredFieldExited}
                            handleSelectionChange={this.handleSelectionChange}
                            handleSummaryItemSelected={this.handleSummaryItemSelected}
                            setOpenClinicalNote={this.setOpenClinicalNote}

                            // Actions
                            actions={this.actions}
                        />
                    </Grid>
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

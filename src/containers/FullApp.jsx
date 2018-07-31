import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Snackbar from 'material-ui/Snackbar';
import Lang from 'lodash';

import SecurityManager from '../security/SecurityManager';
import DashboardManager from '../dashboard/DashboardManager';
import ShortcutManager from '../shortcuts/ShortcutManager';
import StructuredFieldMapManager from '../shortcuts/StructuredFieldMapManager';
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

export class FullApp extends Component {
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
        this.summaryMetadata = new SummaryMetadata(this.setForceRefresh);
        this.dashboardManager = new DashboardManager();
        this.shortcutManager = new ShortcutManager(this.props.shortcuts);
        this.contextManager = new ContextManager(patient, this.onContextUpdate);
        this.securityManager = new SecurityManager();
        this.structuredFieldMapManager = new StructuredFieldMapManager();

        this.state = {
            clinicalEvent: "pre-encounter",
            condition: null,
            contextManager: this.contextManager,
            errors: [],
            layout: "",
            isNoteViewerVisible: false,
            isNoteViewerEditable: false,
            loginUser: "",
            noteClosed: false,
            openClinicalNote: null,
            patient: patient,
            searchSelectedItem: null,
            snackbarOpen: false,
            snackbarMessage: "",
            superRole: 'Clinician', // possibly add that to security manager too
            summaryItemToInsert: '',
            forceRefresh: false
        };

        /*  actions is a list of actions passed to the visualizers
         *  Each action has following properties:
         *      handler          Function defined in FullApp that performs some action when the item is clicked
         *      text             Text to display for this action in the Menu
         *      icon             FontAwesome(?) icon to display
         *      whenToDisplay    Criteria on when to display the action.  Currently has the following properties:
         *                          valueExists          Boolean value indicating whether value should exist.
         *                          existingValueSigned  Boolean value indicating whether value should be signed.  Can be string value "either".
         *                          editableNoteOpen     Boolean value indicating whether note should be open or string "either" if it doesn't matter.
         *                          displayInSubsections Array of strings that define in which subsections the action should be displayed.  Can be left out.
         */
        this.actions = [
            {
                handler: this.handleSummaryItemSelected,
                text: "Insert {elementText}",
                icon: "plus",
                whenToDisplay: {
                    valueExists: true,
                    existingValueSigned: "either",
                    editableNoteOpen: true,
                }
            },
            {
                handler: this.openReferencedNote,
                text: "Open Source Note",
                icon: "sticky-note",
                whenToDisplay: {
                    valueExists: true,
                    existingValueSigned: "either",
                    editableNoteOpen: "either"
                }
            },
            {
                handler: this.addEnrollmentToEditor,
                text: "Enroll patient",
                icon: "check",
                whenToDisplay: {
                    valueExists: true,
                    existingValueSigned: "either",
                    editableNoteOpen: true,
                    displayInSubsections: ["Potential to enroll"],
                    displayForColumns: [0]
                }
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

    setForceRefresh = (value) => {
        this.setFullAppState('forceRefresh', value);
    }

    setNoteViewerEditable = (value) => {
        this.setFullAppState('isNoteViewerEditable', value);
    }

    setLayout = (layoutView) => {
        this.setFullAppState('layout', layoutView);
    }

    setCondition = (condition) => {
        this.setFullAppState('condition', condition)
    }

    setNoteViewerVisible = (value) => {
        this.setFullAppState('isNoteViewerVisible', value);
    }

    setNoteClosed = (value) => {
        this.setFullAppState('noteClosed', value);
    }

    setSearchSelectedItem = (value) => {
        this.setFullAppState('searchSelectedItem', value);
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

    // Given a shortcutClass, a type and an object, create a new shortcut and change errors as needed.
    newCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {

        let newShortcut = this.shortcutManager.createShortcut(shortcutC, shortcutType, this.state.patient, shortcutData, this.handleShortcutUpdate);
        const errors = newShortcut.validateInCurrentContext(this.contextManager);
        if (errors.length > 0) {
            errors.forEach((error) => {
                console.error(error);
            });
            newShortcut = null;
        } else {
            newShortcut.initialize(this.contextManager, shortcutType, updatePatient, shortcutData);
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

    setOpenClinicalNote = (openClinicalNote) => {
        this.setState({
            openClinicalNote: openClinicalNote
        });
    }

    openReferencedNote = (item, arrayIndex = -1) => {
        if (!item.value || !Lang.isArray(item.value) || item.value.length < 3 || Lang.isUndefined(item.value[2])) {
            this.setState({
                snackbarOpen: true,
                snackbarMessage: "No source note available. Information was probably entered into EHR as structured data."
            });
            return;
        }
        const sourceNote = this.state.patient.getEntryFromReference(item);
        this.setOpenClinicalNote(sourceNote);
    }

    // Update the summaryItemToInsert based on the item given
    handleSummaryItemSelected = (item, arrayIndex = -1) => {
        if (item) {
            if (Lang.isArray(item.value)) item.value = item.value[0];
            // calls to this method from the buttons on a ListType pass in 'item' as an array.
            if (Lang.isArray(item) && arrayIndex >= 0) {
                // If the object to insert has an associated shortcut, is will be an object like {name: x, shortcut: z}
                if(Lang.isObject(item[arrayIndex])){
                    this.setState({ summaryItemToInsert: `${item[arrayIndex].shortcut}[[${item[arrayIndex].name}]]` });
                } else {
                    this.setState({ summaryItemToInsert: item[arrayIndex]});
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

    // Enrolls the patient in the selected trial
    addEnrollmentToEditor = (item) => {  
        this.setState({ summaryItemToInsert: `#enrollment #${item.value}`});
    }

    handleSnackbarClose = () => {
        this.setState({ snackbarOpen: false });
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
                                    clinicalEvent={this.state.clinicalEvent}
                                    layout={this.state.layout}
                                    loginUser={this.state.loginUser}
                                    patient={this.state.patient}
                                    possibleClinicalEvents={this.possibleClinicalEvents}
                                    setCondition={this.setCondition}
                                    setLayout={this.setLayout}
                                    setSearchSelectedItem={this.setSearchSelectedItem}
                                    supportLogin={true}
                                />
                            </Col>
                        </Row>

                        <CurrentDashboard
                            // App default settings
                            actions={this.actions}
                            forceRefresh={this.state.forceRefresh}
                            appState={this.state}
                            contextManager={this.contextManager}
                            dataAccess={this.dataAccess}
                            handleShortcutUpdate={this.handleShortcutUpdate}
                            handleSummaryItemSelected={this.handleSummaryItemSelected}
                            itemInserted={this.itemInserted}
                            loginUser={this.state.loginUser}
                            newCurrentShortcut={this.newCurrentShortcut}
                            onContextUpdate={this.onContextUpdate}
                            possibleClinicalEvents={this.possibleClinicalEvents}
                            searchSelectedItem={this.state.searchSelectedItem}
                            setNoteClosed={this.setNoteClosed}
                            setNoteViewerEditable={this.setNoteViewerEditable}
                            setNoteViewerVisible={this.setNoteViewerVisible}
                            setForceRefresh={this.setForceRefresh}
                            setFullAppStateWithCallback={this.setFullAppStateWithCallback}
                            setLayout={this.setLayout}
                            setOpenClinicalNote={this.setOpenClinicalNote}
                            setSearchSelectedItem={this.setSearchSelectedItem}
                            shortcutManager={this.shortcutManager}
                            structuredFieldMapManager={this.structuredFieldMapManager}
                            summaryMetadata={this.summaryMetadata}
                            updateErrors={this.updateErrors}
                        />

                        <Snackbar
                            anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
                            autoHideDuration={3000}
                            onClose={this.handleSnackbarClose}
                            open={this.state.snackbarOpen}
                            message={this.state.snackbarMessage}
                        />
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

FullApp.proptypes = {
    dataSource: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    shortcuts: PropTypes.array.isRequired,
};

// these props are used for dispatching actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // TODO: add actions
  }, dispatch);
}

// these props come from the application's state when it is started
function mapStateToProps(state) {
  return {
    // TODO: add state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FullApp);

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
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Lang from 'lodash';

import SecurityManager from '../security/SecurityManager';
import DashboardManager from '../dashboard/DashboardManager';
import ShortcutManager from '../shortcuts/ShortcutManager';
import StructuredFieldMapManager from '../shortcuts/StructuredFieldMapManager';
import ContextManager from '../context/ContextManager';
import DataAccess from '../dataaccess/DataAccess';
import SummaryMetadata from '../summary/SummaryMetadata';
import PatientControlPanel from '../panels/PatientControlPanel';
import SearchIndex from '../patientControl/SearchIndex';

import '../styles/FullApp.css';

const theme = createMuiTheme({
    palette: {
        primary: {...lightBlue, A700: '#1384b5'},
        secondary: {...green, A400: '#00e677'},
        error: red
    }
});

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      boxShadow: 'black',
      padding: 8,
    };
  }

export class FullApp extends Component {
    constructor(props) {
        super(props);
        window.fluxnotes_app = this;
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

        this.summaryMetadata = new SummaryMetadata(this.setForceRefresh);
        this.dashboardManager = new DashboardManager();
        this.shortcutManager = new ShortcutManager(this.props.shortcuts);
        this.securityManager = new SecurityManager();
        this.structuredFieldMapManager = new StructuredFieldMapManager();
        this.searchIndex = new SearchIndex();

        this.state = {
            clinicalEvent: "pre-encounter",
            condition: null,
            contextManager: this.contextManager,
            errors: [],
            layout: "",
            isNoteViewerVisible: false,
            isNoteViewerEditable: false,
            isModalOpen: false,
            modalTitle: '',
            modalContent: '',
            loginUser: {},
            noteClosed: false,
            openClinicalNote: null,
            openSourceNoteEntryId: null,
            patient: null,
            searchSelectedItem: null,
            snackbarOpen: false,
            snackbarMessage: "",
            summaryItemToInsert: '',
            summaryItemToInsertSource: '',
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
                textfunction: this.nameSourceAction,
                isdisabled: this.sourceActionIsDisabled,
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

    loadPatient(patientId) {
        let patient = this.dataAccess.getPatient(patientId);
        this.contextManager = new ContextManager(patient, this.onContextUpdate);
        this.setState({patient: patient})
    }

    componentWillMount() {
        this.loadPatient(this.props.patientId);
        const userProfile = this.securityManager.getDemoUser(this.props.clinicianId);
        if (userProfile) {
            this.setState({loginUser: userProfile});
        } else {
            console.error("Login failed");
        }
    }

    receive_command(commandType, data) {
        if (commandType === 'navigate_targeted_data_panel') {
            const sectionName = data.section;
            const subsectionName = data.subsection;
            return this.dashboard.moveTargetedDataPanelToSubsection(sectionName, subsectionName);
        } else if (commandType === 'insert-structured-phrase') {
            return this.dashboard.insertStructuredPhraseInCurrentNote(data, "command");
        } else {
            return "Unknown command type: " + commandType;
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
        this.setState({summaryItemToInsert: '', summaryItemToInsertSource: ''});
    }

    // Given a shortcutClass, a type and an object, create a new shortcut and change errors as needed.
    newCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true, source) => {

        let newShortcut = this.shortcutManager.createShortcut(shortcutC, shortcutType, this.state.patient, shortcutData, this.handleShortcutUpdate);
        newShortcut.setSource(source);
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

    setOpenSourceNoteEntryId = (openSourceNoteEntryId) => {
        this.setState({ openSourceNoteEntryId });
    }

    sourceActionIsDisabled = (element) => {
        if (element.source) {
            return false;
        }
        return true;
    }

    nameSourceAction = (element) => {
        if (element.source) {
            return (element.source.note ? "Open Source Note" : "View Source");
        }
        return "No source information";
    }

    openReferencedNote = (item, itemLabel) => {
        if (!item.source) {
            this.setState({
                snackbarOpen: true,
                snackbarMessage: "No source information or note available."
            });
            return;
        }

        // if item.source.note is defined, open the referenced note
        if (item.source.note) {
            const sourceNote = this.state.patient.getEntryFromReference(item.source.note);

            this.setState({
                openClinicalNote: sourceNote,
                openSourceNoteEntryId: item.source.entryId,
            });
        } else {
            const labelForItem = itemLabel; // (Lang.isArray(itemLabel) ? itemLabel[0] : itemLabel );
            const title = "Source for " + (labelForItem === item.value ? labelForItem : labelForItem + " of " + item.value);
            this.setState({
                isModalOpen: true,
                modalTitle: title,
                modalContent: item.source
            });
        }
    }

    // Update the summaryItemToInsert based on the item given
    handleSummaryItemSelected = (item, arrayIndex = -1, source = undefined) => {
        if (item) {
            let newStateValues;
            if (Lang.isArray(item.value)) item.value = item.value[0];
            // calls to this method from the buttons on a ListType pass in 'item' as an array.
            if (Lang.isArray(item) && arrayIndex >= 0) {
                // If the object to insert has an associated shortcut, is will be an object like {name: x, shortcut: z}
                if(Lang.isObject(item[arrayIndex])){
                    newStateValues = { summaryItemToInsert: `${item[arrayIndex].shortcut}[[${item[arrayIndex].name}]]` };
                } else {
                    newStateValues = { summaryItemToInsert: item[arrayIndex] };
                }
            } else if (item.shortcut) {
                newStateValues = { summaryItemToInsert: `${item.shortcut}[[${item.value}]]` };
            } else if (item.value) {
                newStateValues = { summaryItemToInsert: item.value };
            } else {
                newStateValues = { summaryItemToInsert: item };
            }
            if (!Lang.isUndefined(source)) {
                newStateValues["summaryItemToInsertSource"] = source;
            }
            this.setState(newStateValues);
        }
    }

    // Enrolls the patient in the selected trial
    addEnrollmentToEditor = (item) => {
        this.setState({ summaryItemToInsert: `#enrollment #${item.value}`, summaryItemToInsertSource: 'Targeted Data Panel action'});
    }

    handleSnackbarClose = () => {
        this.setState({ snackbarOpen: false });
    }

    handleModalClose = () => {
        this.setState({ isModalOpen: false });
    }

    moveTargetedDataPanelToSubsection = (sectionName, subsectionName) => {
        return this.dashboard.moveTargetedDataPanelToSubsection(sectionName, subsectionName);
    }

    render() {
        // Get the Current Dashboard based on superRole of user
        const CurrentDashboard = this.dashboardManager.getDashboardForSuperRole(this.state.loginUser.getSuperRole());

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
                                    loginUsername={this.state.loginUser.getUserName()}
                                    patient={this.state.patient}
                                    possibleClinicalEvents={this.possibleClinicalEvents}
                                    setCondition={this.setCondition}
                                    setLayout={this.setLayout}
                                    setSearchSelectedItem={this.setSearchSelectedItem}
                                    supportLogin={true}
                                    searchIndex={this.searchIndex}
                                    moveTargetedDataPanelToSubsection={this.moveTargetedDataPanelToSubsection}
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
                            handleSummaryItemSelected={this.handleSummaryItemSelected}
                            itemInserted={this.itemInserted}
                            loginUser={this.state.loginUser}
                            newCurrentShortcut={this.newCurrentShortcut}
                            onContextUpdate={this.onContextUpdate}
                            openSourceNoteEntryId={this.state.openSourceNoteEntryId}
                            possibleClinicalEvents={this.possibleClinicalEvents}
                            searchSelectedItem={this.state.searchSelectedItem}
                            setNoteClosed={this.setNoteClosed}
                            setNoteViewerEditable={this.setNoteViewerEditable}
                            setNoteViewerVisible={this.setNoteViewerVisible}
                            setForceRefresh={this.setForceRefresh}
                            setFullAppStateWithCallback={this.setFullAppStateWithCallback}
                            setLayout={this.setLayout}
                            setOpenClinicalNote={this.setOpenClinicalNote}
                            setOpenSourceNoteEntryId={this.setOpenSourceNoteEntryId}
                            setSearchSelectedItem={this.setSearchSelectedItem}
                            shortcutManager={this.shortcutManager}
                            structuredFieldMapManager={this.structuredFieldMapManager}
                            summaryMetadata={this.summaryMetadata}
                            updateErrors={this.updateErrors}
                            ref={(dashboard) => { this.dashboard = dashboard; }}
                            searchIndex={this.searchIndex}
                        />
                        <Modal 
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.isModalOpen}
                            onClose={this.handleModalClose}
                            onClick={this.handleModalClose}
                        >
                            <div style={getModalStyle()} >
                                <Typography id="modal-title">
                                    {this.state.modalTitle}
                                </Typography>
                                <Typography id="simple-modal-description">
                                    {this.state.modalContent}
                                </Typography>
                            </div>
                        </Modal>

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

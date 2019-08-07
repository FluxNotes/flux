import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import { Fade } from 'material-ui';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import Slate from '../lib/slate';

import SecurityManager from '../security/SecurityManager';
import PointOfCareDashboard from '../dashboard/PointOfCareDashboard';
import DataAccess from '../dataaccess/DataAccess';
import SummaryMetadata from '../summary/SummaryMetadata';
import PatientControlPanel from '../panels/PatientControlPanel';
import PreferenceManager from '../preferences/PreferenceManager';
import SearchIndex from '../patientControl/SearchIndex';
import LoadingAnimation from '../loading/LoadingAnimation';
import LoadingError from '../loading/LoadingError';
import ShortcutManager from '../shortcuts/ShortcutManager';
import StructuredFieldMapManager from '../shortcuts/StructuredFieldMapManager';
import ContextManager from '../context/ContextManager';
import FluxCancerDisorderPresent from '../model/oncocore/FluxCancerDisorderPresent';
import FluxNotesEditor from '../notes/FluxNotesEditor';

import '../styles/PointOfCareApp.css';

const theme = createMuiTheme({
    palette: {
        primary: { ...lightBlue, A700: '#1384b5' },
        secondary: { ...green, A400: '#00e677' },
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
        backgroundColor: '#e6e6e6',
        padding: 20,
        boxShadow: '2px 2px 4px -1px black',
    };
}

export class PointOfCareApp extends Component {
    constructor(props) {
        super(props);
        window.fluxnotes_app = this;
        // Determines how long the fade-in v. fade-out animation lasts
        this.timeoutDuration = 1000;

        if (Lang.isUndefined(this.props.dataSource)) {
            this.dataAccess = new DataAccess("HardcodedTabletMcodeV01DataSource");
        } else {
            this.dataAccess = new DataAccess(this.props.dataSource);
        }

        this.summaryMetadata = new SummaryMetadata(this.setForceRefresh);
        this.securityManager = new SecurityManager();
        this.searchIndex = new SearchIndex();
        this.shortcutManager = new ShortcutManager(this.props.shortcuts);
        this.structuredFieldMapManager = new StructuredFieldMapManager();
        this.actions = [
            {
                //change handler to open note modal and follow this down
                handler: this.openReferencedModal,
                textfunction: this.nameSourceAction,
                isdisabled: this.sourceActionIsDisabled,
                icon: "sticky-note",
                whenToDisplay: {
                    valueExists: true,
                    existingValueSigned: "either",
                    editableNoteOpen: "either"
                }
            },
        ];
        this.initialState = Slate.Plain.deserialize('');

        this.state = {
            clinicalEvent: "pre-encounter",
            condition: null,
            errors: [],
            forceRefresh: false,
            highlightedSearchSuggestion: null,
            layout: "right-collapsed",
            loginUser: {},
            // Start the app loading information
            loading: true,
            // If there is an error produced when loading data, it will go here
            loadingErrorObject: null,
            isAppBlurred: false,
            isModalOpen: false,
            modalTitle: '',
            modalContent: '',
            noteClosed: false,
            openClinicalNote: null,
            patient: null,
            searchSelectedItem: null,
            searchSuggestions: [],
            state: this.initialState,
            superRole: 'Clinician' // possibly add that to security manager too
        };
    }

    onContextUpdate = () => {
        this.setState({ contextManager: this.contextManager });
    }

    loadPatient = (patientId) => {
        const DAGestalt = this.dataAccess.getGestalt();
        if (DAGestalt.read.async) {
            this.dataAccess.getPatient(patientId, (patient, error) => {
                this.contextManager = new ContextManager(patient, this.onContextUpdate);
                if (!Lang.isEmpty(error)) console.error(error);
                this.setState({
                    patient,
                    loading: false,
                    loadingError: error
                });
            });
        } else if (DAGestalt.read.sync) {
            // Else, assume sync
            try {
                let patient = this.dataAccess.getPatient(patientId);
                this.contextManager = new ContextManager(patient, this.onContextUpdate);
                this.setState({
                    patient,
                    loading: false
                });
                const cancer = patient.getActiveConditions().find((condition) => {
                    return condition instanceof FluxCancerDisorderPresent;
                });
                this.setCondition(cancer);
            } catch (error) {
                console.error(error);
                this.setState({
                    loading: false,
                    loadingErrorObject: error
                });
            }
        } else {
            const supportedError = Error("Data Source does not support sync or async types read operations -- current gestalt is " + JSON.stringify(DAGestalt));
            console.error(supportedError);
            this.setState({
                loading: false,
                loadingErrorObject: supportedError
            });
        }
        this.contextManager.setIsBlock1BeforeBlock2((key1, offset1, key2, offset2, state) => {
            return key1 < key2;
        });
        this.contextManager.setGetContextsBeforeSelection(() => {
            return [];
        });
    }

    componentDidMount = () => {
        document.title = this.props.display;
        // If we have a custom logoObject, we should update our favicons
        if (!Lang.isEmpty(this.props.logoObject)) {
            const icons = document.querySelectorAll('link[rel="icon"]');
            for (const icon of icons) {
                icon.href = this.props.logoObject.path;
            };
        }
        this.loadPatient(this.props.patientId);
    }

    componentWillMount() {
        const userProfile = this.securityManager.getDemoUser(this.props.clinicianId);
        if (userProfile) {
            this.setState({ loginUser: userProfile });
            this.preferenceManager = new PreferenceManager(userProfile);
        } else {
            console.error("Login failed");
        }
    }

    receive_command(commandType, data) {
        if (commandType === 'navigate_targeted_data_panel') {
            const sectionName = data.section;
            const subsectionName = data.subsection;
            return this.dashboard.moveTargetedDataPanelToSubsection(sectionName, subsectionName);
        } else {
            return "Unknown command type: " + commandType;
        }
    }

    // pass this function to children to set full app global state
    setFullAppState = (state, value) => {
        this.setState({ [state]: value });
    }

    setForceRefresh = (value) => {
        this.setFullAppState('forceRefresh', value);
    }

    setCondition = (condition) => {
        this.setFullAppState('condition', condition);
    }

    setLayout = (layoutView) => {
        console.error("No layout change allowed");
    }

    setSearchSelectedItem = (value) => {
        this.setFullAppState('searchSelectedItem', value);
    }

    // Same function as 'setFullAppState' except this function uses a callback
    setFullAppStateWithCallback = (state, callback) => {
        this.setState(state, callback);
    }

    setHighlightedSearchSuggestion = (suggestion) => {
        this.setState({
            highlightedSearchSuggestion: suggestion
        });
    }

    sourceActionIsDisabled = (element) => {
        if (!element.source || element.source.sourceMessage === "") {
            return true;
        }
        return false;
    }

    nameSourceAction = (element) => {
        if (element.source) {
            return (element.source.note ? "Open Source Note" : (element.source.link ? "View Source Attachment" : (element.source.sourceMessage !== "" ? "View Source" : "No Source information")));
        }
        return "No source information";
    }

    getNoteModalStyle = () => {
        if (this.state.openClinicalNote !== null) {
            return {
                width: '50%',
                height: '75%',
            };
        }
        else {
            return {};
        }
    }

    openReferencedModal = (item, itemLabel) => {
        if (item.source.link) {
            window.open(`${item.source.link}`);
        }
        // if item.source.note is defined, open the referenced note
        else if (item.source.note) {
            const sourceNote = this.state.patient.getEntryFromReference(item.source.note);
            this.setState({
                openClinicalNote: sourceNote,
                isModalOpen: true,
            });
        } else {
            const labelForItem = itemLabel; // (Lang.isArray(itemLabel) ? itemLabel[0] : itemLabel );
            const title = "Source for " + (labelForItem === item.value ? labelForItem : labelForItem + " of " + item.value);
            this.setState({
                openClinicalNote: null,
                isModalOpen: true,
                modalTitle: title,
                modalContent: item.source.sourceMessage
            });
        }
    }

    handleModalClose = () => {
        this.setState({ isModalOpen: false });
    }

    moveTargetedDataPanelToSubsection = (sectionName, subsectionName) => {
        return this.dashboard.moveTargetedDataPanelToSubsection(sectionName, subsectionName);
    }

    setSearchSuggestions = (suggestions) => {
        this.setState({ searchSuggestions: suggestions });
    }

    setAppBlur = (isAppBlurred) => {
        this.setState({ isAppBlurred });
    }

    onContextUpdate = () => {
        this.setState({ contextManager: this.contextManager });
    }

    renderLoadingInformation = () => {
        // Note well: The renders below fade in or out based on state of the loading in the app
        // We define a loading error as occuring when:
        // - The app has no patient
        // - The app is not loading
        const isSomeError = Lang.isEmpty(this.state.patient) && !this.state.loading;
        if (this.state.loading || isSomeError) { // don't render div if we aren't loading and we don't have an error
            return (
                <div>
                    <LoadingAnimation
                        loading={this.state.loading}
                        timeoutDuration={this.timeoutDuration}
                    />
                    <LoadingError
                        isSomeError={isSomeError}
                        loadingError={this.state.loadingError}
                        timeoutDuration={this.timeoutDuration}
                    />
                </div>
            );
        } else {
            return "";
        }
    }

    // Update shortcuts and update patients accordingly
    handleShortcutUpdate = (s) => {
        let p = this.state.patient;
        let note = this.state.openClinicalNote;
        s.updatePatient(p, this.contextManager, note);
    }

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
        return newShortcut;
    }

    closeNote = () => {
        this.handleModalClose();
    }

    openClinicalNote = () => {
        const content = this.state.openClinicalNote ? this.state.openClinicalNote.content : "";
        const contextManager = this.contextManager ? this.contextManager : {};
        const patient = this.state.patient ? this.state.patient : {};

        return (
            // adds the clinical note modal style to the clinical note along with the normal modal style
            <div style={Object.assign(getModalStyle(), this.getNoteModalStyle())} >
                <FluxNotesEditor
                    // the following are required in order for FluxNotesEditor to run or it will cause the application to crash
                    closeNote={this.closeNote}
                    contextManager={contextManager}
                    contextTrayItemToInsert={content}
                    isNoteViewerEditable={false}
                    newCurrentShortcut={this.newCurrentShortcut}
                    patient={patient}
                    saveNote={() => { }}
                    searchIndex={this.searchIndex}
                    selectedNote={this.state.openClinicalNote}
                    shortcutManager={this.shortcutManager}
                    shouldEditorContentUpdate={true}
                    structuredFieldMapManager={this.structuredFieldMapManager}
                    updatedEditorNote={this.state.openClinicalNote}
                    updateLocalDocumentText={() => { }}
                    updateNoteAssistantMode={() => { }}
                    updateContextTrayItemToInsert={() => { }}
                    // thes following props are marked as required props by FluxNotesEditor
                    arrayOfPickLists={[]}
                    changeShortcutType={() => { }}
                    currentViewMode={""}
                    errors={[]}
                    handleUpdateEditorWithNote={() => { }}
                    itemInserted={() => { }}
                    noteAssistantMode={""}
                    selectedPickListOptions={[]}
                    setLayout={() => { }}
                    setNoteViewerEditable={() => { }}
                    setUndoTemplateInsertion={() => { }}
                    shouldUpdateShortcutType={true}
                    shouldRevertTemplate={true}
                    summaryItemToInsert={""}
                    updateErrors={() => { }}
                    updateSelectedNote={() => { }}
                />
            </div>
        );
    }

    openSourceModal = () => {
        return (
            <div style={getModalStyle()}>
                <div className='header'>
                    <span className='close-div' onClick={this.handleModalClose}>
                        <FontAwesome className='close-button' name='times' />
                        <div className='close-text'> Close </div>
                    </span>
                    <Typography id="modal-title">
                        {this.state.modalTitle}
                    </Typography>
                </div>
                <Typography id="simple-modal-description">
                    {this.state.modalContent.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        );
                    })}
                </Typography>
            </div>
        );
    }



    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className={(this.state.loading || this.state.loadingErrorObject) ? "PointOfCareApp-content loading-background" : "PointOfCareApp-content"}>
                    <Grid fluid>
                        <Row center="xs">
                            <Col sm={12}>
                                <PatientControlPanel
                                    appTitle={this.props.display}
                                    clinicalEvent={this.state.clinicalEvent}
                                    dataAccess={this.dataAccess}
                                    highlightedSearchSuggestion={this.state.highlightedSearchSuggestion}
                                    isAppBlurred={this.state.isAppBlurred}
                                    isTablet={true}
                                    layout={this.state.layout}
                                    loadPatient={this.loadPatient}
                                    loginUsername={this.state.loginUser.getUserName()}
                                    logoObject={this.props.logoObject}
                                    moveTargetedDataPanelToSubsection={this.moveTargetedDataPanelToSubsection}
                                    patient={this.state.patient}
                                    possibleClinicalEvents={[]}
                                    setCondition={this.setCondition}
                                    setHighlightedSearchSuggestion={this.setHighlightedSearchSuggestion}
                                    setLayout={this.setLayout}
                                    setSearchSelectedItem={this.setSearchSelectedItem}
                                    supportLogin={true}
                                    searchIndex={this.searchIndex}
                                    setSearchSuggestions={this.setSearchSuggestions}
                                />
                            </Col>
                        </Row>
                        {this.renderLoadingInformation()}
                        <Fade in={!this.state.loading} timeout={this.timeoutDuration} style={{paddingLeft: '12px'}}>
                            <div>
                                {!Lang.isNull(this.state.patient) &&
                                    <PointOfCareDashboard
                                        // App default settings
                                        actions={this.actions}
                                        shortcutManager={this.shortcutManager}
                                        structuredFieldMapManager={this.structuredFieldMapManager}
                                        contextManager={this.contextManager}
                                        forceRefresh={this.state.forceRefresh}
                                        appState={this.state}
                                        onContextUpdate={this.onContextUpdate}
                                        dataAccess={this.dataAccess}
                                        highlightedSearchSuggestion={this.state.highlightedSearchSuggestion}
                                        loginUser={this.state.loginUser}
                                        loadPatient={this.loadPatient}
                                        patient={this.state.patient}
                                        preferenceManager={this.preferenceManager}
                                        searchSelectedItem={this.state.searchSelectedItem}
                                        setForceRefresh={this.setForceRefresh}
                                        setFullAppStateWithCallback={this.setFullAppStateWithCallback}
                                        setHighlightedSearchSuggestion={this.setHighlightedSearchSuggestion}
                                        setSearchSelectedItem={this.setSearchSelectedItem}
                                        summaryMetadata={this.summaryMetadata}
                                        ref={(dashboard) => { this.dashboard = dashboard; }}
                                        searchIndex={this.searchIndex}
                                        searchSuggestions={this.state.searchSuggestions}
                                        isAppBlurred={this.state.isAppBlurred}
                                        setAppBlur={this.setAppBlur}
                                        isTablet={true}
                                    />
                                }
                            </div>
                        </Fade>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.isModalOpen}
                            onClose={this.handleModalClose}
                        >
                            {this.state.openClinicalNote ? this.openClinicalNote() : this.openSourceModal()}
                        </Modal>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

PointOfCareApp.propTypes = {
    dataSource: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    logoObject: PropTypes.shape({
        path: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
        width: PropTypes.string,
        height: PropTypes.string
    })
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

export default connect(mapStateToProps, mapDispatchToProps)(PointOfCareApp);

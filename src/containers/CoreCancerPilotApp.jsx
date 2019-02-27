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
import { Fade } from 'material-ui';
import Lang from 'lodash';
import Reference from '../model/Reference';

import SecurityManager from '../security/SecurityManager';
import CoreCancerPilotDashboard from '../dashboard/CoreCancerPilotDashboard';
import DataAccess from '../dataaccess/DataAccess';
import CoreCancerPilotSummaryMetadata from '../summary/CoreCancerPilotSummaryMetadata';
import PatientControlPanel from '../panels/PatientControlPanel';
import PreferenceManager from '../preferences/PreferenceManager';
import SearchIndex from '../patientControl/SearchIndex';
import LoadingAnimation from '../loading/LoadingAnimation';
import LoadingError from '../loading/LoadingError';

import '../styles/CoreCancerPilotApp.css';

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

export class CoreCancerPilotApp extends Component {
    constructor(props) {
        super(props);
        window.fluxnotes_app = this;
        // Determines how long the fade-in v. fade-out animation lasts
        this.timeoutDuration = 1000;

        if (Lang.isUndefined(this.props.dataSource)) {
            this.dataAccess = new DataAccess("HardCodedReadOnlyDataSource");
        } else {
            this.dataAccess = new DataAccess(this.props.dataSource);
        }

//        this.summaryMetadata = new SummaryMetadata(this.setForceRefresh);
        this.summaryMetadata = new CoreCancerPilotSummaryMetadata(this.setForceRefresh);
        this.securityManager = new SecurityManager();
        this.searchIndex = new SearchIndex();

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
            snackbarOpen: false,
            snackbarMessage: "",
            superRole: 'Clinician' // possibly add that to security manager too
        };
    }

    loadPatient(patientId) {
        const DAGestalt = this.dataAccess.getGestalt();
        if (DAGestalt.read.async) { 
            this.dataAccess.getPatient(patientId, (patient, error) => { 
                if (!Lang.isEmpty(error)) console.error(error)
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
                this.setState({
                    patient,
                    loading: false
                });
            } catch (error) {
                console.error(error)
                this.setState({
                    loading: false,
                    loadingErrorObject: error
                });
            }
        } else { 
            const supportedError = Error("Data Source does not support sync or async types read operations -- current gestalt is " + JSON.stringify(DAGestalt))
            console.error(supportedError)
            this.setState({
                loading: false, 
                loadingErrorObject: supportedError
            });
        }
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
            this.setState({loginUser: userProfile});
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
        this.setState({[state]: value});
    }

    setForceRefresh = (value) => {
        this.setFullAppState('forceRefresh', value);
    }

    setCondition = (condition) => {
        this.setFullAppState('condition', condition)
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
        if (element.source) {
            return false;
        }
        return true;
    }

    nameSourceAction = (element) => {
        if (element.source) {
            return (element.source instanceof Reference ? "Open Source Note" : "View Source");
        }
        return "No source information";
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

    setSearchSuggestions = (suggestions) => {
        this.setState({ searchSuggestions: suggestions })
    }

    setAppBlur = (isAppBlurred) => {
        this.setState({ isAppBlurred });
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
            )
        } else {
            return "";
        }
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className={(this.state.loading || this.state.loadingErrorObject) ? "FullApp-content loading-background" : "FullApp-content"}>
                    <Grid fluid>
                        <Row center="xs">
                            <Col sm={12}>
                                <PatientControlPanel
                                    appTitle={this.props.display}
                                    clinicalEvent={this.state.clinicalEvent}
                                    highlightedSearchSuggestion={this.state.highlightedSearchSuggestion}
                                    isAppBlurred={this.state.isAppBlurred}
                                    layout={this.state.layout}
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
                        <Fade in={!this.state.loading} timeout={this.timeoutDuration}>
                            <div>
                                {!Lang.isNull(this.state.patient) &&
                                    <CoreCancerPilotDashboard
                                        // App default settings
                                        actions={[]}
                                        forceRefresh={this.state.forceRefresh}
                                        appState={this.state}
                                        dataAccess={this.dataAccess}
                                        highlightedSearchSuggestion={this.state.highlightedSearchSuggestion}
                                        loginUser={this.state.loginUser}
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
                                    />
                                }
                            </div>
                        </Fade>
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

CoreCancerPilotApp.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CoreCancerPilotApp);

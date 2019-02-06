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
import Reference from '../model/Reference';

import SecurityManager from '../security/SecurityManager';
import CoreCancerPilotDashboard from '../dashboard/CoreCancerPilotDashboard';
import DataAccess from '../dataaccess/DataAccess';
import CoreCancerPilotSummaryMetadata from '../summary/CoreCancerPilotSummaryMetadata';
import PatientControlPanel from '../panels/PatientControlPanel';
import PreferenceManager from '../preferences/PreferenceManager';
import SearchIndex from '../patientControl/SearchIndex';

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
            highlightedSearchSuggestion: null,
            layout: "right-collapsed",
            isModalOpen: false,
            modalTitle: '',
            modalContent: '',
            loginUser: {},
            noteClosed: false,
            openClinicalNote: null,
            patient: null,
            searchSelectedItem: null,
            snackbarOpen: false,
            snackbarMessage: "",
            superRole: 'Clinician', // possibly add that to security manager too
            forceRefresh: false,
            searchSuggestions: [],
            isAppBlurred: false
        };
    }

    loadPatient(patientId) {
        let patient = this.dataAccess.getPatient(patientId);
        this.setState({patient: patient})
    }

    componentDidMount = () => {
        document.title = this.props.display;
    }

    componentWillMount() {
        this.loadPatient(this.props.patientId);
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

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="FullApp">
                    <Grid className="FullApp-content" fluid>
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
    logoObject: PropTypes.object
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
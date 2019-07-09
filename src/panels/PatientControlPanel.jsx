import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Lang from 'lodash';
import PatientSearch from '../patientControl/PatientSearch';
import ConditionSelection from '../summary/ConditionSelection';
import FontAwesome from 'react-fontawesome';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar } from 'material-ui/List';
import moment from 'moment';
import _ from 'lodash';

import SummaryHeader from '../summary/SummaryHeader';
import './PatientControlPanel.css';

class PatientControlPanel extends Component {
    constructor(props) {
        super(props);
        this.defaultLogoObject = {
            path: 'fluxnotes_logo_color.png',
            altText: 'Flux Notes logo',
            width: '30px',
            height: '40px'
        };
        this.state = {
            isModalOpen: false
        };
        this.isTablet = props.isTablet;
        this.dataAccess = props.dataAccess;
    }

    getLogoObject = () => {
        const { logoObject } = this.props;
        return Object.assign({}, this.defaultLogoObject, logoObject);
    }

    renderFluxNotesLogo = () => {
        const login = (this.props.supportLogin) ? this.props.loginUsername : "";
        const logoObject = this.getLogoObject();
        return (
            <div>
                <img src={logoObject.path} height={logoObject.height} width={logoObject.width} alt={logoObject.altText} />
                <div className="logo-accompaniment">
                    <span className="title"> {this.props.appTitle}</span>
                    <span className="login">{login}</span>
                </div>
            </div>
        );
    }

    // Render the patient-summary information iff we have a patient
    renderSummaryHeader = () => {
        const { patient } = this.props;
        const patientConditions = patient ? patient.getConditions() : [];

        if (Lang.isEmpty(patient)) {
            return;
        } else {
            return (
                <SummaryHeader
                    address={patient.getCurrentHomeAddress()}
                    administrativeSex={patient.getGender()}
                    age={patient.getAge()}
                    clinicalEvent={this.props.clinicalEvent}
                    dateOfBirth={patient.getDateOfBirth()}
                    layout={this.props.layout}
                    mrn={patient.getMRN()}
                    patientConditions={patientConditions}
                    patientName={patient.getName()}
                    photo={patient.getMostRecentPhoto()}
                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                    setCondition={this.props.setCondition}
                    setLayout={this.props.setLayout}
                />
            );
        }
    }
    renderSelectPatientArrow = () => {
        if (this.isTablet) {
            return (
                <div onClick={() => this.openModal()}>
                    <FontAwesome className='fas fa-angle-double-down' name='down-arrow' />
                </div>);
        }
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    fillModal = () => {
        const patientList = this.dataAccess.dataSource.getListOfPatients();
        let futureAppTimes = [];
        const pics = {};
        const secondaries = {};
        patientList.forEach((patient) => {
            const name = patient.person.name;
            const pic = patient.person.photographicImage;
            pics[name] = pic;
            //gathering appointment times
            const allEncounters = patient.getEncountersChronologicalOrder();
            allEncounters.forEach((encounter) => {
                const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY hh:mm");
                if (appTime.date() === moment().date()) {
                    let patientAndTime = {};
                    patientAndTime[appTime.format('hh:mm')] = name;
                    futureAppTimes.push(patientAndTime);
                }
            });
            const sortByTime = (date1, date2) => {
                const moment1 = new moment(Object.keys(date1)[0], "DD MMM YYYY hh:mm");
                const moment2 = new moment(Object.keys(date2)[0], "DD MMM YYYY hh:mm");
                if (moment1 < moment2) {
                    return -1;
                }
                if (moment1 > moment2) {
                    return 1;
                }
                return 0;
            };
            futureAppTimes.sort(sortByTime);
            //patient descriptions
            let timeSinceLast = 'first visit';
            if (patient.getPreviousEncounter() !== undefined) {
                let lastSeen = patient.getPreviousEncounter().expectedPerformanceTime;
                lastSeen = new moment(lastSeen, "DD MMM YYYY");
                timeSinceLast = 'last seen: ' + lastSeen.fromNow();
            }
            // const noteStarted = '3 hours';
            // let description = 'last seen: ' + timeSinceLast + ' \n note started ' + noteStarted + ' ago';
            // const secondary = description.split('\n').map((item, i) => <p key={i} style={{ margin: '0px' }}>{item}</p>);
            const secondary = timeSinceLast;
            secondaries[name] = secondary;
        });
        return futureAppTimes.map((app, key) => {
            const name = Object.values(app)[0];
            const pic = pics[name];
            const secondary = secondaries[name];
            let time = Object.keys(app)[0];
            console.log(time);
            return <ListItem key={key}>
                <ListItemText primary={time} />
                <ListItemIcon><img alt='' src={pic} style={{ width: '100px', height: '100px' }}></img></ListItemIcon>
                <ListItemText primary={name} secondary={secondary} className='modal-description'/>
            </ListItem>;
        })


    }
    handleClose = () => {
        this.setState({ isModalOpen: false });
    }
    getModalStyle() {
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
    // Render renderConditionSelectAndSearch iff we have a patient to render
    renderConditionSelectAndSearch = () => {
        const { patient } = this.props;
        const patientConditions = patient ? patient.getConditions() : [];
        if (Lang.isEmpty(patient)) {
            return;
        } else {
            return (
                <Row bottom="xs" className="vertical-divider">
                    <Col xs={12} lg={6}>
                        <div id="condition-selection-container">
                            <ConditionSelection
                                conditions={patientConditions}
                                setCondition={this.props.setCondition}
                            />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <PatientSearch
                            highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                            moveTargetedDataPanelToSubsection={this.props.moveTargetedDataPanelToSubsection}
                            patient={this.props.patient}
                            setSearchSelectedItem={this.props.setSearchSelectedItem}
                            searchIndex={this.props.searchIndex}
                            setSearchSuggestions={this.props.setSearchSuggestions}
                            setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                        />
                    </Col>
                </Row>
            );
        }
    }
    renderModal = () => {
        if (this.isTablet) {
            return <Modal
                aria-labelledby='simple-modal-title'
                open={this.state.isModalOpen}
                onClose={this.handleClose}
            >
                <div style={this.getModalStyle()} className='modal'>
                    <p className='modal-header'>UPCOMING APPOINTMENTS</p>
                    <hr />
                    <List>
                        {this.fillModal()}
                    </List>
                </div>
            </Modal>;
        };
    }
    render() {
        const disabledClassName = this.props.isAppBlurred ? 'content-disabled' : '';
        return (
            <div className={`patient-control-panel ${disabledClassName}`}>
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col xs={3} lg={2} className='logo-title-column'>
                                {this.renderFluxNotesLogo()}
                            </Col>
                            <Col xs={4} md={4} lg={3} className="summary-header-column">
                                {this.renderSummaryHeader()}
                            </Col>
                            <Col xs={1} lg={1}>
                                {this.renderSelectPatientArrow()}
                            </Col>
                            <Col xs={4} md={5} lg={6}>
                                {this.renderConditionSelectAndSearch()}
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
                {this.renderModal()}
            </div>

        );
    }
}

PatientControlPanel.propTypes = {
    appTitle: PropTypes.string.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    isAppBlurred: PropTypes.bool,
    isTablet: PropTypes.bool,
    layout: PropTypes.string,
    logoObject: PropTypes.shape({
        path: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
        width: PropTypes.string,
        height: PropTypes.string
    }),
    patient: PropTypes.object,
    possibleClinicalEvents: PropTypes.array.isRequired,
    setCondition: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    supportLogin: PropTypes.bool.isRequired,
    searchIndex: PropTypes.object.isRequired,
    setSearchSuggestions: PropTypes.func,
};

export default PatientControlPanel;




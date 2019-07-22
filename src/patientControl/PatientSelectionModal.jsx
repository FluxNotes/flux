import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon, ListSubheader } from 'material-ui/List';
import Button from 'material-ui/Button';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from 'react-flexbox-grid';


import './PatientSelectionModal.css';

class PatientSelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: this.props.isModalOpen,
            hovered: null,
            day: moment(),
            isToday: true,
        };

        this.pastAppTimes = [];
        this.futureAppTimes = [];
        const patientList = this.props.dataAccess.dataSource.getListOfPatients();
        this.currentPatientViewed = patientList[patientList.length - 1].person.entryInfo.shrId;
    }

    fillModal = () => {
        this.pastAppTimes = [];
        this.futureAppTimes = [];
        const { dataAccess } = this.props;
        const patientList = dataAccess.dataSource.getListOfPatients();
        patientList.forEach((patient) => {
            const name = patient.person.name;
            const pic = patient.person.photographicImage;
            const shrId = patient.person.entryInfo.shrId;
            const allEncounters = patient.getEncountersChronologicalOrder();
            allEncounters.forEach((encounter) => {
                const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
                if (appTime.isSame(this.state.day, 'day')) {
                    const description = this.buildPatientDescription(encounter, patient);
                    if (appTime.isBefore(moment())) {
                        this.pastAppTimes.push({ time: appTime.format('hh:mm a'), description: description, name: name, pic: pic, shrId: shrId });
                    } else {
                        this.futureAppTimes.push({ time: appTime.format('hh:mm a'), description: description, name: name, pic: pic, shrId: shrId });
                    }
                }
            });
        });
        return (<div>
            <div className='sticky-header'>
                <p className='modal-header'>APPOINTMENTS</p>
                <hr className='section-divider' />
            </div>
            <div style={{ minHeight: '403px' }}>
                {this.buildLists('past')}
                {this.buildLists('future')}
            </div>
        </div>);
    }

    buildLists(relTime) { //relTime will be 'past' or 'future'
        const relTimeAppTimes = relTime === 'past' ? this.pastAppTimes : this.futureAppTimes;
        relTimeAppTimes.sort((app1, app2) => {
            const moment1 = new moment(app1.time, "hh:mm a"); //only looking at times because all dates are on today anyway
            const moment2 = new moment(app2.time, "hh:mm a");
            if (moment1.isBefore(moment2)) {
                return -1;
            }
            if (moment1.isAfter(moment2)) {
                return 1;
            }
            return 0;
        });
        return relTimeAppTimes.map((listItem, key) => {
            let hovered = '';
            let viewing = '';
            if (this.state.hovered === key + listItem.shrId + relTime) hovered = 'hovered-list-item';
            if (listItem.shrId === this.currentPatientViewed) viewing = 'patient-being-viewed';
            return (<ListItem
                className={`${hovered} ${viewing} list-item`}
                key={key}
                onMouseEnter={() => { this.setState({ hovered: key + listItem.shrId + relTime }); }}
                onMouseLeave={() => { this.setState({ hovered: null }); }}
                onClick={() => { this.switchPatients(listItem.shrId); }}
            >
                <ListItemText primary={listItem.time} className='app-time' style={{ minHeight: '100px' }} />
                <ListItemIcon><img alt='' src={listItem.pic} style={{ width: '100px', height: '100px', marginRight: '0px' }}></img></ListItemIcon>
                <ListItemText primary={listItem.name} secondary={listItem.description} className='modal-description' />
            </ListItem>);
        });
    }

    switchPatients = (shrId) => {
        this.handleClose();
        this.props.loadPatient(shrId);
        this.setState({ hovered: null });
        this.currentPatientViewed = shrId;
    }

    buildPatientDescription = (encounter, patient) => {
        let timeSinceLast = 'first visit';
        const encounterMom = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
        if (patient.getPreviousEncounter() !== undefined) {
            const lastSeen = new moment(patient.getPreviousEncounter().expectedPerformanceTime, "DD MMM YYYY HH:mm");
            const practitioner = encounter.practitioner ? encounter.practitioner : 'unknown';
            timeSinceLast = 'last seen ' + lastSeen.fromNow() + ' by ' + practitioner;
        }
        if (encounterMom.isAfter(moment().subtract(1, 'h')) && encounterMom.isBefore(moment())) { //if the appointment started less than an hour ago
            timeSinceLast = 'In progress encounter';
        }
        // For future implementation of "note started" feature:
        // const noteStarted = '3 hours';
        // let description = 'last seen: ' + timeSinceLast + ' \n note started ' + noteStarted + ' ago';
        // const secondary = description.split('\n').map((item, i) => <p key={i} style={{ margin: '0px' }}>{item}</p>);
        return timeSinceLast;
    }

    handleClose = () => {
        this.setState({ day: moment() });
        this.props.handleClose();
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

    changeButtonColor = () => {
        this.setState({ isToday: this.state.day.isSame(moment(), 'day') }); //true if this.state.day is today, otherwise false
    }

    buildControlPanel = () => {
        let todayButtonClass = 'white-button';
        if (!this.state.isToday) {
            todayButtonClass = 'blue-button';
        }
        return (<div className='control-panel'>
            <hr className='section-divider' />
            <Grid fluid >
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={2} className='today-col'>
                        <Button
                            className={`${todayButtonClass} button`}
                            onClick={() => { this.setState({ day: moment() }, () => this.changeButtonColor()); }}>
                            today
                        </Button>
                    </Col>
                    <Col xs={1}>
                        <FontAwesome
                            className='fas fa-angle-left arrow fa-2x clickable'
                            name='left-arrow'
                            onClick={() => { this.setState({ day: this.state.day.subtract(1, 'd') }); this.changeButtonColor(); }}
                        />
                    </Col>
                    <Col xs={1}>
                        <FontAwesome
                            className='fas fa-angle-right arrow fa-2x clickable'
                            name='right-arrow'
                            onClick={() => { this.setState({ day: this.state.day.add(1, 'd') }); this.changeButtonColor(); }}
                        />
                    </Col>
                    <Col xs={5}>
                        <p className='modal-date'>{this.state.day.format("DD MMM YYYY")}</p>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
    render() {
        const { isTablet } = this.props;
        if (isTablet) {
            return (<Modal
                aria-labelledby='simple-modal-title'
                open={this.props.isModalOpen}
                onClose={this.handleClose}
            >
                <div style={this.getModalStyle()} className='modal'>
                    <List className='modal-list'>
                        <ListSubheader><FontAwesome className='fas fa-times clickable' name='close-icon' onClick={this.handleClose} /></ListSubheader>
                        {this.fillModal()}
                        {this.buildControlPanel()}
                    </List>
                </div>
            </Modal>);
        } else {
            return <div></div>;
        }
    }
}
PatientSelectionModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    dataAccess: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    loadPatient: PropTypes.func.isRequired,
};
export default PatientSelectionModal;
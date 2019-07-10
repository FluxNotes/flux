import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import './PatientSelectionModal.css';

class PatientSelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: this.props.isModalOpen
        };
        this.isTablet = this.props.isTablet;
        this.dataAccess = this.props.dataAccess;
        this.secondaries = {};
        this.pics = {};
        this.patientList = this.dataAccess.dataSource.getListOfPatients();
        this.encountersToday = {}; //{name:{entryIds}, name:{entryIds}}
    }
    _sortByTime = (date1, date2) => {
        const moment1 = new moment(Object.keys(date1)[0], "hh:mm a"); //only looking at times because all dates are on today anyway
        const moment2 = new moment(Object.keys(date2)[0], "hh:mm a");
        if (moment1.isBefore(moment2)) {
            return -1;
        }
        if (moment1.isAfter(moment2)) {
            return 1;
        }
        return 0;
    }
    fillModal = () => {
        // const patientList = this.dataAccess.dataSource.getListOfPatients();
        let futureAppTimes = [];
        let pastAppTimes = [];
        this.patientList.forEach((patient) => {
            const name = patient.person.name;
            const pic = patient.person.photographicImage;
            this.pics[name] = pic;
            this.encountersToday[name] = {};
            //gathering appointment times
            const allEncounters = patient.getEncountersChronologicalOrder();
            allEncounters.forEach((encounter) => {
                const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
                if (appTime.isSame(moment(), 'day')) {
                    const entryId = encounter.entryInfo.entryId;
                    const description = this.buildPatientDescription(encounter, patient, name);
                    this.encountersToday[name][entryId] = description;
                    let patientAtTime = {};
                    patientAtTime[appTime.format('hh:mm a')] = name; //formatting it by time only because we already know it's today
                    if (appTime.isBefore(moment())) {
                        pastAppTimes.push(patientAtTime);
                    } else {
                        futureAppTimes.push(patientAtTime);
                    }
                }

            });
            futureAppTimes.sort(this._sortByTime);
            pastAppTimes.sort(this._sortByTime);
            console.log(_.concat(pastAppTimes, futureAppTimes));
            //patient descriptions
        });
        // this.buildPatientDescriptions();
        return <div>
            <p className='modal-header'>PAST APPOINTMENTS</p>
            <hr />
            {this.buildLists(pastAppTimes)}
            <p className='modal-header'>UPCOMING APPOINTMENTS</p>
            <hr />
            {this.buildLists(futureAppTimes)}
        </div>;

    }
    buildLists(AppTimes) {
        return AppTimes.map((app, key) => {
            const name = Object.values(app)[0];
            const secondary = this.secondaries[name];
            let time = Object.keys(app)[0];
            return <ListItem key={key}>
                <ListItemText primary={time} className='app-time' />
                <ListItemIcon><img alt='' src={this.pics[name]} style={{ width: '100px', height: '100px', marginRight: '0px' }}></img></ListItemIcon>
                <ListItemText primary={name} secondary={secondary} className='modal-description' />
            </ListItem>;
        });
    }
    buildPatientDescription = (encounter, patient, name) => {
        // console.log(encounter);
        let timeSinceLast = 'first visit';
        // let secondary = '';
        let encounterTime = encounter.expectedPerformanceTime;
        const encounterMom = new moment(encounterTime, "DD MMM YYYY HH:mm");
        if (patient.getPreviousEncounter() !== undefined) {
            let lastSeen = patient.getPreviousEncounter().expectedPerformanceTime;
            const lastSeenMom = new moment(lastSeen, "DD MMM YYYY HH:mm");
            timeSinceLast = 'last seen: ' + lastSeenMom.fromNow();
        }
        if (encounterMom.isAfter(moment().subtract(1, 'h')) && encounterMom.isBefore(moment())) { //if the appointment started less than an hour ago
            timeSinceLast = 'in progress: began ' + encounterMom.fromNow();
        }
        // if (patient.getPreviousEncounter() !== undefined) {
        //     let lastSeen = patient.getPreviousEncounter().expectedPerformanceTime;
        //     const lastSeenMom = new moment(lastSeen, "DD MMM YYYY HH:mm");
        //     timeSinceLast = 'last seen: ' + lastSeenMom.fromNow();
        //     if (lastSeenMom.isAfter(moment().subtract(1, 'h')) && lastSeenMom.isBefore(moment())) { //if the appointment started less than an hour ago
        //         timeSinceLast = 'in progress: began ' + lastSeenMom.fromNow();
        //     }
        // }
        // secondary = timeSinceLast;
        // const noteStarted = '3 hours';
        // let description = 'last seen: ' + timeSinceLast + ' \n note started ' + noteStarted + ' ago';
        // const secondary = description.split('\n').map((item, i) => <p key={i} style={{ margin: '0px' }}>{item}</p>);
        // this.secondaries[name] = secondary;
        console.log(this.encountersToday);
        // console.log(entryId, secondary);
        return timeSinceLast;
    }
    handleClose = () => {
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
    render() {
        if (this.isTablet) {
            return <Modal
                aria-labelledby='simple-modal-title'
                open={this.props.isModalOpen}
                onClose={this.handleClose}
            >
                <div style={this.getModalStyle()} className='modal'>
                    <FontAwesome className='fas fa-times' name='close-icon' onClick={() => { this.handleClose(); }} />
                    <List>
                        {this.fillModal()}
                    </List>
                </div>
            </Modal>;
        } else {
            return <div></div>;
        }
    }
}
PatientSelectionModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    // dataAccess: PropTypes.DataAccess.isRequired,
};
export default PatientSelectionModal;
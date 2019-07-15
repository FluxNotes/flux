import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
// import _ from 'lodash';

import './PatientSelectionModal.css';

class PatientSelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: this.props.isModalOpen,
            hovered: null,
        };

        this.pics = {};
        this.appsToday = {}; //{name:{entryId:description, etc.}, name:{entryId: description, etc.}}
        this.encountersToday = [];
        this.shrIds = {};
        this.patientInfo = {};
        this.masterPastAppTimes = [];
        this.masterFutureAppTimes = [];
    }

    _sortByTime = (date1, date2) => {
        // MATT: Maybe with new object-y approach, you can avoid Object.keys()[0]. Maybe not, but check if you can
        const moment1 = new moment(date1, "hh:mm a"); //only looking at times because all dates are on today anyway
        const moment2 = new moment(date2, "hh:mm a");
        if (moment1.isBefore(moment2)) {
            return -1;
        }
        if (moment1.isAfter(moment2)) {
            return 1;
        }
        return 0;
    }
    fillModal = () => {
        this.masterPastAppTimes.length = 0;
        this.masterFutureAppTimes.length = 0;
        const { dataAccess } = this.props;
        const patientList = dataAccess.dataSource.getListOfPatients();
        patientList.forEach((patient) => {
            const pastAppTimes = {};
            const futureAppTimes = {};
            const name = patient.person.name;
            const pic = patient.person.photographicImage;
            const shrId = patient.person.entryInfo.shrId;
            const allEncounters = patient.getEncountersChronologicalOrder();
            allEncounters.forEach((encounter) => {
                const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
                if (appTime.isSame(moment(), 'day')) {
                    const entryId = encounter.entryInfo.entryId;
                    const description = this.buildPatientDescription(encounter, patient);
                    if (appTime.isBefore(moment())) {
                        pastAppTimes[entryId] = { time: appTime.format('hh:mm a'), description: description };
                        this.masterPastAppTimes.push({ time: appTime.format('hh:mm a'), description: description, name: name, pic: pic, shrId: shrId });
                    } else {
                        futureAppTimes[entryId] = { time: appTime.format('hh:mm a'), description: description };
                        this.masterFutureAppTimes.push({ time: appTime.format('hh:mm a'), description: description, name: name, pic: pic, shrId: shrId });
                    }
                }
            });
            this.patientInfo[shrId] = { name: name, pic: pic, pastAppTimes: pastAppTimes, futureAppTimes: futureAppTimes };
        });
        return (<div>
            <p className='modal-header'>PAST APPOINTMENTS</p>
            <hr />
            {this.buildLists('past')}
            <p className='modal-header'>UPCOMING APPOINTMENTS</p>
            <hr />
            {this.buildLists('future')}
        </div>);
    }
    // fillModal = () => {
    //     const { dataAccess } = this.props;
    //     const patientList = dataAccess.dataSource.getListOfPatients();
    //     this.encountersToday = [];
    //     patientList.forEach((patient) => {
    //         const name = patient.person.name;
    //         const pic = patient.person.photographicImage;
    //         const shrId = patient.person.entryInfo.shrId;
    //         this.shrIds[name] = shrId;
    //         this.pics[name] = pic;
    //         this.appsToday[name] = {};
    //         const newAppsToday = {};
    //         // const futureAppTimes = {};
    //         // const pastAppTimes = {};
    //         //gathering appointment times
    //         const pastTimesArray = [];
    //         const futureTimesArray = [];
    //         const allEncounters = patient.getEncountersChronologicalOrder();
    //         allEncounters.forEach((encounter) => {
    //             const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
    //             if (appTime.isSame(moment(), 'day')) {
    //                 console.log(encounter);
    //                 this.encountersToday.push(encounter);
    //                 const entryId = encounter.entryInfo.entryId;
    //                 const description = this.buildPatientDescription(encounter, patient);
    //                 this.appsToday[name][entryId] = description;
    //                 newAppsToday[entryId] = description;
    //                 const patientAtTime = {};
    //                 // MATT: Try to avoid making arrays where you access specific things like [0] or [1], use an object
    //                 // patientAtTime[entryId]= {time: appTime.format('hh:mm a'), description: description}; //formatting it by time only because we already know it's today
    //                 if (appTime.isBefore(moment())) {
    //                     console.log(appTime);
    //                     pastTimesArray.push(appTime.format('hh:mm a'));
    //                 } else {
    //                     futureTimesArray.push(appTime.format('hh:mm a'));
    //                     // futureAppTimes[entryId]= {time: appTime.format('hh:mm a'), description: description};
    //                 }
    //             }

    //         });
    //         pastTimesArray.sort(this._sortByTime);
    //         futureTimesArray.sort(this._sortByTime);
    //         const pastAppTimes = {};
    //         const futureAppTimes = {};
    //         pastTimesArray.forEach((time) => {
    //         pastAppTimes[entryId] = { time: time, description: description };
    //         });
    //         console.log(pastTimesArray);
    //         futureTimesArray.forEach((time) => {
    //         futureAppTimes[entryId] = { time: time, description: description };
    //         });
    //         this.patientInfo[shrId] = { name: name, pic: pic, pastAppTimes: pastAppTimes, futureAppTimes: futureAppTimes };
    //         // console.log(pastAppTimes, futureAppTimes);

    //         console.log(this.patientInfo);
    //         // futureAppTimes.sort(this._sortByTime);
    //         // pastAppTimes.sort(this._sortByTime);
    //         //patient descriptions
    //     });
    //     // return (<div>
    //     //     <p className='modal-header'>PAST APPOINTMENTS</p>
    //     //     <hr />
    //     //     {this.buildLists(pastAppTimes)}
    //     //     <p className='modal-header'>UPCOMING APPOINTMENTS</p>
    //     //     <hr />
    //     //     {this.buildLists(futureAppTimes)}
    //     // </div>);

    // }

    buildLists(relTime) { //relTime will be 'past' or 'future'
        // const relTimeList = []; //array of appointment times in the format hh:mm a
        const relTimeAppTimes = relTime === 'past' ? this.masterPastAppTimes : this.masterFutureAppTimes;
        return relTimeAppTimes.map((listItem, key) => {
            let hovered = '';
            if (this.state.hovered === key+listItem.shrId) {
                hovered = 'hovered-list-item';
            };

            return (<ListItem
                className={hovered}
                key={key}
                onMouseEnter={() => { this.setState({ hovered: key+listItem.shrId }); }}
                onMouseLeave={() => { this.setState({ hovered: null }); }}
                onClick={() => { this.switchPatients(listItem.shrId); }}
            >
                <ListItemText primary={listItem.time} className='app-time' />
                <ListItemIcon><img alt='' src={listItem.pic} style={{ width: '100px', height: '100px', marginRight: '0px' }}></img></ListItemIcon>
                <ListItemText primary={listItem.name} secondary={listItem.description} className='modal-description' />
            </ListItem>);
        });
        // return Object.values(this.patientInfo).forEach((patient, key) => {
        //     const name = patient.name;
        //     const pic = patient.pic;
        //     // const relTimeAppTimes = relTime === 'past'? patient.pastAppTimes: patient.futureAppTimes; //pastAppTimes or futureAppTimes, depending on whether relTime='past' or 'future'
        //     Object.entries(relTimeAppTimes).forEach((entryId) => { relTimeList.push(entryId[1].time); });
        //     let hovered = '';
        //     if (this.state.hovered === key) {
        //         hovered = 'hovered-list-item';
        //     };
        //     relTimeList.sort(this._sortByTime);

        // const pastList = allPastTimes.map((time) => {
        //     return (<ListItem
        //         className={hovered}
        //         key={key}
        //         onMouseEnter={() => { this.setState({ hovered: key }); }}
        //         onMouseLeave={() => { this.setState({ hovered: null }); }}
        //     // onClick={() => { this.switchPatients(entryId, name); }}
        //     >
        //         <ListItemText primary={time} className='app-time' />
        //         <ListItemIcon><img alt='' src={pic} style={{ width: '100px', height: '100px', marginRight: '0px' }}></img></ListItemIcon>
        //         <ListItemText primary={name} secondary={secondary} className='modal-description' />
        //     </ListItem>);
        // })
        // MATT: Maybe with new object-y approach, you can avoid Object.values()[][]. Maybe not, but check if you can
        // const name = Object.values(app)[0][0];
        // const entryId = Object.values(app)[0][1];
        // const secondary = this.appsToday[name][entryId];
        // let time = Object.keys(app)[0];
        // let hovered = '';
        // MATT: Use shrId instead of name
        //     if (this.state.hovered === (entryId + name)) {
        //         hovered = 'hovered-list-item';
        //     };
        //     return (<ListItem
        //         className={hovered}
        //         key={key}
        //         onMouseEnter={() => { this.setState({ hovered: entryId + name }); }}
        //         onMouseLeave={() => { this.setState({ hovered: null }); }}
        //         onClick={() => { this.switchPatients(entryId, name); }}
        //     >
        //         <ListItemText primary={time} className='app-time' />
        //         <ListItemIcon><img alt='' src={this.pics[name]} style={{ width: '100px', height: '100px', marginRight: '0px' }}></img></ListItemIcon>
        //         <ListItemText primary={name} secondary={secondary} className='modal-description' />
        //     </ListItem>);
        // });
    }

    switchPatients = (shrId) => {
        this.handleClose();
        let theEncounter = Object.keys(this.patientInfo).find((patientId) => {
            return patientId === shrId;
        });
        if (theEncounter) this.props.loadPatient(shrId);
    }

    buildPatientDescription = (encounter, patient) => {
        let timeSinceLast = 'first visit';
        const encounterMom = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
        if (patient.getPreviousEncounter() !== undefined) {
            const lastSeenMom = new moment(patient.getPreviousEncounter().expectedPerformanceTime, "DD MMM YYYY HH:mm");
            timeSinceLast = 'last seen: ' + lastSeenMom.fromNow();
        }
        if (encounterMom.isAfter(moment().subtract(1, 'h')) && encounterMom.isBefore(moment())) { //if the appointment started less than an hour ago
            timeSinceLast = 'in progress: began ' + encounterMom.fromNow();
        }
        // For future implementation of "note started" feature:
        // const noteStarted = '3 hours';
        // let description = 'last seen: ' + timeSinceLast + ' \n note started ' + noteStarted + ' ago';
        // const secondary = description.split('\n').map((item, i) => <p key={i} style={{ margin: '0px' }}>{item}</p>);
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
        const { isTablet } = this.props;
        if (isTablet) {
            return (<Modal
                aria-labelledby='simple-modal-title'
                open={this.props.isModalOpen}
                onClose={this.handleClose}
            >
                <div style={this.getModalStyle()} className='modal'>
                    <FontAwesome className='fas fa-times clickable' name='close-icon' onClick={this.handleClose} />
                    <List>
                        {this.fillModal()}
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
};
export default PatientSelectionModal;
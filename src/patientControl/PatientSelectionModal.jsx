import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import './PatientSelectionModal.css';

// MATT: When a function ends, have a blank newline in between the end } and the next function
/* e.g.

fillModal = () => {

}

nextFunction() {

}
*/
class PatientSelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: this.props.isModalOpen,
            hovered: null,
        };
        // MATT: Maybe you don't need to do this for all the props, and can just access them directly when you need them
        // This is fine for the empty objects and arrays as long as you need to access them accross functions
        this.isTablet = this.props.isTablet;
        this.dataAccess = this.props.dataAccess;
        this.pics = {};

        // MATT: Move patientList to a local variable in fillModal
        this.patientList = this.dataAccess.dataSource.getListOfPatients();

        this.appsToday = {}; //{name:{entryId:description, etc.}, name:{entryId: description, etc.}}
        this.encountersToday = [];
        this.shrIds = {};
    }
    _sortByTime = (date1, date2) => {
        // MATT: Maybe with new object-y approach, you can avoid Object.keys()[0]. Maybe not, but check if you can
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
        // MATT: These can be consts since they are not getting reassigned
        let futureAppTimes = [];
        let pastAppTimes = [];
        this.encountersToday = [];
        this.patientList.forEach((patient) => {
            // MATT: this can be shorthanded:
            // const { name, photographicImage, entryInfo } = patient.person;
            const name = patient.person.name;
            const pic = patient.person.photographicImage;
            const shrId = patient.person.entryInfo.shrId;
            // MATT: I wouldn't uniquely identify stuff by patient name, we want it to be with SHR ID
            // Key things by shrId wherever you can. Suggestion:
            /*
                {
                    "abcabasd-42134234r-casdfcad": {
                        pic: ...,
                        name,
                        appsToday: ...,
                        maybeSomethingElseRelevant: ///
                    }
                }
            */
            this.shrIds[name] = shrId;
            this.pics[name] = pic;
            this.appsToday[name] = {};
            //gathering appointment times
            const allEncounters = patient.getEncountersChronologicalOrder();
            allEncounters.forEach((encounter) => {
                const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY HH:mm");
                if (appTime.isSame(moment(), 'day')) {
                    this.encountersToday.push(encounter);
                    const entryId = encounter.entryInfo.entryId;
                    const description = this.buildPatientDescription(encounter, patient);
                    this.appsToday[name][entryId] = description;
                    // MATT: const
                    let patientAtTime = {};
                    // MATT: Try to avoid making arrays where you access specific things like [0] or [1], use an object
                    patientAtTime[appTime.format('hh:mm a')] = [name, entryId]; //formatting it by time only because we already know it's today
                    if (appTime.isBefore(moment())) {
                        pastAppTimes.push(patientAtTime);
                    } else {
                        futureAppTimes.push(patientAtTime);
                    }
                }

            });
            futureAppTimes.sort(this._sortByTime);
            pastAppTimes.sort(this._sortByTime);
            //patient descriptions
        });
        // MATT: Add ( ) around the div
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
            // MATT: Maybe with new object-y approach, you can avoid Object.values()[][]. Maybe not, but check if you can
            const name = Object.values(app)[0][0];
            const entryId = Object.values(app)[0][1];
            const secondary = this.appsToday[name][entryId];
            let time = Object.keys(app)[0];
            let hovered = '';
            // MATT: Use shrId instead of name
            if (this.state.hovered === (entryId + name)) {
                hovered = 'hovered-list-item';
            };
            // MATT: ( )
            // MATT: Use multiple lines for each prop when line is this long
            return <ListItem className={hovered} key={key} onMouseEnter={() => { this.setState({hovered: entryId + name}); }} onMouseLeave={() => { this.setState({hovered: null}); }} onClick={() => { this.switchPatients(entryId, name); }}>
                <ListItemText primary={time} className='app-time' />
                <ListItemIcon><img alt='' src={this.pics[name]} style={{ width: '100px', height: '100px', marginRight: '0px' }}></img></ListItemIcon>
                <ListItemText primary={name} secondary={secondary} className='modal-description' />
            </ListItem>;
        });
    }
    switchPatients = (entryId, name) => {
        this.handleClose();
        // MATT: Use find instead of map
        /*
        const foundEncounter = this.blahblah.find(e => {
            return entry info's shrtId === the one you care about
        });
        if (foundEncounter) loadPatient
        ^^ this will be the actual encounter if found, and null otherwise
        this should be able to replace map and compact
        */
        let theEncounter = this.encountersToday.map((encounter) => {
            if (encounter.entryInfo.shrId === this.shrIds[name]) {
                return encounter;
            } else {
                return null;
            }
        });
        theEncounter = _.compact(theEncounter)[0];
        this.props.loadPatient(theEncounter.entryInfo.shrId);
    }
    buildPatientDescription = (encounter, patient) => {
        let timeSinceLast = 'first visit';
        // MATT: this can be a const
        // MATT: can combine these into one thing
        let encounterTime = encounter.expectedPerformanceTime;
        const encounterMom = new moment(encounterTime, "DD MMM YYYY HH:mm");
        if (patient.getPreviousEncounter() !== undefined) {
            // MATT: this can be a const/combine
            let lastSeen = patient.getPreviousEncounter().expectedPerformanceTime;
            const lastSeenMom = new moment(lastSeen, "DD MMM YYYY HH:mm");
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
        if (this.isTablet) {
            return <Modal
                aria-labelledby='simple-modal-title'
                open={this.props.isModalOpen}
                onClose={this.handleClose}
            >
                <div style={this.getModalStyle()} className='modal'>
                    {/* MATT: Don't need () => this.handleClose(), could just be onClick={this.handleClose} */}
                    <FontAwesome className='fas fa-times clickable' name='close-icon' onClick={() => { this.handleClose(); }} />
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
    dataAccess: PropTypes.object.isRequired,
};
export default PatientSelectionModal;
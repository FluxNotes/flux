import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import moment from 'moment';
import _ from 'lodash';

import './PatientControlPanel.css';

class PatientSelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.isTablet = props.isTablet;
        this.dataAccess = props.dataAccess;
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
    render = () => {
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
}
export default PatientSelectionModal;
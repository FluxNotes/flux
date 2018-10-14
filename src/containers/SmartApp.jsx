import PreferenceManager from '../preferences/PreferenceManager';
import React from 'react';
import { FullApp } from "./FullApp";
import 'fhirclient';

/*
    App container to display theoretical SMART patient. 
    Upon successful authorization of EHR user, app will handle reading of patient and loads either Hernandez or Ella according to the usermap.
    If user authorization fails or if selected patient is not in the usermap, app will load a fail screen. 
*/

const usermap = {
    // Ms. Buena Abbott maps to Deborah Hernandez
    "099e7de7-c952-40e2-9b4e-0face78c9d80": "788dcbc3-ed18-470c-89ef-35ff91854c7d", 
    // Pok Abbott maps to Ella Ortiz
    "04327b09-4d3a-4c8b-9959-83bc1b358203": "788dcbc3-ed18-470c-89ef-35ff91854c7e"
}

class SmartApp extends FullApp {

    componentWillMount() {
        window.FHIR.oauth2.ready((smart) => {
            smart.user.read().then((user) => {
                const userProfile = this.securityManager.getUserProfile(user);
                if (userProfile) {
                    this.setState({loginUser: userProfile});
                    this.preferenceManager = new PreferenceManager(userProfile);
                } else {
                    console.error("Login failed");
                }
            })
            smart.patient.read().then((patient) => {
                if (usermap[patient.id]) {
                    let patientId = usermap[patient.id];
                    this.loadPatient(patientId);
                    this.setState({loadingReady: true});
                }
                else {
                    this.setState({authorizationFail: true});
                }
                
            })
        
        },
        (error) => {
            this.setState({authorizationFail: true})
        });
    }

    render() {
        if (this.state.authorizationFail) {
            return (<div> Authorization Failed </div>)
        }
        return (this.state.loadingReady) ? (<div>{super.render()}</div>) : (<div>Loading...</div>)
    }

}

export default SmartApp;
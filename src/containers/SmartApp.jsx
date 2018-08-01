import React from 'react';
import { FullApp } from "./FullApp";
import 'fhirclient';

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
                    this.setState({loginUser: userProfile.getUserName()});
                } else {
                    console.error("Login failed");
                }
            })
            smart.patient.read().then((patient) => {
                let patientId = usermap[patient.id];
                this.loadPatient(patientId);
                this.setState({loadingReady: true})
            })
        }); 
    }

    render() {
        if (this.state.loadingReady) {
            return (<div>{super.render()}</div>)
        }
        else {
            return (<div>Loading...</div>)
        }
    }

}

export default SmartApp;
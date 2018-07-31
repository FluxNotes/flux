import React from 'react';
import { FullApp } from "./FullApp";
import 'fhirclient';

class SmartApp extends FullApp {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({authorization: false});
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
                let patientId;
                if (patient.id === "099e7de7-c952-40e2-9b4e-0face78c9d80") {
                    patientId = "788dcbc3-ed18-470c-89ef-35ff91854c7d";
                }
                else if (patient.id === "04327b09-4d3a-4c8b-9959-83bc1b358203") {
                    patientId = "788dcbc3-ed18-470c-89ef-35ff91854c7e";
                }
                this.loadPatient(patientId);
                this.setState({authorizationReady: true})
            })
        }); 
    }

    render() {
        if (this.state.authorizationReady) {
            return (<div>{super.render()}</div>)
        }
        else {
            return (<div>Loading...</div>)
        }
    }

}

export default SmartApp;
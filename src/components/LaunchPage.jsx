import React, { Component } from 'react';
import '../styles/LandingPage.css';
import 'fhirclient';
import launchContext from '../dataaccess/SmartOnFhirLaunchContext.json';

export default class LandingPage extends Component {

    componentWillMount() {
        window.FHIR.oauth2.authorize(launchContext);
    }

    render() {
        return (
            <div className="LandingPage">
                <div className="landing-header">
                    <div className="landing-header-logo">
                        <img src="./fluxnotes_logo_color.png" alt="Flux Notes" className="landing-header-logo-image" />
                        <span className="landing-header-title">Flux Notes</span>
                        <span className="landing-header-trademark">™</span>
                    </div>
                </div>

                <div className="landing-tagline">
                    <div className="landing-tagline-title">
                        Capture and view structured real-world clinical care data
                    </div>

                    <div className="landing-tagline-text">
                        Flux Notes™ is an open source approach to capturing treatment data in a structured form as a
                        clinician authors a clinical note in the preferred narrative form.
                    </div>
                </div>
            </div>
        )
    }
    
}

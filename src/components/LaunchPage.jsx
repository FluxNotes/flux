import React, { Component } from 'react';
import '../styles/LandingPage.css';
import 'fhirclient';

export default class LandingPage extends Component {

    constructor() {
        super();
        window.FHIR.oauth2.authorize({
            "client_id": '6c12dff4-24e7-4475-a742-b08972c4ea27',
            "scope":  "patient/*.read user/*.* openid profile", 
            "redirect_uri": "http://localhost:3000/smart"
        }); 
    
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

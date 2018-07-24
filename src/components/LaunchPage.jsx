import React, { Component } from 'react';
import '../styles/LandingPage.css';
import 'fhirclient';

export default class LandingPage extends Component {
    componentDidMount() {
        window.FHIR.oauth2.authorize({
            "client_id": '6c12dff4-24e7-4475-a742-b08972c4ea27',
            "scope":  "patient/*.read user/*.* openid profile", 
            "redirect_uri": "http://localhost:3000/demo2"
        });
    }

    render() {
        return (
            <div>Loading...</div>
        )
    }
    
}

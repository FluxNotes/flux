import React, {Component} from 'react';
import NavBar from '../nav/NavBar';
import Divider from 'material-ui/Divider';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <NavBar title={this.props.display} supportLogin={false}/>
                <div className="landing-page-content">
                    <h1 className="landing-page-title">Welcome to Flux Notes</h1>
                    
                    <Divider className="divider"/>
                    <h3><img src="./logos/ICARE.png" alt="ICARE Data Study" className="landing-logo" height="22px"></img>ICARE Data Study</h3>
                    <p>
                        Flux Notes supports the ICARE data study capture of treatment data during the
                        authoring of clinical notes. The goal of the ICARE data study is to support the collection of
                        high quality real-world data (RWD) in a way that enables clinical oncology research.
                    </p>
                    
                    <h3><img src="./logos/FluxNotesLogo.png" alt="Flux Notes" className="landing-logo" height="22px"></img>About Flux Notes</h3>
                    <p> 
                        The purpose of Flux Notes Lite is to help clinicians capture disease status and toxicity 
                        information in a structured data format that can be easily analyzed and shared 
                        across multiple clinical care sites.
                    </p>
                    <p>
                        This application provides an easy mechanism for clinicians to generate disease status and toxicity
                        information via an interface and allow them to copy the resulting structured shorthand phrase and
                        paste it into their EHR notes entry.
                    </p>
                    
                    <h3><img src="./logos/SHR.png" alt="SHR" className="landing-logo" height="22px"></img>Standard Health Record</h3>
                    <p>
                        This tool is one of multiple prototypes in development by MITRE with the end goal of providing
                        complete, accurate, and computable records to inform the best care for each individual.
                    </p>
                    <p>
                        This application leverages the <a href="http://standardhealthrecord.org/" target="_blank">
                        SHR (Standard Health Record)</a> format for capturing data.
                    </p>
                    
                    <Divider className="divider"/>
                    <h3>Clinical Trials</h3>
                    <p>
                        For the PATINA clinical trial endpoints, click <a href="/patina">here</a>
                    </p>
                    
                    <Divider className="divider"/>
                    <h3>Partner Organanizations</h3>
                    <p>
                        <img src="./logos/Alliance.png" alt="Alliance for Clinical Trials in Oncology" className="partner-logo" height="50px"></img>
                        <img src="./logos/ASCO.png" alt="American Society of Clinical Oncology" className="partner-logo" height="50px"></img>
                        <img src="./logos/BWH.png" alt="Brigham and Women's Hospital" className="partner-logo" height="50px"></img>
                        <img src="./logos/DanaFarber.png" alt="Dana-Farber Cancer Institute" className="partner-logo" height="50px"></img>
                        <img src="./logos/MITRE.png" alt="MITRE Corporation" className="partner-logo mitre-logo" height="20px"></img>
                    </p>
                </div>
            </div>
        )
    }
}

export default LandingPage;
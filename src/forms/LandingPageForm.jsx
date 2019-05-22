import React, { Component } from 'react';
import './LandingPageForm.css';

export default class LandingPageForm extends Component {
    render() {
        return (
            <div id="landing-page-container">
                <div className="landing-page-about">
                    <h1 className="landing-page-title">About Flux Notes™ Lite</h1>

                    <p>
                        Flux Notes™ Lite supports the ICARE data study capture of disease status and toxicity during the
                        authoring of clinical notes. The purpose of Flux Notes™ Lite is to help clinicians capture disease
                        status and
                        toxicity information in a structured data format that can be easily analyzed and shared across
                        multiple clinical care sites.
                    </p>

                    <p>
                        This application provides an easy mechanism for clinicians to generate disease status and toxicity
                        information via an interface and allow them to copy the resulting structured shorthand phrase and
                        paste it
                        into their EHR notes entry.
                    </p>

                    <p>
                        This tool is one of multiple prototypes in development by MITRE with the end goal of providing
                        complete, accurate, and computable records to inform the best care for each individual.
                    </p>

                    <p>
                        This application leverages the <a href="http://standardhealthrecord.org/" target="_blank" rel="noopener noreferrer">
                        SHR (Standard Health Record)</a> format for capturing data.
                    </p>
                </div>

                <div className="landing-page-using">
                    <h4>Using Flux Notes™ Lite</h4>

                    <ol>
                        <li>
                            From the left panel, select the type of data that you would like to capture
                        </li>

                        <li>
                            A form will be displayed on the right for the selected data type. On this form, choose values
                            related to the data. As values are selected, the copy button on the bottom of the form will show
                            the structured shorthand phrase as it is being built
                        </li>

                        <li>
                            Once you finish entering data, click the copy button to copy the shorthand phrase
                        </li>

                        <li>
                            Paste the phrase into your EHR notes entry
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

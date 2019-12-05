import PreferenceManager from '../preferences/PreferenceManager';
import React from 'react';
import _ from 'lodash';
import DataAccess from '../dataaccess/DataAccess';
import 'fhirclient';
/*
    App container to display theoretical SMART patient.
    Upon successful authorization of EHR user, app will handle reading of patient and loads it.
    If user authorization fails or if selected patient is not in the usermap, app will load a fail screen.
*/
export default function WithSmartData(WrappedAppComponent) {
    return class extends WrappedAppComponent {
        componentDidMount() {
            window.FHIR.oauth2.ready((smart) => {
                smart.user.read().then((user) => {
                    const userProfile = this.securityManager.getUserProfile(user);
                    if (userProfile) {
                        this.setState({loginUser: userProfile});
                        this.preferenceManager = new PreferenceManager(userProfile);

                        // default to the smart data source if none is provided in props
                        if (!this.props.dataSource) {
                            this.dataAccess = new DataAccess("McodeV05SmartOnFhirDataSource");
                            this.loadPatient(smart.patient.id);
                        } else {
                            this.dataAccess = new DataAccess(this.props.dataSource, this.props.dataSourceProps);

                            if (this.props.patientId) {
                                this.loadPatient(this.props.patientId);
                            } else {
                                this.loadPatient(smart.patient.id);
                            }
                        }
                    } else {
                        console.error("Login failed");
                        this.setState({authorizationFail: true});
                    }
                });
            },
            (error) => {
                this.setState({
                    loading: false,
                    loadingErrorObject: error
                });
            });
            // If we have a custom display, we should update the title of the page
            if (!_.isEmpty(this.props.display)) document.title = this.props.display;
            // If we have a custom logoObject, we should update our favicons
            if (!_.isEmpty(this.props.logoObject)) {
                const icons = document.querySelectorAll('link[rel="icon"]');
                for (const icon of icons) {
                    icon.href = this.props.logoObject.path;
                };
            }
        }

        render() {
            if (this.state.authorizationFail) {
                return (<div> Authorization Failed </div>);
            }
            return super.render();
        }
    };
}

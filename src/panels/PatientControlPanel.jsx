import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Lang from 'lodash';
import PatientSearch from '../patientControl/PatientSearch';
import ConditionSelection from '../summary/ConditionSelection';
import FontAwesome from 'react-fontawesome';
import PatientSelectionModal from '../patientControl/PatientSelectionModal.jsx';

import SummaryHeader from '../summary/SummaryHeader';
import './PatientControlPanel.css';

class PatientControlPanel extends Component {
    constructor(props) {
        super(props);
        this.defaultLogoObject = {
            path: 'fluxnotes_logo_color.png',
            altText: 'Flux Notes logo',
            width: '30px',
            height: '40px'
        };
        this.state = {
            isModalOpen: false
        };
    }

    getLogoObject = () => {
        const { logoObject } = this.props;
        return Object.assign({}, this.defaultLogoObject, logoObject);
    }

    renderFluxNotesLogo = () => {
        const login = (this.props.supportLogin) ? this.props.loginUsername : "";
        const logoObject = this.getLogoObject();
        return (
            <div>
                <img src={logoObject.path} height={logoObject.height} width={logoObject.width} alt={logoObject.altText} />
                <div className="logo-accompaniment">
                    <span className="title"> {this.props.appTitle}</span>
                    <span className="login">{login}</span>
                </div>
            </div>
        );
    }

    // Render the patient-summary information iff we have a patient
    renderSummaryHeader = () => {
        const { patient } = this.props;
        const patientConditions = patient ? patient.getConditions() : [];

        if (Lang.isEmpty(patient)) {
            return;
        } else {
            return (
                <SummaryHeader
                    address={patient.getCurrentHomeAddress()}
                    administrativeSex={patient.getGender()}
                    age={patient.getAge()}
                    clinicalEvent={this.props.clinicalEvent}
                    dateOfBirth={patient.getDateOfBirth()}
                    layout={this.props.layout}
                    mrn={patient.getMRN()}
                    patientConditions={patientConditions}
                    patientName={patient.getName()}
                    photo={patient.getMostRecentPhoto()}
                    possibleClinicalEvents={this.props.possibleClinicalEvents}
                    setCondition={this.props.setCondition}
                    setLayout={this.props.setLayout}
                />
            );
        }
    }
    renderSelectPatientArrow = () => {
        if (this.props.isTablet) {
            return (
                <div onClick={() => this.openModal()}>
                    <FontAwesome className='fas fa-angle-double-down clickable' name='down-arrow' />
                </div>);
        }
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    handleClose = () => {
        this.setState({ isModalOpen: false });
    }
    // Render renderConditionSelectAndSearch iff we have a patient to render
    renderConditionSelectAndSearch = () => {
        const { patient } = this.props;
        const patientConditions = patient ? patient.getConditions() : [];
        if (Lang.isEmpty(patient)) {
            return;
        } else {
            return (
                <Row bottom="xs" className="vertical-divider">
                    <Col xs={12} lg={6}>
                        <div id="condition-selection-container">
                            <ConditionSelection
                                conditions={patientConditions}
                                setCondition={this.props.setCondition}
                            />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <PatientSearch
                            highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                            moveTargetedDataPanelToSubsection={this.props.moveTargetedDataPanelToSubsection}
                            patient={this.props.patient}
                            setSearchSelectedItem={this.props.setSearchSelectedItem}
                            searchIndex={this.props.searchIndex}
                            setSearchSuggestions={this.props.setSearchSuggestions}
                            setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                        />
                    </Col>
                </Row>
            );
        }
    }
    render() {
        const disabledClassName = this.props.isAppBlurred ? 'content-disabled' : '';
        return (
            <div className={`patient-control-panel ${disabledClassName}`}>
                <Paper className="panel-content">
                    <Grid fluid>
                        <Row middle="xs">
                            <Col xs={3} md={2} lg={2} className='logo-title-column'>
                                {this.renderFluxNotesLogo()}
                            </Col>
                            <Col xs={4} md={4} lg={3} className="summary-header-column">
                                {this.renderSummaryHeader()}
                            </Col>
                            <Col xs={1} md={1} lg={1}>
                                {this.renderSelectPatientArrow()}
                            </Col>
                            <Col xs={4} md={5} lg={6}>
                                {this.renderConditionSelectAndSearch()}
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
                {this.props.isTablet && <PatientSelectionModal
                    isModalOpen={this.state.isModalOpen}
                    isTablet={this.props.isTablet}
                    dataAccess={this.props.dataAccess}
                    handleClose={this.handleClose}
                    loadPatient={this.props.loadPatient} />}
            </div>

        );
    }
}

PatientControlPanel.propTypes = {
    appTitle: PropTypes.string.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    dataAccess: PropTypes.object,
    isAppBlurred: PropTypes.bool,
    isTablet: PropTypes.bool,
    layout: PropTypes.string,
    loadPatient: PropTypes.func,
    logoObject: PropTypes.shape({
        path: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
        width: PropTypes.string,
        height: PropTypes.string
    }),
    patient: PropTypes.object,
    possibleClinicalEvents: PropTypes.array.isRequired,
    setCondition: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    supportLogin: PropTypes.bool.isRequired,
    searchIndex: PropTypes.object.isRequired,
    setSearchSuggestions: PropTypes.func,
};

export default PatientControlPanel;




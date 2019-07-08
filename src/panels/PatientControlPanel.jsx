import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Lang from 'lodash';
import PatientSearch from '../patientControl/PatientSearch';
import ConditionSelection from '../summary/ConditionSelection';
import FontAwesome from 'react-fontawesome';
import Modal from 'material-ui/Modal';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

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
        this.isTablet = props.isTablet;
        this.dataAccess = props.dataAccess;
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
        if (this.isTablet) {
            return (
                <div onClick={() => this.openModal()}>
                    <FontAwesome className='fas fa-angle-double-down' name='down-arrow' />
                </div>);
        }
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    fillModal = () => {
        const patientList = this.dataAccess.dataSource.getListOfPatients();
        return patientList.map((patient, key) => {
            const name = patient.person.name;
            const pic = patient.person.photographicImage;
            const lastSeen = '14 days';
            const noteStarted = '3 hours';
            const appTime = '11:30';
            console.log(patient);
            return <ListItem key={key}>
                <ListItemIcon><img alt='' src={pic} style={{width: '100px', height: '100px'}}></img></ListItemIcon>
                <ListItemText primary={name} secondary={lastSeen + ' ago'}/>
            </ListItem>;
        }
        );
    }
    handleClose = () => {
        this.setState({ isModalOpen: false });
    }
    getModalStyle() {
        const top = 50;
        const left = 50;
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
            position: 'absolute',
            width: 400,
            backgroundColor: 'white',
            boxShadow: 'black',
            padding: 8,
        };
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
                            <Col xs={3} lg={2} className='logo-title-column'>
                                {this.renderFluxNotesLogo()}
                            </Col>
                            <Col xs={4} md={4} lg={3} className="summary-header-column">
                                {this.renderSummaryHeader()}
                            </Col>
                            <Col xs={1} lg={1}>
                                {this.renderSelectPatientArrow()}
                            </Col>
                            <Col xs={4} md={5} lg={6}>
                                {this.renderConditionSelectAndSearch()}
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
                <Modal
                    aria-labelledby='simple-modal-title'
                    open={this.state.isModalOpen}
                    onClose={this.handleClose}
                >
                    <div style={this.getModalStyle()}>
                        <List component="nav">
                            {this.fillModal()}
                        </List>
                    </div>
                </Modal>
            </div>

        );
    }
}

PatientControlPanel.propTypes = {
    appTitle: PropTypes.string.isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    isAppBlurred: PropTypes.bool,
    isTablet: PropTypes.bool,
    layout: PropTypes.string,
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

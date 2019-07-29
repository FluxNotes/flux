import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
// import ClinicalEventSelection from '../summary/ClinicalEventSelection';
import './SummaryHeader.css';
import FontAwesome from 'react-fontawesome';
import PatientSelectionModal from '../patientControl/PatientSelectionModal.jsx';

class SummaryHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }
    // Returns JSX for the splitViewButton button, highlighed if it's the current layout
    splitViewButton = () => {
        const strokeColor = this.props.layout === "split" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="23px" height="18px" viewBox="0 0 23 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-60" transform="translate(0.000000, 1.000000)" stroke={strokeColor}>
                        <rect id="Rectangle-9-Copy-9" strokeWidth="1.62" x="0.992756992" y="0.676861297" width="20.6576154" height="14.5809512"></rect>
                        <path d="M11.4512101,1.38330078 L11.4512101,15.1328298" id="Path-7" strokeDasharray="3,2"></path>
                        <rect id="Rectangle-9-Copy-13" strokeWidth="1.62" x="0.990803867" y="0.676861297" width="20.6576154" height="14.5809512"></rect>
                    </g>
                </g>
            </svg>
        );
    }

    // Returns JSX for the leftCollapsedViewButton button, highlighed if it's the current layout
    leftCollapsedViewButton = () => {
        const strokeColor = this.props.layout === "left-collapsed" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="23px" height="18px" viewBox="0 0 23 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-61" transform="translate(1.000000, 1.000000)" stroke={strokeColor}>
                        <rect id="Rectangle-9-Copy-11" strokeWidth="1.62" x="0.240803867" y="0.676861297" width="20.6576154" height="14.5809512"></rect>
                        <path d="M5.19876874,1.3828125 L5.19876874,14.8833912" id="Path-7-Copy" fill="#D8D8D8" strokeDasharray="3,2"></path>
                    </g>
                </g>
            </svg>
        );
    }

    // Returns JSX for the rightCollapsedViewButton button, highlighed if it's the current layout
    rightCollapsedViewButton = () => {
        const strokeColor = this.props.layout === "right-collapsed" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-59" transform="translate(1.000000, 1.000000)" stroke={strokeColor}>
                        <rect id="Rectangle-9-Copy-12" strokeWidth="1.62" transform="translate(11.079391, 8.048288) rotate(-180.000000) translate(-11.079391, -8.048288) " x="0.750583031" y="0.7578125" width="20.6576154" height="14.5809512"></rect>
                        <path d="M16.4502336,1.13369865 L16.4502336,14.6342773" id="Path-7-Copy-2" fill="#D8D8D8" strokeDasharray="3,2" transform="translate(16.450234, 7.883988) rotate(-180.000000) translate(-16.450234, -7.883988) "></path>
                    </g>
                </g>
            </svg>
        );
    }

    // Given a newLayout, change FullApp's layout accordingly
    handleLayoutChange = (newLayout) => {
        this.props.setLayout(newLayout);
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    }
    handleClose = () => {
        this.setState({ isModalOpen: false });
    }
    render() {
        const { photo, patientName, mrn, dateOfBirth, age, administrativeSex, address } = this.props;

        const dateOfBirthString = (dateOfBirth) ? `${dateOfBirth} (${age})` : '?';
        const administrativeSexString = (administrativeSex) ? administrativeSex : '?';
        //{address ? address.city.value : ""}, {address ? address.state.value : ""}
        const locationString = (address) ? `${address.city.value}, ${address.state.value}` : '?';
        const tabletPatienInfoSpacing = this.props.isTablet ? 'tablet-patient-info' : '';
        const tabletPatientName = this.props.isTablet ? 'tablet-patient-name' : '';
        return (
            <div id="summary-header">
                <div className="avatar">
                    <Avatar
                        src={photo}
                        size={70}
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "76px",
                            height: "76px"
                        }}
                    />
                </div>
                {this.props.isTablet && <div className="patient-info item">
                    <div className="patient-name-number clickable" onClick={() => this.openModal()}>
                        <span className={`patient-name ${tabletPatientName}`}>{patientName}</span>
                        <FontAwesome className='fas fa-angle-double-down' name='down-arrow' />
                    </div>
                    <div>
                        {mrn && <span className={`patient-mrn no-wrap ${tabletPatienInfoSpacing}`}>{mrn}</span>}
                        <span className={`patient-item no-wrap ${tabletPatienInfoSpacing}`}>DOB: {dateOfBirthString}</span>
                        <span className={`patient-item no-wrap ${tabletPatienInfoSpacing}`}>Admin. Sex: {administrativeSexString}</span>
                        <span className={`patient-item no-wrap ${tabletPatienInfoSpacing}`}>Location: {locationString}</span>
                    </div>
                </div>
                }
                {this.props.isTablet && <PatientSelectionModal
                    isModalOpen={this.state.isModalOpen}
                    isTablet={this.props.isTablet}
                    dataAccess={this.props.dataAccess}
                    handleClose={this.handleClose}
                    loadPatient={this.props.loadPatient} />
                }
                {!this.props.isTablet &&  <div className="patient-info item">
                    <div className="patient-name-number">
                        <span className="patient-name">{patientName}</span>
                        { mrn && <span className="patient-mrn">({mrn})</span> }
                    </div>
                    <div className="patient-item">DOB: <span className="no-wrap">{dateOfBirthString}</span></div>
                    <div className="patient-item">Admin. Sex:  <span>{administrativeSexString}</span></div>
                    <div className="patient-item">Location: <span>{locationString}</span></div>
                </div>}
                {/* TODO: Remove below content, or place patient description back inside an appropriate grid-row-col */}
                {/*                <Grid className="FullApp-content" fluid>
                    <Row middle="xs">
                        <Col sm={12}>
                            <div className="view item">
                             <div>View</div>
                                <span>
                                    <Row middle="xs">
                                        <Col sm={4}>
                                            <Button
                                                className="small-btn"
                                                id="left-collapsed-layout-button"
                                                onClick={() => this.handleLayoutChange('left-collapsed')}
                                            >
                                                {this.leftCollapsedViewButton()}
                                            </Button>
                                        </Col>
                                        <Col sm={4}>
                                            <Button
                                                className="small-btn"
                                                id="split-layout-button"
                                                onClick={() => this.handleLayoutChange('split')}
                                            >
                                                {this.splitViewButton()}
                                            </Button>
                                        </Col>
                                        <Col sm={4}>
                                            <Button
                                                className="small-btn"
                                                id="right-collapsed-layout-button"
                                                onClick={() => this.handleLayoutChange('right-collapsed')}
                                            >
                                                {this.rightCollapsedViewButton()}
                                            </Button>
                                        </Col>
                                    </Row>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Grid>*/}
            </div>
        );
    }
}

SummaryHeader.propTypes = {
    photo: PropTypes.string,
    patientName: PropTypes.string,
    mrn: PropTypes.string,
    dateOfBirth: PropTypes.string,
    age: PropTypes.number,
    administrativeSex: PropTypes.string,
    address: PropTypes.shape({
        city: PropTypes.shape({
            value: PropTypes.string
        }),
        state: PropTypes.shape({
            value: PropTypes.string
        })
    }),
    layout: PropTypes.string,
    setLayout: PropTypes.func.isRequired,
    isTablet: PropTypes.bool,
};

export default SummaryHeader;

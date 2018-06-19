import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from 'material-ui/Avatar';
// import Button from '../elements/Button';
import ConditionSelection from '../summary/ConditionSelection';
// import ClinicalEventSelection from '../summary/ClinicalEventSelection';
import './SummaryHeader.css';

class SummaryHeader extends Component {

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

    render() {
        const { photo, patientName, dateOfBirth, age, administrativeSex, address } = this.props;

        const dateOfBirthString = (dateOfBirth) ? `${dateOfBirth} (${age})` : '?';
        const administrativeSexString = (administrativeSex) ? administrativeSex : '?';
        //{address ? address.city.value : ""}, {address ? address.state.value : ""}
        const locationString = (address) ? `${address.city.value}, ${address.state.value}` : '?'; 
        return (
            <div id="summary-header">
                <Grid className="FullApp-content" fluid>
                    <Row middle="xs">
                        <Col sm={5}>
                            <div className="avatar">
                                <Avatar
                                    src={photo}
                                    size={70}
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        width: "80px",
                                        height: "80px"
                                    }}
                                />
                            </div>
                            &nbsp;
                            <div className="patient-info item">
                                <h1>{patientName}</h1>
                                <h3 className="patient-item">DOB: <span className="no-wrap">{dateOfBirthString}</span></h3>
                                <h3 className="patient-item">Admin. Sex:  <span>{administrativeSexString}</span></h3>
                                <h3 className="patient-item">Location: <span>{locationString}</span></h3>
                            </div>
                        </Col>

                        <Col sm={7}>
                            <Row middle="xs">
                                <Col sm={10}>
                                    <div id="condition-summary-section" className="dashboard-panel panel-content">
                                        <Grid fluid>
                                            <Row middle="xs">
                                                {/* TODO: Add patient toggle */}
                                                <Col sm={12}>
                                                    <ConditionSelection
                                                        conditions={this.props.patientConditions}
                                                        setFullAppState={this.props.setFullAppState}
                                                    />
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </div>
                                </Col>

                                <Col sm={2}>
                                    <div className="view item">
{/*                                        <h3>View</h3>
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
                                        </span>*/}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
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
            value: PropTypes.state
        })
    }),
    setFullAppState: PropTypes.func.isRequired,
    layout: PropTypes.string,
    setLayout: PropTypes.func.isRequired
};

export default SummaryHeader;

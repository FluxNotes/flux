import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from 'material-ui/Avatar';
import Button from '../elements/Button';
import './SummaryHeader.css';

class SummaryHeader extends Component {
    constructor() {
        super();
        this.state = { view: "none" };
    }

    middleView = () => {
        const strokeColor = this.state.view === "middle" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="24px" height="17px" viewBox="0 0 24 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-2-Copy" transform="translate(1.000000, 1.003906)" stroke={strokeColor}>
                        <rect id="Rectangle-9-Copy-9" strokeWidth="1.62" fill="#FFFFFF" x="0.803265598" y="0.176861297" width="20.6576154" height="14.5809512"></rect>
                        <path d="M11.2617188,0.6328125 L11.2617188,14.1333912" id="Path-7"></path>
                    </g>
                </g>
            </svg>
        );
    }

    leftView = () => {
        const strokeColor = this.state.view === "left" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="23px" height="17px" viewBox="0 0 23 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-18" transform="translate(1.000000, 1.000000)" stroke={strokeColor}>
                        <rect id="Rectangle-9-Copy-13" strokeWidth="1.62" fill="#FFFFFF" x="0.0532655978" y="0.176861297" width="20.6576154" height="14.5809512"></rect>
                        <path d="M5.01123047,0.6328125 L5.01123047,14.1333912" id="Path-7-Copy-3" fill="#D8D8D8"></path>
                    </g>
                </g>
            </svg>
        );
    }

    rightView = () => {
        const strokeColor = this.state.view === "right" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="24px" height="17px" viewBox="0 0 24 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-19" transform="translate(1.000000, 1.000000)" stroke={strokeColor}>
                        <rect id="Rectangle-9-Copy-13" strokeWidth="1.62" fill="#FFFFFF" transform="translate(10.891852, 7.548288) rotate(-180.000000) translate(-10.891852, -7.548288) " x="0.563044761" y="0.2578125" width="20.6576154" height="14.5809512"></rect>
                        <path d="M16.2626953,0.882233809 L16.2626953,14.3828125" id="Path-7-Copy-3" fill="#D8D8D8" transform="translate(16.262695, 7.632523) rotate(-180.000000) translate(-16.262695, -7.632523) "></path>
                    </g>
                </g>
            </svg>
        );
    }

    handleViewChange = (view) => {
        this.setState({ view });
    }

    render() {
        const { photo, patientName, mrn, dateOfBirth, age, administrativeSex, address } = this.props;

        return (
            <div id="summary-header">
                <Grid className="FullApp-content" fluid>
                    <Row middle="xs">
                        <Col sm={2}>
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
                        </Col>

                        <Col sm={3}>
                            <div className="name-and-mrn item">
                                <h1>{patientName}</h1>
                                <h3>MRN: {mrn}</h3>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <Row middle="xs">
                                <Col sm={3}>
                                    <div className="date-of-birth item">
                                        <h3>DOB</h3>
                                        <span className="no-wrap">{dateOfBirth} ({age})</span>
                                    </div>
                                </Col>

                                <Col sm={3}>
                                    <div className="administrative-sex item">
                                        <h3>Admin. Sex</h3>
                                        <span>{administrativeSex}</span>
                                    </div>
                                </Col>

                                <Col sm={3}>
                                    <div className="location item">
                                        <h3>Location</h3>
                                        <span>{address ? address.city.value : ""}, {address ? address.state.value : ""}</span>
                                    </div>
                                </Col>
                                
                                <Col sm={3}>
                                    <div className="view item">
                                        <h3>View</h3>
                                        <span>
                                            <Row middle="xs">
                                                <Col sm={4}>
                                                    <Button
                                                        className="small-btn"
                                                        onClick={() => this.handleViewChange('middle')}>
                                                        {this.middleView()}
                                                    </Button>
                                                </Col>
                                                <Col sm={4}>
                                                    <Button
                                                        className="small-btn"
                                                        onClick={() => this.handleViewChange('left')}>
                                                        {this.leftView()}
                                                    </Button>
                                                </Col>
                                                <Col sm={4}>
                                                    <Button
                                                        className="small-btn"
                                                        onClick={() => this.handleViewChange('right')}>
                                                        {this.rightView()}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </span>
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
    })
};

export default SummaryHeader;

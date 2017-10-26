import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from 'material-ui/Avatar';
import './SummaryHeader.css';

class SummaryHeader extends Component {
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

                        <Col sm={4}>
                            <div className="name-and-mrn item">
                                <h1>{patientName}</h1>
                                <h3>MRN: {mrn}</h3>
                            </div>
                        </Col>

                        <Col sm={2}>
                            <div className="date-of-birth item">
                                <h3>DOB</h3>
                                <span className="no-wrap">{dateOfBirth} ({age})</span>
                            </div>
                        </Col>

                        <Col sm={2}>
                            <div className="administrative-sex item">
                                <h3>Admin. Sex</h3>
                                <span>{administrativeSex}</span>
                            </div>
                        </Col>

                        <Col sm={2}>
                            <div className="location item">
                                <h3>Location</h3>
                                <span>{address ? address.city : ""}, {address ? address.state : ""}</span>
                            </div>
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
        city: PropTypes.string,
        state: PropTypes.state
    })
};

export default SummaryHeader;

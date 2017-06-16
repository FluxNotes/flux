// React imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
// Flexbox
import { Row, Col } from 'react-flexbox-grid';
// Libraries
import staging from '../lib/staging';
//font awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Styling
import './DataSummary.css';

class DataSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            patient: {
                photo: "./DebraHernandez672.jpg",
                name: "Debra Hernandez672",
                dateOfBirth: "05 APR 1966",
                administrativeSex: "Female",
                city: "Boston",
                state: "MA"
            }
        };

        this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this);
        this.handleERStatusChange   = this.handleERStatusChange.bind(this);
        this.handlePRStatusChange   = this.handlePRStatusChange.bind(this);
    }

    handleHER2StatusChange (newStatus) {
      this.props.onHER2StatusChange(newStatus);
    }

    handleERStatusChange (newStatus) {
      this.props.onERStatusChange(newStatus);
    }

    handlePRStatusChange (newStatus) {
      this.props.onPRStatusChange(newStatus);
    }

    handleItemSelected(e, itemString, subItemString) {
        if (subItemString) {
            this.props.onSummaryItemSelected(itemString, subItemString);
        } else {
            this.props.onSummaryItemSelected(itemString, "");
        }
    }

    render() {
        // Current Staging
        const t = this.props.tumorSize;
        const n = this.props.nodeSize;
        const m = this.props.metastasis;
        const stage = staging.breastCancerPrognosticStage(t,n,m);
        let stagingBlock = null;

        if (stage) {
            stagingBlock = (
                <ul className="summary-section" id="summary-staging">
                    <div className="summary-details">
                        <li>
                            <span>Prognostic Stage: {stage}</span>
                            <IconButton
                                className="summary-condition-button"
                                iconClassName="fa fa-plus-square"
                                onClick={(e) => this.handleItemSelected(e, stage)}
                            />
                        </li>
                        <li className="sub-list">
                            <span>{t} {n} {m}</span>
                            <IconButton
                                className="summary-condition-button"
                                iconClassName="fa fa-plus-square"
                                onClick={(e) => this.handleItemSelected(e, `${t} ${n} ${m}`)}
                            />
                        </li>
                    </div>
                </ul>
            );
        } else {
            stagingBlock = (
                <div className="missing-data">
                    <span>Missing staging information</span>
                </div>
            );
        }


        // Pathology Results
        const HGA = `HG2`;
        const HER2Status = `${this.props.HER2Status}`;
        const ERStatus = `${this.props.ERStatus}`;
        const PRStatus = `${this.props.PRStatus}`;

        const HGAString = `HGA: ${HGA}`;
        const HER2StatusString = `HER2 Status: ${HER2Status}`;
        const ERStatusString = `ER Status: ${ERStatus}`;
        const PRStatusString = ` PR Status: ${PRStatus}`;

        // Event Dates
        const DiagnosisDate = '01/13/2012';
        const Diagnosis = 'Lobular carcinoma of the breast';
        const DiagnosisStage = 'Stage IIA';
        const SurgeryDate = '09/20/2012';
        const Surgery = 'Lumpectomy/sentinel/lymph node biopsy';
        const RadiationDate = '07/12/2012 - 08/16/2012';
        const TamoxifenDate = '11/03/2013 - 08/12/2016';
        const RecurrenceDate = '10/28/2013';

        return (
            <div id="data-summary">
                <Paper zDepth={1} className={this.props.className}>
                    <div id="summary-heading">
                        <Row center="xs">
                            <Col xs={6}>
                                <Avatar
                                    src={this.state.patient.photo}
                                    size={70}
                                />
                                <h1>{this.state.patient.name}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <p className="summary-heading-detail-name">DOB</p>
                                <p className="summary-heading-detail-value">{this.state.dateOfBirth} ({calculateAge(this.state.dateOfBirth)})</p>
                            </Col>
                            <Col xs={4}>
                                <p className="summary-heading-detail-name">Administrative Sex:</p>
                                <p className="summary-heading-detail-value">{this.state.administrativeSex}</p>
                            </Col>
                            <Col xs={4}>
                                <p className="summary-heading-detail-name">Location</p>
                                <p className="summary-heading-detail-value">{this.state.city}, {this.state.state}</p>
                            </Col>
                        </Row>
                    </div>
                    <Row center="xs">
                        <Col xs={11}>
                            <Divider />
                        </Col>
                    </Row>
                    <div id="summary-disease-heading">
                        <Row>
                            <Col xs={9}>
                                <p className="summary-disease-heading-value">Lobular carcinoma of the breast</p>
                            </Col>
                            <Col xs={3}>
                                <IconButton
                                    hoveredStyle={{"backgroundColor": "#EEEEEE"}}
                                    className="summary-disease-heading-button"
                                    iconClassName="fa fa-arrow-left"
                                />
                                <IconButton
                                    disabled={true}
                                    hoveredStyle={{"backgroundColor": "#EEEEEE"}}
                                    className="summary-disease-heading-button"
                                    iconClassName="fa fa-arrow-right"
                                />
                            </Col>
                        </Row>
{/*                        <Row>
                            <Col xs={9}>
                                <p className="summary-disease-heading-name">Current Diagnosis</p>
                            </Col>
                            <Col xsOffset={1} xs={2}>
                                <IconButton hoveredStyle={{"backgroundColor": "#EEEEEE"}} className="summary-disease-heading-button" iconClassName="fa fa-arrow-left"/>
                                <IconButton disabled={true} hoveredStyle={{"backgroundColor": "#EEEEEE"}} className="summary-disease-heading-button" iconClassName="fa fa-arrow-right"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <p className="summary-disease-heading-value">Lobular carcinoma of the breast</p>
                            </Col>
                        </Row>*/}
                    </div>
                    <Row center="xs">
                        <Col xs={11}>
                            <Divider />
                        </Col>
                    </Row>

                    <div id="summary-condition-details">
                        <Row>
                            <Col xs={6}>
                                <h3>Current Staging</h3>
                                {stagingBlock}
                            </Col>
                            <Col xs={6}>
                                <h3>Pathology Results</h3>
                                <ul className="summary-section" id="summary-pathology">
                                    <li>
                                        <span>{HGAString}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, HGAString)}
                                        />
                                    </li>
                                    <li>
                                        <span>{HER2StatusString}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, HER2StatusString)}
                                        />
                                    </li>
                                    <li>
                                        <span>{ERStatusString}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, ERStatusString)}
                                        />
                                    </li>
                                    <li>
                                        <span>{PRStatusString}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, PRStatusString)}
                                        />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h3>Event Dates</h3>
                                <ul className="summary-section" id="summary-dates">
                                    <li className="summary-item">
                                        <span>Diagnosis: {DiagnosisDate}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, DiagnosisDate)}
                                        />
                                    </li>
                                    <li className="sub-list" >
                                        <span>{Diagnosis}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, Diagnosis)}
                                        />
                                    </li>
                                    <li className="sub-list" >
                                        <span>{DiagnosisStage}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, DiagnosisStage)}
                                        />
                                    </li>

                                    <li className="summary-item">
                                        <span>Radiation Date: {RadiationDate}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, RadiationDate)}
                                        />
                                    </li>
                                    <li className="summary-item">
                                       <span>Surgery: {SurgeryDate}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, SurgeryDate)}
                                        />
                                    </li>
                                        <li className="sub-list" >
                                           <span>{Surgery}</span>
                                            <IconButton
                                                className="summary-condition-button"
                                                iconClassName="fa fa-plus-square"
                                                onClick={(e) => this.handleItemSelected(e, Surgery)}
                                            />
                                        </li>
                                    <li className="summary-item">
                                        <span>Recurrence Date: {RecurrenceDate}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, RecurrenceDate)}
                                        />
                                    </li>
                                    <li className="summary-item">
                                        <span>Tamoxifen Date: {TamoxifenDate}</span>
                                        <IconButton
                                            className="summary-condition-button"
                                            iconClassName="fa fa-plus-square"
                                            onClick={(e) => this.handleItemSelected(e, TamoxifenDate)}
                                        />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Paper>
            </div>
        );
    }
}
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

DataSummary.propTypes = {
    StageStatus: PropTypes.string,
    HGAStatus: PropTypes.string,
    HER2Status: PropTypes.string,
    ERStatus: PropTypes.string,
    PRStatus: PropTypes.string,
    onHER2StatusChange: PropTypes.func.isRequired,
    onERStatusChange: PropTypes.func.isRequired,
    onPRStatusChange: PropTypes.func.isRequired,
    DiagnosisStatus: PropTypes.string,
    SurgeryStatus: PropTypes.string,
    RadiationStatus: PropTypes.string,
    TamoxifenStatus: PropTypes.string,
    RecurrenceStatus: PropTypes.string,
    onSummaryItemSelected: PropTypes.func.isRequired
}

export default DataSummary;

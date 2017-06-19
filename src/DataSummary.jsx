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
            <div id="data-summary" className="dashboard-panel">
                <Paper className="panel-content trio">
                    <div id="summary-heading">
                        <Row>
                            <Col xs={3}>
                                <Avatar
                                    src={this.props.patient.photo}
                                    size={70}
                                />
                            </Col>
                            <Col xs={9}>
                                <div className="basic-info">
                                    <div className="basic-info-name">
                                        <h1>{this.props.patient.name}</h1>
                                        <h2>MRN: {this.props.patient.mrn}</h2>
                                    </div>
                                </div>

                                <div className="basic-info-items">
                                    <div className="basic-info-item">
                                        <h3>DOB:</h3>
                                        <span>{this.props.patient.dateOfBirth}</span>
                                    </div>
                                    <div className="basic-info-item">
                                        <h3>Admin. Sex:</h3>
                                        <span>{this.props.patient.administrativeSex}</span>
                                    </div>
                                    <div className="basic-info-item">
                                        <h3>Location:</h3>
                                        <span>{this.props.patient.city}, {this.props.patient.state}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Divider className="divider" />
                    <div className="selected-disease">
                        <span className="disease-title">Lobular carcinoma of the breast</span>
                        <span id="left-arrow" className="arrow">
                            <a href="#"><i className="fa fa-arrow-left"></i></a>
                        </span>
                        <span id="right-arrow" className="arrow">
                            <a href="#"><i className="fa fa-arrow-right"></i></a>
                        </span>
                    </div>
                    <Divider className="divider" />

                    <div className="summary-list">
                        <h2>Current Diagnosis:</h2>
                        <table>
                            <tr>
                                <td>Name</td><td className="captured">Lobular carcinoma of the breast</td>
                            </tr>
                            <tr>
                                <td>Stage</td><td className="captured">T2 | N0 | M0 &nbsp;Stage IIIA</td>
                            </tr>
                        </table>

                        <h2>Pathology Results (Initial Diagnosis):</h2>
                        <table>
                            <tr>
                                <td>Color</td><td className="missing">Missing color</td>
                            </tr>
                            <tr>
                                <td>Weight</td><td className="missing">Missing weight</td>
                            </tr>
                            <tr>
                                <td>Size</td><td className="missing">Missing size</td>
                            </tr>
                            <tr>
                                <td>Tumor Margins</td><td className="missing">Missing margins</td>
                            </tr>
                            <tr>
                                <td>Histological Grade</td><td className="captured">HG2</td>
                            </tr>
                            <tr>
                                <td>Receptor Status: ER</td><td className="captured">+</td>
                            </tr>
                            <tr>
                                <td>Receptor Status: PR</td><td className="captured">+</td>
                            </tr>
                            <tr>
                                <td>Receptor Status: HER2</td><td className="missing">Missing receptor status</td>
                            </tr>
                        </table>
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

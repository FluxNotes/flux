import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ConditionSelection from './ConditionSelection'
import ClinicalEventSelection from './ClinicalEventSelection'
import Button from '../elements/Button';
import 'font-awesome/css/font-awesome.min.css';
import './TargetedDataControl.css';

class TargetedDataControl extends Component {
    constructor(props) {
        super(props);

        // Set initial state for which button will be selected
        this.state = {
            noteDisplayMode: "narrative",
        };
    }

    handleViewChange = (noteDisplayMode) => {
        this.setState({ noteDisplayMode });
    }

    tabularView = () => {
        const strokeColor = this.state.noteDisplayMode === "tabular" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.8">
                    <g id="Group-4-Copy" transform="translate(0.884726, 0.440969)" stroke={strokeColor} strokeWidth="1.62" fill="#FFFFFF">
                        <rect id="Rectangle-9-Copy-7" x="0.445109978" y="0.73198638" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-8" x="0.445109978" y="8.26516734" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-9" x="7.81454794" y="0.73198638" width="7.21076743" height="7.21833702"></rect>
                        <rect id="Rectangle-9-Copy-10" x="7.81454794" y="8.26516734" width="7.21076743" height="7.21833702"></rect>
                    </g>
                </g>
            </svg>
        );
    }

    narrativeView = () => {
        const strokeColor = this.state.noteDisplayMode === "narrative" ? "#3F3F3F" : "#CCCCCC";
        return (
            <svg width="17px" height="15px" viewBox="0 0 17 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square" opacity="0.8">
                    <g id="Group-3-Copy" transform="translate(0.567421, 0.048197)" stroke={strokeColor} strokeWidth="2">
                        <path d="M1.03162221,1 L7.83111001,1" id="Line-4"></path>
                        <path d="M1.03162221,7 L15.1251513,7" id="Line-4-Copy"></path>
                        <path d="M1.03162221,13 L15.1251513,13" id="Line-4-Copy-2"></path>
                    </g>
                </g>
            </svg>
        );
    }
    render() {
        return (
            <div id="condition-summary-section" className="dashboard-panel panel-content">
                <Grid fluid>
                    <Row middle="xs">
                        <Col sm={6}>
                            <h3>Workflow</h3>
                            <ClinicalEventSelection
                                possibleClinicalEvents={this.props.possibleClinicalEvents}
                                clinicalEvent={this.props.clinicalEvent}
                                setFullAppState={this.props.setFullAppState}
                            />
                        </Col>

                        <Col sm={4}>
                            <ConditionSelection
                                conditions={this.props.patient.getConditions()}
                                setFullAppState={this.props.setFullAppState}
                            />
                        </Col>

                        <Col sm={2}>
                            <h3>Data</h3>
                            <span>
                                <Row middle="xs">
                                    <Col sm={4}>
                                        <Button
                                            className="small-btn"
                                            id="narrative-button"
                                            onClick={() => this.handleViewChange('narrative')}>
                                            {this.narrativeView()}
                                        </Button>
                                    </Col>
                                    <Col sm={4}>
                                        <Button
                                            className="small-btn"
                                            id="tabular-button"
                                            onClick={() => this.handleViewChange('tabular')}>
                                            {this.tabularView()}
                                        </Button>
                                    </Col>
                                </Row>
                            </span>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

TargetedDataControl.propTypes = {
};

export default TargetedDataControl;

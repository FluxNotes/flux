import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RangeChart from './RangeChart';
import MedicationInformationService from '../lib/MedicationInformationService';
import './MedicationRangeChartVisualizer.css';

/*
 A MedicationRangeChart with additional information displayed to the right.
 */
class MedicationRangeChartVisualizer extends Component {
    constructor(props) {
        super(props);

        this.updateState = true;

        this.state = { medicationVisWide: true };
    }

    componentDidMount() {
        window.addEventListener("resize", this.checkMedicationWidth);
        setTimeout(this.checkMedicationWidth, 450);
    }

    componentDidUpdate = () => {
        if (this.updateState) {
            this.updateState = false;
        } else {
            this.updateState = true;
            setTimeout(this.checkMedicationWidth, 450);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkMedicationWidth);
    }

    checkMedicationWidth = () => {
        if (!this.parent) return;
        if (this.parent.offsetWidth > 600) {
            this.setState({ medicationVisWide: true });
        } else {
            this.setState({ medicationVisWide: false });
        }
    }

    getSubsections() {
        const {patient, condition, conditionSection} = this.props;

        if (patient == null || condition == null || conditionSection == null) {
            return [];
        }

        let subsections = [];
        conditionSection.data.forEach((subsection) => {
            subsections.push(subsection);
        });

        return subsections;
    }

    renderedSubsections(subsections) {
        return subsections.map((subsection, index) => {
            return this.renderedSubsection(subsection, index);
        });
    }

    renderedSubsection(subsection, index) {
        const {patient, condition} = this.props;
        const items = subsection.itemsFunction(patient, condition, subsection);
        if (items.length === 0) return <h2 key={index}>None</h2>;
        const rows = items.map((med, i) => this.renderMedication(med, i));
        return rows;
    }

    renderMedication = (med, i) => {
        // Grab range values based on medication
        let rangeValues = MedicationInformationService.getRangeValues(med.code);

        // Set the values needed to render the range chart
        const lowerValue = rangeValues.lowerValue;
        const upperValue = rangeValues.upperValue;
        const typicalValue = rangeValues.typicalValue;
        // Only want want the number part of the value, not the unit
        const value = med.amountPerDose ? med.amountPerDose.value : null;
        const unit = med.amountPerDose ? med.amountPerDose.units : null;
        const name = med.medication;

        const numColsChart = this.state.medicationVisWide ? 5 : 12;
        const numColsInfo = this.state.medicationVisWide ? 7 : 12;

        return (
            <div key={i} className="medication-chart-item" ref={(parent) => {this.parent = parent}}>
                <Grid className="FullApp-content" fluid>
                    <Row middle="xs">
                        <Col sm={numColsChart}>
                            <div className="range-chart-container">

                                <RangeChart
                                    lowerValue={lowerValue}
                                    upperValue={upperValue}
                                    typicalValue={typicalValue}
                                    value={value}
                                    unit={unit}
                                    name={name}
                                />
                            </div>
                        </Col>
                        <Col sm={numColsInfo}>
                            <Row center='xs'>
                                <Col sm={3}>
                                    <div className='medication-info-heading'>
                                        Route
                                    </div>
                                    <div className='medication-info'>
                                        {med.routeIntoBody}
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className='medication-info-heading'>
                                        Prescribed
                                    </div>
                                    <div className='medication-info'>
                                        {med.whenPrescribed}
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className='medication-info-heading'>
                                        Prescribed By
                                    </div>
                                    <div className='medication-info'>
                                        {med.prescribedBy}
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className='medication-info-heading'>
                                        Number of Refills
                                    </div>
                                    <div className='medication-info'>
                                        {med.numberOfRefillsAllowed}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

    render() {
        const subsections = this.getSubsections();

        return (
            <div className="medication-visualizer-wrapper">
                {this.renderedSubsections(subsections)}
            </div>
        );
    }
}

MedicationRangeChartVisualizer.propTypes = {
    patient: PropTypes.object,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    isWide: PropTypes.bool,
    onItemClicked: PropTypes.func,
    allowItemClick: PropTypes.bool
};

export default MedicationRangeChartVisualizer;
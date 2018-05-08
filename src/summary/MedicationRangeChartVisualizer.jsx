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
        // console.log('itemsToBeRendered:')
        // console.log(items)
        const rows = items.map((med, i) => this.renderMedication(med, i));
        return rows;
    }

    renderMedicationChange = (medChange, medBefore) => { 
        return (
            <Row start="xs">
                <Col xs={12} className="medication-change">
                    <span className='medication-change-type'>
                        {this.stringForMedicationChangeType(medChange.type)}
                    </span>
                    <span className='medication-change-prior-amount'>
                        {this.stringForMedicationChangePriorAmount(medChange.type, medBefore)}
                    </span>
                    <span className='medication-change-date'>
                        {this.stringForMedicationChangeDate(medChange.date)}
                    </span>
                </Col>
            </Row>
        );
    }

    /**
     * Formats the medicationChange date for display
     * returns a string for displaying the medChange date
     */
    stringForMedicationChangeDate(date) { 
        return `on ${date}`
    }

    /**
     * Formats the medicationChange type for display
     * returns a string for displaying the medChange type
     */
    stringForMedicationChangeType(changeType) { 
        switch (changeType) {
            case "temp_stop":
                return changeType.charAt(0).toUpperCase() + changeType.slice(1).replace('_', ' ') + " ";
            default:
                // Behavior for swap, stop, increased, reduced
                return changeType.charAt(0).toUpperCase() + changeType.slice(1) + " ";
        }
    }

    /**
     * Formats the medicationChange prior medication for display
     * returns a string for displaying information re: prior medication
     */
    stringForMedicationChangePriorAmount(changeType, medBefore) { 
        switch (changeType) {
            case "reduced":
                return ` from ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
            case "increased":
                return ` from ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
            case "temp_stop":
                return ``;
            case "swap":
                return `with ${medBefore.medication}}`;
            case "stop":
                return ``;
            default:
                return `${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
        }
    }

    renderMedication = (med, i) => {
        // Grab range values based on medication
        let rangeValues = MedicationInformationService.getRangeValues(med.code, (med.amountPerDose ? med.amountPerDose.units : null));

        // Set the values needed to render the range chart
        const lowerValue = rangeValues ? rangeValues.lowerValue : null;
        const upperValue = rangeValues ? rangeValues.upperValue : null;
        const typicalValue = rangeValues ? rangeValues.typicalValue : null;
        // Only want want the number part of the value, not the unit
        const value = med.amountPerDose ? med.amountPerDose.value : null;
        const unit = med.amountPerDose ? med.amountPerDose.units : null;
        const name = med.medication;

        const numColsChart = this.state.medicationVisWide ? 5 : 12;
        const numColsInfo = this.state.medicationVisWide ? 7 : 12;
        const medicationIsChange = med.medicationChange !== undefined;
        return (
            <div key={i} className="medication-chart-item" ref={(parent) => {this.parent = parent}}>
                <Grid className="FullApp-content" fluid>
                    <Row top="xs">
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
                            {medicationIsChange ? this.renderMedicationChange(med.medicationChange, med.medicationBeforeChange) : null}
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
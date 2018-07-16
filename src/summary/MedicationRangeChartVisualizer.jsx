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

    renderMedicationTitle = (lowerValue, upperValue, name, value, unit) => {
        // Determining if medication value is out of range.
        if (value < lowerValue || value > upperValue) {
            return (
                <div className="medicationTitle">
                    {name + " "}
                    <span className="out-of-range-medication">
                        {value + " "}
                    </span>
                    {unit}
                </div>);
        }
        return (
            <div className="medicationTitle">
                {name + " " + value + " " + unit}
            </div>);
    }

    renderMedicationChange = (medChange, medBefore) => {     
        // If the medication change type is "stop", change how the medication change string is displayed
        let medChangeClassName = "";
       
        // Wide view has different stylings for the medication change
        if (this.props.isWide) {
            medChangeClassName = "medication-change-wide";
            console.log("WIDE MEDICATION CHANGE");
        } else {
            medChangeClassName = "medication-change";
        }

        if (medChange.type === "stop") {
            let medChangeTypeSigned = "medication-change-type";
            if (medChange.unsigned) medChangeTypeSigned = "medication-change-type-unsigned";
            return (
                    <Col xs={12} className={medChangeClassName}>
                        <span className='medication-change-type'>
                            {this.stringForMedicationChangeType(medChange.type)}
                        </span>
                        <span className='medication-change-date'>
                            {this.stringForMedicationChangeDate(medChange.date)}
                        </span>
                        <span className='medication-change-prior-amount'>
                            {this.stringForMedicationChangePriorAmount(medChange.type, medBefore)}
                        </span>
                    </Col>
            );
        } else {
            return (
                    <Col xs={12} className={medChangeClassName}>
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
            );
        }
    }

    renderMedicationInfo = (med) => {
        return (
           <div> 
            <Row top='xs'>
                <Col sm={3}>
                    <div className='medication-info-heading'>
                        Route
                                        </div>
                    <div className='medication-info'>
                        {med.medication.routeIntoBody}
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='medication-info-heading'>
                        Prescribed
                                        </div>
                    <div className='medication-info'>
                        {med.medication.whenPrescribed}
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='medication-info-heading'>
                        Prescribed By
                                        </div>
                    <div className='medication-info'>
                        {med.medication.prescribedBy}
                    </div>
                </Col>
                <Col sm={3}>
                    <div className='medication-info-heading'>
                        Number of Refills
                                        </div>
                    <div className='medication-info'>
                        {med.medication.numberOfRefillsAllowed}
                    </div>
                </Col>
            </Row>
            </div>);
    }

    /**
     * Formats the medicationChange date for display
     * returns a string for displaying the medChange date
     */
    stringForMedicationChangeDate(date) { 
        return ` on ${date}`
    }

    /**
     * Formats the medicationChange type for display
     * returns a string for displaying the medChange type
     */
    stringForMedicationChangeType(changeType) { 
        switch (changeType) {
            case "reduced":
                return 'Reduced';
            case "increased":
                return 'Increased';
            case "temp_stop":
                return 'Temporarily stopped';
            case "swap":
                return 'Swapped';
            case "stop":
                return 'Stopped';
            default:
                console.error('Unsupported medication change type used in medication: ' + changeType)                
                return `${changeType}`;
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
                return ` (dose was ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units})`;
            default:
                return `${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
        }
    }

    stringForMedicationStoppedDosageBefore(medBefore) {
        return ` (dose was ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units})`;
    }

    renderMedication = (med, i) => {
        if (!this.props.isWide) {
            return this.renderMedicationNarrowView(med, i);
        }
        // Grab range values based on medication
        let rangeValues = MedicationInformationService.getRangeValues(med.medication.code, (med.medication.amountPerDose ? med.medication.amountPerDose.units : null));

        // Set the values needed to render the range chart
        const lowerValue = rangeValues ? rangeValues.lowerValue : null;
        const upperValue = rangeValues ? rangeValues.upperValue : null;
        const typicalValue = rangeValues ? rangeValues.typicalValue : null;
        // Only want want the number part of the value, not the unit
        const value = med.medication.amountPerDose ? med.medication.amountPerDose.value : null;
        const unit = med.medication.amountPerDose ? med.medication.amountPerDose.units : null;
        const name = med.medication.medication;
        const medicationIsChange = (med.medicationChange ? true : false);

        return (
            <div key={i} className="medication-chart-item" ref={(parent) => { this.parent = parent }}>
                <Grid className="FullApp-content" fluid>
                    <div className="medication-heading">
                    <Row bottom="xs">
                        <Col md={6} xs={12}>
                            {this.renderMedicationTitle(lowerValue, upperValue, name, value, unit)}
                        </Col>
                        <Col xs={6} className="medication-change-padding">
                            <div className="medication-change-container">
                                {medicationIsChange ? this.renderMedicationChange(med.medicationChange, med.medicationChange.medBeforeChange) : <Col xs={13} />}
                            </div>
                        </Col>
                    </Row>
                    </div>
                    {(med.medicationChange && med.medicationChange.type === 'stop') ? <div /> :
                        <Row around='xs'>
                            <Col md={6}>
                                <div className="range-chart-container">
                                    <RangeChart
                                        lowerValue={lowerValue}
                                        upperValue={upperValue}
                                        typicalValue={typicalValue}
                                        value={value}
                                        unit={unit}
                                        name={name}
                                        isWide={this.props.isWide}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div>
                                    {this.renderMedicationInfo(med)}
                                </div>
                            </Col>
                        </Row>}
            </Grid>
            </div>)
}

renderMedicationNarrowView = (med, i) => {
    // Grab range values based on medication
    let rangeValues = MedicationInformationService.getRangeValues(med.medication.code, (med.medication.amountPerDose ? med.medication.amountPerDose.units : null));

    // Set the values needed to render the range chart
    const lowerValue = rangeValues ? rangeValues.lowerValue : null;
    const upperValue = rangeValues ? rangeValues.upperValue : null;
    const typicalValue = rangeValues ? rangeValues.typicalValue : null;
    
    // Only want want the number part of the value, not the unit
    const value = med.medication.amountPerDose ? med.medication.amountPerDose.value : null;
    const unit = med.medication.amountPerDose ? med.medication.amountPerDose.units : null;
    const name = med.medication.medication;
    const medicationIsChange = (med.medicationChange ? true : false);


    return (
        <div key={i} className="medication-chart-item" ref={(parent) => { this.parent = parent }}>
            <Grid className="FullApp-content" fluid>
                <div className="medication-heading">
                <Row top="xs">
                    <Col md={8} xs={12}>
                        {this.renderMedicationTitle(lowerValue, upperValue, name, value, unit)}
                    </Col>
                </Row>
                </div>
                <Row around="xs" top="xs">
                    <Col sm={10}>
                        <div className="medication-change-container">
                            {medicationIsChange ? this.renderMedicationChange(med.medicationChange, med.medicationChange.medBeforeChange) : null}
                        </div>
                    </Col>
                </Row>
                {/* Additional information for current medication */}
                {(med.medicationChange && med.medicationChange.type === 'stop') ? <div /> :
                <div>
                    <Row around="xs" top="xs">
                        <Col sm={11}>
                            <div className="range-chart-container">
                                <RangeChart
                                    lowerValue={lowerValue}
                                    upperValue={upperValue}
                                    typicalValue={typicalValue}
                                    value={value}
                                    unit={unit}
                                    name={name}
                                    chartXCoordinate={20}
                                    chartYCoordinate={18}
                                    isWide={this.props.isWide}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row around="xs" top="xs">
                        <Col sm={11}>
                            <div>
                                {this.renderMedicationInfo(med)}
                            </div>
                        </Col>
                    </Row>
                </div>}
        </Grid>
        </div>);
   
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
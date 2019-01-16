import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Lang from 'lodash';
import RangeChart from './RangeChart';
import MedicationInformationService from '../lib/MedicationInformationService';
import './MedicationRangeChartVisualizer.css';
import FormatMedicationChange from './FormatMedicationChange';
import Visualizer from './Visualizer';

/*
 A MedicationRangeChart with additional information displayed to the right.
 */
class MedicationRangeChartVisualizer extends Visualizer {
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
        const items = subsection.data_cache;
        
        if (items.length === 0) return <h2 key={index}>None</h2>;
        const rows = items.map((med, i) => this.renderMedication(med, i));
        return rows;
    }

    renderMedicationTitle = (lowerValue, upperValue, name, dosageValue, dosageUnit, timingValue, timingUnit, asNeededIndicator, doseInstructionsText) => {
        // Determining if timingUnit has a value. Set if empty string if null.
        if (timingUnit == null) timingUnit = '';
        //Determining if asNeededIndicator is true. Set empty string if false, set string as needed if true.
        const asNeededString = asNeededIndicator ? 'as needed' : '';

        let titleClass = '';
        const foundMed = this.props.tdpSearchSuggestions.find(s => {
            return s.section === "Medications" && (
                s.contentSnapshot === name ||
                s.contentSnapshot === dosageValue ||
                s.contentSnapshot === dosageUnit ||
                s.contentSnapshot === timingValue ||
                s.contentSnapshot === timingUnit ||
                s.contentSnapshot === doseInstructionsText ||
                s.contentSnapshot === asNeededString
            );
        });
        if (foundMed) titleClass += ' highlighted';
        if (Lang.isEqual(foundMed, this.props.highlightedSearchSuggestion)) titleClass += ' selected';

        // Determining if medication value is out of range.
        if (dosageValue < lowerValue || dosageValue > upperValue) {
            return (
                <div className="medicationTitle">
                    {`${name} `}
                    <span className="out-of-range-medication">
                        {`${dosageValue} `}
                    </span>
                    <span className={titleClass}>{`${dosageUnit} ${timingValue || doseInstructionsText} ${timingUnit} ${asNeededString}`}</span>
                </div>);
        }
        return (
            <div className="medicationTitle">
                <span className={titleClass}>{`${name} ${dosageValue} ${dosageUnit} ${timingValue || doseInstructionsText} ${timingUnit} ${asNeededString}`}</span>
            </div>);
    }

    renderMedicationChange = (medChange, medBefore) => {
        // If the medication change type is "stop", change how the medication change string is displayed
        let medChangeClassName = '';

        // Wide view has different stylings for the medication change
        if (this.props.isWide) {
            medChangeClassName = 'medication-change-wide';
        } else {
            medChangeClassName = 'medication-change';
        }
        const medChangeTypeSigned = medChange.isUnsigned ? 'medication-change-type-unsigned' : 'medication-change-type';

        if (medChange.type === 'stop') {
            return (
                <Col xs={12} className={medChangeClassName}>
                    <span className={medChangeTypeSigned}>
                        {FormatMedicationChange.stringForMedicationChangeType(medChange.type)}
                    </span>
                    <span className="medication-change-date">
                        {FormatMedicationChange.stringForMedicationChangeDate(medChange.date)}
                    </span>
                    <span className="medication-change-prior-amount">
                        {FormatMedicationChange.stringForMedicationChangePriorAmount(medChange.type, medChange.medBeforeChange)}
                    </span>
                </Col>
            );
        }

        return (
            <Col xs={12} className={medChangeClassName}>
                <span className={medChangeTypeSigned}>
                    {FormatMedicationChange.stringForMedicationChangeType(medChange.type)}
                </span>
                <span className="medication-change-prior-amount">
                    {FormatMedicationChange.stringForMedicationChangePriorAmount(medChange.type, medChange.medBeforeChange)}
                </span>
                <span className="medication-change-date">
                    {FormatMedicationChange.stringForMedicationChangeDate(medChange.date)}
                </span>
            </Col>
        );
    }

    renderMedicationInfo = (med) => {
        const {routeIntoBody, whenPrescribed, prescribedBy, numberOfRefillsAllowed, medication} = med.medication;
        const medId = `medications_${medication.toLowerCase().replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/ /g, '_')}`;
        let routeClass = '', prescribedClass = '', prescribedByClass = '', numberOfRefillsAllowedClass = '';
        this.props.tdpSearchSuggestions.forEach(s => {
            if (s.section === 'Medications' && s.id.includes(medId)) {
                if (s.contentSnapshot === routeIntoBody) routeClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
                if (s.contentSnapshot === whenPrescribed) prescribedClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
                if (s.contentSnapshot === prescribedBy) prescribedByClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
                if (s.contentSnapshot === numberOfRefillsAllowed) numberOfRefillsAllowedClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
            }
        });
        return (
            <div>
                <Row top="xs">
                    <Col sm={3}>
                        <div className="medication-info-heading">
                            Route
                        </div>
                        <div className={"medication-info" + routeClass}>
                            {routeIntoBody}
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="medication-info-heading">
                            Prescribed
                        </div>
                        <div className={"medication-info" + prescribedClass}>
                            {whenPrescribed}
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="medication-info-heading">
                            Prescribed By
                        </div>
                        <div className={"medication-info" + prescribedByClass}>
                            {prescribedBy}
                        </div>
                    </Col>
                    <Col sm={3}>
                         <div className="medication-info-heading">
                            Number of Refills
                        </div>
                        <div className={"medication-info" + numberOfRefillsAllowedClass}>
                            {numberOfRefillsAllowed}
                        </div>
                    </Col>
                </Row>
            </div>
        );
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
        const dosageValue = med.medication.amountPerDose ? med.medication.amountPerDose.value : null;
        const dosageUnit = med.medication.amountPerDose ? med.medication.amountPerDose.units : null;
        const timingValue = med.medication.timingOfDoses ? med.medication.timingOfDoses.value : null;
        const timingUnit = med.medication.timingOfDoses ? med.medication.timingOfDoses.units : null;
        const {doseInstructionsText} = med.medication;
        const name = med.medication.medication;
        const medicationIsChange = (med.medicationChange ? true : false);
        const asNeededIndicator = med.medication.asNeededIndicator;

        return (
            <div key={i} className="medication-chart-item" ref={(parent) => { this.parent = parent }}>
                <Grid fluid>
                    <div className="medication-heading">
                        <Row bottom="xs">
                            <Col md={6} xs={12}>
                                {this.renderMedicationTitle(lowerValue, upperValue, name, dosageValue, dosageUnit, timingValue, timingUnit, asNeededIndicator, doseInstructionsText)}
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
                                        value={dosageValue}
                                        unit={dosageUnit}
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
    const dosageValue = med.medication.amountPerDose ? med.medication.amountPerDose.value : null;
    const dosageUnit = med.medication.amountPerDose ? med.medication.amountPerDose.units : null;
    const timingValue = med.medication.timingOfDoses ? med.medication.timingOfDoses.value : null;
    const timingUnit = med.medication.timingOfDoses ? med.medication.timingOfDoses.units : null;
    const {doseInstructionsText} = med.medication;
    const name = med.medication.medication;
    const medicationIsChange = (med.medicationChange ? true : false);
    const asNeededIndicator = med.medication.asNeededIndicator;

    return (
        <div key={i} className="medication-chart-item" ref={(parent) => { this.parent = parent }}>
            <Grid fluid>
                <div className="medication-heading">
                <Row top="xs">
                    <Col md={8} xs={12}>
                        {this.renderMedicationTitle(lowerValue, upperValue, name, dosageValue, dosageUnit, timingValue, timingUnit, asNeededIndicator, doseInstructionsText)}
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
                                    value={dosageValue}
                                    unit={dosageUnit}
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
    allowItemClick: PropTypes.bool,
    tdpSearchSuggestions: PropTypes.array
};

export default MedicationRangeChartVisualizer;

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
        if (this.parent.offsetWidth > 725) {
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

    renderMedicationTitle = (name) => {
        let titleClass = '';
        const foundMed = this.props.tdpSearchSuggestions.find(s => {
            return (s.section === "Medications" && s.contentSnapshot === name);
        });
        if (foundMed) titleClass += 'highlighted';
        if (Lang.isEqual(foundMed, this.props.highlightedSearchSuggestion)) titleClass += ' selected';

        return (
            <div className="medication-item-heading-title">
                <span className={titleClass}>{name}</span>
            </div>);
    }

    renderMedicationDosage = (lowerValue, upperValue, dosageValue, dosageUnit, timingValue, timingUnit, asNeededIndicator, doseInstructionsText) => {
        // we don't want to render "null" so replace nulls here with empty string
        if (timingUnit == null) timingUnit = '';
        if (dosageUnit == null) dosageUnit = '';
        if (dosageValue == null) dosageValue = '';

        //Determining if asNeededIndicator is true. Set empty string if false, set string as needed if true.
        const asNeededString = asNeededIndicator ? 'as needed' : '';

        // TO DO: fix how to highlight the dosage (ASCODCP-1688)
        // let titleClass = '';
        // const foundMed = this.props.tdpSearchSuggestions.find(s => {
        //     return s.section === "Medications" && (
        //         s.contentSnapshot === dosageValue ||
        //         s.contentSnapshot === dosageUnit ||
        //         s.contentSnapshot === timingValue ||
        //         s.contentSnapshot === timingUnit ||
        //         s.contentSnapshot === doseInstructionsText ||
        //         s.contentSnapshot === asNeededString
        //     );
        // });
        // if (foundMed) titleClass += ' highlighted';
        // if (Lang.isEqual(foundMed, this.props.highlightedSearchSuggestion)) titleClass += ' selected';

        // Determining if medication value is out of range.
        let rangeClass = 'medication-dosage-value';
        if (dosageValue < lowerValue || dosageValue > upperValue) rangeClass = 'out-of-range';
        else rangeClass += 'normal';

        return (
            <div className="medication-dosage">
                <span className={rangeClass}>
                    {`${dosageValue} `}
                </span>
                <span className="medication-dosage-info">
                    {`${dosageUnit} ${timingValue || doseInstructionsText || ''} ${timingUnit} ${asNeededString}`}
                </span>
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
        const {routeIntoBody, whenPrescribed, prescribedBy, medication} = med.medication;
        const medId = `medications_${medication.toLowerCase().replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/ /g, '_')}`;
        let routeClass = '', prescribedClass = '', prescribedByClass = '';
        this.props.tdpSearchSuggestions.forEach(s => {
            if (s.section === 'Medications' && s.id.includes(medId)) {
                if (s.contentSnapshot === routeIntoBody) routeClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
                if (s.contentSnapshot === whenPrescribed) prescribedClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
                if (s.contentSnapshot === prescribedBy) prescribedByClass = Lang.isEqual(s, this.props.highlightedSearchSuggestion) ? ' highlighted selected' : ' highlighted';
            }
        });
        return (
            <div className="medication-info">
                <Row top="xs">
                    <Col xs={4}>
                        <div className="medication-info-heading">
                            Route
                        </div>
                        <div className={"medication-info" + routeClass}>
                            {routeIntoBody}
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="medication-info-heading">
                            Prescribed
                        </div>
                        <div className={"medication-info" + prescribedClass}>
                            {whenPrescribed}
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="medication-info-heading">
                            Prescribed By
                        </div>
                        <div className={"medication-info" + prescribedByClass}>
                            {prescribedBy}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    renderMedication = (med, i) => {
        if (!this.props.isWide || !this.state.medicationVisWide) {
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
            <div key={i} className="medication-item" ref={(parent) => { this.parent = parent }}>
                <Grid fluid>
                    <div className="medication-item-heading">
                        <Row bottom="xs">
                            <Col md={7} xs={12}>
                                {this.renderMedicationTitle(name)}
                            </Col>
                            <Col xs={5} className="medication-change-padding">
                                <div className="medication-change-container">
                                    {medicationIsChange ? this.renderMedicationChange(med.medicationChange, med.medicationChange.medBeforeChange) : <Col xs={13} />}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {(med.medicationChange && med.medicationChange.type === 'stop') ? <div /> :
                    <div className="medication-item-content">
                        <Row around='xs'>
                            <Col md={3}>
                                {this.renderMedicationDosage(lowerValue, upperValue, dosageValue, dosageUnit, timingValue, timingUnit, asNeededIndicator, doseInstructionsText)}
                            </Col>
                            <Col md={4}>
                                <div className="medication-range-chart-container">
                                    <RangeChart
                                        lowerValue={lowerValue}
                                        upperValue={upperValue}
                                        typicalValue={typicalValue}
                                        value={dosageValue}
                                        unit={dosageUnit}
                                        name={name}
                                        isWide={true}
                                    />
                                </div>
                            </Col>
                            <Col md={5}>
                                {this.renderMedicationInfo(med)}
                            </Col>
                        </Row>
                    </div>}
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
        <div key={i} className="medication-item" ref={(parent) => { this.parent = parent }}>
            <Grid fluid>
                <div className="medication-item-heading">
                    <Row top="xs">
                        <Col md={8} xs={12}>
                            {this.renderMedicationTitle(name)}
                        </Col>
                    </Row>
                    <Row top="xs">
                        <Col sm={10} className="medication-change-padding">
                            <div className="medication-change-container">
                                {medicationIsChange ? this.renderMedicationChange(med.medicationChange, med.medicationChange.medBeforeChange) : null}
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* Additional information for current medication */}
                {(med.medicationChange && med.medicationChange.type === 'stop') ? <div /> :
                <div className="medication-item-content">
                    <Row between="xs">
                        <Col sm={4}>
                            {this.renderMedicationDosage(lowerValue, upperValue, dosageValue, dosageUnit, timingValue, timingUnit, asNeededIndicator, doseInstructionsText)}
                        </Col>
                        <Col sm={8}>
                            <div className="medication-range-chart-container">
                                <RangeChart
                                    lowerValue={lowerValue}
                                    upperValue={upperValue}
                                    typicalValue={typicalValue}
                                    value={dosageValue}
                                    unit={dosageUnit}
                                    name={name}
                                    chartXCoordinate={20}
                                    chartYCoordinate={18}
                                    isWide={false}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row between="xs" top="xs">
                        <Col sm={12}>
                            {this.renderMedicationInfo(med)}
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

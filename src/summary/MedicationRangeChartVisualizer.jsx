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
        const { patient, condition } = this.props;
        const items = subsection.itemsFunction(patient, condition, subsection);
        const rows = items.map((med, i) => this.renderMedication(med, i));
        return rows;
    }
    
    renderMedication = (med, i) => {

        // Grab range values based on medication
        let rangeValues = MedicationInformationService.getRangeValues(med[10]);

        // Set the values needed to render the range chart
        const lowerValue = rangeValues.lowerValue;
        const upperValue = rangeValues.upperValue;
        const typicalValue = rangeValues.typicalValue;
        // Only want want the number part of the value, not the unit
        const value = med[1].slice(0,1);
        const unit = med[9];
        const name = med[0];

        return (
            <div key={i}>
                <Grid className="FullApp-content" fluid>
                    <Row center="xs">
                        <Col sm={4}>
                            <RangeChart 
                                lowerValue={lowerValue}
                                upperValue={upperValue}
                                typicalValue={typicalValue}
                                value={value}
                                unit={unit}
                                name={name}
                            />
                        </Col>
                        <Col sm={2}>
                            <div className='medication-info-heading'>
                                Route
                            </div>
                            <div className='medication-info'>
                                {med[5]}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className='medication-info-heading'>
                                Prescribed
                            </div>
                            <div className='medication-info'>
                                {med[7]}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className='medication-info-heading'>
                                Prescribed By
                            </div>
                            <div className='medication-info'>
                                {med[6]}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className='medication-info-heading'>
                                Number of Refills
                            </div>
                            <div className='medication-info'>
                                {med[8]}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    
    render() {
        const subsections = this.getSubsections();
        
        return (
            <div>
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
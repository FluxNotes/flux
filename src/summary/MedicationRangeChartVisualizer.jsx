import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import RangeChart from './RangeChart';
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
        const lowerValue = 1;
        const upperValue = 7;
        const typicalValue = 2;
        const value = 2.5;
        const unit = "mg";
        const name = "Letrozole";
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
                                unit={med[9]}
                                name={name}
                            />
                        </Col>
                        <Col sm={2}>
                            <div>
                                Route
                            </div>
                            <div>
                                {med[5]}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div>
                                Prescribed
                            </div>
                            <div>
                                {med[7]}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div>
                                Prescribed By
                            </div>
                            <div>
                                {med[6]}
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div>
                                Number of Refills
                            </div>
                            <div>
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import IconsChart from '../../visualizations/IconsChart/IconsChart';
import { cumulativeAdd } from '../../utils/arrayOperations';

import './TreatmentOptionsOutcomesIcons.css';

export default class TreatmentOptionsOutcomesIcons extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedTreatment: props.similarPatientTreatmentsData[0] };
    }

    componentDidUpdate(prevProps) {
        const { similarPatientTreatmentsData } = this.props;
        if (similarPatientTreatmentsData !== prevProps.similarPatientTreatmentsData) {
            this.resetSelectedTreatment();
        }
    }

    resetSelectedTreatment = () => {
        const { similarPatientTreatmentsData } = this.props;
        const { selectedTreatment } = this.state;
        if (similarPatientTreatmentsData.length === 0) return;

        let newSelectedTreatment;
        if (!selectedTreatment) {
            newSelectedTreatment = similarPatientTreatmentsData[0];
        } else {
            newSelectedTreatment = similarPatientTreatmentsData.filter(treatment =>
                treatment.displayName === selectedTreatment.displayName)[0];
        }

        this.setState({ selectedTreatment: newSelectedTreatment });
    }

    getNumSurvive = (treatment, timescale) => {
        const { similarPatientTreatmentsData } = this.props;
        let totalNumSurvive;
        let totalPatients;
        let index = -1;
        index = similarPatientTreatmentsData.findIndex(el => el.displayName === treatment.displayName);
        totalPatients = similarPatientTreatmentsData[index].totalPatients;
        totalNumSurvive = totalPatients - cumulativeAdd(similarPatientTreatmentsData[index].survivalYears, timescale);

        const numSurvive = Math.floor(totalNumSurvive / totalPatients * 100);
        return { numSurvive, index };
    }

    selectIconsTreatment = treatmentName => {
        const { similarPatientTreatmentsData } = this.props;
        const treatment = similarPatientTreatmentsData.filter(treatmentData => treatmentData.displayName === treatmentName)[0];
        this.setState({ selectedTreatment: treatment });
    }

    renderTreatmentSelector = treatment => {
        const { selectedTreatment } = this.state;
        const treatmentName = treatment.displayName;
        const treatmentClass =
            `interaction-selection interaction-combined ${selectedTreatment.displayName === treatmentName ? 'active' : ''}`;

        return (
            <div className={treatmentClass} key={treatment.id}>
                <div
                    className="treatment-name-group"
                    onClick={() => this.selectIconsTreatment(treatmentName)}>
                    {selectedTreatment === treatmentName && <FontAwesome className="selected-icon" name="caret-right" />}
                    <span className={`treatment-name ${selectedTreatment === treatmentName ? 'selected' : ''}`}>
                        {treatmentName}
                    </span>
                </div>
            </div>
        );
    }

    render() {
        const { similarPatientTreatmentsData, timescaleToggle } = this.props;
        const { selectedTreatment } = this.state;
        if (!selectedTreatment || similarPatientTreatmentsData.length === 0) {
            return <div className="helper-text">No data. Choose a different selection or similar patients criteria.</div>;
        }

        const { numSurvive: selectedNumSurvive} = this.getNumSurvive(selectedTreatment, timescaleToggle);


        return (
            <div className="treatment-options-outcomes-icons">
                <div className="icons-interaction">
                    {similarPatientTreatmentsData.map(treatment => this.renderTreatmentSelector(treatment))}
                </div>

                <IconsChart
                    numSurvive={selectedNumSurvive}
                    treatment={selectedTreatment.displayName}
                    yearsSurvival={timescaleToggle}
                />
            </div>
        );
    }
}

TreatmentOptionsOutcomesIcons.propTypes = {
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    timescaleToggle: PropTypes.string.isRequired
};

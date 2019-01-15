import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TreatmentOptionsSelector from '../TreatmentOptionsSelector/TreatmentOptionsSelector';
import SimilarPatientsSelector from '../SimilarPatientsSelector/SimilarPatientsSelector';

import numberWithCommas from '../utils/numberWithCommas';
import TreatmentOptionsOutcomes from '../TreatmentOptionsOutcomes/TreatmentOptionsOutcomes';
import headers from '../mock-data/Headers';
import './TreatmentOptionsVisualizer.css';

// example header object
// TODO: decide on format for this


export default class TreatmentOptionsVisualizer extends Component {
    constructor(props) {
        super(props);

        const { patient, condition } = this.props;
        const patientAge = patient.getAge();
        const patientAgeAtDiagnosis = patient.getAgeAsOf(new Date(condition.diagnosisDate));

        const demographicOptions = [
            { option: `age: ${patientAge - 10}-${patientAge + 10}` },
            { option: `age at diagnosis: ${patientAgeAtDiagnosis - 10}-${patientAgeAtDiagnosis + 10}` },
            { option: `race: ${_.lowerCase(patient.patient.race)}` },
            { option: `sex: ${_.lowerCase(patient.patient.gender)}` }
        ];

        const pathologyOptions = [
            { option: 'ER: negative' },
            { option: 'PR: positive' },
            { option: 'HER2: positive' },
            { option: 'grade: 3' },
            { option: 'size (mm): 10-20' }
        ];

        const treatmentHistoryOptions = [
            { option: 'had surgery: yes' },
            { option: 'received radiation therapy: yes' },
            { option: 'received chemotherapy: yes' }
        ];

        const geneticsOptions = [
            { option: 'BRCA1: negative' },
            { option: 'BRCA2: negative' }
        ];

        const medicalHistoryOptions = [
            { option: 'ECOG score: 2-3' }
        ];

        this.state = {
            demographicOptions,
            pathologyOptions,
            treatmentHistoryOptions,
            geneticsOptions,
            medicalHistoryOptions,
            selectedDemographicOptions: demographicOptions.map(({ option }) => option),
            selectedPathologyOptions: pathologyOptions.map(({ option }) => option),
            selectedTreatmentHistoryOptions: treatmentHistoryOptions.map(({ option }) => option),
            selectedGeneticsOptions: geneticsOptions.map(({ option }) => option),
            selectedMedicalHistoryOptions: medicalHistoryOptions.map(({ option }) => option),
            excludedCriteria: []
        };
    }

    setOptions = (options) => {
        const {
            demographicOptions,
            pathologyOptions,
            treatmentHistoryOptions,
            geneticsOptions,
            medicalHistoryOptions
        } = this.state;
        let excludedCriteria = [];

        excludedCriteria = excludedCriteria.concat(demographicOptions.filter((option) => (options.selectedDemographicOptions || this.state.selectedDemographicOptions).indexOf(option.option) === -1));
        excludedCriteria = excludedCriteria.concat(pathologyOptions.filter((option) => (options.selectedPathologyOptions || this.state.selectedPathologyOptions).indexOf(option.option) === -1));
        excludedCriteria = excludedCriteria.concat(treatmentHistoryOptions.filter((option) => (options.selectedTreatmentHistoryOptions || this.state.selectedTreatmentHistoryOptions).indexOf(option.option) === -1));
        excludedCriteria = excludedCriteria.concat(geneticsOptions.filter((option) => (options.selectedGeneticsOptions || this.state.selectedGeneticsOptions).indexOf(option.option) === -1));
        excludedCriteria = excludedCriteria.concat(medicalHistoryOptions.filter((option) => (options.selectedMedicalHistoryOptions || this.state.selectedMedicalHistoryOptions).indexOf(option.option) === -1));

        this.setState({
            ...options,
            excludedCriteria: excludedCriteria.map(({ option }) => option)
        });
    }

    renderedSimilarPatientsSubtitle(numPatients) {
        return <div><span className="bold">{numPatients}</span> patients</div>;
    }

    renderedSimilarPatientsSubheader() {
        const {
            demographicOptions,
            pathologyOptions,
            treatmentHistoryOptions,
            geneticsOptions,
            medicalHistoryOptions,
            excludedCriteria
        } = this.state;
        const totalOptions = demographicOptions.length + pathologyOptions.length + treatmentHistoryOptions.length + geneticsOptions.length + medicalHistoryOptions.length;

        let excludedCriteriaDisplay;
        if (excludedCriteria.length === 0) {
            excludedCriteriaDisplay = <em>none</em>;
        } else if (excludedCriteria.length === totalOptions) {
            excludedCriteriaDisplay = <em>all</em>;
        } else {
            excludedCriteriaDisplay = excludedCriteria.map((criteria, i) => (
                <span key={i}>
                    {criteria.split(':')[0]}{i !== excludedCriteria.length - 1 && <span>, </span>}
                </span>
            ));
        }

        return (
            <div>
                <span className="bold italic">excluded</span> criteria:
                <span className="muted">{excludedCriteriaDisplay}</span>
            </div>
        );
    }

    render() {
        const { totalPatients, condition, patient } = this.props;

        return (
            <div className="treatment-options-visualizer">
                <div className="treatment-options-visualizer__info">
                    Outcomes and criteria for {numberWithCommas(totalPatients)} with {condition.type} were collected
                    by CancerLinQ
                </div>

                <TreatmentOptionsSelector
                    title="Similar patients"
                    subTitle={this.renderedSimilarPatientsSubtitle(156)}
                    subHeader={this.renderedSimilarPatientsSubheader()}>
                    <SimilarPatientsSelector
                        patient={patient}
                        condition={condition}
                        setOptions={this.setOptions}
                        demographicOptions={this.state.demographicOptions}
                        pathologyOptions={this.state.pathologyOptions}
                        treatmentHistoryOptions={this.state.treatmentHistoryOptions}
                        geneticsOptions={this.state.geneticsOptions}
                        medicalHistoryOptions={this.state.medicalHistoryOptions}
                        selectedDemographicOptions={this.state.selectedDemographicOptions}
                        selectedPathologyOptions={this.state.selectedPathologyOptions}
                        selectedTreatmentHistoryOptions={this.state.selectedTreatmentHistoryOptions}
                        selectedGeneticsOptions={this.state.selectedGeneticsOptions}
                        selectedMedicalHistoryOptions={this.state.selectedMedicalHistoryOptions}
                    />
                </TreatmentOptionsSelector>

                <TreatmentOptionsSelector
                    title="Outcomes"
                    subTitle="cancer specific survival rate, ECOG score, Hospitalization due to side effects">
                    <TreatmentOptionsOutcomes headers={headers} />
                </TreatmentOptionsSelector>

            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    totalPatients: PropTypes.number.isRequired,
    condition: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired
}

TreatmentOptionsVisualizer.defaultProps = {
    totalPatients: 156765 // TODO: hook up
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OptionsCheckboxList from '../OptionsCheckboxList/OptionsCheckboxList';

import './SimilarPatientsSelector.css';

export default class SimilarPatientsSelector extends Component {
    selectOption = ({ target }) => {
        if (target.getAttribute('data-select') === 'all') {
            const {
                demographicOptions,
                pathologyOptions,
                treatmentHistoryOptions,
                geneticsOptions,
                medicalHistoryOptions
            } = this.props;

            this.props.setOptions({
                selectedDemographicOptions: demographicOptions.map(({ option }) => option),
                selectedPathologyOptions: pathologyOptions.map(({ option }) => option),
                selectedTreatmentHistoryOptions: treatmentHistoryOptions.map(({ option }) => option),
                selectedGeneticsOptions: geneticsOptions.map(({ option }) => option),
                selectedMedicalHistoryOptions: medicalHistoryOptions.map(({ option }) => option)
            });
        } else {
            this.props.setOptions({
                selectedDemographicOptions: [],
                selectedPathologyOptions: [],
                selectedTreatmentHistoryOptions: [],
                selectedGeneticsOptions: [],
                selectedMedicalHistoryOptions: []
            });
        }
    }

    render() {
        const {
            setOptions,
            demographicOptions,
            pathologyOptions,
            treatmentHistoryOptions,
            geneticsOptions,
            medicalHistoryOptions,
            selectedDemographicOptions,
            selectedGeneticsOptions,
            selectedPathologyOptions,
            selectedTreatmentHistoryOptions,
            selectedMedicalHistoryOptions
        } = this.props;

        return (
            <div className="similar-patients-selector">
                <div className="similar-patients-selector__select-buttons">
                    <button className="select-all" onClick={this.selectOption} data-select="all">select all</button>
                    <button className="select-none" onClick={this.selectOption} data-select="none">select none</button>
                </div>

                <div className="similar-patients-selector__options">
                    <OptionsCheckboxList
                        optionsHeader='demographic'
                        options={demographicOptions}
                        selectedOptions={selectedDemographicOptions}
                        setSelected={(selectedDemographicOptions) => setOptions({ selectedDemographicOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader='pathology'
                        options={pathologyOptions}
                        selectedOptions={selectedPathologyOptions}
                        setSelected={(selectedPathologyOptions) => setOptions({ selectedPathologyOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader='treatment history'
                        options={treatmentHistoryOptions}
                        selectedOptions={selectedTreatmentHistoryOptions}
                        setSelected={(selectedTreatmentHistoryOptions) => setOptions({ selectedTreatmentHistoryOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader='genetics'
                        options={geneticsOptions}
                        selectedOptions={selectedGeneticsOptions}
                        setSelected={(selectedGeneticsOptions) => setOptions({ selectedGeneticsOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader='medical history'
                        options={medicalHistoryOptions}
                        selectedOptions={selectedMedicalHistoryOptions}
                        setSelected={(selectedMedicalHistoryOptions) => setOptions({ selectedMedicalHistoryOptions })}
                    />
                </div>
            </div>
        );
    }
}

SimilarPatientsSelector.propTypes = {
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object.isRequired,
    setOptions: PropTypes.func.isRequired,
    demographicOptions: PropTypes.array.isRequired,
    pathologyOptions: PropTypes.array.isRequired,
    treatmentHistoryOptions: PropTypes.array.isRequired,
    geneticsOptions: PropTypes.array.isRequired,
    medicalHistoryOptions: PropTypes.array.isRequired,
    selectedDemographicOptions: PropTypes.array.isRequired,
    selectedPathologyOptions: PropTypes.array.isRequired,
    selectedTreatmentHistoryOptions: PropTypes.array.isRequired,
    selectedGeneticsOptions: PropTypes.array.isRequired,
    selectedMedicalHistoryOptions: PropTypes.array.isRequired
};

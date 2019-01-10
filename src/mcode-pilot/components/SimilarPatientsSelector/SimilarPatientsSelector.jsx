import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OptionsCheckboxList from '../OptionsCheckboxList/OptionsCheckboxList';

import './SimilarPatientsSelector.css';

export default class SimilarPatientsSelector extends Component {
    // setOptions = (options) => {
    //     const {
    //         demographicOptions,
    //         pathologyOptions,
    //         treatmentHistoryOptions,
    //         geneticsOptions,
    //         medicalHistoryOptions
    //     } = this.state;
    //     let excludedCriteria = [];

    //     excludedCriteria = excludedCriteria.concat(demographicOptions.filter((option) => (options.selectedDemographicOptions || this.state.selectedDemographicOptions).indexOf(option.option) === -1));
    //     excludedCriteria = excludedCriteria.concat(pathologyOptions.filter((option) => (options.selectedPathologyOptions || this.state.selectedPathologyOptions).indexOf(option.option) === -1));
    //     excludedCriteria = excludedCriteria.concat(treatmentHistoryOptions.filter((option) => (options.selectedTreatmentHistoryOptions || this.state.selectedTreatmentHistoryOptions).indexOf(option.option) === -1));
    //     excludedCriteria = excludedCriteria.concat(geneticsOptions.filter((option) => (options.selectedGeneticsOptions || this.state.selectedGeneticsOptions).indexOf(option.option) === -1));
    //     excludedCriteria = excludedCriteria.concat(medicalHistoryOptions.filter((option) => (options.selectedMedicalHistoryOptions || this.state.selectedMedicalHistoryOptions).indexOf(option.option) === -1));

    //     this.setState({
    //         ...options,
    //         excludedCriteria: excludedCriteria.map(({ option }) => option)
    //     });
    // }

    render() {
        const {
            // setOptions,
            // demographicOptions,
            // pathologyOptions,
            // treatmentHistoryOptions,
            // geneticsOptions,
            // medicalHistoryOptions,
            // selectedDemographicOptions,
            // selectedGeneticsOptions,
            // selectedPathologyOptions,
            // selectedTreatmentHistoryOptions,
            // selectedMedicalHistoryOptions,
            similarPatientProps,
            selectSimilarPatientOption,
            selectAllCategorySimilarPatientOptions,
            selectAllSimilarPatientOptions
        } = this.props;

        return (
            <div className="similar-patients-selector">
                <div className="similar-patients-selector__select-buttons">
                    <button
                        className="select-all"
                        onClick={() => selectAllSimilarPatientOptions(true)}>
                        select all
                    </button>

                    <button
                        className="select-none"
                        onClick={() => selectAllSimilarPatientOptions(false)}>
                        unselect all
                    </button>
                </div>

                <div className="similar-patients-selector__options">
                    <OptionsCheckboxList
                        options={similarPatientProps.demographic}
                        setSelected={(key, selected) => selectSimilarPatientOption('demographic', key, selected)}
                        setAllSelected={(selected) => selectAllCategorySimilarPatientOptions('demographic', selected)}
                    />

                    {/*<OptionsCheckboxList
                        optionsHeader="pathology"
                        options={pathologyOptions}
                        selectedOptions={selectedPathologyOptions}
                        setSelected={(selectedPathologyOptions) => setOptions({ selectedPathologyOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader="treatment history"
                        options={treatmentHistoryOptions}
                        selectedOptions={selectedTreatmentHistoryOptions}
                        setSelected={(selectedTreatmentHistoryOptions) => setOptions({ selectedTreatmentHistoryOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader="genetics"
                        options={geneticsOptions}
                        selectedOptions={selectedGeneticsOptions}
                        setSelected={(selectedGeneticsOptions) => setOptions({ selectedGeneticsOptions })}
                    />

                    <OptionsCheckboxList
                        optionsHeader="medical history"
                        options={medicalHistoryOptions}
                        selectedOptions={selectedMedicalHistoryOptions}
                        setSelected={(selectedMedicalHistoryOptions) => setOptions({ selectedMedicalHistoryOptions })}
                    /> */}
                </div>
            </div>
        );
    }
}

SimilarPatientsSelector.propTypes = {
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object.isRequired,
    // setOptions: PropTypes.func.isRequired,
    // demographicOptions: PropTypes.array.isRequired,
    // pathologyOptions: PropTypes.array.isRequired,
    // treatmentHistoryOptions: PropTypes.array.isRequired,
    // geneticsOptions: PropTypes.array.isRequired,
    // medicalHistoryOptions: PropTypes.array.isRequired,
    // selectedDemographicOptions: PropTypes.array.isRequired,
    // selectedPathologyOptions: PropTypes.array.isRequired,
    // selectedTreatmentHistoryOptions: PropTypes.array.isRequired,
    // selectedGeneticsOptions: PropTypes.array.isRequired,
    // selectedMedicalHistoryOptions: PropTypes.array.isRequired,
    similarPatientProps: PropTypes.object.isRequired,
    selectSimilarPatientOption: PropTypes.func.isRequired,
    selectAllCategorySimilarPatientOptions: PropTypes.func.isRequired,
    selectAllSimilarPatientOptions: PropTypes.func.isRequired
};

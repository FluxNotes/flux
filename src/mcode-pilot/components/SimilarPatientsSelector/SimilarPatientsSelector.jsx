import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OptionsCheckboxList from '../OptionsCheckboxList/OptionsCheckboxList';

import './SimilarPatientsSelector.css';

export default class SimilarPatientsSelector extends Component {
    render() {
        const {
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

                    <OptionsCheckboxList
                        options={similarPatientProps.pathology}
                        setSelected={(key, selected) => selectSimilarPatientOption('pathology', key, selected)}
                        setAllSelected={(selected) => selectAllCategorySimilarPatientOptions('pathology', selected)}
                    />

                    <OptionsCheckboxList
                        options={similarPatientProps.treatmentHistory}
                        setSelected={(key, selected) => selectSimilarPatientOption('treatmentHistory', key, selected)}
                        setAllSelected={(selected) => selectAllCategorySimilarPatientOptions('treatmentHistory', selected)}
                    />

                    <OptionsCheckboxList
                        options={similarPatientProps.genetics}
                        setSelected={(key, selected) => selectSimilarPatientOption('genetics', key, selected)}
                        setAllSelected={(selected) => selectAllCategorySimilarPatientOptions('genetics', selected)}
                    />

                    <OptionsCheckboxList
                        options={similarPatientProps.medicalHistory}
                        setSelected={(key, selected) => selectSimilarPatientOption('medicalHistory', key, selected)}
                        setAllSelected={(selected) => selectAllCategorySimilarPatientOptions('medicalHistory', selected)}
                    />
                </div>
            </div>
        );
    }
}

SimilarPatientsSelector.propTypes = {
    patient: PropTypes.object.isRequired,
    condition: PropTypes.object.isRequired,
    similarPatientProps: PropTypes.object.isRequired,
    selectSimilarPatientOption: PropTypes.func.isRequired,
    selectAllCategorySimilarPatientOptions: PropTypes.func.isRequired,
    selectAllSimilarPatientOptions: PropTypes.func.isRequired
};

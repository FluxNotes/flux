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
                    {Object.keys(similarPatientProps).map((option) => {
                        return (
                            <OptionsCheckboxList
                                key={option}
                                options={similarPatientProps[option]}
                                setSelected={(key, selected) => selectSimilarPatientOption(option, key, selected)}
                                setAllSelected={(selected) => selectAllCategorySimilarPatientOptions(option, selected)}
                            />
                        )
                    })}
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

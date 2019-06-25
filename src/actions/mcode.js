import * as types from './types';
import ServiceManager from '../config/ServiceManager';

// ------------------------- SIMILAR PATIENT OPTIONS ----------------------- //

function initializeSimilarPatientProps(patient, condition) {
    return {
        type: types.INITIALIZE_SIMILAR_PATIENT_PROPS,
        patient,
        condition
    };
}

function selectSimilarPatientOption(category, key, selected) {
    return {
        type: types.SELECT_SIMILAR_PATIENT_OPTION,
        category,
        key,
        selected
    };
}

function selectSimilarPatientOptionRange(category, key, minValue, maxValue) {
    return {
        type: types.SELECT_SIMILAR_PATIENT_OPTION_RANGE,
        category,
        key,
        minValue,
        maxValue
    };
}

function selectAllCategorySimilarPatientOptions(category, selected) {
    return {
        type: types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS,
        category,
        selected
    };
}

function selectAllSimilarPatientOptions(selected) {
    return {
        type: types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS,
        selected
    };
}

// ------------------------- TREATMENT OUTCOMES ---------------------------- //

function updatePatientOutcomes(data) {
    return {
        type: types.UPDATE_PATIENT_OUTCOMES,
        data
    };
}

function processSimilarPatientOutcomes() {
    return (dispatch, getState) => {
        const { similarPatientProps } = getState().mcode;
        const service = new ServiceManager().getService('outcomes');
        return service.processSimilarPatientOutcomes(similarPatientProps).then(results => {
            dispatch(updatePatientOutcomes({
                totalPatients: results.totalPatients,
                totalSimilarPatients: results.totalSimilarPatients,
                similarPatientTreatments: results.similarPatientTreatments,
                similarPatientTreatmentsData: results.similarPatientTreatmentsData
            }));
        });
    };
}

export {
    initializeSimilarPatientProps,
    processSimilarPatientOutcomes,
    selectAllCategorySimilarPatientOptions,
    selectAllSimilarPatientOptions,
    selectSimilarPatientOption,
    selectSimilarPatientOptionRange,
};

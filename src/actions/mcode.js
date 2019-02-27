import * as types from './types';

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

function processSimilarPatientOutcomes() {
    return {
        type: types.PROCESS_SIMILAR_PATIENT_OUTCOMES
    };
}

function selectTreatments(treatmentType, treatments) {
    return {
        type: types.SELECT_TREATMENTS,
        treatmentType,
        treatments
    };
}

export {
    selectSimilarPatientOption,
    initializeSimilarPatientProps,
    selectAllSimilarPatientOptions,
    selectAllCategorySimilarPatientOptions,
    processSimilarPatientOutcomes,
    selectTreatments
};

import * as types from './types';

// ------------------------- SIMILAR PATIENT OPTIONS ----------------------- //

function initializeSimilarPatientProps(patientAge, patientAgeAtDiagnosis, patientRace, patientGender) {
    return {
        type: types.INITIALIZE_SIMILAR_PATIENT_PROPS,
        patientAge,
        patientAgeAtDiagnosis,
        patientRace,
        patientGender
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

export {
    selectSimilarPatientOption,
    initializeSimilarPatientProps,
    selectAllSimilarPatientOptions,
    selectAllCategorySimilarPatientOptions
}

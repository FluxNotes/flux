import * as types from './types';
import {default as config} from '../config'

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

function updatePatientOutcomes(data) {
    return {
        type: types.UPDATE_PATIENT_OUTCOMES,
        data
    };
}

function processSimilarPatientOutcomes() {
  return (dispatch, getState) => {
    const {similarPatientProps, includedTreatments, comparedTreatments} = getState().mcode
    return config.OutcomesService.processSimilarPatientOutcomes(similarPatientProps, includedTreatments, comparedTreatments).then((results) =>{
      dispatch(updatePatientOutcomes({
         totalPatients: results.totalPatients,
         totalSimilarPatients: results.totalSimilarPatients,
         similarPatientTreatments:  results.similarPatientTreatments,
         includedTreatmentData: results.includedTreatmentData,
         comparedTreatmentData: results.comparedTreatmentData
       }))
   })
  }
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

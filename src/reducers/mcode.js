import * as types from '../actions/types';
import getProps from '../mcode-pilot/utils/recordToProps';
import { isSimilarPatient, generateSimilarPatientTreatments } from '../mcode-pilot/utils/filterTreatmentData.js';
import FilterOptions from '../mcode-pilot/utils/FilterOptions';
const transformedTreatmentData = require('../mcode-pilot/mock-data/mock-data.json').transformedData;

export const defaultState = {
    similarPatientProps: {},
    similarPatientTreatments: [],
    similarPatientTreatmentsData: [],
    totalPatients: 0,
    totalSimilarPatients: 0,
    timescale: []
};

export default function mcode(state = defaultState, action) {
    if (action.type === types.INITIALIZE_SIMILAR_PATIENT_PROPS) {
        const { patient, condition } = action;
        const similarPatients = transformedTreatmentData.filter(treatmentDataPatient =>
            isSimilarPatient(treatmentDataPatient, new FilterOptions(state.similarPatientProps)));
        const similarPatientTreatments = generateSimilarPatientTreatments(similarPatients);

        return {
            ...state,
            similarPatientProps: { ...getProps(patient, condition) },
            similarPatientTreatments,
            totalSimilarPatients: similarPatients.length,
        };
    }

    if (action.type === types.SELECT_SIMILAR_PATIENT_OPTION) {
        const { category, key, selected } = action;
        state.similarPatientProps = { ...state.similarPatientProps };
        state.similarPatientProps[category].options[key] = { ...state.similarPatientProps[category].options[key], selected };

        state.similarPatientProps[category] = {
            ...state.similarPatientProps[category],
            selected: Object.keys(state.similarPatientProps[category].options).every(key =>
                state.similarPatientProps[category].options[key].selected
            )
        };

        return { ...state };
    }

    if (action.type === types.SELECT_SIMILAR_PATIENT_OPTION_RANGE) {
        const { category, key, minValue, maxValue } = action;
        state.similarPatientProps = { ...state.similarPatientProps };
        state.similarPatientProps[category].options[key] = {
            ...state.similarPatientProps[category].options[key],
            minValue,
            maxValue
        };
        return { ...state };
    }

    if (action.type === types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS) {
        state.similarPatientProps = { ...state.similarPatientProps };
        state.similarPatientProps[action.category].selected = action.selected;

        Object.keys(state.similarPatientProps[action.category].options).forEach(option => {
            state.similarPatientProps[action.category].options[option] = {
                ...state.similarPatientProps[action.category].options[option],
                selected: action.selected
            };
        });

        return { ...state };
    }

    if (action.type === types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS) {
        const { selected } = action;

        state.similarPatientProps = { ...state.similarPatientProps };
        Object.keys(state.similarPatientProps).forEach(category => {
            state.similarPatientProps[category] = { ...state.similarPatientProps[category], selected };
            Object.keys(state.similarPatientProps[category].options).forEach(option => {
                state.similarPatientProps[category].options[option] = {
                    ...state.similarPatientProps[category].options[option],
                    selected
                };
            });
        });

        return { ...state };
    }

    if (action.type === types.UPDATE_PATIENT_OUTCOMES) {
        return {
            ...state,
            totalPatients: action.data.totalPatients,
            totalSimilarPatients: action.data.totalSimilarPatients,
            similarPatientTreatments: action.data.similarPatientTreatments,
            similarPatientTreatmentsData: action.data.similarPatientTreatmentsData,
            timescale: action.data.timescale
        };
    }

    return state;
}

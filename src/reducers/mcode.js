import * as types from '../actions/types';
import _ from 'lodash';

import filterTreatmentData from '../mcode-pilot/utils/filterTreatmentData';

import defaultState from './initial.json';
import getProps from '../mcode-pilot/utils/recordToProps'
export default function mcode(state = defaultState, action) {
    if (action.type === types.INITIALIZE_SIMILAR_PATIENT_PROPS) {
        const { patient, condition } = action;
        state.similarPatientProps={ ...getProps(patient,condition)};
        return { ...state };
    } else if (action.type === types.SELECT_SIMILAR_PATIENT_OPTION) {
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
    } else if (action.type === types.SELECT_ALL_CATEGORY_SIMILAR_PATIENT_OPTIONS) {
        state.similarPatientProps = { ...state.similarPatientProps };
        state.similarPatientProps[action.category].selected = action.selected;

        Object.keys(state.similarPatientProps[action.category].options).forEach(option => {
            state.similarPatientProps[action.category].options[option] = {
                ...state.similarPatientProps[action.category].options[option],
                selected: action.selected
            };
        });

        return { ...state };
    } else if (action.type === types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS) {
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
    } else if (action.type === types.PROCESS_SIMILAR_PATIENT_OUTCOMES || action.type === types.SELECT_TREATMENTS) {
        const newState = {
            ...state
        };

        if (action.type === types.SELECT_TREATMENTS) {
            newState[action.treatmentType] = action.treatments;
        }

        const {
            totalPatients,
            totalSimilarPatients,
            similarPatientTreatments,
            includedTreatmentData,
            comparedTreatmentData
        } = filterTreatmentData(newState.similarPatientProps, newState.includedTreatments, newState.comparedTreatments);

        return {
            ...newState,
            totalPatients,
            totalSimilarPatients,
            similarPatientTreatments,
            includedTreatmentData,
            comparedTreatmentData
        };
    }

    return state;
}

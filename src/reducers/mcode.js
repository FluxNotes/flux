import * as types from '../actions/types';
import getProps from '../mcode-pilot/utils/recordToProps';
import getSideEffects from '../mcode-pilot/utils/sideEffects';

export const defaultState = {
    selectedSideEffects: 'Most Common',
    selectedTreatment: null,
    showSideEffects: true,
    sideEffects: [],
    similarPatientProps: {},
    similarPatientTreatments: [],
    similarPatientTreatmentsData: [],
    timescale: [],
    totalPatients: 0,
    totalSimilarPatients: 0
};

export default function mcode(state = defaultState, action) {
    if (action.type === types.INITIALIZE_SIMILAR_PATIENT_PROPS) {
        const { patient, condition, filters } = action;
        return {
            ...state,
            similarPatientProps: { ...getProps(patient, condition, filters) }
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
        const newSideEffects = getSideEffects(action.data.similarPatientTreatmentsData);
        let newSelectedSideEffects = state.selectedSideEffects;
        if (newSideEffects.indexOf(state.selectedSideEffects) === -1) newSelectedSideEffects = 'Most Common';

        return {
            ...state,
            showSideEffects: action.data.showSideEffects,
            selectedSideEffects: newSelectedSideEffects,
            sideEffects: newSideEffects,
            similarPatientTreatments: action.data.similarPatientTreatments,
            similarPatientTreatmentsData: action.data.similarPatientTreatmentsData,
            timescale: action.data.timescale,
            totalPatients: action.data.totalPatients,
            totalSimilarPatients: action.data.totalSimilarPatients
        };
    }

    if (action.type === types.SET_SELECTED_TREATMENT) {
        return {
            ...state,
            selectedTreatment: action.treatment
        };
    }

    if (action.type === types.SET_SELECTED_SIDE_EFFECTS) {
        return {
            ...state,
            selectedSideEffects: action.sideEffects
        };
    }

    return state;
}

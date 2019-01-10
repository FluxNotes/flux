import * as types from '../actions/types';
import _ from 'lodash';

const defaultState = {
    similarPatientProps: {
        demographic: {
            selected: true,
            displayText: 'demographic',
            options: {
                age: { selected: true, displayText: 'age', minValue: 0, maxValue: 0 },
                diagnosedAge: { selected: true, displayText: 'age at diagnosis', minValue: 0, maxValue: 0 },
                race: { selected: true, displayText: 'race', value: '' },
                gender: { selected: true, displayText: 'gender', value: '' }
            }
        }
    }
};

export default function mcode(state = defaultState, action) {
    if (action.type === types.INITIALIZE_SIMILAR_PATIENT_PROPS) {
        const { patientAge, patientAgeAtDiagnosis, patientRace, patientGender } = action;
        const demographicOptions = state.similarPatientProps.demographic.options;

        // age
        const maxAge = patientAge + 10;
        let minAge = patientAge - 10;
        if (minAge < 0) minAge = 0;
        demographicOptions.age.minValue = minAge;
        demographicOptions.age.maxValue = maxAge;

        // age at diagnosis
        const maxAgeAtDiagnosis = patientAgeAtDiagnosis + 10;
        let minAgeAtDiagnosis = patientAgeAtDiagnosis - 10;
        if (minAgeAtDiagnosis < 0) minAgeAtDiagnosis = 0;
        demographicOptions.diagnosedAge.minValue = minAgeAtDiagnosis;
        demographicOptions.diagnosedAge.maxValue = maxAgeAtDiagnosis;

        // race
        demographicOptions.race.value = _.lowerCase(patientRace);

        // gender
        demographicOptions.gender.value = _.lowerCase(patientGender);

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

        Object.keys(state.similarPatientProps[action.category].options).forEach((option) => {
            state.similarPatientProps[action.category].options[option] = {
                ...state.similarPatientProps[action.category].options[option],
                selected: action.selected
            };
        });

        return { ...state };
    } else if (action.type === types.SELECT_ALL_SIMILAR_PATIENT_OPTIONS) {
        const { selected } = action;

        state.similarPatientProps = { ...state.similarPatientProps };
        Object.keys(state.similarPatientProps).forEach((category) => {
            state.similarPatientProps[category] = { ...state.similarPatientProps[category], selected };
            Object.keys(state.similarPatientProps[category].options).forEach((option) => {
                state.similarPatientProps[category].options[option] = {
                    ...state.similarPatientProps[category].options[option],
                    selected
                };
            });
        });

        return { ...state };
    }

    return state;
}

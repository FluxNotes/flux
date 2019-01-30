import * as types from '../actions/types';
import _ from 'lodash';

import filterSeerData from '../mcode-pilot/utils/filterSeerData';

const defaultState = {
    totalPatients: 0,
    similarPatients: [],
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
        },
        pathology: {
            selected: true,
            displayText: 'pathology',
            options: {
                ER: { selected: true, displayText: 'ER', value: 'negative' },
                PR: { selected: true, displayText: 'PR', value: 'positive' },
                HER2: { selected: true, displayText: 'HER2', value: 'positive' },
                grade: { selected: true, displayText: 'grade', value: 3 },
                size: { selected: true, displayText: 'size (mm)', minValue: 10, maxValue: 20 }
            }
        },
        treatmentHistory: {
            selected: true,
            displayText: 'treatment history',
            options: {
                hadSurgery: { selected: true, displayText: 'had surgery', value: 'yes' },
                receivedRadTherapy: { selected: true, displayText: 'received radiation therapy', value: 'yes' },
                receivedChemo: { selected: true, displayText: 'received chemotherapy', value: 'yes' }
            }
        },
        genetics: {
            selected: true,
            displayText: 'genetics',
            options: {
                BRCA1: { selected: true, displayText: 'BRCA1', value: 'negative' },
                BRCA2: { selected: true, displayText: 'BRCA2', value: 'negative' }
            }
        },
        medicalHistory: {
            selected: true,
            displayText: 'medical history',
            options: {
                ECOG: { selected: true, displayText: 'ECOG score', minValue: 2, maxValue: 3 }
            }
        }
    }
};

export default function mcode(state = defaultState, action) {
    if (action.type === types.INITIALIZE_SIMILAR_PATIENT_PROPS) {
        const { patientAge, patientAgeAtDiagnosis, patientRace, patientGender } = action;
        const demographicOptions = state.similarPatientProps.demographic.options;

        // demographics - age
        const maxAge = patientAge + 10;
        let minAge = patientAge - 10;
        if (minAge < 0) minAge = 0;
        demographicOptions.age.minValue = minAge;
        demographicOptions.age.maxValue = maxAge;

        // demographics - age at diagnosis
        const maxAgeAtDiagnosis = patientAgeAtDiagnosis + 10;
        let minAgeAtDiagnosis = patientAgeAtDiagnosis - 10;
        if (minAgeAtDiagnosis < 0) minAgeAtDiagnosis = 0;
        demographicOptions.diagnosedAge.minValue = minAgeAtDiagnosis;
        demographicOptions.diagnosedAge.maxValue = maxAgeAtDiagnosis;

        // demographics - race
        demographicOptions.race.value = _.lowerCase(patientRace);

        // demographics - gender
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
    } else if (action.type === types.PROCESS_SIMILAR_PATIENT_OUTCOMES) {
        const { totalPatients, similarPatients } = filterSeerData(state.similarPatientProps);

        return {
            ...state,
            totalPatients,
            similarPatients
        };
    }

    return state;
}

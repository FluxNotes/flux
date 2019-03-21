import _ from 'lodash';
import { transformedTreatmentData } from '../mock-data/mock-data.js';
import { isSame, getCombinations } from './arrayOperations';

const TREATMENT_NAMES = {
    'noTreatment': 'none (actively monitoring)',
    'chemotherapy': 'chemotherapy',
    'hormonal': 'hormonal therapy',
    'surgery': 'surgery',
    'radiation': 'radiation therapy'
};

const SIDE_EFFECT_NAMES = {
    'hotFlash': 'Hot Flashes',
    'decLibido': 'Decreased Libido',
    'fatigue': 'Fatigue',
    'nauseaVomiting': 'Nausea/Vomiting',
    'anemia': 'Anemia',
    'bowelDys': 'Bowel Dysfunction',
    'erectileDys': 'Erectile Dysfunction',
    'weightLoss': 'Weight Loss',
    'urinaryDys': 'Urinary Dysfunction'
};

// This function will eventually be replaced with an API that returns the same data in the same format
export default function filterTreatmentData(similarPatientProps, includedTreatments, comparedTreatments) {
    const totalPatients = transformedTreatmentData.length;
    const similarPatients = transformedTreatmentData.filter(treatmentDataPatient => isSimilarPatient(treatmentDataPatient, similarPatientProps));
    const totalSimilarPatients = similarPatients.length;
    const similarPatientTreatments = generateSimilarPatientTreatments(similarPatients);
    const includedTreatmentData = generateTreatmentData(similarPatients, [includedTreatments], includedTreatments);
    const comparedTreatmentCombinations = getCombinations(comparedTreatments, includedTreatments).filter(treatments =>
        treatments.length !== includedTreatments.length || !includedTreatments.every(treatment => treatments.includes(treatment))
    );
    const comparedTreatmentData = generateTreatmentData(similarPatients, comparedTreatmentCombinations, includedTreatments);

    return {
        totalPatients,
        totalSimilarPatients,
        similarPatientTreatments,
        includedTreatmentData,
        comparedTreatmentData
    };
}

function initializeTreatmentData(displayName) {
    return {
        id: _.uniqueId('row_'),
        displayName,
        totalPatients: 0,
        oneYrSurvival: 0,
        threeYrSurvival: 0,
        fiveYrSurvival: 0,
        sideEffects: {
            totalReporting: 0,
            effects: {}
        }
    };
}

function generateTreatmentData(similarPatients, treatments, includedTreatments) {
    if (similarPatients.length === 0) return [];

    let treatmentData = [];
    treatments.forEach(treatment => {
        const filteredPatients = similarPatients.filter(patient => isSame(patient.treatments, treatment));
        let displayName = _.isArray(treatment) ?
            treatment === includedTreatments ?
                treatment.map(name => TREATMENT_NAMES[name]).join(' & ') :
                treatment.filter((treat) => {
                    return !includedTreatments.includes(treat);
                }).map(name => TREATMENT_NAMES[name]).join(' & ') :
            TREATMENT_NAMES[treatment];

        let row = initializeTreatmentData(displayName);
        filteredPatients.forEach(patient => {
            row.totalPatients += 1;

            const survivalYears = Math.floor(patient.diseaseStatus.survivalMonths / 12);
            if (survivalYears >= 1) row.oneYrSurvival += 1;
            if (survivalYears >= 3) row.threeYrSurvival += 1;
            if (survivalYears >= 5) row.fiveYrSurvival += 1;

            if (patient.sideEffects.length > 0) {
                row.sideEffects.totalReporting += 1;
                patient.sideEffects.forEach(sideEffectKey => {
                    const sideEffect = SIDE_EFFECT_NAMES[sideEffectKey];
                    if (!row.sideEffects.effects[sideEffect]) row.sideEffects.effects[sideEffect] = 0;
                    row.sideEffects.effects[sideEffect] += 1;
                });
            }
        });

        if (row.totalPatients > 0) {
            treatmentData.push(row);
        }
    });

    console.debug('treatmentData:', treatmentData);
    return treatmentData;
}

function generateSimilarPatientTreatments(similarPatients) {
    let similarPatientTreatments = {};

    similarPatients.forEach(({ treatments }) => {
        treatments.forEach(treatment => {
            similarPatientTreatments[treatment] = { key: treatment, name: TREATMENT_NAMES[treatment] };
        });
    });

    return Object.values(similarPatientTreatments).sort((a, b) => a.name.localeCompare(b.name));
}

function isSimilarPatient(treatmentDataPatient, similarPatientProps) {
    const categoryKeys = Object.keys(similarPatientProps);

    for (let i = 0; i < categoryKeys.length; i++) {
        let category = categoryKeys[i];
        const { options } = similarPatientProps[category];
        const optionKeys = Object.keys(options);
        for (let j = 0; j < optionKeys.length; j++) {
            const option = optionKeys[j];
            if (options[option].selected) {
                const { minValue, maxValue } = options[option];
                const value = _.lowerCase(options[option].value);

                // demographics
                const { demographics, diseaseStatus, tumorMarkers, treatments } = treatmentDataPatient;
                const { race, gender, birthDate } = demographics;

                if (option === 'age') {
                    const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
                    const age = (new Date()).getFullYear() - birthYear;

                    if (age < minValue || age > maxValue) {
                        return false;
                    }
                } else if (option === 'diagnosedAge') {
                    const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
                    const [dxYear] = diseaseStatus.diagnosisDate.split('-').map((value) => parseInt(value, 10));
                    const dxAge = dxYear - birthYear;

                    if (dxAge < minValue || dxAge > maxValue) {
                        return false;
                    }
                } else if (option === 'race' && value !== _.lowerCase(race)) {
                    return false;
                } else if (option === 'gender' && value !== _.lowerCase(gender)) {
                    return false;
                // pathology
                } else if (option === 'ER' && (!tumorMarkers.er || _.lowerCase(tumorMarkers.er) !== _.lowerCase(value))) {
                    return false;
                } else if (option === 'PR' && (!tumorMarkers.pr || _.lowerCase(tumorMarkers.pr) !== _.lowerCase(value))) {
                    return false;
                } else if (option === 'HER2' && (!tumorMarkers.her2 || _.lowerCase(tumorMarkers.her2) !== _.lowerCase(value))) {
                    return false;
                } else if (option === 'stage' && (!diseaseStatus.stage || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
                    return false;
                } else if (option === 'grade' && (!diseaseStatus.grade || diseaseStatus.grade !== value)) {
                    return false;
                // treatment history
                } else if (option === 'receivedRadTherapy') {
                    let hadTreatmentOption = value === 'yes';
                    let hadTreatment = treatments.includes('radiation');
                    if ((!hadTreatmentOption && hadTreatment) || (hadTreatmentOption && !hadTreatment)) {
                        return false;
                    }
                } else if (option === 'receivedChemo') {
                    let hadTreatmentOption = value === 'yes';
                    let hadTreatment = treatments.includes('chemo') || treatments.includes('chemotherapy');
                    if ((!hadTreatmentOption && hadTreatment) || (hadTreatmentOption && !hadTreatment)) {
                        return false;
                    }
                } else if (option === 'hadSurgery') {
                    let hadTreatmentOption = value === 'yes';
                    let hadTreatment = treatments.includes('surgery');
                    if ((!hadTreatmentOption && hadTreatment) || (hadTreatmentOption && !hadTreatment)) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
}

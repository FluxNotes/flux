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
        let displayName =
            _.isArray(treatment)
                ? (treatment === includedTreatments)
                    ? treatment.map(name => TREATMENT_NAMES[name]).join(' & ')
                    : treatment.filter((treat) => {
                        return !includedTreatments.includes(treat);
                    }).map(name => TREATMENT_NAMES[name]).join(' & ')
                : TREATMENT_NAMES[treatment];

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
                const { minValue, maxValue, mcodeElement, reference } = options[option];
                const value = _.lowerCase(options[option].value);

                // demographics
                const { demographics, diseaseStatus, tumorMarkers } = treatmentDataPatient;
                const { race, gender, birthDate } = demographics;
                if (mcodeElement === 'shr.core.DateOfBirth') {
                    // age
                    const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
                    const age = (new Date()).getFullYear() - birthYear;

                    if (age < minValue || age > maxValue) {
                        return false;
                    }
                } else if (mcodeElement === 'shr.core.DateOfDiagnosis') {
                    // age at diagnosis
                    const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
                    const [dxYear] = diseaseStatus.diagnosisDate.split('-').map((value) => parseInt(value, 10));
                    const dxAge = dxYear - birthYear;

                    if (dxAge < minValue || dxAge > maxValue) {
                        return false;
                    }
                } else if (mcodeElement === 'shr.core.Race' && value !== _.lowerCase(race)) {
                    return false;
                } else if (mcodeElement === 'shr.core.BirthSex' && value !== _.lowerCase(gender)) {
                    return false;
                // pathology
                } else if (mcodeElement === 'onco.core.TumorMarkerTest') {
                    const receptorType = reference._tumorMarker._findingTopicCode.codeableConcept.coding[0].code.value;  
                    if (receptorType === '16112-5' && (!tumorMarkers.er || _.lowerCase(tumorMarkers.er) !== _.lowerCase(value))) {
                        // LOINC 16112-5 == Estrogen Receptor
                        return false;
                    } else if (receptorType === '16113-3' && (!tumorMarkers.pr || _.lowerCase(tumorMarkers.pr) !== _.lowerCase(value))) {
                        // LOINC 16113-3 == Progesterone Receptor
                        return false;
                    } else if (receptorType === '48676-1' && (!tumorMarkers.her2 || _.lowerCase(tumorMarkers.her2) !== _.lowerCase(value))) {
                        // LOINC 48676-1 == HER2 Receptor
                        return false;
                    }
                } else if (mcodeElement === 'onco.core.TNMClinicalStageGroup' && (!diseaseStatus.stage || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
                    return false;
                } else if (mcodeElement === 'onco.core.TNMClinicalPrimaryTumorCategory' && (!diseaseStatus.tnm.t || _.lowerCase(diseaseStatus.tnm.t) !== _.lowerCase(value))) { // no data available
                    return false;
                } else if (mcodeElement === 'onco.core.TNMClinicalRegionalNodesCategory' && (!diseaseStatus.tnm.n || _.lowerCase(diseaseStatus.tnm.n) !== _.lowerCase(value))) { // no data available
                    return false;
                } else if (mcodeElement === 'onco.core.TNMClinicalDistantMetastasesCategory' && (!diseaseStatus.tnm.m || _.lowerCase(diseaseStatus.tnm.m) !== _.lowerCase(value))) { // no data available
                    return false;
                } else if (mcodeElement === 'onco.core.CancerHistologicGrade' && (!diseaseStatus.grade || diseaseStatus.grade !== value)) {
                    return false;
                }
            }
        }
    }

    return true;
}



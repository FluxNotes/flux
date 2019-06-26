import _ from 'lodash';
import { isSame, getCombinations } from './arrayOperations';
const transformedTreatmentData = require('../mock-data/mock-data.json').transformedData;

// This function will eventually be replaced with an API that returns the same data in the same format
function filterTreatmentData(similarPatientProps, timescale) {
    const totalPatients = transformedTreatmentData.length;
    const similarPatients = transformedTreatmentData.filter(treatmentDataPatient =>
        isSimilarPatient(treatmentDataPatient, similarPatientProps));
    const totalSimilarPatients = similarPatients.length;
    const similarPatientTreatments = generateSimilarPatientTreatments(similarPatients);
    const treatmentCombinations = getCombinations(similarPatientTreatments);
    const similarPatientTreatmentsData = generateTreatmentData(similarPatients, treatmentCombinations, timescale);

    return {
        similarPatientTreatments,
        similarPatientTreatmentsData,
        totalPatients,
        totalSimilarPatients,
        timescale
    };
}

function initializeTreatmentData(displayName) {
    return {
        id: _.uniqueId('row_'),
        displayName,
        totalPatients: 0,
        deathsPerYear: [],
        sideEffects: {
            totalReporting: 0,
            effects: {}
        }
    };
}

function generateTreatmentData(similarPatients, treatmentCombinations, timescale) {
    if (similarPatients.length === 0) return [];
    timescale.sort(); // maybe unnecessary
    let treatmentData = [];
    treatmentCombinations.forEach(treatmentCombination => {
        const filteredPatients = similarPatients.filter(patient =>
            isSame(patient.treatments.map(treatment => typeof treatment === 'object' ? treatment.code : treatment),
                treatmentCombination.map(treatment => treatment.reference.code))
        );
        let displayName = _.isArray(treatmentCombination)
            ? treatmentCombination.map(treatment => treatment.reference.displayName).join(' & ')
            : treatmentCombination.displayName;
        let row = initializeTreatmentData(displayName);
        filteredPatients.forEach(patient => {
            row.totalPatients += 1;

            const deathsPerYear = Math.floor(patient.diseaseStatus.survivalMonths / 12);
            if (row.deathsPerYear[deathsPerYear] !== undefined) {
                row.deathsPerYear[deathsPerYear] += 1;
            } else {
                row.deathsPerYear[deathsPerYear] = 1;
            }


            if (patient.sideEffects.length > 0) {
                row.sideEffects.totalReporting += 1;
                patient.sideEffects.forEach(sideEffectKey => {
                    const sideEffect = sideEffectKey.displayName;
                    if (!row.sideEffects.effects[sideEffect]) row.sideEffects.effects[sideEffect] = 0;
                    row.sideEffects.effects[sideEffect] += 1;
                });
            }
        });

        for (var i = 0; i < row.deathsPerYear.length; i++) {
            if (row.deathsPerYear[i] === undefined) {
                row.deathsPerYear[i] = 0;
            }
        }
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
            if (typeof treatment === "object") {
                similarPatientTreatments[`${treatment.code},${treatment.codeSystem}`] = {
                    key: `${treatment.code},${treatment.codeSystem}`,
                    name: treatment.displayName,
                    reference: treatment
                };
            } else {
                similarPatientTreatments[treatment] = { key: treatment, name: treatment, reference: treatment };

            }
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

                // label coded values
                const tumorMarkersLabeled = {};
                tumorMarkers.forEach(marker => {
                    tumorMarkersLabeled[marker.code] = marker;
                });

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
                    if (receptorType && (!tumorMarkersLabeled[receptorType]
                        || tumorMarkersLabeled[receptorType].value.code !== reference.findingResult._value._coding[0]._code.code)) {
                        return false;
                    }
                } else if (mcodeElement === 'onco.core.TNMClinicalStageGroup' && (!diseaseStatus.stage
                    || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
                    return false;
                } else if (mcodeElement === 'onco.core.TNMPathologicStageGroup' && (!diseaseStatus.stage
                    || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
                    return false;
                } else if ((mcodeElement === 'onco.core.TNMClinicalPrimaryTumorCategory'
                    || mcodeElement === 'onco.core.TNMClinicalRegionalNodesCategory'
                    || mcodeElement === 'onco.core.TNMClinicalDistantMetastasesCategory')
                    && (diseaseStatus.tnm.filter(status => {
                        return (_.lowerCase(status.codeSystem) === _.lowerCase(reference.codeSystem.value)
                            && _.lowerCase(status.code) === _.lowerCase(reference.code.value));
                    }).length===0)) { // no data available
                    return false;
                } else if (mcodeElement === 'onco.core.CancerHistologicGrade' && (!diseaseStatus.grade
                    || diseaseStatus.grade !== value)) {
                    return false;
                }
            }
        }
    }

    return true;
}

export {
    filterTreatmentData,
    generateSimilarPatientTreatments,
    isSimilarPatient
};

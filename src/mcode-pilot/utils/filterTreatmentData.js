import _ from 'lodash';
import { transformedTreatmentData } from '../mock-data/mock-data.js';
import { isSame, getCombinations } from './arrayOperations';

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
        const filteredPatients = similarPatients.filter(patient => isSame( patient.treatments.map((e)=>{return typeof e === 'object' ?e.code : e}), treatment.map(treat => {return treat.code} )));
        
        let displayName =
            _.isArray(treatment)
                ? (treatment === includedTreatments)
                    ? treatment.map(name => name.displayName).join(' & ')
                    : treatment.filter((treat) => {
                        return !includedTreatments.includes(treat);
                    }).map(name => name.displayName).join(' & ')
                : treatment.displayName;

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
                    const sideEffect = sideEffectKey.displayName;
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
            if(typeof treatment === "object") {
                
                similarPatientTreatments[treatment.code] = { key: `${treatment.code},${treatment.codeSystem}`, name: treatment.displayName, reference: treatment};
            }else{
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
                tumorMarkers.forEach((e)=>{
                    tumorMarkersLabeled[e.code] = e;
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
                    if (receptorType === '16112-5' && (!tumorMarkersLabeled["16112-5"] || tumorMarkersLabeled["16112-5"].value.code !== reference.findingResult._value._coding[0]._code.code)) {
                        // LOINC 16112-5 == Estrogen Receptor
                        return false;
                    } else if (receptorType === '16113-3' && (!tumorMarkersLabeled["16113-3"] || tumorMarkersLabeled["16113-3"].value.code !== reference.findingResult._value._coding[0]._code.code)) {
                        // LOINC 16113-3 == Progesterone Receptor
                        return false;
                    } else if (receptorType === '48676-1' && (!tumorMarkersLabeled["48676-1"] || tumorMarkersLabeled["48676-1"].value.code !==  reference.findingResult._value._coding[0]._code.code)) {
                        // LOINC 48676-1 == HER2 Receptor
                        return false;
                    }
                } else if (mcodeElement === 'onco.core.TNMClinicalStageGroup' && (!diseaseStatus.stage || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
                    return false;
                } else if ((mcodeElement === 'onco.core.TNMClinicalPrimaryTumorCategory' || mcodeElement === 'onco.core.TNMClinicalRegionalNodesCategory' || mcodeElement === 'onco.core.TNMClinicalDistantMetastasesCategory')
                                        && (diseaseStatus.tnm.filter((e)=>{return (_.lowerCase(e.codeSystem) === _.lowerCase(reference.codeSystem.value) &&  _.lowerCase(e.code) === _.lowerCase(reference.code.value))}).length===0)) { // no data available
                    return false;
                } else if (mcodeElement === 'onco.core.CancerHistologicGrade' && (!diseaseStatus.grade || diseaseStatus.grade !== value)) {
                    return false;
                }
            }
        }
    }

    return true;
}



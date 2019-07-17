import _ from 'lodash';
import { isSame, getCombinations } from './arrayOperations';
import CLQOutcomesService from '../services/outcomes/CLQOutcomesService';
const transformedTreatmentData = require('../mock-data/mock-data.json').transformedData;

// This function will eventually be replaced with an API that returns the same data in the same format
function filterTreatmentData(filterOptions, timescale) {
    const c = new CLQOutcomesService({"timescale":['1','3','5'],"serviceUrl":"http://moonshot-dev.mitre.org:5000/outcomes"});
    c.processSimilarPatientOutcomes(filterOptions.filters);
    const totalPatients = transformedTreatmentData.length;
    const indices = {};
    let totalSimilar = 0;
    const similarPatients = transformedTreatmentData.reduce((filtered, treatmentDataPatient, i) => {
        if (isSimilarPatient(treatmentDataPatient, filterOptions)) {
            totalSimilar++;
            parsePatientData(treatmentDataPatient, filtered, indices, timescale);
        }
        return filtered;

    },[]);
    return {"outcomes": {"survival": {"data": similarPatients, "total": totalSimilar}, "total": totalPatients}, "total": totalPatients, "timescale": timescale};
    // const totalSimilarPatients = similarPatients.length;
    // const similarPatientTreatments = generateSimilarPatientTreatments(similarPatients);
    // const treatmentCombinations = getCombinations(similarPatientTreatments);
    // const similarPatientTreatmentsData = generateTreatmentData(similarPatients, treatmentCombinations, timescale);

    // return {
    //     similarPatientTreatments,
    //     similarPatientTreatmentsData,
    //     totalPatients,
    //     totalSimilarPatients,
    //     timescale
    // };
}

function parsePatientData(treatmentDataPatient, filtered, indices, timescale) {
    const treatments = treatmentDataPatient.treatments.map(treat => `#${treat.code}${treat.codeSystem}`).sort().join("+"); //generate unique keys
    console.log(treatmentDataPatient);
    if (indices[treatments] === undefined) {
        indices[treatments] = filtered.length;
        filtered.push({treatments: treatmentDataPatient.treatments, sufficiency: true, total: 0, sideEffects: {}, outcomes: timescale.map((scale) => {
            return {interval: "months", "survivalRate": scale*12, total: 0};
        })});
    }
    const index = indices[treatments];
    const dataSegment = filtered[index];
    dataSegment.total+=1;
    dataSegment.outcomes.map((outcome) => {
        if (treatmentDataPatient.diseaseStatus.survivalMonths >= outcome.survivalRate) {
            outcome.total+=1;
        }

        return outcome;
    });

    return filtered;

}
function initializeTreatmentData(displayName) {
    return {
        id: _.uniqueId('row_'),
        displayName,
        totalPatients: 0,
        survivorsPerYear: [],
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

            let yearsSurvived = Math.floor(patient.diseaseStatus.survivalMonths / 12);


            while (yearsSurvived>=0) {
                if (row.survivorsPerYear[yearsSurvived] === undefined) {
                    row.survivorsPerYear[yearsSurvived] = 0;
                }

                row.survivorsPerYear[yearsSurvived] += 1;
                yearsSurvived-=1;
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

function isSimilarPatient(treatmentDataPatient, filterOptions) {

    const activeValues = filterOptions.getAllActiveFilters();
    for (let i = 0; i < activeValues.length; i++) {
        const filter = activeValues[i];
        const { minValue, maxValue, reference } = filter;
        const value = _.lowerCase(filter.value);

        // demographics
        const { demographics, diseaseStatus, tumorMarkers } = treatmentDataPatient;

        // label coded values
        const tumorMarkersLabeled = {};
        tumorMarkers.forEach(marker => {
            tumorMarkersLabeled[marker.code] = marker;
        });

        const { race, gender, birthDate } = demographics;
        if (filter.mcodeElement === 'shr.core.DateOfBirth') {
            // age
            const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
            const age = (new Date()).getFullYear() - birthYear;

            if (age < minValue || age > maxValue) {
                return false;
            }
        } else if (filter.mcodeElement === 'shr.core.DateOfDiagnosis') {
            // age at diagnosis
            const [birthYear] = birthDate.split('-').map((value) => parseInt(value, 10));
            const [dxYear] = diseaseStatus.diagnosisDate.split('-').map((value) => parseInt(value, 10));
            const dxAge = dxYear - birthYear;

            if (dxAge < minValue || dxAge > maxValue) {
                return false;
            }
        } else if (filter.mcodeElement === 'shr.core.Race' && value !== _.lowerCase(race)) {
            return false;
        } else if (filter.mcodeElement === 'shr.core.BirthSex' && value !== _.lowerCase(gender)) {
            return false;
        // pathology
        } else if (filter.mcodeElement === 'onco.core.TumorMarkerTest') {
            const receptorType = reference._tumorMarker._findingTopicCode.codeableConcept.coding[0].code.value;
            if (receptorType && (!tumorMarkersLabeled[receptorType]
                || tumorMarkersLabeled[receptorType].value.code !== reference.findingResult._value._coding[0]._code.code)) {
                return false;
            }
        } else if (filter.mcodeElement === 'onco.core.TNMClinicalStageGroup' && (!diseaseStatus.stage
            || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
            return false;
        } else if (filter.mcodeElement === 'onco.core.TNMPathologicStageGroup' && (!diseaseStatus.stage
            || _.lowerCase(diseaseStatus.stage) !== _.lowerCase(value))) {
            return false;
        } else if ((filter.mcodeElement === 'onco.core.TNMClinicalPrimaryTumorCategory'
            || filter.mcodeElement === 'onco.core.TNMClinicalRegionalNodesCategory'
            || filter.mcodeElement === 'onco.core.TNMClinicalDistantMetastasesCategory')
            && (diseaseStatus.tnm.filter(status => {
                return (_.lowerCase(status.codeSystem) === _.lowerCase(reference.codeSystem.value)
                    && _.lowerCase(status.code) === _.lowerCase(reference.code.value));
            }).length===0)) { // no data available
            return false;
        } else if (filter.mcodeElement === 'onco.core.CancerHistologicGrade' && (!diseaseStatus.grade
            || diseaseStatus.grade !== value)) {
            return false;
        }

    };

    return true;
}

export {
    filterTreatmentData,
    generateSimilarPatientTreatments,
    isSimilarPatient
};

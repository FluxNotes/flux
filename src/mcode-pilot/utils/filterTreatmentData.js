import _ from 'lodash';
const transformedTreatmentData = require('../mock-data/mock-data.json').transformedData;

// This function will eventually be replaced with an API that returns the same data in the same format
function filterTreatmentData(fOptions, timescale) {
    const totalPatients = transformedTreatmentData.length;
    const indices = {};
    let totalSimilar = 0;
    const activeValues = fOptions.getAllActiveFilters();
    const similarPatients = transformedTreatmentData.reduce((filtered, treatmentDataPatient, i) => {
        if (isSimilarPatient(treatmentDataPatient, activeValues)) {
            totalSimilar++;
            parsePatientData(treatmentDataPatient, filtered, indices, timescale);
        }
        return filtered;

    },[]);
    return {"outcomes": {"survival": {"data": similarPatients, "total": totalSimilar}, "total": totalPatients}, "total": totalPatients, "timescale": timescale};
}

function parsePatientData(treatmentDataPatient, filtered, indices, timescale) {
    const treatments = treatmentDataPatient.treatments.map(treat => `#${treat.code}${treat.codeSystem}`).sort().join("+"); //generate unique keys
    if (indices[treatments] === undefined) {
        indices[treatments] = filtered.length;
        filtered.push({treatments: treatmentDataPatient.treatments, sufficiency: true, total: 0, sideEffects: {total: 0, effects: {}}, outcomes: timescale.map((scale) => {
            return {interval: "months", "survivalRate": scale*12, total: 0};
        })});
    }
    const index = indices[treatments];
    const dataSegment = filtered[index];
    dataSegment.total+=1;
    dataSegment.outcomes.map((outcome) => {
        if (treatmentDataPatient.diseaseStatus.survivalMonths >= outcome.survivalRate) {
            outcome.total+=1;
            outcome.proportion_surviving = outcome.total/dataSegment.total;
        }

        return outcome;
    });
    if (treatmentDataPatient.sideEffects.length>0) {
        dataSegment.sideEffects.total+=1;
    }
    treatmentDataPatient.sideEffects.forEach((sideEffect) => {
        if (dataSegment.sideEffects.effects[sideEffect.displayName]===undefined) {
            dataSegment.sideEffects.effects[sideEffect.displayName] = 0;
        }

        dataSegment.sideEffects.effects[sideEffect.displayName] += 1;
    });

    return filtered;

}

function generateSimilarPatientTreatments(similarPatients) {
    const similarPatientTreatments = {};

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

function isSimilarPatient(treatmentDataPatient, activeValues) {


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
            const birthYear = new Date(birthDate).getTime();
            const dxYear = new Date(diseaseStatus.diagnosisDate).getTime();
            const dxAge = (dxYear - birthYear)/31557600000; // 1000*60*60*24*365.25
            if (dxAge < minValue || dxAge > maxValue) {
                return false;
            }
        } else if (filter.mcodeElement === 'shr.core.Race' && value !== _.lowerCase(race)) {
            return false;
        } else if (filter.mcodeElement === 'shr.core.BirthSex' && value !== _.lowerCase(gender)) {
            return false;
        // pathology
        } else if (filter.mcodeElement === 'onco.core.TumorMarkerTest') {
            const receptorType = reference._tumorMarkerTest.code.value.coding[0].codeValue.value;
            if (receptorType && (!tumorMarkersLabeled[receptorType]
                || tumorMarkersLabeled[receptorType].value.code !== reference.dataValue.value.coding[0].codeValue.code)) {
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
                    && _.lowerCase(status.code) === _.lowerCase(reference.codeValue.value));
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

import _ from 'lodash';

 /*
    Initialize a row of treatment data. This sets the fields that would be expected by the
    Compass UI to inital default values.
    */
function initializeTreatmentData(displayName, treatments) {
    return {
        id: _.uniqueId('row_'),
        displayName,
        treatments,
        totalPatients: 0,
        survivorsPerYear: [],
        sideEffects: {
            totalReporting: 0,
            effects: {}
        }
    };
}

/* Generate a display name for the Compass Data row based off of a set of treatments*/
function generateTreatmentDisplayName(treatments) {
    return treatments.map((treatment) => {
        return treatment.displayName;
    }).join(" & ");
}

/* Map an individual service response for a set of treatments into the internal format
expected by the Compass UI components. */
function generateOutcomeData(data) {
    return data.map((item) => {
        if (item.total === 0 || !item.sufficiency) {
            return null;
        }
        let row = initializeTreatmentData(generateTreatmentDisplayName(item.treatments), item.treatments);
        row.totalPatients = item.total;

        if (item.sideEffects !== undefined) {
            row.sideEffects.totalReporting = item.sideEffects.total;
            row.sideEffects.effects = item.sideEffects.effects;
        }
        item.outcomes.forEach((outcome) => {
            let survivalRate = parseInt(outcome.survivalRate)/12;
            row.survivorsPerYear[survivalRate] = outcome.total;
        });
        return row;
    }).filter((x) => x);
}

/* Process the entire service response. */
function processResults(data) {
    console.log(data);
    let similarPatientTreatmentsData = generateOutcomeData(data.outcomes.survival.data);
    let similarPatientTreatments = [];
    similarPatientTreatmentsData.forEach((row) => {
        row.treatments.forEach((treatment) => {
            // dealing with coded values so need to do an inspection
            // of each to ensure they are not already in there
            if (!similarPatientTreatments.find((st) => _.isEqual(st, treatment))) {
                similarPatientTreatments.push(treatment);
            }

        });
    });
    return {
        similarPatientTreatmentsData,
        similarPatientTreatments,
        totalPatients: data.total,
        totalSimilarPatients: data.outcomes.survival.total,
        timescale: data.timescale
    };
}

export {processResults, generateOutcomeData};
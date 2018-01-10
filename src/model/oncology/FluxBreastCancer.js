import BreastCancer from '../shr/oncology/BreastCancer';
import FluxTest from '../lab/FluxTest';
import FluxTNMStage from './FluxTNMStage';
import FluxProcedure from '../procedure/FluxProcedure';
import FluxMedicationPrescription from '../medication/FluxMedicationPrescription';
import FluxProgression from './FluxProgression';
import ReceptorStatusObservation from '../shr/oncology/ReceptorStatusObservation';
import SpecificType from '../shr/core/SpecificType';
import Lang from 'lodash'
import moment from 'moment';
import lookup from '../../lib/cancer_lookup.jsx';

class FluxBreastCancer extends BreastCancer {
    get diagnosisDate() {
        return this.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
    }

    get type() {
        if (!this.specificType) return null;
        return this.specificType.value.coding[0].displayText.value;
    }

    set type(cancerType) {
        if (!this.specificType) this.specificType = new SpecificType();
        this.specificType.value = lookup.getCancerCodeableConcept(cancerType);
    }

    getObservationsOfType(type) {
        if (!this.observation) return [];
        return this.observation.filter((item) => {
            return item instanceof type;
        });
    }

    addObservation(observation) {
        let currentObservations = this.observation;
        currentObservations.push(observation);
        this.observation = currentObservations;
    }

    getTests() {
        return this.getObservationsOfType(FluxTest);
    }


    // This method takes in a sinceDate, oldest date acceptable. All results returned must be more recent than sinceDate
    getLabResultsChronologicalOrder(sinceDate) {

        let results = this.getTests();
        results.sort(this._labResultsTimeSorter);

        let mostRecentLabResults = results;

        if (sinceDate && !Lang.isNull(sinceDate)) {
            mostRecentLabResults = this.getMostRecentLabResults(results, sinceDate);
        }

        return mostRecentLabResults;
    }

    // Sorts the lab results in chronological order
    _labResultsTimeSorter(a, b) {
        const a_startTime = new moment(a.clinicallyRelevantTime, "D MMM YYYY");
        const b_startTime = new moment(b.clinicallyRelevantTime, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    // Grab the most recent lab results within a set threshold date
    getMostRecentLabResults(results, sinceDate) {

        let mostRecentLabResultsLookupTable = {};

        // Convert the sinceDate to a moment.js date
        let sinceDateMoment = new moment(sinceDate, "D MMM YYYY");

        // Create mostRecentLabResultsLookupTable with unique lab results that fall after threshold date
        results.map((lab, i) => {
            const startTime = new moment(lab.clinicallyRelevantTime, "D MMM YYYY");

            // Check that the current lab result date is more later than the threshold date
            if (startTime > sinceDateMoment) {
                let id = lab.specificType.value.coding[0].code;

                // Check that the lab result type (i.e hemoglobin, white blood cell, etc) doesn't already exist in the lookup table
                if (!mostRecentLabResultsLookupTable[id]) {

                    // If the lab result type doesn't already exist, add it to the table
                    mostRecentLabResultsLookupTable[id] = {
                        labResult: lab,
                        clinicallyRelevantTime: lab.clinicallyRelevantTime
                    }
                } else {
                    // Check if current lab result is the most recent compared to what is in the lookup table
                    let time1 = new moment(mostRecentLabResultsLookupTable[id].clinicallyRelevantTime, "D MMM YYYY");
                    let time2 = new moment(lab.clinicallyRelevantTime, "D MMM YYYY");

                    // If the current lab result is more recent than what is stored in the lookup table, update the data
                    // Lookup will only contain the most recent lab result for that type
                    if (time2 > time1) {
                        mostRecentLabResultsLookupTable[id] = {
                            labResult: lab,
                            clinicallyRelevantTime: lab.clinicallyRelevantTime
                        }
                    }
                }
            }
            return results;
        });

        // Generate array from lookup table to pass back to summary meta data 
        let mostRecentLabResultsArray = [];

        for (var key in mostRecentLabResultsLookupTable) {
            if (mostRecentLabResultsLookupTable.hasOwnProperty(key)) {
                mostRecentLabResultsArray.push(mostRecentLabResultsLookupTable[key].labResult);
            }
        }

        return mostRecentLabResultsArray;
    }

    _observationTimeSorter(a, b) {
        const a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
        const b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    _getReceptorStatus(receptorType) {
        let listObs = this.getObservationsOfType(ReceptorStatusObservation);
        let list = listObs.filter((item) => {
            return item.receptorType && item.receptorType.value.coding[0].value === receptorType;
        });
        if (list.length === 0) return null; else return list[0];
    }

    getERReceptorStatus() {
        return this._getReceptorStatus("23307004");
    }

    getPRReceptorStatus() {
        return this._getReceptorStatus("C0034833");
    }

    getHER2ReceptorStatus() {
        return this._getReceptorStatus("C0069515");
    }

    getMostRecentStaging(sinceDate = null) {
        let stagingList = this.getObservationsOfType(FluxTNMStage);
        if (stagingList.length === 0) return null;
        const sortedStagingList = stagingList.sort(this._observationTimeSorter);
        const length = sortedStagingList.length;
        let s = (sortedStagingList[length - 1]);
        if (Lang.isNull(sinceDate)) return s;
        const startTime = new moment(s.occurrenceTime, "D MMM YYYY");
        if (startTime < sinceDate) {
            return null;
        } else {
            return s;
        }
    }    
  
    get laterality() {
        if (!this.bodySite && !this.bodySite.laterality) return null;
        return this.bodySite.laterality.value.coding[0].displayText.value;        
    }

    buildHpiNarrative(patient) {
        // const name = this.getName();
        // const age = this.getAge();
        // const gender = this.getGender();
        // const condition = this.getLastBreastCancerCondition();
        // const labResults = condition.getLabResultsChronologicalOrder("16 AUG 2010");

        // let result = "";
        // result += `${name} is a ${age} year old ${gender}.`;
        // result += ` Patient has ${condition.type}.`;
        // if (labResults.length > 0) {
        //     result += ' Recent lab results include ';
        //     result += labResults.map((lab) => {
        //         return `${lab.codeableConceptDisplayText}: ${lab.quantity.number} ${lab.quantity.unit} (${lab.clinicallyRelevantTime})`;
        //     }).join(', ');
        //     result += '.';
        // }
        
        // return result;
        let events = [];

        events = events.concat(patient.getProceduresForCondition(this));
        events = events.concat(patient.getMedicationsForConditionChronologicalOrder(this));
        events.push(patient.getMostRecentProgressionForCondition(this));
        events.sort(this._eventsTimeSorter);
        // console.log(events);

        return "HI";
    }

    // sorter for array with instances of FluxProcedure, FluxMedicationPrescription, and FluxProgression
    _eventsTimeSorter(a, b) {
        let a_startTime, b_startTime;

        switch (a.constructor) {
            case FluxProcedure:
                a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
                if (!a_startTime.isValid()) a_startTime = new moment(a.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            case FluxMedicationPrescription:
                a_startTime = new moment(a.requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            case FluxProgression:
                a_startTime = new moment(a.asOfDate, "D MMM YYYY");
                break;
            default:
                console.error("This object is not an instance of FluxProcedure, FluxMedicationPrescription, or FluxProgression.");
                return 0;
        }

        switch (b.constructor) {
            case FluxProcedure:
                b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
                if (!b_startTime.isValid()) b_startTime = new moment(b.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            case FluxMedicationPrescription:
                b_startTime = new moment(b.requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            case FluxProgression:
                b_startTime = new moment(b.asOfDate, "D MMM YYYY");
                break;
            default:
                console.error("This object is not an instance of FluxProcedure, FluxMedicationPrescription, or FluxProgression.");
                return 0;
        }

        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }
}

export default FluxBreastCancer;
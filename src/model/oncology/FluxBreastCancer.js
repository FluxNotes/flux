import BreastCancer from '../shr/oncology/BreastCancer';
import FluxTest from '../lab/FluxTest';
import FluxTNMStage from './FluxTNMStage';
import FluxProcedure from '../procedure/FluxProcedure';
import FluxMedicationPrescription from '../medication/FluxMedicationPrescription';
import FluxProgression from './FluxProgression';
import FluxTumorSize from './FluxTumorSize';
import FluxHistologicGrade from './FluxHistologicGrade';
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

    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        // Initial patient introduction section
        const name = patient.getName();
        const age = patient.getAge();
        const gender = patient.getGender();

        let hpiText = `\r\n\r\n${name} is a ${age} year old ${gender}.`;
        hpiText += ` Patient was diagnosed with ${this.type} on ${this.diagnosisDate}.`;

        // Laterality
        if (this.laterality) {
            hpiText += ` Breast cancer diagnosed in ${this.laterality} breast.`;
        }

        // Staging
        const staging = this.getMostRecentStaging();
        if (staging) {
            hpiText += ` Stage ${staging.stage} ${staging.t_Stage} ${staging.n_Stage} ${staging.m_Stage} disease.`;
        }

        // Tumor Size and HistologicGrade
        const tumorSize = this.getObservationsOfType(FluxTumorSize);
        const histologicGrade = this.getObservationsOfType(FluxHistologicGrade);
        if (tumorSize.length > 0) {
            hpiText += ` Primary tumor size was ${tumorSize[0].quantity.value} ${tumorSize[0].quantity.unit}.`;
        }
        if (histologicGrade.length > 0) {
            hpiText += ` Histological grade was ${histologicGrade[0].grade}.`;
        }

        // ER, PR, HER2
        const erStatus = this.getERReceptorStatus();
        const prStatus = this.getPRReceptorStatus();
        const her2Status = this.getHER2ReceptorStatus();
        if (erStatus) {
            hpiText += ` Estrogen receptor was ${erStatus.status}.`;
        }
        if (prStatus) {
            hpiText += ` Progesteron receptor was ${prStatus.status}.`;
        }
        if (her2Status) {
            hpiText += ` HER2 was ${her2Status.status}.`;
        }

        // Lab Results
        const labResults = this.getLabResultsChronologicalOrder(moment().subtract(6, 'months'));
        if (labResults.length > 0) {
            hpiText += ' Recent lab results include ';
            hpiText += labResults.map((lab) => {
                return `${lab.name}: ${lab.quantity.number} ${lab.quantity.unit} (${lab.clinicallyRelevantTime})`;
            }).join(', ');
            hpiText += '.';
        }
        
        // Build narrative from sorted events
        // Get procedures, medications, and most recent progression from patient
        // Sort by start time and add snippets about each event to result text
        let events = [];
        events = events.concat(patient.getProceduresForCondition(this));
        events = events.concat(patient.getMedicationsForConditionChronologicalOrder(this));
        events.push(patient.getMostRecentProgressionForCondition(this));
        events.sort(this._eventsTimeSorter);

        const procedureTemplates = {
            range: 'Patient underwent {0} from {1} to {2}.',
            single: 'Patient underwent {0} on {1}.'
        };
        const medicationTemplates = {
            range: 'Patient took {0} from {1} to {2}.',
            single: 'Patient started {0} on {1}.'
        };
        const today = new moment();
        events.forEach((event) => {
            switch (event.constructor) {
                case FluxProcedure: {
                    if (event.occurrenceTime.timePeriodStart) {
                        let procedureText = '\r\n' + procedureTemplates['range'];
                        procedureText = procedureText.replace('{0}', event.name);
                        procedureText = procedureText.replace('{1}', event.occurrenceTime.timePeriodStart);
                        procedureText = procedureText.replace('{2}', event.occurrenceTime.timePeriodEnd);
                        hpiText += procedureText;
                    } else {
                        let procedureText = '\r\n' + procedureTemplates['single'];
                        procedureText = procedureText.replace('{0}', event.name);
                        procedureText = procedureText.replace('{1}', event.occurrenceTime);
                        hpiText += procedureText;
                    }
                    break;
                }
                case FluxMedicationPrescription: {
                    const active = event.isActiveAsOf(today);
                    if (!active) {
                        let medicationText = '\r\n' + medicationTemplates['range'];
                        medicationText = medicationText.replace('{0}', event.medication);
                        medicationText = medicationText.replace('{1}', event.requestedPerformanceTime.timePeriodStart);
                        medicationText = medicationText.replace('{2}', event.requestedPerformanceTime.timePeriodEnd);
                        hpiText += medicationText;
                    } else {
                        let medicationText = '\r\n' + medicationTemplates['single'];
                        medicationText = medicationText.replace('{0}', event.medication);
                        medicationText = medicationText.replace('{1}', event.requestedPerformanceTime.timePeriodStart);
                        hpiText += medicationText;
                    }
                    break;
                }
                case FluxProgression: {
                    if (event.asOfDate && event.status) {
                        hpiText += `\r\nAs of ${event.asOfDate}, disease is ${event.status}`;
                        if (event.evidence && event.evidence.length > 0) {
                            hpiText += ` based on ${event.evidence.join(', ')}.`;
                        } else {
                            hpiText += '.';
                        }
                    }
                    break;
                }
                default: {
                    console.error("There should only be instances of FluxProcedure, FluxMedicationPrescription, and FluxProgression");
                }
            }
        });
        
        return hpiText;
    }

    // sorter for array with instances of FluxProcedure, FluxMedicationPrescription, and FluxProgression
    _eventsTimeSorter(a, b) {
        let a_startTime, b_startTime;

        switch (a.constructor) {
            case FluxProcedure: {
                a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
                if (!a_startTime.isValid()) a_startTime = new moment(a.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxMedicationPrescription: {
                a_startTime = new moment(a.requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxProgression: {
                a_startTime = new moment(a.asOfDate, "D MMM YYYY");
                break;
            }
            default: {
                console.error("This object is not an instance of FluxProcedure, FluxMedicationPrescription, or FluxProgression.");
                return 0;
            }
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
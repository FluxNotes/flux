import BodySite from '../shr/entity/BodySite';
import Condition from '../shr/condition/Condition';
import FluxObservation from '../finding/FluxObservation';
import FluxProcedureRequested from '../procedure/FluxProcedureRequested';
import FluxMedicationRequested from '../medication/FluxMedicationRequested';
import FluxDiseaseProgression from './FluxDiseaseProgression';
import FluxTNMStage from '../oncology/FluxTNMStage';
import FluxEstrogenReceptorStatus from '../oncology/FluxEstrogenReceptorStatus';
import FluxProgesteroneReceptorStatus from '../oncology/FluxProgesteroneReceptorStatus';
import FluxHER2ReceptorStatus from '../oncology/FluxHER2ReceptorStatus';
import FluxTumorDimensions from '../oncology/FluxTumorDimensions';
import FluxHistologicGrade from '../oncology/FluxHistologicGrade';
import Lang from 'lodash';
import moment from 'moment';

class FluxCondition {
    constructor(json) {
        this._condition = Condition.fromJSON(json);
    }

    get entryInfo() {
        return this._condition.entryInfo;
    }

    get diagnosisDate() {
        if (this._condition.whenClinicallyRecognized) {
            return this._condition.whenClinicallyRecognized.value.value;
        }
        return null;
    }

    get code() {
        if (!this._condition.value) return null;
        return this._condition.value.coding[0].value;
    }

    get codeSystem() {
        if (!this._condition.value) return null;
        return this._condition.value.coding[0].codeSystem.value;
    }

    get type() {
        if (!this._condition.value) return null;
        return this._condition.value.coding[0].displayText.value;
    }

    get observation() {
        return this._condition.evidence || [];
    }

    get bodySite() {
        if (this._condition.bodySiteOrCode.value instanceof BodySite) {
            return this._condition.bodySiteOrCode.value.value.coding[0].displayText.value;
        } else { // CodeableConcept
            return this._condition.bodySiteOrCode.value.coding[0].displayText.value;
        }
    }
    
    get clinicalStatus() {
        return this._condition.clinicalStatus.value;
    }
    
    get laterality() {
        if (    !this._condition.bodySiteOrCode || 
                !this._condition.bodySiteOrCode.value || 
                !(this._condition.bodySiteOrCode.value instanceof BodySite)) return null;
        return this._condition.bodySiteOrCode.value.laterality.value.coding[0].displayText.value;        
    }

    addObservation(observation) {
        let currentObservations = this._condition.evidence || [];
        currentObservations.push(observation);
        this._condition.evidence  = currentObservations;
    }

    getObservationsOfType(type) {
        if (!this._condition.evidence) return [];
        return this._condition.evidence.filter((item) => {
            return item.constructor === type;
        });
    }

    getTests() {
        return this.getObservationsOfType(FluxObservation);
    }

    // This method takes in a sinceDate, oldest date acceptable. All results returned must be more recent than sinceDate
    getLabResultsChronologicalOrder(sinceDate) {
        let results = this.getTests();
        results.sort(this._observationsTimeSorter);
        
        let mostRecentLabResults = results;
        if (sinceDate && !Lang.isNull(sinceDate)) {
            mostRecentLabResults = this.getMostRecentLabResults(results, sinceDate);
        }

        return mostRecentLabResults;
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
                let id = lab.codeableConceptCode;

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

        // Generate array from lookup table
        let mostRecentLabResultsArray = [];

        for (var key in mostRecentLabResultsLookupTable) {
            if (mostRecentLabResultsLookupTable.hasOwnProperty(key)) {
                mostRecentLabResultsArray.push(mostRecentLabResultsLookupTable[key].labResult);
            }
        }

        return mostRecentLabResultsArray;
    }

    getMostRecentStaging(sinceDate = null) {
        let stagingList = this.getObservationsOfType(FluxTNMStage);
        if (stagingList.length === 0) return null; 
        const sortedStagingList = stagingList.sort(this._stageTimeSorter);
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

    _getMostRecentReceptorStatus(receptorType) {
        const list = this.getObservationsOfType(receptorType);
        const sortedList = list.sort(this._observationsTimeSorter);
        if (list.length === 0) return null; else return sortedList.pop();
    }

    getMostRecentERReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxEstrogenReceptorStatus);
    }

    getMostRecentPRReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxProgesteroneReceptorStatus);
    }

    getMostRecentHER2ReceptorStatus() {
        return this._getMostRecentReceptorStatus(FluxHER2ReceptorStatus);
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

        let hpiText = `${name} is a ${age} year old ${gender}.`;
        hpiText += ` Patient was diagnosed with ${this.type} on ${this.diagnosisDate}.`;
        
        // Laterality
        if (this.laterality) {
            hpiText += ` Breast cancer diagnosed in ${this.laterality} breast.`;
        }

        // Staging
        const staging = this.getMostRecentStaging();
        if (staging && staging.stage) {
            hpiText += ` Stage ${staging.stage} ${staging.t_Stage} ${staging.n_Stage} ${staging.m_Stage} disease.`;
        }

        // Tumor Size and HistologicGrade
        const tumorSize = this.getObservationsOfType(FluxTumorDimensions);
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

        // Build narrative from sorted events
        // Get procedures, medications, recent lab results, and most recent progression from patient
        // Sort by start time and add snippets about each event to result text
        let events = [];
        events = events.concat(patient.getProceduresForCondition(this));
        events = events.concat(patient.getMedicationsForConditionChronologicalOrder(this));
        events = events.concat(this.getLabResultsChronologicalOrder(moment().subtract(6, 'months')));
        const recentProgression = patient.getMostRecentProgressionForCondition(this);
        if (recentProgression) {
            events.push(recentProgression);
        }
        events.sort(this._eventsTimeSorter);

        const procedureTemplates = {
            range: 'Patient underwent {0} from {1} to {2}',
            single: 'Patient underwent {0} on {1}'
        };
        const medicationTemplates = {
            range: 'Patient took {0} from {1} to {2}.',
            single: 'Patient started {0} on {1}.'
        };
        const today = new moment();
        events.forEach((event) => {
            switch (event.constructor) {
                case FluxProcedureRequested: {
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
                    if (event.annotation) {
                        hpiText += " which " + event.annotation + ".";
                    } else {
                        hpiText += ".";
                    }
                    break;
                }
                case FluxMedicationRequested: {
                    const active = event.isActiveAsOf(today);
                    if (!active) {
                        let medicationText = '\r\n' + medicationTemplates['range'];
                        medicationText = medicationText.replace('{0}', event.medication);
                        medicationText = medicationText.replace('{1}', event.expectedPerformanceTime.timePeriodStart);
                        medicationText = medicationText.replace('{2}', event.expectedPerformanceTime.timePeriodEnd);
                        hpiText += medicationText;
                    } else {
                        let medicationText = '\r\n' + medicationTemplates['single'];
                        medicationText = medicationText.replace('{0}', event.medication);
                        medicationText = medicationText.replace('{1}', event.expectedPerformanceTime.timePeriodStart);
                        hpiText += medicationText;
                    }
                    break;
                }
                case FluxDiseaseProgression: {
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
                case FluxObservation: {
                    if (event.quantity && event.quantity.number && event.quantity.unit) {
                        hpiText += `\r\nPatient had a ${event.name} lab result of ${event.quantity.number} ${event.quantity.unit} on ${event.clinicallyRelevantTime}.`;
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
            case FluxProcedureRequested: {
                a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
                if (!a_startTime.isValid()) a_startTime = new moment(a.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxMedicationRequested: {
                a_startTime = new moment(a.expectedPerformanceTime, "D MMM YYYY");
                if (!a_startTime.isValid()) a_startTime = new moment(a.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxDiseaseProgression: {
                a_startTime = new moment(a.asOfDate, "D MMM YYYY");
                break;
            }
            case FluxObservation: {
                a_startTime = new moment(a.clinicallyRelevantTime, "D MMM YYYY");
                break;
            }
            default: {
                console.error("This object is not an instance of FluxProcedure, FluxMedicationPrescription, or FluxProgression.");
                return 0;
            }
        }

        switch (b.constructor) {
            case FluxProcedureRequested: {
                b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
                if (!b_startTime.isValid()) b_startTime = new moment(b.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxMedicationRequested: {
                b_startTime = new moment(b.expectedPerformanceTime, "D MMM YYYY");
                if (!b_startTime.isValid()) b_startTime = new moment(b.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxDiseaseProgression: {
                b_startTime = new moment(b.asOfDate, "D MMM YYYY");
                break;
            }
            case FluxObservation: {
                b_startTime = new moment(b.clinicallyRelevantTime, "D MMM YYYY");
                break;
            }
            default: {
                console.error("This object is not an instance of FluxProcedure, FluxMedicationPrescription, or FluxProgression.");
                return 0;
            }
        }

        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    _stageTimeSorter(a, b) {
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

    // Sorts the lab results in chronological order
    _observationsTimeSorter(a, b) {
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
}

export default FluxCondition;
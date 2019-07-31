import Condition from '../../shr/core/Condition';
import FluxCancerDiseaseStatus from '../onco/core/FluxCancerDiseaseStatus';
import FluxMedicationRequested from '../medication/FluxMedicationRequested';
import FluxToxicAdverseDrugReaction from '../adverse/FluxToxicAdverseDrugReaction';
import FluxObservation from '../base/FluxObservation';
import FluxProcedureRequest from '../core/FluxProcedureRequest';
import hpiConfig from '../../hpi-configuration.json';
import Lang from 'lodash';
import moment from 'moment';
import FluxEntry from './FluxEntry';

class FluxCondition extends FluxEntry {
    constructor(json, type, patientRecord) {
        super();
        this._patientRecord = patientRecord;
        this._condition = this._entry = Condition.fromJSON(json);
    }

    get entryInfo() {
        return this._condition.entryInfo;
    }

    get diagnosisDate() {
        if (this._condition.onset) {
            return this._condition.onset.value;
        }
        return null;
    }

    getPotentialDiagnosisDates() {
        const date = this.diagnosisDate;

        return [{
            date,
            label: `diagnosis ${date}`,
        }];
    }

    getDiagnosisDate() {
        return this.diagnosisDate;
    }

    get code() {
        if (!this._condition.code || !this._condition.code.value) return null;
        return this._condition.code.value.coding[0].code.value;
    }

    get codeSystem() {
        if (!this._condition.code || !this._condition.code.value) return null;
        return this._condition.code.value.coding[0].codeSystem.value;
    }

    get codeURL() {
        return this.codeSystem + "/" + this.code;
    }

    get type() {
        if (!this._condition.code || !this._condition.code.value) return null;
        return this._displayTextOrCode(this._condition.code.value.coding[0]);
    }

    get observation() {
        const conditionEntryId = this._condition.entryInfo.entryId.value || this._condition.entryInfo.entryId;
        return this._patientRecord.getEntriesOfType(FluxObservation).filter((item) => {
            return item._observation && item._observation.subjectOfRecord && item._observation.subjectOfRecord.value._entryId === conditionEntryId;
        }).map((item) => {
            return this._patientRecord.getEntryFromReference(item);
        }) || [];
    }

    get bodySite() {
        if (!this._condition.anatomicalLocation || this._condition.anatomicalLocation.length < 1) {
            return null;
        // } else if (this._condition.anatomicalLocation[0].anatomicalLocationOrLandmarkCode instanceof BodySite) {
        //     return this._displayTextOrCode(this._condition.anatomicalLocation[0].anatomicalLocationOrLandmarkCode.value.coding[0]);
        } else { // CodeableConcept
            return this._displayTextOrCode(this._condition.anatomicalLocation[0].value.anatomicalLocationOrLandmarkCode.value.coding[0]);
        }
    }

    get clinicalStatus() {
        return this._condition.clinicalStatus && this._condition.clinicalStatus.value ? this._displayTextOrCode(this._condition.clinicalStatus.value.coding[0]) : null;
    }

    get laterality() {
        if (
            !this._condition.anatomicalLocation
            || this._condition.anatomicalLocation.length < 1
            || !this._condition.anatomicalLocation[0].value
            || !this._condition.anatomicalLocation[0].value.laterality
            || !this._condition.anatomicalLocation[0].value.laterality.value
        ) return null;
        return this._displayTextOrCode(this._condition.anatomicalLocation[0].value.laterality.value.coding[0]);
    }

    get author() {
        if (this._condition.author) {
            return this._condition.author.value;
        } else {
            return null;
        }
    }

    get informant() {
        if (this._condition.informant) {
            return this._condition.informant.value;
        } else {
            return null;
        }
    }

    get relatedEncounterReference() {
        if (this._condition.relatedEncounter) {
            return this._condition.relatedEncounter.value;
        } else {
            return null;
        }
    }

    // Given a toxicity adverse event, return the grade value
    getToxicitiesByCodes(codes) {
        // Get all the toxicities
        let toxicities = this.getToxicities().filter(toxicity => {
            if (!toxicity._toxicAdverseDrugReaction.type) return false;
            return toxicity._toxicAdverseDrugReaction.type.value.coding.some(coding => {
                return codes.includes(coding.code.value);
            });
        });

        toxicities.sort(this._toxicitiesTimeSorter);
        return toxicities;
    }

    // Returns sorted array of toxicities. Most recent toxicity is at index 0
    _toxicitiesTimeSorter(a, b) {
        const a_time = new moment(a.metadata.lastUpdated.value, "D MMM YYYY");
        const b_time = new moment(b.metadata.lastUpdated.value, "D MMM YYYY");
        if (a_time < b_time) {
            return 1;
        }
        if (a_time > b_time) {
            return -1;
        }
        return 0;
    }

    getGeneticMutationValue(geneticMutationAbbreviatedName, patient) {
        return undefined;
    }

    // Returns the most recent toxicities within a specified time period
    getMostRecentToxicities() {
        // Set the max number of months prior to today that a toxicity can be
        const numberOfMonths = 6;
        const sinceDate = moment().subtract(numberOfMonths, 'months');
        const sinceDateMoment = new moment(sinceDate, "D MMM YYYY");
        const tox = this.getToxicities();
        const sortedTox = tox.sort(this._toxicitiesTimeSorter);
        const mostRecentTox = {};

        sortedTox.forEach(t => {
            const id = t.type;

            if (!id) return;

            // Check that the toxicity doesn't already exist in the lookup table
            if (!mostRecentTox[id]) {
                // If the toxicity doesn't already exist and if the date is within the specified number of months,
                // add it to the table
                const tox_date = new moment(t.metadata.lastUpdated.value, "D MMM YYYY");
                if (tox_date > sinceDateMoment) {
                    mostRecentTox[id] = {
                        toxicity: t,
                        lastUpdated: t.metadata.lastUpdated.value
                    };
                }
            } else {
                // Check if the current toxicity is the most recent compared to what is in the lookup table
                const time1 = new moment(mostRecentTox[id].lastUpdated, "D MMM YYYY");
                const time2 = new moment(t.metadata.lastUpdated.value, "D MMM YYYY");

                // If the current toxicity is more recent than what is stored in the lookup table, update the data
                // Lookup will only contain the most recent toxicity for that type
                if (time2 > time1) {
                    mostRecentTox[id] = {
                        toxicity: t,
                        lastUpdated: t.metadata.lastUpdated.value
                    };
                }
            }
        });

        // Generate array from lookup table
        const mostRecentToxArray = [];
        for (const key in mostRecentTox) {
            if (mostRecentTox.hasOwnProperty(key)) {
                mostRecentToxArray.push(mostRecentTox[key].toxicity);
            }
        }

        return mostRecentToxArray;
    }

    getToxicities() {
        const entries = this._patientRecord.getEntriesOfType(FluxToxicAdverseDrugReaction);
        const conditionEntryId = this._condition.entryInfo.entryId.value || this._condition.entryInfo.entryId;
        return entries.filter((item) => {
            return item instanceof FluxToxicAdverseDrugReaction && item.adverseEventCondition && item.adverseEventCondition._conditionPresentAssertion._entryId === conditionEntryId;
        });
    }

    getObservationsOfTypeChronologicalOrder(type) {
        let results = this.getObservationsOfType(type);
        results.sort(this._observationsTimeSorter);
        return results;
    }

    getObservationsWithObservationCodeChronologicalOrder(code) {
        let results = this.getObservationsWithObservationCode(code);
        results.sort(this._observationsTimeSorter);
        return results;
    }

    getObservationsWithObservationCode(code) {
        const conditionEntryId = this._condition.entryInfo.entryId.value || this._condition.entryInfo.entryId;
        return this._patientRecord.getEntriesOfType(FluxObservation).filter((item) => {
            return item._observation && item._observation.subjectOfRecord && item._observation.subjectOfRecord.value._entryId === conditionEntryId;
        }).filter((item) => {
            return item.codeableConceptCode === code;
        });
    }

    getObservationsOfType(type) {
        if (!this._condition.entryInfo) return [];
        const conditionEntryId = this._condition.entryInfo.entryId;
        return this._patientRecord.getEntriesOfType(type).filter((item) => {
            return  item._observation && item._observation.specificFocusOfFinding &&
                    item._observation.specificFocusOfFinding.value._entryId === conditionEntryId;
        });
    }

    getTests() {
        return this.getObservationsOfType(FluxObservation).filter((item) => {
            return !Lang.isNull(item.quantity);
        });
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

    getMostRecentLabResultOfEachType() {
        let allResults = this.getTests();
        allResults.sort(this._observationsTimeSorter);

        let id, mostRecentResultOfEachType = {};
        allResults.forEach((lab, i) => {
            id = lab.codeableConceptCode;

            // Check that the lab result type (i.e hemoglobin, white blood cell, etc) doesn't already exist in the lookup table
            if (!mostRecentResultOfEachType[id]) {

                // If the lab result type doesn't already exist, add it to the table
                mostRecentResultOfEachType[id] = {
                    labResult: lab,
                    relevantTime: lab.relevantTime
                }
            } else {
                // Check if current lab result is the most recent compared to what is in the lookup table
                let time1 = new moment(mostRecentResultOfEachType[id].relevantTime, "D MMM YYYY");
                let time2 = new moment(lab.relevantTime, "D MMM YYYY");

                // If the current lab result is more recent than what is stored in the lookup table, update the data
                // Lookup will only contain the most recent lab result for that type
                if (time2 > time1) {
                    mostRecentResultOfEachType[id] = {
                        labResult: lab,
                        relevantTime: lab.relevantTime
                    }
                }
            }
        });

        // Generate array from lookup table
        let mostRecentLabResultsArray = [];
        for (var key in mostRecentResultOfEachType) {
            if (mostRecentResultOfEachType.hasOwnProperty(key)) {
                mostRecentLabResultsArray.push(mostRecentResultOfEachType[key].labResult);
            }
        }

        return mostRecentLabResultsArray;
    }

    getMostRecentLabResultsAsText() {
        // Set the max number of months prior to today that a lab result can be
        const numberOfMonths = 6;

        const mostRecentLabResults = this.getLabResultsChronologicalOrder(moment().subtract(numberOfMonths, 'months'));
        if (mostRecentLabResults.length === 0) return 'No lab results.';

        return mostRecentLabResults.map(l => `${l.name} ${l.quantity.number} ${l.quantity.unit} (${l.relevantTime})`).join('\r\n');
    }

    // Grab the most recent lab results within a set threshold date
    getMostRecentLabResults(results, sinceDate) {
        let mostRecentLabResultsLookupTable = {};

        // Convert the sinceDate to a moment.js date
        let sinceDateMoment = new moment(sinceDate, "D MMM YYYY");

        // Create mostRecentLabResultsLookupTable with unique lab results that fall after threshold date
        results.map((lab, i) => {
            const startTime = new moment(lab.relevantTime, "D MMM YYYY");

            // Check that the current lab result date is more later than the threshold date
            if (startTime > sinceDateMoment) {
                let id = lab.codeableConceptCode;

                // Check that the lab result type (i.e hemoglobin, white blood cell, etc) doesn't already exist in the lookup table
                if (!mostRecentLabResultsLookupTable[id]) {

                    // If the lab result type doesn't already exist, add it to the table
                    mostRecentLabResultsLookupTable[id] = {
                        labResult: lab,
                        relevantTime: lab.relevantTime
                    }
                } else {
                    // Check if current lab result is the most recent compared to what is in the lookup table
                    let time1 = new moment(mostRecentLabResultsLookupTable[id].relevantTime, "D MMM YYYY");
                    let time2 = new moment(lab.relevantTime, "D MMM YYYY");

                    // If the current lab result is more recent than what is stored in the lookup table, update the data
                    // Lookup will only contain the most recent lab result for that type
                    if (time2 > time1) {
                        mostRecentLabResultsLookupTable[id] = {
                            labResult: lab,
                            relevantTime: lab.relevantTime
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

    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        let hpiText = this.buildInitialPatientDiagnosisPreamble(patient);

        hpiText = this.buildEventNarrative(hpiText, patient, this.code);

        // Remove the final trailing newline, as the HPI list is complete.
        if (hpiText.slice(-2) === '\r\n') {
            hpiText = hpiText.slice(0, -2);
        }

        return hpiText;
    }

    buildInitialPatientDiagnosisPreamble(patient) {
        let hpiText = "";
        const name = patient.getName();
        const age = patient.getAge();
        const gender = patient.getGender();
        // Basic age, name, gender
        hpiText += '-';
        hpiText += ` ${name} is a ${age} year old ${gender}`;
        hpiText += "\r\n";
        // Information about Diagnosis
        hpiText += '-';
        hpiText += ` ${this.type} diagnosed ${this.diagnosisDate}`;
        hpiText += "\r\n";

        return hpiText;
    }

    hasPastTreatment(procedureCode, patient) {
        const procedure = patient.getProceduresForCondition(this).find((p) => {
            return (p.code === procedureCode);
        });
        return !Lang.isEmpty(procedure);
    }

    buildEventNarrative(hpiText, patient, conditionCode = null) {
        // Build narrative from sorted events
        // Get procedures, medications, recent lab results, and most recent progression from patient
        // Sort by start time and add snippets about each event to result text
        let events = [];
        events = events.concat(patient.getProceduresForCondition(this));
        events = events.concat(patient.getMedicationsForConditionReverseChronologicalOrder(this));
        events = events.concat(this.getLabResultsChronologicalOrder(moment().subtract(6, 'months')));
        const recentProgression = patient.getMostRecentProgressionForCondition(this);
        if (recentProgression) {
            events.push(recentProgression);
        }
        events.sort(this._eventsTimeSorter);

        // Check hpiConfig for procedures and medications to exclude for condition
        const exclusions = hpiConfig[conditionCode] ? hpiConfig[conditionCode].exclusions : hpiConfig["default"].exclusions;

        events = events.filter((event) => {
            return !exclusions.procedures.some(p => p.code === event.code) && !exclusions.medications.some(m => m.code === event.code);
        });

        const procedureTemplates = {
            range: '- {0} from {1} to {2}',
            single: '- {0} on {1}'
        };
        const medicationTemplates = {
            range: '- {0} from {1} to {2}',
            single: '- {0} started {1}',
            single_plan_stop: '- {0} started {1}, stopping {2}'
        };
        const today = new moment();
        events.forEach((event) => {
            switch (event.constructor) {
                case FluxProcedureRequest: {
                    if (event.occurrenceTime.timePeriodStart) {
                        let procedureText = procedureTemplates['range'];
                        procedureText = procedureText.replace('{0}', event.name);
                        procedureText = procedureText.replace('{1}', event.occurrenceTime.timePeriodStart);
                        procedureText = procedureText.replace('{2}', event.occurrenceTime.timePeriodEnd);
                        hpiText += procedureText;
                    } else {
                        let procedureText = procedureTemplates['single'];
                        procedureText = procedureText.replace('{0}', event.name);
                        procedureText = procedureText.replace('{1}', event.occurrenceTime);
                        hpiText += procedureText;
                    }
                    if (event.annotation) {
                        hpiText += " which " + event.annotation + ".";
                    } else {
                        hpiText += ".";
                    }
                    hpiText += '\r\n';
                    break;
                }
                case FluxMedicationRequested: {
                    const active = event.isActiveAsOf(today);
                    if (!active) {
                        let medicationText = medicationTemplates['range'];
                        medicationText = medicationText.replace('{0}', event.medication);
                        medicationText = medicationText.replace('{1}', event.expectedPerformanceTime.timePeriodStart);
                        medicationText = medicationText.replace('{2}', event.expectedPerformanceTime.timePeriodEnd);
                        hpiText += medicationText;
                        hpiText += '\r\n';
                    } else {
                        let medicationText;
                        if (event.expectedPerformanceTime.timePeriodEnd) {
                            medicationText = medicationTemplates['single_plan_stop'];
                        } else {
                            medicationText = medicationTemplates['single'];
                        }
                        medicationText = medicationText.replace('{0}', event.medication);
                        medicationText = medicationText.replace('{1}', event.expectedPerformanceTime.timePeriodStart);
                        if (event.expectedPerformanceTime.timePeriodEnd) {
                            medicationText = medicationText.replace('{2}', event.expectedPerformanceTime.timePeriodEnd);
                        }
                        hpiText += medicationText;
                        hpiText += '\r\n';
                    }
                    break;
                }
                case FluxCancerDiseaseStatus: {
                    if (event.asOfDate && event.status) {
                        hpiText += `- ${event.status} as of ${event.asOfDate}`;
                        if (event.evidence && event.evidence.length > 0) {
                            hpiText += ` based on ${event.evidence.join(', ')}`;
                        }
                        hpiText += '\r\n';
                    }
                    break;
                }
                case FluxObservation: {
                    if (event.quantity && event.quantity.number && event.quantity.unit) {
                        hpiText += `- ${event.name}: ${event.quantity.number} ${event.quantity.unit} on ${event.relevantTime}`;
                        hpiText += '\r\n';
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
            case FluxProcedureRequest: {
                a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
                if (!a_startTime.isValid()) a_startTime = new moment(a.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxMedicationRequested: {
                a_startTime = new moment(a.expectedPerformanceTime, "D MMM YYYY");
                if (!a_startTime.isValid()) a_startTime = new moment(a.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxCancerDiseaseStatus: {
                a_startTime = new moment(a.asOfDate, "D MMM YYYY");
                break;
            }
            case FluxObservation: {
                a_startTime = new moment(a.relevantTime, "D MMM YYYY");
                break;
            }
            default: {
                console.error("This object is not an instance of FluxProcedure, FluxMedicationPrescription, or FluxProgression.");
                return 0;
            }
        }

        switch (b.constructor) {
            case FluxProcedureRequest: {
                b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
                if (!b_startTime.isValid()) b_startTime = new moment(b.occurrenceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxMedicationRequested: {
                b_startTime = new moment(b.expectedPerformanceTime, "D MMM YYYY");
                if (!b_startTime.isValid()) b_startTime = new moment(b.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
                break;
            }
            case FluxCancerDiseaseStatus: {
                b_startTime = new moment(b.asOfDate, "D MMM YYYY");
                break;
            }
            case FluxObservation: {
                b_startTime = new moment(b.relevantTime, "D MMM YYYY");
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
        const a_startTime = new moment(a.relevantTime, "D MMM YYYY");
        const b_startTime = new moment(b.relevantTime, "D MMM YYYY");
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
        const a_startTime = new moment(a.relevantTime, "D MMM YYYY");
        const b_startTime = new moment(b.relevantTime, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    _getTopicCodeCoding(){
        if (this._condition.findingTopicCode &&
            this._condition.findingTopicCode.value && 
            this._condition.findingTopicCode.value.coding && 
            this._condition.findingTopicCode.value.coding.length > 0 ) return this._condition.findingTopicCode.value.coding[0];
        return null;
    }
    /**
     * Extract a human-readable string from a code.
     *
     * @param {Coding} coding
     * @returns {string} the display text if available, otherwise the code.
     * @private
     */
    _displayTextOrCode(coding) {
        return coding.displayText ? coding.displayText.value : coding.code.value;
    }

    toJSON() {
        return this._condition.toJSON();
    }
}

export default FluxCondition;
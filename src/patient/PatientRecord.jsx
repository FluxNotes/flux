import FluxObjectFactory from '../model/FluxObjectFactory';
import FluxAllergyIntolerance from '../model/allergy/FluxAllergyIntolerance';
import FluxBreastCancer from '../model/oncology/FluxBreastCancer';
import FluxBreastCancerGeneticAnalysisPanel from '../model/oncology/FluxBreastCancerGeneticAnalysisPanel';
import FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel from '../model/oncology/FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel';
import FluxClinicalNote from '../model/core/FluxClinicalNote';
import FluxCondition from '../model/condition/FluxCondition';
import FluxDiseaseProgression from '../model/condition/FluxDiseaseProgression';
import FluxEncounterRequested from '../model/encounter/FluxEncounterRequested';
import FluxMedicationRequested from '../model/medication/FluxMedicationRequested';
import FluxMedicationChange from '../model/medication/FluxMedicationChange';
import FluxNoKnownAllergy from '../model/allergy/FluxNoKnownAllergy';
import FluxPatient from '../model/entity/FluxPatient';
import FluxPatientIdentifier from '../model/base/FluxPatientIdentifier';
import FluxProcedureRequested from '../model/procedure/FluxProcedureRequested';
import FluxQuestionAnswer from '../model/finding/FluxQuestionAnswer';
import FluxResearchSubject from '../model/research/FluxResearchSubject';
import FluxBloodPressure from '../model/vital/FluxBloodPressure';
import FluxBodyTemperature from '../model/vital/FluxBodyTemperature';
import FluxBodyWeight from '../model/vital/FluxBodyWeight';
import FluxHeartRate from '../model/vital/FluxHeartRate';
import FluxImagingProcedurePerformed from '../model/procedure/FluxImagingProcedurePerformed';
import FluxPathologyReport from '../model/finding/FluxPathologyReport';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList.jsx'; // put jsx because yarn test-ui errors on this import otherwise
import CreationTime from '../model/shr/core/CreationTime';
import LastUpdated from '../model/shr/base/LastUpdated';
import Reference from '../model/Reference';
import mapper from '../lib/FHIRMapper';
import Lang from 'lodash';
import moment from 'moment';
import Guid from 'guid';
import _ from 'lodash';


class PatientRecord {

    constructor(shrJson = null) {
        this.enrolledClinicalTrials = [];
        this.missingEligibleTrialData = [];
        this.eligibleTrials = [];
        this.refreshClinicalTrials = true;
        if (!Lang.isNull(shrJson)) { // load existing from JSON
            this.entries = this._loadJSON(shrJson);
            this.patient = this.getPatient();
            this.person = this.getPerson();
            //this.patientReference = new Reference(this.patient.entryInfo.shrId, this.patient.entryInfo.entryId, this.patient.entryInfo.entryType);
            this.shrId = this.patient.entryInfo.shrId;
            this._calculateNextEntryId();
        } else { // create a new patient
            this.entries = [];
            this.patient = null;
            this.person = null;
            this.shrId = Guid.raw();
            this.nextEntryId = 1;
            //this.patientReference = null;
        }
    }

    _getValueUsingPath(item, attributePath) {
        let result = item, i;
        for (i = 0; i < attributePath.length; i++) {
            result = result[attributePath[i]];
        }
        return result;
    }

    _calculateNextEntryId() {
        this.nextEntryId = Math.max.apply(Math, this.entries.map(function (o) {
            return o.entryInfo.entryId;
        })) + 1;
    }

    _loadJSON(shrJson) {
        return shrJson.map((entry) => {
			return FluxObjectFactory.createInstance(entry, undefined, this);
        });
    }

    // Returns true if the entry is unsigned, false otherwise
    isUnsigned(entry){
        if(Lang.isNull(entry)) return false;

        if (entry.entryInfo.sourceClinicalNote) {
            let clinicalNote = this.getEntryFromReference(entry.entryInfo.sourceClinicalNote);
            if (!clinicalNote) return true;
            return !clinicalNote.signed;
        }
        return false;
    }

	fromFHIR(fhirJson) {
		// loop through each FHIR entry
		// map to correct SHR entryTypes
		// call ShrObjectFactory to create instances of SHR Object Model
        // call fromFHIR method on entry from Object
        let nextEntryId = 0;
		fhirJson.entry.forEach((entry) => {
			const entryTypes =  mapper.mapToEntryTypes(entry);
			entryTypes.forEach((entryType) => {
				if (!Lang.isNull(entryType)) {
                    const shrObj = FluxObjectFactory.createInstance({}, entryType);
                    shrObj.fromFHIR(entry);
                    shrObj.entryInfo.entryId = nextEntryId;
                    nextEntryId += 1;
					this.entries.push(shrObj);
				}
			});
		});

        this.patient = this.getPatient();
        this._calculateNextEntryId();
    }

    // Finds an existing entry with the same entryId and replaces it with updatedEntry
    updateExistingEntry(updatedEntry){
        var found = this.entries.find(function(element){
            return Lang.isEqual(element.entryInfo.entryId, updatedEntry.entryInfo.entryId);
        });
        if(!Lang.isUndefined(found)){
            var index = this.entries.indexOf(found);
            this.entries[index] = updatedEntry;
        }
    }

    addUnenrolled(entry, clinicalNote) {
        if (!(entry.title) || entry.title.length === 0) return null;
        var found = this.entries.find(function(element) {
            if (!(element instanceof FluxResearchSubject)) return false;
            return element.title === entry.title;
        });
        if(!Lang.isUndefined(found)) {
            found.status = 'Completed';
            return found;
        } else {
            return this.addEntryToPatientWithPatientFocalSubject(entry, clinicalNote);
        }
    }

    reAddEntryToPatient(entry){
        this.entries.push(entry);
    }

    addEntryToPatient(entry, clinicalNote) {       
        entry.entryInfo.shrId = this.shrId;
        entry.entryInfo.entryId = this.nextEntryId;
        this.nextEntryId = this.nextEntryId + 1;
        let today = new moment().format("D MMM YYYY");
        entry.entryInfo.creationTime = new CreationTime();
        entry.entryInfo.creationTime.dateTime = today;
        if (clinicalNote) {
            entry.entryInfo.sourceClinicalNote = this.createEntryReferenceTo(clinicalNote.entryInfo);
        }
        entry.entryInfo.lastUpdated = new LastUpdated();
        entry.entryInfo.lastUpdated.instant = today;
        this.entries.push(entry);
        this.refreshClinicalTrials = true;
        return entry; //entry.entryInfo.entryId;
    }

    addEntryToPatientWithPatientFocalSubject(entry, clinicalNote) {
        return this.addEntryToPatient(entry, clinicalNote);
    }

    removeEntryFromPatient(entry) {
        const index = this.entries.indexOf(entry);
        if (index >= 0) {
            this.entries.splice(index, 1);
            this._calculateNextEntryId();
        } else {
            console.error("Attempted to delete an entry that does not exist: " + entry.entryInfo.entryId);
        }
    }

    setDeceased(deceased) {
        if (this.patient) this.patient.deceased = deceased;       
    }

    static isEntryOfType(entry, type) {
        return (entry.entryType[0] === type);
    }

    static isEntryBasedOnType(entry, type) {
        return (entry.entryType.Value.indexOf(type) >= 0);
    }

    createEntryReferenceTo(entry) {
        if (entry.entryInfo) {
            return new Reference(entry.entryInfo.shrId, entry.entryInfo.entryId, entry.entryInfo.entryType.value);
        }
        return new Reference(entry.shrId, entry.entryId, entry.entryType.value);
    }

    getName() {
        if (Lang.isNull(this.person)) return null;
        return this.person.name;
    }

    getDateOfBirth() {
        if (Lang.isNull(this.person)) return null;
        return this.person.dateOfBirth;
    }

    getAge() {
        if (Lang.isNull(this.person)) return null;
        var today = new Date();
        return this.getAgeAsOf(today);
    }

    getAgeAsOf(date) {
        if (Lang.isNull(this.person)) return null;
        var birthDate = new Date(this.getDateOfBirth());
        var age = date.getFullYear() - birthDate.getFullYear();
        var m = date.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && date.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getGender() {
        if (Lang.isNull(this.patient)) return null;
        return this.patient.gender;
    }

    getPatient() {
        return this.getMostRecentEntryOfType(FluxPatient);
    }

    getPerson() {
        if (Lang.isUndefined(this.patient.person)) return null;
        return this.getEntryFromReference(this.patient.person);
    }

    getMRN() {
        let list = this.entries.filter((item) => {
            return item instanceof FluxPatientIdentifier && item.identifierType === "MRN"
        });
        let identifierEntry = PatientRecord.getMostRecentEntryFromList(list);
        if (Lang.isNull(identifierEntry)) return null;
        return identifierEntry.value;
    }

    getMostRecentPhoto() {
        return this.person.headshot;
    }

    getCurrentHomeAddress() {
        if (Lang.isNull(this.person)) return null;
        return this.person.address;
    }

    // return the soonest upcoming encounter. Includes encounters happening later today.
    getNextEncounter(){
        let encounters = this.getEncountersChronologicalOrder();

        // filter out any encounters happening after the specified moment argument
        return encounters.filter((encounter) => {
            const now = new moment();
            const encounterStartTime = new moment(encounter.expectedPerformanceTime, "D MMM YYYY HH:mm Z");
            return encounterStartTime.isAfter(now, "second");
        })[0];
    }

    // returns sorted list of encounters
    getEncountersChronologicalOrder(){
        let encounters = this.getEntriesOfType(FluxEncounterRequested);
        encounters.sort(this._encounterTimeSorter);
        return encounters;
    }

    getNextEncounterReasonAsText() {
        const nextEncounter = this.getNextEncounter();
        if (Lang.isUndefined(nextEncounter)) return "No upcoming appointments";
        // Tried replacing breast cancer condition text to establish condition context
        // return nextEncounter.reason.replace('Invasive ductal carcinoma of the breast', '@condition[[Invasive ductal carcinoma of the breast]]');
        return nextEncounter.reasons.map((r) => { return r.value; }).join(',');
    }

    getPreviousEncounter() {
        let encounters = this.getEncountersChronologicalOrder();

        // filter out any encounters happening before the specified moment argument
        const now = new moment();
        return encounters.filter((encounter) => {
            const encounterStartTime = new moment(encounter.expectedPerformanceTime, "D MMM YYYY HH:mm Z");
            return encounterStartTime.isBefore(now, "second");
        }).pop();
    }

    getPreviousEncounterDateAsString() {
        let encounter = this.getPreviousEncounter();
        return new moment(encounter.expectedPerformanceTime, "D MMM YYYY").format("D MMM YYYY");
    }

    getPreviousEncounterReasonAsText() {
        const previousEncounter = this.getPreviousEncounter();
        if (Lang.isUndefined(previousEncounter)) return "No recent appointments";
        return previousEncounter.reasons.map((r) => { return r.value; }).join(',');
    }

    // Return today's encounter date if it exsits, otherwise return the previous encounter's date
    getMostRecentEncounterDate() {
        let encounters = this.getEntriesOfType(FluxEncounterRequested);
        const today = new moment().format("D MMM YYYY"); // let today = new moment().format("D MMM YYYY");

        for (var i = 0; i < encounters.length; i++) {          
            let encounterDate = new moment(encounters[0].expectedPerformanceTime, "D MMM YYYY").format("D MMM YYYY");
            if (encounterDate === today) {
               return encounterDate;
            }
        }
        return this.getPreviousEncounterDateAsString();
    }

    getReviewOfSystems() {
        return this.entries.find((e) => {
            // C95618 is code for ROS
            return e instanceof FluxQuestionAnswer && e.observationCodeCoding === 'C95618';
        });
    }

    getReviewOfSystemsAsText() {
        let result;

        const ros = this.getReviewOfSystems();
        if (Lang.isUndefined(ros) || Lang.isNull(ros)) {
            return "No review of systems found in record.";
        }

        // get FluxQuestionAnswer instances from references
        const members = ros.members.map((m) => {
            return this.getEntryFromReference(m);
        });
        // get all the questionAnswers that have a value of true
        const trueAnswers = members.filter((m) => {
            return m.value === true;
        }).map((m) => {
            return m.observationCodeDisplayText;
        });

        result = `A complete ${members.length} point ROS was done and was unremarkable`;
        if (trueAnswers.length >= 3) {
            result += ` except for ${trueAnswers.slice(0, -1).join(", ")}, and ${trueAnswers.slice(-1)[0]}`;
        } else if (trueAnswers.length === 2) {
            result += ` except for ${trueAnswers.join(" and ")}`;
        } else if (trueAnswers.length === 1) {
            result += ` except for ${trueAnswers[0]}`;
        }

        return result + ".";
    }

    getReviewOfSystemsMembers() {
        const ros = this.getReviewOfSystems();
        if (Lang.isUndefined(ros) || Lang.isNull(ros)) {
            return "No review of systems found in record.";
        }

        // get FluxQuestionAnswer instances from references
        const members = ros.members.map((m) => {
            return this.getEntryFromReference(m);
        });
        return members;
    }

    getEligibleClinicalTrials(currentConditionEntry, currentlyEnrolledTrials) {
        if (!this.refreshClinicalTrials && (_.isEqual(this.enrolledClinicalTrials, this.getEnrolledClinicalTrials()))) {
            return this.eligibleTrials;
        }

        this.enrolledClinicalTrials = currentlyEnrolledTrials;
        const trialsList = new ClinicalTrialsList();
        const clinicalTrialsAndCriteriaList = trialsList.getListOfEligibleClinicalTrials(this, currentConditionEntry);
        this.eligibleTrials = clinicalTrialsAndCriteriaList;
        this.refreshClinicalTrials = false;
        return clinicalTrialsAndCriteriaList;
    }

    getEnrolledClinicalTrials(){
        let clinicalTrialList = new ClinicalTrialsList();
        let result = this.getEntriesOfType(FluxResearchSubject);

        result.forEach((study) => {
            if (study.title) {
                let trial = clinicalTrialList.getClinicalTrialByName(study.title);
                if (trial) {
                    study.details = trial.description;
                }
            }
        });

        return result;
    }

    getConditions() {
        return this.getEntriesIncludingType(FluxCondition);
    }

    getActiveConditions() {
        return this.getConditionsChronologicalOrder().filter((c) => {
            return (c.clinicalStatus === 'active' || c.clinicalStatus === 'recurrence');
        });
    }

    getConditionsChronologicalOrder() {
        let conditions = this.getConditions();
        conditions.sort(this._conditionsTimeSorter);
        return conditions;
    }

    getConditionsAlphabeticalOrder() {
        let conditions = this.getConditions();
        conditions.sort(this._conditionsAlphaSorter);
        return conditions;
    }

    // gets all allergy entries from patient
    getAllAllergies() {
        let allergies = this.getEntriesIncludingType(FluxAllergyIntolerance);
        const noKnownAllergies = this.getEntriesIncludingType(FluxNoKnownAllergy);
        const allAllergies = allergies.concat(noKnownAllergies);
        return allAllergies;
    }

    getAllergyIntolerancesSortedBySeverity() {
        return this.getAllergyIntolerances().sort(this._allergiesSeveritySorter);
    }

    // gets all allergy intolerances
    getAllergyIntolerances() {
        return this.getAllAllergies().filter((a) => {
            return a instanceof FluxAllergyIntolerance;
        });
    }

    // gets all no known allergies
    getNoKnownAllergies() {
        return this.getAllAllergies().filter((a) => {
            return a instanceof FluxNoKnownAllergy;
        });
    }

    // returns all instances of FluxAllergyIntolerance with specificed category
    getAllergiesByCategory(category) {
        const allergies = this.getEntriesIncludingType(FluxAllergyIntolerance);

        // if an allergy does not have a category
        if (category === "other") {
            return allergies.filter((a) => {
                return Lang.isNull(a.category);
            });
        }

        return allergies.filter((a) => {
            return a.category === category;
        });
    }

    getAllergiesAsText() {
        const allergies = this.getAllAllergies();
        let result = "";
        let first = true;
        allergies.forEach((allergy, index) => {
            if (!first) {
                result += "\r\n";
            }
            if (allergy instanceof FluxNoKnownAllergy) {
                result += allergy.noKnownAllergy
            } else if (allergy instanceof FluxAllergyIntolerance) {
                result += allergy.name;
            } else {
                result += allergy.value.coding[0].displayText;
            }
            first = false;
        });
        return result;
    }

    getLastBreastCancerCondition() {
        let result = this.getEntriesOfType(FluxBreastCancer);
        return result[result.length - 1];
    }

    // Add initial unsigned note to patient record
    addClinicalNote(signedOn, subject, hospital, createdBy, signedBy, content, signed) {

        // Generate the clinical note json from passed in values
        let clinicalNote = new FluxClinicalNote(
            {
                "signedOn": signedOn,
                "subject": subject,
                "hospital": hospital,
                "createdBy": createdBy,
                "signedBy": signedBy,
                "content": content,
                "signed": signed
            }
        );

        return this.addEntryToPatientWithPatientFocalSubject(clinicalNote, null).entryInfo.entryId;
    }

    // Remove a given clinical note from a patient record
    removeClinicalNote(note) {
        this.removeEntryFromPatient(note);
    }

    getNotes() {
        return this.getEntriesOfType(FluxClinicalNote);
    }

    getInProgressNotes(){
        let notes = this.getNotes();
        return notes.filter((inprog) => {
            return inprog.signed === false;
        });
    }

    getKeyEventsChronologicalOrder() {
        let conditions = this.getConditions();
        let result = [];
        conditions.forEach((c, i) => {
            result.push({
                name: "diagnosis date - " + c.type,
                start_time: c.diagnosisDate
            });
        });
        result.sort(this._keyEventsTimeSorter);
        return result;
    }

    getKeyEventsForConditionChronologicalOrder(condition) {
        let conditions = this.getConditions();
        let result = [];
        conditions.forEach((c) => {
            if (c.entryInfo.entryId === condition.entryInfo.entryId) {
                result.push({
                    name: "diagnosis date - " + c.type,
                    start_time: c.diagnosisDate
                });
            }
        });
        result.sort(this._keyEventsTimeSorter);
        return result;
    }

    getMedications() {
        return this.getEntriesOfType(FluxMedicationRequested);
    }

    getMedicationsAsText() { 
        const meds = this.getMedications();
        // Basic attributes to be listed in order
        let attributeList =  ["medication", "amountPerDose.value", "amountPerDose.units", "timingOfDoses.value", "timingOfDoses.units"];
        attributeList = attributeList.map((listItem) => {
            return listItem.split(".");
        });

        const lastMedicationIndex = meds.length - 1;
        const lastAttributeIndex = attributeList.length - 1;
        let strResult = "";
        meds.forEach((item, itemIndex) => {
            attributeList.forEach((itemKey, attrIndex) => {
                let nextSubstring = this._getValueUsingPath(item, itemKey);
                if (!Lang.isUndefined(nextSubstring) && !Lang.isNull(nextSubstring)) strResult += nextSubstring;
                // If there are more attributes, separate them with a space
                if (attrIndex < lastAttributeIndex) strResult += " ";
            });
            // If there are more medications, separate with newline/carriage returns
            if (itemIndex < lastMedicationIndex) {
                strResult += "\r\n";
            }
        });
        
        return strResult
    }

    getMedicationsChronologicalOrder() {
        return this.getMedicationsReverseChronologicalOrder().reverse();
    }

    getMedicationsReverseChronologicalOrder() {
        let list = this.getMedications();
        list.sort(this._reverseMedsTimeSorter);
        return list;
    }

    getMedicationsForConditionReverseChronologicalOrder(condition) {
        let medications = this.getMedicationsReverseChronologicalOrder();
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        medications = medications.filter((med) => {
            return med instanceof FluxMedicationRequested && med.reasons.some((r) => {
                return r.value.entryId && r.value.entryId === conditionEntryId;
            });
        });
        return medications;
    }

    getActiveMedications() {
        const allmeds = this.getMedicationsReverseChronologicalOrder();
        const today = new moment();

        return allmeds.filter((med) => {
            let medChanges = this.getMedicationChanges();
            let stopMedicationFound = medChanges.some((medChange) => { 
                return ((medChange.medicationBeforeChange) && (med === this.getEntryFromReference(medChange.medicationBeforeChange.value)) && (medChange.type === "stop"));
            });

            return med.isActiveAsOf(today) && !stopMedicationFound;
        });
    }

    getActiveMedicationsAsText() { 
        const activeMeds = this.getActiveMedicationsChronologicalOrder(); 

        // Basic attributes to be listed in order
        let attributeList =  ["medication", "amountPerDose.value", "amountPerDose.units", "timingOfDoses.value", "timingOfDoses.units"];
        attributeList = attributeList.map((listItem) => {
            return listItem.split(".");
        });
        // Start date to trail the text
        let startDatePath = "expectedPerformanceTime.timePeriodStart";
        startDatePath = startDatePath.split('.');

        const lastMedicationIndex = activeMeds.length - 1;
        const lastAttributeIndex = attributeList.length - 1;
        let strResult = "";
        activeMeds.forEach((item, itemIndex) => {
            attributeList.forEach((itemKey, attrIndex) => {
                let nextSubstring = this._getValueUsingPath(item, itemKey);
                if (!Lang.isUndefined(nextSubstring) && !Lang.isNull(nextSubstring)) strResult += nextSubstring;
                // If there are more attributes, separate them with a space
                if (attrIndex < lastAttributeIndex) strResult += " ";
            });
            // Add startTime to the end of the string
            strResult += " started on ";
            strResult += this._getValueUsingPath(item, startDatePath);
            // If there are more medications, separate with newline/carriage returns
            if (itemIndex < lastMedicationIndex) {
                strResult += "\r\n";
            }
        });

        return strResult;
    }

    getActiveAndRecentlyStoppedMedications() {
        const allmeds = this.getMedications();
        const today = new moment();
        const sixMonthsAgo = new moment().subtract(6, "months");

        return allmeds.filter((med) => {
            return med.isActiveBetween(sixMonthsAgo, today);
        });
    }

    getActiveMedicationsChronologicalOrder() {
        return this.getActiveMedicationsReverseChronologicalOrder().reverse();
    }

    getActiveMedicationsReverseChronologicalOrder() {
        let list = this.getActiveMedications();
        list.sort(this._reverseMedsTimeSorter);
        return list;
    }

    getActiveAndRecentlyStoppedMedicationsReverseChronologicalOrder() {
        let list = this.getActiveAndRecentlyStoppedMedications();
        list.sort(this._reverseMedsTimeSorter);
        return list;
    }

    getActiveMedicationsForConditionReverseChronologicalOrder(condition) {
        let medications = this.getActiveMedicationsReverseChronologicalOrder();
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        medications = medications.filter((med) => {
            return med instanceof FluxMedicationRequested && med.reasons.some((r) => {
                return r.value.entryId && r.value.entryId === conditionEntryId;
            });
        });
        return medications;
    }

    getActiveAndRecentlyStoppedMedicationsForConditionReverseChronologicalOrder(condition) {
        let medications = this.getActiveAndRecentlyStoppedMedicationsReverseChronologicalOrder();
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        medications = medications.filter((med) => {
            return med instanceof FluxMedicationRequested && med.reasons.some((r) => {
                return r.value.entryId && r.value.entryId === conditionEntryId;
            });
        });
        return medications;
    }

    getMedicationChanges() {
        return this.getEntriesOfType(FluxMedicationChange);
    }

    getMedicationChangesChronologicalOrder() {
        let list = this.getMedicationChanges();
        list.sort(this._medChangesTimeSorter);
        return list;
    }

    getMedicationChangesForConditionChronologicalOrder(condition) {
        let medicationsChanges = this.getMedicationChangesChronologicalOrder();
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        medicationsChanges = medicationsChanges.filter((change) => {
            const medBeforeChange = change.medicationBeforeChange ? this.getEntryFromReference(change.medicationBeforeChange.value) : null;
            const medAfterChange = change.medicationAfterChange ? this.getEntryFromReference(change.medicationAfterChange.value) : null;

            let eitherChangeIsRelated;

            if (medAfterChange && medBeforeChange) {
                eitherChangeIsRelated = medBeforeChange.reasons.some((r) => {
                        return r.value.entryId && r.value.entryId === conditionEntryId;
                    }) || medAfterChange.reasons.some((r) => {
                        return r.value.entryId && r.value.entryId === conditionEntryId;
                    });
            } else if (medBeforeChange){
                eitherChangeIsRelated = medBeforeChange.reasons.some((r) => {
                    return r.value.entryId && r.value.entryId === conditionEntryId;
                });
            } else {
                return false;
            }
            return change instanceof FluxMedicationChange && eitherChangeIsRelated;
        });
        return medicationsChanges;
    }

    createActiveMedication(selectedValue) {
        let medication = FluxObjectFactory.createInstance({}, "http://standardhealthrecord.org/spec/shr/medication/MedicationRequested", this);
        medication.medication = selectedValue;
        medication.startDate = new Date();
     
        return medication;
    }

    getRecentImagingChronologicalOrder() {
        let imagingProcedures = this.getEntriesOfType(FluxImagingProcedurePerformed);
        const numberOfMonths = 6;
        const sinceDate = new moment(moment().subtract(numberOfMonths, 'months'), 'D MMM YYYY');

        // Filter imagingProcedures if they are older than sinceDate
        imagingProcedures = imagingProcedures.filter(p => {
            if (p.occurrenceTime.timePeriodStart) {
                return new moment(p.occurrenceTime.timePeriodStart, 'D MMM YYYY') > sinceDate;
            }

            return new moment(p.occurrenceTime, 'D MMM YYYY') > sinceDate;
        });
        imagingProcedures.sort(this._proceduresTimeSorter);

        return imagingProcedures;
    }

    getRecentImagingAsText() {
        const imagingProcedures = this.getRecentImagingChronologicalOrder();

        if (imagingProcedures.length === 0) return 'No recent imaging procedures.';

        return imagingProcedures.map(p => {
            let text = p.name;

            if (p.occurrenceTime.timePeriodStart) {
                text += ` from ${p.occurrenceTime.timePeriodStart} to ${p.occurrenceTime.timePeriodEnd} ${p.annotation}`;
            } else {
                text += ` on ${p.occurrenceTime} ${p.annotation}`;
            }

            return text;
        }).join('\r\n');
    }

    getProcedures() {
        return this.getEntriesOfType(FluxProcedureRequested);
    }

    getProceduresChronologicalOrder() {
        let list = this.getProcedures();
        list.sort(this._proceduresTimeSorter);
        return list;
    }

    getProceduresForCondition(condition) {
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        return this.entries.filter((item) => {
            return item instanceof FluxProcedureRequested && item.reasons && item.reasons.some((r) => {
                    return r.value.entryId && r.value.entryId === conditionEntryId;
                });
        });
    }

    getProceduresForConditionChronologicalOrder(condition) {
        let procedures = this.getProceduresForCondition(condition);
        procedures.sort(this._proceduresTimeSorter);
        return procedures;
    }

    getImagingProceduresForConditionChronologicalOrder(condition) {
        const imagingProcedures = this.getEntriesOfType(FluxImagingProcedurePerformed);
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;

        imagingProcedures.sort(this._proceduresTimeSorter);

        return imagingProcedures.filter(p => {
            return p.reasons && p.reasons.some(r => r.value.entryId && r.value.entryId === conditionEntryId);
        });
    }

    getBreastCancerGeneticAnalysisPanelsChronologicalOrder() {
        let panels = this.getEntriesOfType(FluxBreastCancerGeneticAnalysisPanel);
        panels.sort(this._clinicallyRelevantTimeTimeSorter);
        return panels;
    }

    getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder() {
        let panels = this.getEntriesOfType(FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel);
        panels.sort(this._clinicallyRelevantTimeTimeSorter);
        return panels;
    }

    getPathologyReportsChronologicalOrder() {
        let reports = this.getPathologyReports();
        //reports.sort(this._clinicallyRelevantTimeTimeSorter);
    
        return reports;

    } 

    getPathologyReports() {
        var result = this.getEntriesOfType(FluxPathologyReport);
        
        return result
    }

    getProgressions() {
        return this.getEntriesOfType(FluxDiseaseProgression);
    }

    getProgressionsChronologicalOrder() {
        let progressions = this.getProgressions();
        progressions.sort(this._progressionTimeSorter);
        return progressions;
    }

    getProgressionsForCondition(condition) {
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        return this.entries.filter((item) => {
            return item instanceof FluxDiseaseProgression && item.focalSubjectReference.entryId === conditionEntryId;
        });
    }

    getProgressionsForConditionChronologicalOrder(condition) {
        let progressions = this.getProgressionsChronologicalOrder();
        const conditionEntryId = condition.entryInfo.entryId.value || condition.entryInfo.entryId;
        progressions = progressions.filter((progression) => {
            return progression.focalSubjectReference.entryId === conditionEntryId;
        });
        return progressions;
    }

    getFocalConditionForProgression(progression) {
        let result = this.entries.filter((item) => {
            if (item instanceof FluxCondition) {
                const conditionEntryId = item.entryInfo.entryId.value || item.entryInfo.entryId;
                return progression.focalSubjectReference.entryId === conditionEntryId;
            } else {
                return false;
            }
        });
        return result[0];
    }

    getMostRecentProgressionForCondition(condition, sinceDate = null) {
        let progressionList = this.getProgressionsForCondition(condition);
        if (progressionList.length === 0) return null;
        const sortedProgressionList = progressionList.sort(this._progressionTimeSorter);
        const length = sortedProgressionList.length;
        let p = (sortedProgressionList[length - 1]);
        if (Lang.isNull(sinceDate)) return p;
        const startTime = new moment(p.asOfDate, "D MMM YYYY");
        if (startTime < sinceDate) {
            return null;
        } else {
            return p;
        }
    }

    _medChangesTimeSorter(a, b) {
        const a_time = a.entryInfo.creationTime.dateTime;
        const b_time = b.entryInfo.creationTime.dateTime;
        const a_startTime = new moment(a_time.timePeriodStart, "D MMM YYYY");
        const b_startTime = new moment(b_time.timePeriodStart, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }
    _reverseMedsTimeSorter(a, b) {
        const a_startTime = new moment(a.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
        const b_startTime = new moment(b.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return 1;
        }
        if (a_startTime > b_startTime) {
            return -1;
        }
        return 0;
    }
    _encounterTimeSorter(a, b) {
        const a_startTime = new moment(a.expectedPerformanceTime, "D MMM YYYY HH:mm Z");
        const b_startTime = new moment(b.expectedPerformanceTime, "D MMM YYYY HH:mm Z");

        if (a_startTime.isBefore(b_startTime, "second")) {
            return -1;
        }
        if (a_startTime.isAfter(b_startTime, "second")) {
            return 1;
        }
        return 0;
    }
    _progressionTimeSorter(a, b) {
        const a_startTime = new moment(a.asOfDate, "D MMM YYYY");
        const b_startTime = new moment(b.asOfDate, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }
    _clinicallyRelevantTimeTimeSorter(a, b) {
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

    _proceduresTimeSorter(a, b) {
        let a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
        if (!a_startTime.isValid()) a_startTime = new moment(a.occurrenceTime.timePeriodStart, "D MMM YYYY");
        let b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
        if (!b_startTime.isValid()) b_startTime = new moment(b.occurrenceTime.timePeriodStart, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return 1;
        }
        if (a_startTime > b_startTime) {
            return -1;
        }
        return 0;
    }

    _keyEventsTimeSorter(a, b) {
        const a_startTime = new moment(a.start_time, "D MMM YYYY");
        const b_startTime = new moment(b.start_time, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    _conditionsTimeSorter(a, b) {
        const a_startTime = new moment(a.diagnosisDate, "D MMM YYYY");
        const b_startTime = new moment(b.diagnosisDate, "D MMM YYYY");
        if (a_startTime < b_startTime) {
            return 1;
        }
        if (a_startTime > b_startTime) {
            return -1;
        }
        return 0;
    }

    _conditionsAlphaSorter(a, b) {
        if (a.type < b.type) {
            return -1;
        }
        if (a.type > b.type) {
            return 1;
        }
        return 0;
    }

    _allergiesSeveritySorter(a, b) {
        let a_severity, b_severity;

        switch (a.severity) {
            case "Severe": {
                a_severity = 1;
                break;
            }
            case "Moderate": {
                a_severity = 0;
                break;
            }
            default: {
                a_severity = -1;
            }
        }

        switch (b.severity) {
            case "Severe": {
                b_severity = 1;
                break;
            }
            case "Moderate": {
                b_severity = 0;
                break;
            }
            default: {
                b_severity = -1;
            }
        }

        if (a_severity > b_severity) return -1;
        else if (a_severity < b_severity) return 1;
        return 0;
    }

    // generic methods
    getEntriesIncludingType(type) {
        return this.entries.filter((item) => {
            return item instanceof type
        });
    }

    getEntriesOtherThanNotes() {
        return this.entries.filter((item) => {
            return !(item instanceof FluxClinicalNote);
        });
    }

    getEntriesOfType(type) {
        return this.entries.filter((item) => {
            return item instanceof type;
        });
    }

    getEntriesOfEntryType(entryType) {
        return this.entries.filter((entry) => {
            return entry.entryInfo.entryType && entry.entryInfo.entryType.value === entryType;
        });
    }

    getEntriesWithSourceClinicalNote(note) {
        return this.entries.filter((entry) => {
            if (entry.sourceClinicalNoteReference) {
                return entry.sourceClinicalNoteReference.entryId === note.entryInfo.entryId;
            } else {
                return false;
            }
        });
    }

    getMostRecentEntryOfType(type) {
        let list = this.getEntriesOfType(type);
        return PatientRecord.getMostRecentEntryFromList(list);
    }

    getEntryFromReference(ref) {
        return this.entries.find((item) => {
            if (!Lang.isUndefined(item.entryInfo.entryId.id)) return item.entryInfo.entryId.id === ref.entryId;
            return item.entryInfo.entryId === ref.entryId;
        });
    }

    getEntryById(entryId) {
        return this.entries.find((entry) => {
            return entry.entryInfo.entryId === entryId;
        });
    }

    getEntries() {
        return this.entries;
    }

    getVitalByCode(code) {
        return this.entries
            .filter(e => e.codeableConceptCode === code) // Find vital of matching code
            .sort(this._clinicallyRelevantTimeTimeSorter);
    }

    static getMostRecentEntryFromList(list) {
        if (list.length === 0) return null;
        if (list.length === 1) return list[0];

        let maxDate = Math.max.apply(null, list.map(function (o) {
            return new Date(o.entryInfo.lastUpdated.instant);
        }));
        let result = list.filter((item) => {
            return new Date(item.entryInfo.lastUpdated.instant).getTime() === new Date(maxDate).getTime()
        });
        if (Lang.isUndefined(result) || Lang.isNull(result) || result.length === 0) {
            return null;
        }
        return result[0];
    }

    getTodaysVitalsAsString() {
        let today = new moment().format("D MMM YYYY");
        const bloodPressure = this.getEntriesOfType(FluxBloodPressure).find((bloodPressure) => {  
            const clinicallyRelevantTime = new moment(bloodPressure.clinicallyRelevantTime, "D MMM YYYY").format("D MMM YYYY");
            return clinicallyRelevantTime === today; 
        });
        const bodyTemperature = this.getEntriesOfType(FluxBodyTemperature).find((bodyTemperature) => {  
            const clinicallyRelevantTime = new moment(bodyTemperature.clinicallyRelevantTime, "D MMM YYYY").format("D MMM YYYY");
            return clinicallyRelevantTime === today; 
        });
        const bodyWeight = this.getEntriesOfType(FluxBodyWeight).find((bodyWeight) => {  
            const clinicallyRelevantTime = new moment(bodyWeight.clinicallyRelevantTime, "D MMM YYYY").format("D MMM YYYY");
            return clinicallyRelevantTime === today; 
        });
        const heartRate = this.getEntriesOfType(FluxHeartRate).find((heartRate) => {  
            const clinicallyRelevantTime = new moment(heartRate.clinicallyRelevantTime, "D MMM YYYY").format("D MMM YYYY");
            return clinicallyRelevantTime === today; 
        });
        if (Lang.isUndefined(bloodPressure) && Lang.isUndefined(bodyTemperature) && Lang.isUndefined(bodyWeight) && Lang.isUndefined(heartRate)){
            return "no vital signs taken today";
        }
        const results = (Lang.isUndefined(bloodPressure) ? "" : "Blood pressure is " + bloodPressure.value + ". ") +
                        (Lang.isUndefined(bodyTemperature) ? "" : "Temperature is " + bodyTemperature.value + " "+ bodyTemperature.units + ". ") +
                        (Lang.isUndefined(bodyWeight) ? "" : "Weight is " + bodyWeight.value + " " + bodyWeight.units + ". ") + 
                        (Lang.isUndefined(heartRate) ? "" : "Heart rate is " + heartRate.value + heartRate.units + ".");;
        return results;
    }

    getReferredBy() {
        let referredBy = this.getPreviousEncounter().referredBy;
        if (Lang.isUndefined(referredBy)) return "No referral for this appointment";
        return referredBy;
    }
}

export default PatientRecord;
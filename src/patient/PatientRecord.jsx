import ShrObjectFactory from '../model/ShrObjectFactory';
import BreastCancer from '../model/shr/oncology/BreastCancer';
import ClinicalNote from '../model/shr/core/ClinicalNote';
import Condition from '../model/shr/condition/Condition';
import FluxMedicationPrescription from '../model/medication/FluxMedicationPrescription';
import PatientIdentifier from '../model/shr/base/PatientIdentifier';
import PersonOfRecord from '../model/shr/demographics/PersonOfRecord';
import Photograph from '../model/shr/demographics/Photograph';
import Procedure from '../model/shr/procedure/Procedure';
import FluxProgression from '../model/oncology/FluxProgression';
import ReceptorStatusObservation from '../model/shr/oncology/ReceptorStatusObservation';
import FluxTNMStage from '../model/oncology/FluxTNMStage';
import Lang from 'lodash'
import moment from 'moment';
import Guid from 'guid';

class PatientRecord {
	constructor(shrJson = null) {
        if (!Lang.isNull(shrJson)) { // load existing from JSON
            this.entries = this._loadJSON(shrJson);
            this.personOfRecord = this.getPersonOfRecord();
            this.shrId = this.personOfRecord.entryInfo.shrId;
            this.nextEntryId = Math.max.apply(Math, this.entries.map(function(o) { return o.entryId; })) + 1;
            /*this.patientFocalSubject = {    "entryType": this.personOfRecord.entryType[0],
                                            "shrId": this.shrId,
                                            "entryId": this.personOfRecord.entryId };*/
        } else { // create a new patient
            this.entries = [];
            this.personOfRecord = null;
            this.shrId = Guid.raw();
            this.nextEntryId = 1;
            this.patientFocalSubject = null;
        }
    }
    
    _loadJSON(shrJson) {
        return shrJson.map((entry) => {
			return ShrObjectFactory.createInstance(entry.entryType[0], entry);
            
        });
    }

    addEntryToPatient(entry) {
        entry.entryInfo.shrId = this.shrId;
        entry.entryInfo.entryId = this.nextEntryId;
        this.nextEntryId = this.nextEntryId + 1;
        let today = new moment().format("D MMM YYYY");
        entry.entryInfo.originalCreationDate = today;
        entry.entryInfo.lastUpdateDate = today;
        this.entries.push(entry);
    }

    addEntryToPatientWithPatientFocalSubject(entry) {
        entry.focalSubject = this.patientFocalSubject;
        this.addEntryToPatient(entry);
    }

    setDeceased(deceased) {
        this.personOfRecord.deceased = deceased;
    }

    static isEntryOfType(entry, type) {
        return (entry.entryType[0] === type);
    }
    
    static isEntryBasedOnType(entry, type) {
        return (entry.entryType.indexOf(type) >= 0);
    }
    
    static createEntryReferenceTo(entry) {
        return { "entryType": entry.entryType[0], "shrId": entry.shrId, "entryId": entry.entryId };
    }
	
	getName() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		return personOfRecord._humanName;
	}
	
	getDateOfBirth() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		return new moment(personOfRecord._dateOfBirth._value, "D MMM YYYY");
	}
	
	getAge() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		var today = new Date();
		var birthDate = new Date(personOfRecord._dateOfBirth._value);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}
	
	getGender() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		return personOfRecord.administrativeGender.value;
	}
	
	getPersonOfRecord() {
		//return this.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/PersonOfRecord");
        return this.getMostRecentEntryOfType(PersonOfRecord);
	}
	
	getMRN() {
		let list = this.entries.filter((item) => { return item instanceof PatientIdentifier && item.identifierType === "MRN" });
		let identifierEntry = PatientRecord.getMostRecentEntryFromList(list);
		if (Lang.isNull(identifierEntry)) return null;
		return identifierEntry.value;
	}
	
	getMostRecentPhoto() {
		//let photoEntry = this.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/Photograph");
        let photoEntry = this.getMostRecentEntryOfType(Photograph);
		if (Lang.isNull(photoEntry)) return null;
		return photoEntry.filePath;
	}
	
	getCurrentHomeAddress() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord) || !personOfRecord.addressUsed) return null;
		let addressUsed = personOfRecord.addressUsed.filter((item) => { return item.addressUse.some((au) => au.value.coding[0].value === "primary_residence") });
		if (addressUsed.length === 0) return null;
		return addressUsed[0].value;
	}
	
	getConditions() {
		//let result = this.getEntriesIncludingType("http://standardhealthrecord.org/condition/Condition");
        let result = this.getEntriesIncludingType(Condition);
		return result;
	}
	
	getLastBreastCancerCondition() {
		let result = this.getEntriesOfType(BreastCancer);
		return result[result.length - 1];
	}
	
	getNotes() {
		return this.getEntriesOfType(ClinicalNote);
	}
	
	getKeyEventsChronologicalOrder() {
		let conditions = this.getConditions();
		let result = [];
		conditions.forEach((c, i) => {
			result.push({name: "diagnosis date - " + c.specificType.coding[0].displayText, start_time: c.whenClinicallyRecognized});
		});
		result.sort(this._eventTimeSorter);
		return result;
	}

    getKeyEventsForConditionChronologicalOrder(condition) {
        let conditions = this.getConditions();
        let result = [];
        conditions.forEach((c) => {
            if(c.entryInfo.entryId === condition.entryInfo.entryId) {
                result.push({name: "diagnosis date - " + c.specificType.value.coding[0].displayText.value, start_time: c.whenClinicallyRecognized.value.value.value.timePeriodStart.value});
            }
        });
        result.sort(this._eventTimeSorter);
        return result;
    }
	
	getMedications() {
		return this.getEntriesOfType(FluxMedicationPrescription);
	}
	
	getMedicationsChronologicalOrder() {
		let list = this.getMedications();
		list.sort(this._medsTimeSorter);
		return list;
	}

    getMedicationsForConditionChronologicalOrder(condition) {
        let medications = this.getMedicationsChronologicalOrder();
        medications = medications.filter((med) => {
            return med instanceof FluxMedicationPrescription && med.reason.some((r) => { return r.value.entryId === condition.entryInfo.entryId; });
        });
        return medications;
    }
	
	getProcedures() {
		return this.getEntriesOfType(Procedure);
	}
	
	getProceduresChronologicalOrder() {
		let list = this.getProcedures();
		list.sort(this._proceduresTimeSorter);
		return list;
	}
	
	getProceduresForCondition(condition) {
		return this.entries.filter((item) => { 
			return item instanceof Procedure && item.reason.some((r) => { return r.value.entryId === condition.entryInfo.entryId; });
		});
	}
	
	getProceduresForConditionChronologicalOrder(condition) {
        let procedures = this.getProceduresForCondition(condition);
        procedures.sort(this._proceduresTimeSorter);
        return procedures;
	}

	getObservationsForCondition(condition, type) {
        if (!condition.observation) return [];
		return condition.observation.filter((item) => { 
			return item instanceof type;
		});
	}
	
	getMostRecentStagingForCondition(condition, sinceDate = null) {
		let stagingList = this.getObservationsForCondition(condition, FluxTNMStage);
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
	
	getReceptorStatus(condition, receptorType) {
		let listObs = this.getObservationsForCondition(condition, ReceptorStatusObservation);
		let list = listObs.filter((item) => {
			return item.receptorType.value.coding[0].value === receptorType;
		});
		if (list.length === 0) return null; else return list[0];
	}
	
	getProgressions() {
		return this.getEntriesOfType(FluxProgression);
	}

    getProgressionsChronologicalOrder() {
        let progressions = this.getProgressions();
        progressions.sort(this._progressionTimeSorter);
        return progressions;
    }
	
	getProgressionsForCondition(condition) {
		return this.entries.filter((item) => {
			return item instanceof FluxProgression && item.assessmentFocus.some((a) => { return a.value.entryId === condition.entryInfo.entryId; });
		});
	}

    getProgressionsForConditionChronologicalOrder(condition) {
        let progressions = this.getProgressionsChronologicalOrder();
        progressions = progressions.filter((progression) => {
            return progression.assessmentFocus.some((a) => { return a.value.entryId === condition.entryInfo.entryId; });
        });
        return progressions;
    }
	
	getFocalConditionForProgression(progression) {
		let result = this.entries.filter((item) => { return (item instanceof Condition) 
            && progression.assessmentFocus.some((a) => { return a.value.entryId === item.entryInfo.entryId }) });
		return result[0];
	}
	
    getMostRecentProgressionForCondition(condition, sinceDate = null) {
		let progressionList = this.getProgressionsForCondition(condition);
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

	_medsTimeSorter(a, b) {
		const a_startTime = new moment(a.requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
		const b_startTime = new moment(b.requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_progressionTimeSorter(a, b) {
		const a_startTime = new moment(a.asOfDate, "D MMM YYYY");
		const b_startTime = new moment(b.asOfDate, "D MMM YYYY");
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_observationTimeSorter(a, b) {
		const a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
		const b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_proceduresTimeSorter(a, b) {
		let a_startTime = new moment(a.occurrenceTime, "D MMM YYYY");
        if(!a_startTime.isValid()) a_startTime = new moment(a.occurrenceTime.timePeriodStart, "D MMM YYYY");
		let b_startTime = new moment(b.occurrenceTime, "D MMM YYYY");
        if(!b_startTime.isValid()) b_startTime = new moment(b.occurrenceTime.timePeriodStart, "D MMM YYYY");
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_eventTimeSorter(a, b) {
		const a_startTime = new moment(a.start_time, "D MMM YYYY");
		const b_startTime = new moment(b.start_time, "D MMM YYYY");
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}

	// generic methods
	getEntriesIncludingType(type) {
		//return this.entries.filter((item) => { return item.itemInfo.entryType.some((t) => { return t === type; }) });
        return this.entries.filter((item) => { return item instanceof type });
	}
	
	getEntriesOfType(type) {
		return this.entries.filter((item) => { return item instanceof type });
	}
    
    static getEntriesOfTypeFromList(list, type) {
        return list.filter((item) => { return item.entryType[0] === type });
    }
	
	getMostRecentEntryOfType(type) {
		let list = this.getEntriesOfType(type);
		return PatientRecord.getMostRecentEntryFromList(list);
	}
	
	static getMostRecentEntryFromList(list) {
		if (list.length === 0) return null;
        if (list.length === 1) return list[0];
        
		let maxDate = Math.max.apply(null, list.map(function(o) { return new Date(o._entryInfo._lastUpdateDate);}));
		let result = list.filter((item) => { return new Date(item._entryInfo._lastUpdateDate).getTime() === new Date(maxDate).getTime() });
		if (Lang.isUndefined(result) || Lang.isNull(result) || result.length === 0) {
            return null;
        }
		return result[0];
	}
}

export default PatientRecord;

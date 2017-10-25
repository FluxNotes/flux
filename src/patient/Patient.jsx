import Lang from 'lodash'
import moment from 'moment';
import staging from '../lib/staging.jsx';
import toxicityLookup from '../lib/toxicreactiontotreatment_lookup.jsx';
import Guid from 'guid';

class Patient {
	constructor(shrJson = null) {
        if (!Lang.isNull(shrJson)) { // load existing from JSON
            this.entries = shrJson; 
            this.personOfRecord = this.getPersonOfRecord();
            this.shrId = this.personOfRecord.shrId;
            this.nextEntryId = Math.max.apply(Math, this.entries.map(function(o) { return o.entryId; })) + 1;
            this.patientFocalSubject = {    "entryType": this.personOfRecord.entryType[0],
                                            "shrId": this.shrId,
                                            "entryId": this.personOfRecord.entryId };
        } else { // create a new patient
            this.entries = [];
            this.personOfRecord = null;
            this.shrId = Guid.raw();
            this.nextEntryId = 1;
            this.patientFocalSubject = null;
        }
    }

    addEntryToPatient(entry) {
        entry.shrId = this.shrId;
        entry.entryId = this.nextEntryId;
        this.nextEntryId = this.nextEntryId + 1;
        let today = new moment().format("D MMM YYYY");
        entry.originalCreationDate = today;
        entry.asOfDate = null;
        entry.lastUpdateDate = today;
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
		return personOfRecord.value.value;
	}
	
	getDateOfBirth() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		return new moment(personOfRecord.dateOfBirth, "D MMM YYYY");
	}
	
	getAge() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		var today = new Date();
		var birthDate = new Date(personOfRecord.dateOfBirth);
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
		return personOfRecord.administrativeGender;
	}
	
	getPersonOfRecord() {
		return this.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/PersonOfRecord");
	}
	
	getMRN() {
		let list = this.entries.filter((item) => { return item.entryType[0] === "http://standardhealthrecord.org/base/PatientIdentifier" && item.identifierType === "MRN" });
		let identifierEntry = Patient.getMostRecentEntryFromList(list);
		if (Lang.isNull(identifierEntry)) return null;
		return identifierEntry.value;
	}
	
	getMostRecentPhoto() {
		let photoEntry = this.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/Photograph");
		if (Lang.isNull(photoEntry)) return null;
		return photoEntry.filePath;
	}
	
	getCurrentHomeAddress() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		let addressUsed = personOfRecord.addressUsed.filter((item) => { return item.addressUse.coding.value === "primary_residence" });
		if (addressUsed.length === 0) return null;
		return addressUsed[0].value;
	}
	
	getConditions() {
		let result = this.getEntriesIncludingType("http://standardhealthrecord.org/condition/Condition");
		return result;
	}
	
	getLastBreastCancerCondition() {
		let result = this.getEntriesOfType("http://standardhealthrecord.org/oncology/BreastCancer");
		return result[result.length - 1];
	}
	
	getNotes() {
		return this.getEntriesOfType("http://standardhealthrecord.org/core/ClinicalNote");
	}
	
	getKeyEventsChronologicalOrder() {
		let conditions = this.getConditions();
		let result = [];
		conditions.forEach((c, i) => {
			result.push({name: "diagnosis date - " + c.specificType.coding.displayText, start_time: c.whenClinicallyRecognized});
		});
		result.sort(this._eventTimeSorter);
		return result;
	}

    getKeyEventsForConditionChronologicalOrder(condition) {
        let conditions = this.getConditions();
        let result = [];
        conditions.forEach((c) => {
            if(c.entryId === condition.entryId) {
                result.push({name: "diagnosis date - " + c.specificType.coding.displayText, start_time: c.whenClinicallyRecognized});
            }
        });
        result.sort(this._eventTimeSorter);
        return result;
    }
	
	getMedications() {
		return this.getEntriesOfType("http://standardhealthrecord.org/medication/MedicationPrescription");
	}
	
	getMedicationsChronologicalOrder() {
		let list = this.getMedications();
		list.sort(this._medsTimeSorter);
		return list;
	}

    getMedicationsForConditionChronologicalOrder(condition) {
        let medications = this.getMedicationsChronologicalOrder();
        medications = medications.filter((med) => {
            return med.reason.entryId === condition.entryId;
        });
        return medications;
    }
	
	getProcedures() {
		return this.getEntriesOfType("http://standardhealthrecord.org/procedure/Procedure");
	}
	
	getProceduresChronologicalOrder() {
		let list = this.getProcedures();
		list.sort(this._proceduresTimeSorter);
		return list;
	}
	
	getProceduresForCondition(condition) {
		return this.entries.filter((item) => { 
			return item.entryType[0] === "http://standardhealthrecord.org/procedure/Procedure" && item.reason.entryId === condition.entryId;
		});
	}
	
	getProceduresForConditionChronologicalOrder(condition) {
        let procedures = this.getProceduresForCondition(condition);
        procedures.sort(this._proceduresTimeSorter);
        return procedures;
	}

	getObservationsForCondition(condition, type) {
		return condition.observation.filter((item) => { 
			return item.entryType[0] === type;
		});
	}
	
	getMostRecentStagingForCondition(condition, sinceDate = null) {
		let stagingList = this.getObservationsForCondition(condition, "http://standardhealthrecord.org/oncology/TNMStage");
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
		let listObs = this.getObservationsForCondition(condition, "http://standardhealthrecord.org/oncology/BreastCancerReceptorStatus");
		let obs = listObs[0];
		let list = obs.panelMembers.filter((item) => {
			return item.receptorType.coding.value === receptorType;
		});
		if (list.length === 0) return null; else return list[0];
	}
	
	getProgressions() {
		return this.getEntriesOfType("http://standardhealthrecord.org/oncology/Progression");
	}

    getProgressionsChronologicalOrder() {
        let progressions = this.getProgressions();
        progressions.sort(this._progressionTimeSorter);
        return progressions;
    }
	
	getProgressionsForCondition(condition) {
		return this.entries.filter((item) => { 
			return item.entryType[0] === "http://standardhealthrecord.org/oncology/Progression" && item.focalCondition.entryId === condition.entryId;
		});
	}

    getProgressionsForConditionChronologicalOrder(condition) {
        let progressions = this.getProgressionsChronologicalOrder();
        progressions = progressions.filter((progression) => {
            return progression.focalCondition.entryId === condition.entryId;
        });
        return progressions;
    }
	
	getFocalConditionForProgression(progression) {
		let result = this.entries.filter((item) => { return item.entryType.some((t) => { return t === "http://standardhealthrecord.org/condition/Condition"; }) && item.entryId === progression.focalCondition.entryId});
		return result[0];
	}
	
    getMostRecentProgressionForCondition(condition, sinceDate = null) {
		let progressionList = this.getProgressionsForCondition(condition);
        const sortedProgressionList = progressionList.sort(this._progressionTimeSorter);
        const length = sortedProgressionList.length;
        let p = (sortedProgressionList[length - 1]);
		if (Lang.isNull(sinceDate)) return p;
		const startTime = new moment(p.clinicallyRelevantTime, "D MMM YYYY");
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
		const a_startTime = new moment(a.clinicallyRelevantTime, "D MMM YYYY");
		const b_startTime = new moment(b.clinicallyRelevantTime, "D MMM YYYY");
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
		return this.entries.filter((item) => { return item.entryType.some((t) => { return t === type; }) });
	}
	
	getEntriesOfType(type) {
		return this.entries.filter((item) => { return item.entryType[0] === type });
	}
    
    static getEntriesOfTypeFromList(list, type) {
        return list.filter((item) => { return item.entryType[0] === type });
    }
	
	getMostRecentEntryOfType(type) {
		let list = this.getEntriesOfType(type);
		return Patient.getMostRecentEntryFromList(list);
	}
	
	static getMostRecentEntryFromList(list) {
		if (list.length === 0) return null;
		let maxDate = Math.max.apply(null, list.map(function(o) { return new Date(o.lastUpdateDate);}));
		let result = list.filter((item) => { return new Date(item.lastUpdateDate).getTime() === new Date(maxDate).getTime() });
		if (Lang.isUndefined(result) || Lang.isNull(result) || result.length === 0) return null;
		return result[0];
	}

    // Toxicity Creation
    // static createNewToxicity(adverseEvent, grade, attribution) {
    //     const today = new moment().format("D MMM YYYY");
    //     let adverseEventCoding, gradeCoding, attributionCoding;
    //     if (Lang.isUndefined(adverseEvent) || Lang.isNull(adverseEvent) || adverseEvent.length === 0) {
    //         adverseEventCoding = { "value" : "", "codeSystem": "", "displayText": ""};
    //     } else {
    //         adverseEventCoding = this._adverseEventToCodeableConcept(adverseEvent);
    //     }
    //     if (Lang.isUndefined(grade) || Lang.isNull(grade) || grade.length === 0) {
    //         gradeCoding = { "value" : "", "codeSystem": "", "displayText": ""};
    //     } else {
    //         gradeCoding = this._toxicityGradeToCodeableConcept(grade);
    //     }
    //     if (Lang.isUndefined(attribution) || Lang.isNull(attribution) || attribution.length === 0) {
    //         attributionCoding = { "value" : "", "codeSystem": "", "displayText": ""};
    //     } else {
    //         attributionCoding = this._toxicityAttributionToCodeableConcept(grade);
    //     }
    //     return {
	// 		"entryType":	[	"http://standardhealthrecord.org/oncology/ToxicReaction",
    //                             "http://standardhealthrecord.org/adverse/AdverseReaction",
    //                             "http://standardhealthrecord.org/adverse/AdverseEvent"],
	// 		"value": { "coding": adverseEventCoding },
    //         "adverseEventGrade": { "coding": gradeCoding },
	// 		"attribution": { "coding": attributionCoding },
	// 		"originalCreationDate": today,
	// 		"lastUpdateDate": today
	// 	};
    // }

    // static updateAdverseEventForToxicReaction(toxicity, adverseEvent) {
    //     let adverseEventCoding;
    //     if (Lang.isUndefined(adverseEvent) || Lang.isNull(adverseEvent) || adverseEvent.length === 0) {
    //         adverseEventCoding = { "value" : "", "codeSystem": "", "displayText": ""};
    //     } else {
    //         adverseEventCoding = this._adverseEventToCodeableConcept(adverseEvent);
    //     }
    //     toxicity.value.coding = adverseEventCoding;
    // }
    // 
    // static updateGradeForToxicReaction(toxicity, grade) {
    //     let gradeCoding;
    //     if (Lang.isUndefined(grade) || Lang.isNull(grade) || grade.length === 0) {
    //         gradeCoding = { "value" : "", "codeSystem": "", "displayText": ""};
    //     } else {
    //         gradeCoding = this._toxicityGradeToCodeableConcept(grade);
    //     }
    //     toxicity.adverseEventGrade.coding = gradeCoding;
    // }
	// 
	// static updateAttributionForToxicReaction(toxicity, attribution) {
	// 	let attributionCoding;
	// 	if (Lang.isUndefined(attribution) || Lang.isNull(attribution) || attribution.length === 0) {
	// 		attributionCoding = { "value": "", "codeSystem": "", "displayText": ""};
	// 	} else {
	// 		attributionCoding = this._toxicityAttributionToCodeableConcept(attribution);
	// 	}
	// 	toxicity.attribution.coding = attributionCoding;
	// }
    
    static _adverseEventToCodeableConcept(adverseEventName) {
        const adverseEvent = toxicityLookup.findAdverseEvent(adverseEventName);
        return { value: adverseEvent['MedDRA v12.0 Code'], codeSystem: "https://www.meddra.org/", displayText: adverseEvent['name']};
    }
    
    static _toxicityGradeToCodeableConcept(grade) {
        if (grade.toLowerCase() === "grade 1") return {value: "C1513302", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Grade 1"};
        if (grade.toLowerCase() === "grade 2") return {value: "C1513374", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Grade 2"};
        if (grade.toLowerCase() === "grade 3") return {value: "C1519275", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Grade 3"};
        if (grade.toLowerCase() === "grade 4") return {value: "C1517874", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Grade 4"};
        if (grade.toLowerCase() === "grade 5") return {value: "C1559081", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Grade 5"};
        return null;
    }
    
    // @param attribution - the string name of the attribution
    static _toxicityAttributionToCodeableConcept(attribution) {
        const options = toxicityLookup.getAttributionOptions();
        const attributionObject = options.find( attr => attr.name.toLowerCase() === attribution.toLowerCase());
        // TODO: The value of this object is just using a local VS defined by Mark in SHR for now. Will be updated eventually. CodeSystem may change.
        return { "value": `#${attributionObject.name}`, codeSystem: 'https://www.meddra.org/', "displayText": attributionObject.name };
    }
    
    // Progression Creation
    static createNewProgression(status, reasons) {
        /* leaves out shrId, entryId, focalSubject, and focalCondition. Should be filled out if added to a patient */
        const today = new moment().format("D MMM YYYY");
        let statusCoding, reasonCodings = [];
        if (Lang.isUndefined(status) || Lang.isNull(status) || status.length === 0) {
            statusCoding = { "value": "", "codeSystem": "", "displayText": ""};
        } else {
            statusCoding = this._progressionStatusToCodeableConcept(status);
        }
        if (!Lang.isUndefined(reasons) && !Lang.isNull(reasons) && reasons.length > 0) {
            reasons.forEach((reason) => {
                reasonCodings.push(this.createProgressionReason(reason));
            });
        }
        return {
			"entryType":	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			"value": { "coding": statusCoding },
			"clinicallyRelevantTime": null,
			"evidence": reasonCodings,
			"assessmentType": { "coding": { "value": "#disease status"}},
			"status": "unknown",
			"originalCreationDate": today,
            "asOfDate": null,
			"lastUpdateDate": today
		};
    }
    
    static createProgressionReason(reason) {
        return { coding: this._progressionReasonToCodeableConcept(reason) };
    }
    
	static updateStatusForProgression(progression, status) {
		const status_code = this._progressionStatusToCodeableConcept(status);
        if (Lang.isNull(status_code)) {
            progression.value.coding.displayText = "";
            progression.value.coding.value = "";
            progression.value.coding.codeSystem = "";
        } else {
            progression.value.coding.displayText = status_code.displayText;
            progression.value.coding.value = status_code.value;
            progression.value.coding.codeSystem = status_code.codeSystem;
        }
	}
    
    static updateReasonsForProgression(progression, reasons) {
        let reasonObjects = [];
        reasons.forEach((reason) => {
            reasonObjects.push({coding: this._progressionReasonToCodeableConcept(reason)});
        });
        progression.evidence = reasonObjects;
    }
    
    static updateAsOfDateForProgression(progression, date) {
        // TODO: Check with Mark about what this should set
        progression.asOfDate = date;
    }
    
    static updateClinicallyRelevantTimeForProgression(progression, date) {
        // TODO: Check with Mark about what this should set
        progression.clinicallyRelevantTime = date;
    }

    static _progressionStatusToCodeableConcept(status) {
        if (status.toLowerCase() === 'complete response') return { value: "C0677874", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Complete Response"};
        if (status.toLowerCase() === 'complete resection') return { value: "C0015250", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Complete Resection"};
        if (status.toLowerCase() === 'responding') return { value: "C1272745", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Responding"};
        if (status.toLowerCase() === 'stable') return { value: "C0205360", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Stable"};
        if (status.toLowerCase() === 'progressing') return { value: "C1546960", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Progressing"};
        if (status.toLowerCase() === 'inevaluable') return { value: "C3858734", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Inevaluable"};
        return { value: "", codeSystem: "", displayText: ""}
    }
    static _progressionReasonToCodeableConcept(reason) {
        if (reason.toLowerCase() === "pathology") return { value: "C0030664", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Pathology"};
        if (reason.toLowerCase() === "imaging") return { value: "C0011923", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Imaging"};
        if (reason.toLowerCase() === "symptoms") return { value: "C1457887", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Symptoms"};
        if (reason.toLowerCase() === "physical exam") return { value: "C0031809", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Physical exam"};
        if (reason.toLowerCase() === "markers") return { value: "C0005516", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Markers"};
        return { value: "", codeSystem: "", displayText: ""}
   }
    
    // // Staging Creation
	// static createNewTNMStageObservation(t, n, m) {
	// 	let tCoding, nCoding, mCoding;
	// 	let gotAllThree = true;
	// 	if (Lang.isUndefined(t) || Lang.isNull(t) || t.length === 0) {
	// 		tCoding = { "value": "", "codeSystem": "", "displayText": ""};
	// 		gotAllThree = false;
	// 	} else {
	// 		const t_code = this._tToCodeableConcept(t);
	// 		tCoding = { "value": t_code.code, "codeSystem": t_code.codesystem, "displayText": t_code.displayText}
	// 	}
	// 	if (Lang.isUndefined(n) || Lang.isNull(n) || n.length === 0) {
	// 		nCoding = { "value": "", "codeSystem": "", "displayText": ""};
	// 		gotAllThree = false;
	// 	} else {
	// 		const n_code = this._nToCodeableConcept(n);
	// 		nCoding = { "value": n_code.code, "codeSystem": n_code.codesystem, "displayText": n_code.displayText};
	// 	}
	// 	if (Lang.isUndefined(m) || Lang.isNull(m) || m.length === 0) {
	// 		mCoding = { "value": "", "codeSystem": "", "displayText": ""};
	// 		gotAllThree = false;
	// 	} else {
	// 		const m_code = this._mToCodeableConcept(m);
	// 		mCoding = { "value": m_code.code, "codeSystem": m_code.codesystem, "displayText": m_code.displayText};
	// 	}
	// 	let stage, stage_code;
	// 	if (gotAllThree) {
	// 		stage = staging.breastCancerPrognosticStage(t, n, m);
	// 		stage_code = this._stageToCodeableConcept(stage);
	// 	} else {
	// 		stage = "";
	// 		stage_code = {code: "", codesystem: ""};
	// 	}
	// 	//if (Lang.isNull(stage_code) || Lang.isUndefined(stage_code)) return null;
	// 	return {
	// 		"entryType":	[	"http://standardhealthrecord.org/oncology/TNMStage",
	// 							"http://standardhealthrecord.org/observation/Observation",
	// 							"http://standardhealthrecord.org/base/Action" ],
	// 		"value": {"coding": { "value": stage_code.code, "codeSystem": stage_code.codesystem, "displayText": stage}},
	// 		"specificType": {"coding": {"value": "21908-9", "codeSystem": "http://loinc.org", "displayText": "Stage"}},
	// 		"status": "unknown",
	// 		"occurrenceTime": new moment().format("D MMM YYYY"),
	// 		"tStage": {"coding": tCoding},
	// 		"nStage": {"coding": nCoding},
	// 		"mStage": {"coding": mCoding}
	// 	};
	// }

	// static updateTForStaging(stagingObservation, t) {		
	// 	const t_code = this._tToCodeableConcept(t);
    //     if (Lang.isNull(t_code)) {
    //         stagingObservation.tStage.coding.displayText = "";
    //         stagingObservation.tStage.coding.value = "";
    //         stagingObservation.tStage.coding.codeSystem = "";
    //     } else {
    //         stagingObservation.tStage.coding.displayText = t_code.displayText;
    //         stagingObservation.tStage.coding.value = t_code.code;
    //         stagingObservation.tStage.coding.codeSystem = t_code.codesystem;
    //     }
	// 	this.updateStage(stagingObservation);
	// }
	// static updateNForStaging(stagingObservation, n) {		
	// 	const n_code = this._nToCodeableConcept(n);
    //     if (Lang.isNull(n_code)) {
    //         stagingObservation.nStage.coding.displayText = "";
    //         stagingObservation.nStage.coding.value = "";
    //         stagingObservation.nStage.coding.codeSystem = "";
    //     } else {
    //         stagingObservation.nStage.coding.displayText = n_code.displayText;
    //         stagingObservation.nStage.coding.value = n_code.code;
    //         stagingObservation.nStage.coding.codeSystem = n_code.codesystem;
    //     }
	// 	this.updateStage(stagingObservation);
	// }
	// static updateMForStaging(stagingObservation, m) {		
	// 	const m_code = this._mToCodeableConcept(m);
    //     if (Lang.isNull(m_code)) {
    //         stagingObservation.mStage.coding.displayText = "";
    //         stagingObservation.mStage.coding.value = "";
    //         stagingObservation.mStage.coding.codeSystem = "";
    //     } else {
    //         stagingObservation.mStage.coding.displayText = m_code.displayText;
    //         stagingObservation.mStage.coding.value = m_code.code;
    //         stagingObservation.mStage.coding.codeSystem = m_code.codesystem;
    //     }
	// 	this.updateStage(stagingObservation);
	// }
	
	static updateStage(stagingObservation) {
		let curT = stagingObservation.tStage.coding.displayText;
		let curN = stagingObservation.nStage.coding.displayText;
		let curM = stagingObservation.mStage.coding.displayText;
		if (curT.length > 0 && curN.length > 0 && curM.length > 0) {
			const stage = staging.breastCancerPrognosticStage(curT, curN, curM);
			const stage_code = this._stageToCodeableConcept(stage);
			if (!Lang.isNull(stage_code) && !Lang.isUndefined(stage_code)) {
				stagingObservation.value.coding.value = stage_code.code;
				stagingObservation.value.coding.codeSystem = stage_code.codesystem;
				stagingObservation.value.coding.displayText = stage;
				return;
			}
		}
		stagingObservation.value.coding.value = "";
		stagingObservation.value.coding.codeSystem = "";
		stagingObservation.value.coding.displayText = "";
	}
	
	addObservationToCondition(observation, condition) {
		condition.observation.push(observation);
	}
	
	static _stageToCodeableConcept(stage) {
		if (Lang.isUndefined(stage) || Lang.isNull(stage)) return null;
		if (stage.toUpperCase() === 'IA') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"46333007"};
		if (stage.toUpperCase() === 'IB') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"786005"};
		if (stage.toUpperCase() === 'IIA') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"52774001"};
		if (stage.toUpperCase() === 'IIB') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"17816005"};
		if (stage.toUpperCase() === 'IIIA') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"73082003"};
		if (stage.toUpperCase() === 'IIIB') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"64062008"};
		if (stage.toUpperCase() === 'IIIC') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"48105005"};
		if (stage.toUpperCase() === 'IV') return {codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"2640006"};
		return null;
	}
	static _tToCodeableConcept(t) {
		if (t.toUpperCase() === 'T0') return {displayText: "T0", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433371000124106"};
		if (t.toUpperCase() === 'TIS') return {displayText: "Tis", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"44401000"};
		if (t.toUpperCase() === 'T1') return {displayText: "T1", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"369895002"};
		if (t.toUpperCase() === 'T1MI') return {displayText: "T1mi", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433381000124109"};
		if (t.toUpperCase() === 'T1A') return {displayText: "T1a", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"369897005"};
		if (t.toUpperCase() === 'T1B') return {displayText: "T1b", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"369898000"};
		if (t.toUpperCase() === 'T1C') return {displayText: "T1c", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433391000124107"};
		if (t.toUpperCase() === 'T2') return {displayText: "T2", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"369900003"};
		if (t.toUpperCase() === 'T3') return {displayText: "T3", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"369901004"};
		if (t.toUpperCase() === 'T4') return {displayText: "T4", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433401000124109"};
		return null;
	}
	static _nToCodeableConcept(n) {
		if (n.toUpperCase() === 'N0') return {displayText: "N0", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"436311000124105"};
		if (n.toUpperCase() === 'N1') return {displayText: "N1", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433511000124108"};
		if (n.toUpperCase() === 'N1MI') return {displayText: "N1mi", codesystem: "urn:oid:2.16.840.1.113883.3.26.1.1", code: "C95955"};
		if (n.toUpperCase() === 'N2') return {displayText: "N2", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433551000124109"};
		if (n.toUpperCase() === 'N3') return {displayText: "N3", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433431000124101"};
		return null;
	}
	static _mToCodeableConcept(m) {
		if (m.toUpperCase() === 'M0') return {displayText: "M0", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"433581000124101"};
		if (m.toUpperCase() === 'M1') return {displayText: "M1", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"436331000124104"};
		if (m.toUpperCase() === 'M1A') return {displayText: "M1a", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"436341000124109"};
		if (m.toUpperCase() === 'M1B') return {displayText: "M1b", codesystem: "urn:oid:2.16.840.1.113883.6.96", code:"436321000124102"};
		return null;
	}

	// Deceased Creation
    static createNewDeceased() {
        return {
            "entryType": [ "http://standardhealthrecord.org/shr/actor/Deceased"],
            "value": false,
            "dateOfDeath": null
        };
    }

    // Update date of death in deceased
    static updateDateOfDeath(deceased, date) {
        deceased.dateOfDeath = date;
        deceased.value = true;
    }


    // // Clinical Trial Creator
    // static createNewStudyEnrollment(title = '', identifier = '', enrollmentDate = null, endDate = null) {
    //     // TODO: This Study data element in the SHR will be updated.
    //     /* leaves out shrId, entryId, focalSubject. Should be filled out if added to a patient */
    //     return {
    //         "entryType" : ["http://standardhealthrecord.org/base/Study"],
    //         "title": title,
    //         "identifier": identifier,
    //         "enrollmentDate": enrollmentDate, // TODO: Not on SHR Study element yet
    //         "endDate": endDate // TODO: Not on SHR Study element yet
    //     };
    // }
    // 
    // static updateTitleForStudyEnrollment(study, title) {
    //     study.title = title;
    // }
    // 
    // static updateIdentifierForStudyEnrollment(study, identifier) {
    //     study.identifier = identifier;
    // }
    // 
    // static updateEnrollmentDateForStudyEnrollment(study, date) {
    //     study.enrollmentDate = date;
    // }
    // 
    // static updateEndDateForStudyEnrollment(study, date) {
    //     study.endDate = date;
    // }
}

export default Patient;

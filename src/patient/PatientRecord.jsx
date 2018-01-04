import ShrObjectFactory from '../model/ShrObjectFactory';
import AllergyIntolerance from '../model/shr/allergy/AllergyIntolerance';
import BreastCancer from '../model/shr/oncology/BreastCancer';
import ClinicalNote from '../model/shr/core/ClinicalNote';
import Condition from '../model/shr/condition/Condition';
import FluxMedicationPrescription from '../model/medication/FluxMedicationPrescription';
import NoKnownAllergy from '../model/shr/allergy/NoKnownAllergy';
import NoKnownDrugAllergy from '../model/shr/allergy/NoKnownDrugAllergy';
import NoKnownEnvironmentalAllergy from '../model/shr/allergy/NoKnownEnvironmentalAllergy';
import NoKnownFoodAllergy from '../model/shr/allergy/NoKnownFoodAllergy';
import PatientIdentifier from '../model/shr/base/PatientIdentifier';
import PersonOfRecord from '../model/shr/demographics/PersonOfRecord';
import Photograph from '../model/shr/demographics/Photograph';
import FluxProcedure from '../model/procedure/FluxProcedure';
import FluxProgression from '../model/oncology/FluxProgression';
import mapper from '../lib/FHIRMapper';
import Lang from 'lodash';
import moment from 'moment';
import Guid from 'guid';

class PatientRecord {
    constructor(shrJson = null) {
        if (!Lang.isNull(shrJson)) { // load existing from JSON
            this.entries = this._loadJSON(shrJson);
            this.personOfRecord = this.getPersonOfRecord();
            this.shrId = this.personOfRecord.entryInfo.shrId;
            this.nextEntryId = Math.max.apply(Math, this.entries.map(function (o) {
                    return o.entryInfo.entryId;
                })) + 1;
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
                    const shrObj = ShrObjectFactory.createInstance(entryType);
                    shrObj.fromFHIR(entry);
                    shrObj.entryInfo.entryId = nextEntryId;
                    nextEntryId += 1;
					this.entries.push(shrObj);
				}
			});
		});

        this.personOfRecord = this.getPersonOfRecord();
		this.nextEntryId = Math.max.apply(Math, this.entries.map(function(o) { return o.entryInfo.entryId; })) + 1;
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
        return {"entryType": entry.entryType[0], "shrId": entry.shrId, "entryId": entry.entryId};
    }

    getName() {
        let personOfRecord = this.getPersonOfRecord();
        if (Lang.isNull(personOfRecord)) return null;
        return personOfRecord._humanName;
    }

    getDateOfBirth() {
        let personOfRecord = this.getPersonOfRecord();
        if (Lang.isNull(personOfRecord)) return null;
        return personOfRecord.dateOfBirth.value;
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
        return this.getMostRecentEntryOfType(PersonOfRecord);
    }

    getMRN() {
        let list = this.entries.filter((item) => {
            return item instanceof PatientIdentifier && item.identifierType === "MRN"
        });
        let identifierEntry = PatientRecord.getMostRecentEntryFromList(list);
        if (Lang.isNull(identifierEntry)) return null;
        return identifierEntry.value;
    }

    getMostRecentPhoto() {
        let photoEntry = this.getMostRecentEntryOfType(Photograph);
        if (Lang.isNull(photoEntry)) return null;
        return photoEntry.filePath;
    }

    getCurrentHomeAddress() {
        let personOfRecord = this.getPersonOfRecord();
        if (Lang.isNull(personOfRecord) || !personOfRecord.addressUsed) return null;
        let addressUsed = personOfRecord.addressUsed.filter((item) => {
            return item.addressUse.some((au) => au.value.coding[0].value === "primary_residence")
        });
        if (addressUsed.length === 0) return null;
        return addressUsed[0].value;
    }

    getConditions() {
        return this.getEntriesIncludingType(Condition);
    }
    
    getAllergies() {
        return this.getEntriesIncludingType(AllergyIntolerance);
    }
    
    getAllergiesAsText() {
        const allergies = this.getAllergies();
        let result = "";
        let first = true;
        allergies.forEach((allergy, index) => {
            if (!first) {
                result += "\r\n";
            }
            if (allergy instanceof NoKnownDrugAllergy) {
                result += "NKDA";
            } else if (allergy instanceof NoKnownAllergy) {
                result += "No known allergies";
            } else if (allergy instanceof NoKnownEnvironmentalAllergy) {
                result += "No known environmental allergies";
            } else if (allergy instanceof NoKnownFoodAllergy) {
                result += "No known food allergies";
            } else {
                result += allergy.allergenIrritant.value.coding[0].displayText.value;
            }
            first = false;
        });
        return result;
    }

    getLastBreastCancerCondition() {
        let result = this.getEntriesOfType(BreastCancer);
        return result[result.length - 1];
    }

    // Add initial unsigned note to patient record
    addClinicalNote(date, subject, hospital, clinician, content, signed) {

        // Generate the clinical note json from passed in values
        let clinicalNote = new ClinicalNote(
            {
                "date": date,
                "subject": subject,
                "hospital": hospital,
                "clinician": clinician,
                "content": content,
                "signed": signed
            }
        );

        this.addEntryToPatientWithPatientFocalSubject(clinicalNote);
    }

    getNotes() {
        return this.getEntriesOfType(ClinicalNote);
    }

    getKeyEventsChronologicalOrder() {
        let conditions = this.getConditions();
        let result = [];
        conditions.forEach((c, i) => {
            result.push({
                name: "diagnosis date - " + c.specificType.coding[0].displayText,
                start_time: c.diagnosisDate
            });
        });
        result.sort(this._eventTimeSorter);
        return result;
    }

    getKeyEventsForConditionChronologicalOrder(condition) {
        let conditions = this.getConditions();
        let result = [];
        conditions.forEach((c) => {
            if (c.entryInfo.entryId === condition.entryInfo.entryId) {
                result.push({
                    name: "diagnosis date - " + c.specificType.value.coding[0].displayText.value,
                    start_time: c.diagnosisDate
                });
            }
        });
        result.sort(this._eventTimeSorter);
        return result;
    }

    getMedications() {
        return this.getEntriesOfType(FluxMedicationPrescription);
    }
    
    getActiveMedications() {
        const allmeds = this.getMedications();
        const today = new moment();
        return allmeds.filter((med) => {
            return med.isActiveAsOf(today);
        });
    }

    getMedicationsChronologicalOrder() {
        let list = this.getMedications();
        list.sort(this._medsTimeSorter);
        return list;
    }

    getMedicationsForConditionChronologicalOrder(condition) {
        let medications = this.getMedicationsChronologicalOrder();
        medications = medications.filter((med) => {
            return med instanceof FluxMedicationPrescription && med.reason.some((r) => {
                    return r.value.entryId === condition.entryInfo.entryId;
                });
        });
        return medications;
    }

    getProcedures() {
        return this.getEntriesOfType(FluxProcedure);
    }

    getProceduresChronologicalOrder() {
        let list = this.getProcedures();
        list.sort(this._proceduresTimeSorter);
        return list;
    }

    getProceduresForCondition(condition) {
        return this.entries.filter((item) => {
            return item instanceof FluxProcedure && item.reason.some((r) => {
                    return r.value.entryId === condition.entryInfo.entryId;
                });
        });
    }

    getProceduresForConditionChronologicalOrder(condition) {
        let procedures = this.getProceduresForCondition(condition);
        procedures.sort(this._proceduresTimeSorter);
        return procedures;
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
            return item instanceof FluxProgression && item.assessmentFocus.entryId === condition.entryInfo.entryId;
        });
    }

    getProgressionsForConditionChronologicalOrder(condition) {
        let progressions = this.getProgressionsChronologicalOrder();
        progressions = progressions.filter((progression) => {
            return progression.assessmentFocus.entryId === condition.entryInfo.entryId;
        });
        return progressions;
    }

    getFocalConditionForProgression(progression) {
        let result = this.entries.filter((item) => {
            return (item instanceof Condition)
                && progression.assessmentFocus.entryId === item.entryInfo.entryId
        });
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
        if (a_startTime < b_startTime) {
            return -1;
        }
        if (a_startTime > b_startTime) {
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
            return -1;
        }
        if (a_startTime > b_startTime) {
            return 1;
        }
        return 0;
    }

    _eventTimeSorter(a, b) {
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

    // generic methods
    getEntriesIncludingType(type) {
        return this.entries.filter((item) => {
            return item instanceof type
        });
    }

    getEntriesOfType(type) {
        return this.entries.filter((item) => {
            return item instanceof type
        });
    }

    static getEntriesOfTypeFromList(list, type) {
        return list.filter((item) => {
            return item.entryType[0] === type
        });
    }

    getMostRecentEntryOfType(type) {
        let list = this.getEntriesOfType(type);
        return PatientRecord.getMostRecentEntryFromList(list);
    }

    static getMostRecentEntryFromList(list) {
        if (list.length === 0) return null;
        if (list.length === 1) return list[0];

        let maxDate = Math.max.apply(null, list.map(function (o) {
            return new Date(o._entryInfo._lastUpdateDate);
        }));
        let result = list.filter((item) => {
            return new Date(item._entryInfo._lastUpdateDate).getTime() === new Date(maxDate).getTime()
        });
        if (Lang.isUndefined(result) || Lang.isNull(result) || result.length === 0) {
            return null;
        }
        return result[0];
    }
}

export default PatientRecord;
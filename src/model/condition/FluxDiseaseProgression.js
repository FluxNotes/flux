import DiseaseProgression from '../shr/condition/DiseaseProgression';
import Evidence from '../shr/finding/Evidence';
import lookup from '../../lib/progression_lookup.jsx';
import CreationTime from '../shr/core/CreationTime';
import ClinicallyRelevantTime from '../shr/finding/ClinicallyRelevantTime';
import Entry from '../shr/base/Entry';
import Reference from '../Reference';
import EntryType from '../shr/base/EntryType';

// FluxDiseaseProgression class to hide codeableconcepts
class FluxDiseaseProgression {
    constructor(json) {
        this._diseaseProgression = DiseaseProgression.fromJSON(json);
        if (!this._diseaseProgression.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/condition/DiseaseProgression';
            this._diseaseProgression.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._diseaseProgression.entryInfo;
    }

    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get status() {
        if (!this._diseaseProgression.value) return null;
        return this._diseaseProgression.value.coding[0].displayText.value;
    }

    /**
     *  Setter for status
     *  The setter method is expecting a status sting
     *  The method will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set status(status) {
        this._diseaseProgression.value = lookup.getStatusCodeableConcept(status);
    }

    /**
     *  Getter for status' code
     *  This will return the code string from CodeableConcept, corresponding to the status' code
     */
    get statusAsCode() {
        return this._diseaseProgression.value.coding[0].code;
    }

    /**
     *  Getter for evidence
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
        if (!this._diseaseProgression.evidence) return [];
        return this._diseaseProgression.evidence.map((e) => {
            return e.value.coding[0].displayText.value;
        });
    }

    /**
     *  Setter for evidence
     *  The method is expecting an array of reason strings
     *  The method will lookup the corresponding coding/codesystem and set the evidence array
     */
    set evidence(evidence) {
        this._diseaseProgression.evidence = evidence.map((e) => {
            let ev = new Evidence();
            ev.value = lookup.getEvidenceCodeableConcept(e);   
            return ev;
        });
    }

    get referenceDate() {
        if (!this._diseaseProgression.clinicallyRelevantTime) return null;
        return this._diseaseProgression.clinicallyRelevantTime.value;
    }

    set referenceDate(date) {
        if (!this._diseaseProgression.clinicallyRelevantTime) {
            let clinicallyRelevantTime = new ClinicallyRelevantTime();
            clinicallyRelevantTime.value = date;
            this._diseaseProgression.clinicallyRelevantTime = clinicallyRelevantTime;
        } else {
            this._diseaseProgression.clinicallyRelevantTime.value = date;
        }
    }

    // Flux added
    get asOfDate() {
        if (!this._diseaseProgression.entryInfo || !this._diseaseProgression.entryInfo.creationTime) return null;
        return this._diseaseProgression.entryInfo.creationTime.value;
    }
  
    set asOfDate(val) {
        if (!this._diseaseProgression.entryInfo.creationTime) {
            let creationTime = new CreationTime();
            creationTime.value = val;
            this._diseaseProgression.entryInfo.creationTime = creationTime;
        } else {
            this._diseaseProgression.entryInfo.creationTime.value = val;
        }
    }
    
    get focalSubjectReference() {
        if (this._diseaseProgression.focalSubjectReference) {
            return this._diseaseProgression.focalSubjectReference;
        }
        return null;
    }
    
    set focalSubjectReference(val) {
        this._diseaseProgression.focalSubjectReference = val;
    }
    
    setFocalSubjectReference(obj) {
        let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
        this.focalSubjectReference = ref;
    }
}

export default FluxDiseaseProgression;
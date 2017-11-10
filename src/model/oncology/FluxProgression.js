import AssessmentFocus from '../shr/assessment/AssessmentFocus';
import CodeableConcept from '../shr/core/CodeableConcept';
import Evidence from '../shr/observation/Evidence';
import Progression from '../shr/oncology/Progression';
import Reference from '../Reference';
import lookup from '../../lib/progression_lookup.jsx';

// FluxProgression class to hide codeableconcepts
class FluxProgression extends Progression {
    constructor(json) {
        super(json);
        if (json) {
            this._asOfDate = json.asOfDate;
        }
        if (!this._codeableConcept) this._codeableConcept = new CodeableConcept();
        if (!this._evidence) this._evidence = [];
    }
    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get status() {
        return this._codeableConcept.coding[0].displayText.value;
    }

    /**
     *  Setter for status
     *  The setter method is expecting a status sting
     *  The method will lookup the corresponding coding/codesystem and set the _codeableConcept property
     */
    set status(status) {
        this._codeableConcept = lookup.getStatusCodeableConcept(status);
    }

    /**
     *  Getter for evidence
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
        return this._evidence.map((e) => {
            return e.value.coding[0].displayText.value;
        });
    }

    /**
     *  Setter for evidence
     *  The method is expecting an array of reason strings
     *  The method will lookup the corresponding coding/codesystem and set the evidence array
     */
    set evidence(evidence) {
        this._evidence = evidence.map((e) => {
            let ev = new Evidence();
            ev.value = lookup.getEvidenceCodeableConcept(e);   
            return ev;
        });
    }

    // Flux added
    get asOfDate() {
        return this._asOfDate;
    }
  
    set asOfDate(val) {
        this._asOfDate = val;
    }
    
    get assessmentFocus() {
        return this._assessmentFocus[0].value;
    }
    
    set assessmentFocus(val) {
        if (!this._assessmentFocus) {
            this._assessmentFocus = [];
        }
        if (this._assessmentFocus.length === 0) {
            this._assessmentFocus = new AssessmentFocus();
        }
        this._assessmentFocus.value = val;
    }
    
    setAssessmentFocusReference(obj) {
        const ref = Reference.createReferenceFromEntry(obj.entryInfo);
        this.assessmentFocus = ref;
    }
}

export default FluxProgression;
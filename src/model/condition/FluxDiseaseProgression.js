import DiseaseProgression from '../shr/condition/DiseaseProgression';
import lookup from '../../lib/progression_lookup.jsx';

// FluxDiseaseProgression class to hide codeableconcepts
class FluxDiseaseProgression {
    constructor(json) {
        this._diseaseProgression = DiseaseProgression.fromJSON(json);
    }

    /**
     *  Getter for status
     *  This will return the displayText string from CodeableConcept Value
     */
    get status() {
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
     *  Getter for evidence
     *  This will return an array of displayText strings from Evidence array
     */
    get evidence() {
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

    /**
     *  Getter for status' code
     *  This will return the code string from CodeableConcept, corresponding to the status' code
     */
    get statusAsCode () {
        return this._diseaseProgression.value.coding[0].code;
    }

    // Flux added
    get asOfDate() {
        if (!this._asOfDate) return null;
        return this._asOfDate;
    }
  
    set asOfDate(val) {
        this._asOfDate = val;
    }
    
    // get assessmentFocus() {
    //     if (this._assessmentFocus && this._assessmentFocus.length > 0) {
    //         return this._assessmentFocus[0].value;
    //     }
    //     return null;
    // }
    
    // set assessmentFocus(val) {
    //     if (!this._assessmentFocus) {
    //         this._assessmentFocus = [];
    //     }
    //     let af;
    //     if (this._assessmentFocus.length === 0) {
    //         af = new AssessmentFocus();
    //         this._assessmentFocus.push(af);
    //     } else {
    //         af = this._assessmentFocus[0];
    //     }
    //     af.value = val;
    // }
    
    // setAssessmentFocusReference(obj) {
    //     const ref = Reference.createReferenceFromEntry(obj.entryInfo);
    //     this.assessmentFocus = ref;
    // }
}

export default FluxDiseaseProgression;
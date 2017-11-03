import CodeableConcept from '../core/CodeableConcept';
/** Generated from SHR definition for shr.adverse.AdverseEventGrade */
class AdverseEventGrade {

  constructor(json) {
        if(json) {
            if (json.value) this.codeableConcept = new CodeableConcept(json.value);
            if (json.value) this._codeableConcept = this.codeableConcept;
        }
    }

  /**
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

}

export default AdverseEventGrade;

import CodeableConcept from '../core/CodeableConcept';

/** Generated from SHR definition for shr.allergy.AllergenIrritant */
class AllergenIrritant {
    constructor(json) {
        if (json) {
            if (json.value) this.value = new CodeableConcept(json.value);
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

export default AllergenIrritant;

/** Generated from SHR definition for shr.demographics.Ethnicity */
class Ethnicity {

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

  /**
   * Getter for shr.demographics.EthnicityDetail[]
   */
  get ethnicityDetail() {
    return this._ethnicityDetail;
  }

  /**
   * Setter for shr.demographics.EthnicityDetail[]
   */
  set ethnicityDetail(ethnicityDetailVal) {
    this._ethnicityDetail = ethnicityDetailVal;
  }

}

export default Ethnicity;

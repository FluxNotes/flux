// Ommitting import and extension of base element: TBD<Recommendation>


  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
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
   * Getter for shr.core.CodeableConcept[]
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept[]
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.sex.ReasonForNotRecommendingContraceptive
   */
  get reasonForNotRecommendingContraceptive() {
    return this._reasonForNotRecommendingContraceptive;
  }

  /**
   * Setter for shr.sex.ReasonForNotRecommendingContraceptive
   */
  set reasonForNotRecommendingContraceptive(reasonForNotRecommendingContraceptiveVal) {
    this._reasonForNotRecommendingContraceptive = reasonForNotRecommendingContraceptiveVal;
  }

  /**
   * Getter for shr.sex.Dispensed
   */
  get dispensed() {
    return this._dispensed;
  }

  /**
   * Setter for shr.sex.Dispensed
   */
  set dispensed(dispensedVal) {
    this._dispensed = dispensedVal;
  }

}

export default ContraceptiveMethodRecommendation;

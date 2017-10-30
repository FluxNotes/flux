/** Generated from SHR definition for shr.demographics.HealthInsurance */
class HealthInsurance {

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
   * Getter for shr.demographics.InsuranceMemberId
   */
  get insuranceMemberId() {
    return this._insuranceMemberId;
  }

  /**
   * Setter for shr.demographics.InsuranceMemberId
   */
  set insuranceMemberId(insuranceMemberIdVal) {
    this._insuranceMemberId = insuranceMemberIdVal;
  }

  /**
   * Getter for shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Setter for shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriodVal) {
    this._effectiveTimePeriod = effectiveTimePeriodVal;
  }

}

export default HealthInsurance;

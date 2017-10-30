/** Generated from SHR definition for shr.assessment.AssessmentResult */
class AssessmentResult {

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
   * Getter for shr.base.AssertionNegationModifier
   */
  get assertionNegationModifier() {
    return this._assertionNegationModifier;
  }

  /**
   * Setter for shr.base.AssertionNegationModifier
   */
  set assertionNegationModifier(assertionNegationModifierVal) {
    this._assertionNegationModifier = assertionNegationModifierVal;
  }

  /**
   * Getter for shr.core.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Setter for shr.core.Certainty
   */
  set certainty(certaintyVal) {
    this._certainty = certaintyVal;
  }

}

export default AssessmentResult;

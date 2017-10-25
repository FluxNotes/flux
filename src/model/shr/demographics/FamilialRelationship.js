/** Generated from SHR definition for shr.demographics.FamilialRelationship */
class FamilialRelationship {

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
   * Getter for Choice<shr.actor.RelatedPerson | shr.actor.Practitioner>.
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  get relatedPersonOrPractitioner() {
    return this._relatedPersonOrPractitioner;
  }

  /**
   * Setter for Choice<shr.actor.RelatedPerson | shr.actor.Practitioner>.
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  set relatedPersonOrPractitioner(choiceVal) {
    this._relatedPersonOrPractitioner = choiceVal;
  }

  /**
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
  }

}

export default FamilialRelationship;

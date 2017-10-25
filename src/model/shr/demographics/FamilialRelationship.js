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
   * Getter for shr.actor.RelatedPerson (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  get relatedPerson() {
    return this._relatedPersonOrPractitioner;
  }

  /**
   * Setter for shr.actor.RelatedPerson (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  set relatedPerson(relatedPersonVal) {
    this._relatedPersonOrPractitioner = relatedPersonVal;
  }
  /**
   * Getter for shr.actor.Practitioner (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  get practitioner() {
    return this._relatedPersonOrPractitioner;
  }

  /**
   * Setter for shr.actor.Practitioner (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  set practitioner(practitionerVal) {
    this._relatedPersonOrPractitioner = practitionerVal;
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

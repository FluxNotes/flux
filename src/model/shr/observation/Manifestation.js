import Observation from './Observation';

/** Generated from SHR definition for shr.observation.Manifestation */
class Manifestation extends Observation {

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
   * Getter for shr.base.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.condition.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Setter for shr.condition.Severity
   */
  set severity(severityVal) {
    this._severity = severityVal;
  }

}

export default Manifestation;

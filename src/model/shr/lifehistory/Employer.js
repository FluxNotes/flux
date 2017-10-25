/** Generated from SHR definition for shr.lifehistory.Employer */
class Employer {

  /**
   * Getter for choice value
   * - shr.actor.RelatedPerson
   * - shr.actor.Practitioner
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Organization
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.actor.RelatedPerson
   * - shr.actor.Practitioner
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Organization
   */
  set value(val) {
    this._value = val;
  }

}

export default Employer;

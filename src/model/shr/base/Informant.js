/** Generated from SHR definition for shr.base.Informant */
class Informant {

  /**
   * Getter for choice value
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Practitioner
   * - shr.actor.RelatedPerson
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Practitioner
   * - shr.actor.RelatedPerson
   */
  set value(val) {
    this._value = val;
  }

}

export default Informant;

/** Generated from SHR definition for shr.base.FocalSubject */
class FocalSubject {

  /**
   * Getter for choice value
   * - Reference<shr.demographics.PersonOfRecord>
   * - Reference<shr.actor.Practitioner>
   * - Reference<shr.actor.RelatedPerson>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - Reference<shr.demographics.PersonOfRecord>
   * - Reference<shr.actor.Practitioner>
   * - Reference<shr.actor.RelatedPerson>
   */
  set value(val) {
    this._value = val;
  }

}

export default FocalSubject;

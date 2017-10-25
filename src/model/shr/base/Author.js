/** Generated from SHR definition for shr.base.Author */
class Author {

  /**
   * Getter for choice value
   * - Reference<shr.demographics.PersonOfRecord>
   * - Reference<shr.actor.Practitioner>
   * - Reference<shr.actor.RelatedPerson>
   * - Reference<shr.actor.Organization>
   * - Reference<shr.device.Device>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - Reference<shr.demographics.PersonOfRecord>
   * - Reference<shr.actor.Practitioner>
   * - Reference<shr.actor.RelatedPerson>
   * - Reference<shr.actor.Organization>
   * - Reference<shr.device.Device>
   */
  set value(val) {
    this._value = val;
  }

}

export default Author;

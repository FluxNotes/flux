/** Generated from SHR definition for shr.base.RequestedPerformer */
class RequestedPerformer {

  /**
   * Getter for choice value
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Practitioner
   * - shr.actor.RelatedPerson
   * - shr.actor.Organization
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Practitioner
   * - shr.actor.RelatedPerson
   * - shr.actor.Organization
   */
  set value(val) {
    this._value = val;
  }

}

export default RequestedPerformer;

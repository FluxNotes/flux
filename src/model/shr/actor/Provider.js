/** Generated from SHR definition for shr.actor.Provider */
class Provider {

  /**
   * Getter for choice value
   * - shr.actor.RelatedPerson
   * - shr.actor.Practitioner
   * - shr.actor.Organization
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.actor.RelatedPerson
   * - shr.actor.Practitioner
   * - shr.actor.Organization
   */
  set value(val) {
    this._value = val;
  }

}

export default Provider;

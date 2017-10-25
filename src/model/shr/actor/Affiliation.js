/** Generated from SHR definition for shr.actor.Affiliation */
class Affiliation {

  /**
   * Convenience getter for value (accesses this.organization)
   */
  get value() {
    return this.organization;
  }

  /**
   * Convenience setter for value (sets this.organization)
   */
  set value(val) {
    this.organization = val;
  }

  /**
   * Getter for shr.actor.Organization
   */
  get organization() {
    return this._organization;
  }

  /**
   * Setter for shr.actor.Organization
   */
  set organization(organizationVal) {
    this._organization = organizationVal;
  }

}

export default Affiliation;

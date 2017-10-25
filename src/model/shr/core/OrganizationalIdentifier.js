import Identifier from './Identifier';

/** Generated from SHR definition for shr.core.OrganizationalIdentifier */
class OrganizationalIdentifier extends Identifier {

  /**
   * Convenience getter for value (accesses this.string)
   */
  get value() {
    return this.string;
  }

  /**
   * Convenience setter for value (sets this.string)
   */
  set value(val) {
    this.string = val;
  }

  /**
   * Getter for string
   */
  get string() {
    return this._string;
  }

  /**
   * Setter for string
   */
  set string(stringVal) {
    this._string = stringVal;
  }

  /**
   * Getter for shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Setter for shr.core.TimePeriod
   */
  set timePeriod(timePeriodVal) {
    this._timePeriod = timePeriodVal;
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

export default OrganizationalIdentifier;

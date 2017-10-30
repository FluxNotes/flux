import ProviderRelationship from './ProviderRelationship';

/** Generated from SHR definition for shr.actor.EmergencyContact */
class EmergencyContact extends ProviderRelationship {

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.actor.HealthcareRole
   */
  get healthcareRole() {
    return this._healthcareRole;
  }

  /**
   * Setter for shr.actor.HealthcareRole
   */
  set healthcareRole(healthcareRoleVal) {
    this._healthcareRole = healthcareRoleVal;
  }

  /**
   * Getter for shr.actor.Provider
   */
  get provider() {
    return this._provider;
  }

  /**
   * Setter for shr.actor.Provider
   */
  set provider(providerVal) {
    this._provider = providerVal;
  }

}

export default EmergencyContact;

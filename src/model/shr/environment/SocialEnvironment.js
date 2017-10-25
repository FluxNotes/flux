import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.environment.SocialEnvironment */
class SocialEnvironment extends Panel {

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
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
  }

  /**
   * Getter for Reference<shr.environment.TransportationAvailability>
   */
  get transportationAvailability() {
    return this._transportationAvailability;
  }

  /**
   * Setter for Reference<shr.environment.TransportationAvailability>
   */
  set transportationAvailability(transportationAvailabilityVal) {
    this._transportationAvailability = transportationAvailabilityVal;
  }

  /**
   * Getter for Reference<shr.environment.HousingSecurity>
   */
  get housingSecurity() {
    return this._housingSecurity;
  }

  /**
   * Setter for Reference<shr.environment.HousingSecurity>
   */
  set housingSecurity(housingSecurityVal) {
    this._housingSecurity = housingSecurityVal;
  }

  /**
   * Getter for Reference<shr.environment.PhysicalSafety>
   */
  get physicalSafety() {
    return this._physicalSafety;
  }

  /**
   * Setter for Reference<shr.environment.PhysicalSafety>
   */
  set physicalSafety(physicalSafetyVal) {
    this._physicalSafety = physicalSafetyVal;
  }

  /**
   * Getter for Reference<shr.environment.EmotionalSafety>
   */
  get emotionalSafety() {
    return this._emotionalSafety;
  }

  /**
   * Setter for Reference<shr.environment.EmotionalSafety>
   */
  set emotionalSafety(emotionalSafetyVal) {
    this._emotionalSafety = emotionalSafetyVal;
  }

  /**
   * Getter for Reference<shr.environment.DomesticViolence>
   */
  get domesticViolence() {
    return this._domesticViolence;
  }

  /**
   * Setter for Reference<shr.environment.DomesticViolence>
   */
  set domesticViolence(domesticViolenceVal) {
    this._domesticViolence = domesticViolenceVal;
  }

  /**
   * Getter for Reference<shr.environment.HomeEnvironmentRisk>[]
   */
  get homeEnvironmentRisk() {
    return this._homeEnvironmentRisk;
  }

  /**
   * Setter for Reference<shr.environment.HomeEnvironmentRisk>[]
   */
  set homeEnvironmentRisk(homeEnvironmentRiskVal) {
    this._homeEnvironmentRisk = homeEnvironmentRiskVal;
  }

}

export default SocialEnvironment;

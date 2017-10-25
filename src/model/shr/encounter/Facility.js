/** Generated from SHR definition for shr.encounter.Facility */
class Facility {

  /**
   * Convenience getter for value (accesses this.facilityName)
   */
  get value() {
    return this.facilityName;
  }

  /**
   * Convenience setter for value (sets this.facilityName)
   */
  set value(val) {
    this.facilityName = val;
  }

  /**
   * Getter for shr.encounter.FacilityName
   */
  get facilityName() {
    return this._facilityName;
  }

  /**
   * Setter for shr.encounter.FacilityName
   */
  set facilityName(facilityNameVal) {
    this._facilityName = facilityNameVal;
  }

  /**
   * Getter for shr.core.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Setter for shr.core.Location
   */
  set location(locationVal) {
    this._location = locationVal;
  }

  /**
   * Getter for shr.encounter.MobileFacility
   */
  get mobileFacility() {
    return this._mobileFacility;
  }

  /**
   * Setter for shr.encounter.MobileFacility
   */
  set mobileFacility(mobileFacilityVal) {
    this._mobileFacility = mobileFacilityVal;
  }

  /**
   * Getter for shr.demographics.Telecom
   */
  get telecom() {
    return this._telecom;
  }

  /**
   * Setter for shr.demographics.Telecom
   */
  set telecom(telecomVal) {
    this._telecom = telecomVal;
  }

  /**
   * Getter for shr.encounter.ManagingOrganization
   */
  get managingOrganization() {
    return this._managingOrganization;
  }

  /**
   * Setter for shr.encounter.ManagingOrganization
   */
  set managingOrganization(managingOrganizationVal) {
    this._managingOrganization = managingOrganizationVal;
  }

  /**
   * Getter for shr.encounter.FacilityType
   */
  get facilityType() {
    return this._facilityType;
  }

  /**
   * Setter for shr.encounter.FacilityType
   */
  set facilityType(facilityTypeVal) {
    this._facilityType = facilityTypeVal;
  }

}

export default Facility;

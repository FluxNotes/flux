/** Generated from SHR definition for shr.actor.Organization */
class Organization {

  /**
   * Convenience getter for value (accesses this.organizationName)
   */
  get value() {
    return this.organizationName;
  }

  /**
   * Convenience setter for value (sets this.organizationName)
   */
  set value(val) {
    this.organizationName = val;
  }

  /**
   * Getter for shr.actor.OrganizationName
   */
  get organizationName() {
    return this._organizationName;
  }

  /**
   * Setter for shr.actor.OrganizationName
   */
  set organizationName(organizationNameVal) {
    this._organizationName = organizationNameVal;
  }

  /**
   * Getter for shr.actor.OrganizationAlias[]
   */
  get organizationAlias() {
    return this._organizationAlias;
  }

  /**
   * Setter for shr.actor.OrganizationAlias[]
   */
  set organizationAlias(organizationAliasVal) {
    this._organizationAlias = organizationAliasVal;
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
   * Getter for shr.actor.OrganizationIdentifyingCode[]
   */
  get organizationIdentifyingCode() {
    return this._organizationIdentifyingCode;
  }

  /**
   * Setter for shr.actor.OrganizationIdentifyingCode[]
   */
  set organizationIdentifyingCode(organizationIdentifyingCodeVal) {
    this._organizationIdentifyingCode = organizationIdentifyingCodeVal;
  }

  /**
   * Getter for shr.demographics.AddressUsed[]
   */
  get addressUsed() {
    return this._addressUsed;
  }

  /**
   * Setter for shr.demographics.AddressUsed[]
   */
  set addressUsed(addressUsedVal) {
    this._addressUsed = addressUsedVal;
  }

  /**
   * Getter for shr.demographics.Telecom[]
   */
  get telecom() {
    return this._telecom;
  }

  /**
   * Setter for shr.demographics.Telecom[]
   */
  set telecom(telecomVal) {
    this._telecom = telecomVal;
  }

  /**
   * Getter for shr.actor.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Setter for shr.actor.ActiveFlag
   */
  set activeFlag(activeFlagVal) {
    this._activeFlag = activeFlagVal;
  }

}

export default Organization;

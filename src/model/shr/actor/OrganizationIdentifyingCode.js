/** Generated from SHR definition for shr.actor.OrganizationIdentifyingCode */
class OrganizationIdentifyingCode {

  /**
   * Convenience getter for value (accesses this.organizationalIdentifier)
   */
  get value() {
    return this.organizationalIdentifier;
  }

  /**
   * Convenience setter for value (sets this.organizationalIdentifier)
   */
  set value(val) {
    this.organizationalIdentifier = val;
  }

  /**
   * Getter for shr.core.OrganizationalIdentifier
   */
  get organizationalIdentifier() {
    return this._organizationalIdentifier;
  }

  /**
   * Setter for shr.core.OrganizationalIdentifier
   */
  set organizationalIdentifier(organizationalIdentifierVal) {
    this._organizationalIdentifier = organizationalIdentifierVal;
  }

}

export default OrganizationIdentifyingCode;

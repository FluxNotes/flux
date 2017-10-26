/** Generated from SHR definition for shr.base.Study */
class Study {

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
   * Getter for shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Setter for shr.core.Title
   */
  set title(titleVal) {
    this._title = titleVal;
  }

  /**
   * Getter for shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Setter for shr.core.Identifier
   */
  set identifier(identifierVal) {
    this._identifier = identifierVal;
  }

  // Flux added
  get enrollmentDate() {
      return this._enrollmentDate;
  }
  
  set enrollmentDate(val) {
      this._enrollmentDate = val;
  }
  
  get endDate() {
      return this._endDate;
  }
  
  set endDate(val) {
      this._endDate = val;
  }
}

export default Study;

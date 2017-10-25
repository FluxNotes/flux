class Reference {
  constructor(shrId, entryId, entryType) {
    this._shrId = shrId;
    this._entryId = entryId;
    this._entryType = entryType;
  }

  /**
   * Getter for shr.base.ShrId
   */
  get shrId() {
    return this._shrId;
  }

  /**
   * Setter for shr.base.ShrId
   */
  set shrId(shrIdVal) {
    this._shrId = shrIdVal;
  }

  /**
   * Getter for shr.base.EntryId
   */
  get entryId() {
    return this._entryId;
  }

  /**
   * Setter for shr.base.EntryId
   */
  set entryId(entryIdVal) {
    this._entryId = entryIdVal;
  }

  /**
   * Getter for shr.base.EntryType
   */
  get entryType() {
    return this._entryType;
  }

  /**
   * Setter for shr.base.EntryType
   */
  set entryType(entryTypeVal) {
    this._entryType = entryTypeVal;
  }
}

export default Reference;
/**
 * A reference to another SHR Entry.
 */
export default class Reference {
  constructor(shrId, entryId, entryType) {
    this._shrId = shrId;
    this._entryId = entryId;
    this._entryType = entryType;
  }

  /**
   * Get the ShrId.
   * @returns {ShrId} The shr.base.ShrId
   */
  get shrId() {
    return this._shrId;
  }

  /**
   * Set the ShrId.
   * @param {ShrId} shrId - The shr.base.ShrId
   */
  set shrId(shrId) {
    this._shrId = shrId;
  }

  /**
   * Get the EntryId.
   * @returns {EntryId} The shr.base.EntryId
   */
  get entryId() {
    return this._entryId;
  }

  /**
   * Set the EntryId.
   * @param {EntryId} entryId - The shr.base.EntryId
   */
  set entryId(entryId) {
    this._entryId = entryId;
  }

  /**
   * Get the EntryType.
   * @returns {EntryType} The shr.base.EntryType
   */
  get entryType() {
    return this._entryType;
  }

  /**
   * Set the EntryType.
   * @param {EntryType} entryType - The shr.base.EntryType
   */
  set entryType(entryType) {
    this._entryType = entryType;
  }

  toJSON() {
    return {
      '_ShrId': this._shrId,
      '_EntryId': this._entryId,
      '_EntryType': this._entryType
    };
  }
}

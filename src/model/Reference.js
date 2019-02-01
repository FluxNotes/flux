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
    this._reference = undefined; // unset the cached reference if anything changes
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
    this._reference = undefined; // unset the cached reference if anything changes
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
    this._reference = undefined; // unset the cached reference if anything changes
  }

  /**
   * Get the object this Reference is pointing to, if present.
   * This reference is not assigned automatically and must be manually set for it to be present,
   * and will automatically be unset if any of the other fields are changed.
   * @returns {object} The SHR object this Reference is pointing to.
   */
  get reference() {
    return this._reference;
  }

  /**
   * Set the object this Reference is pointing to.
   * @param {object} reference - The SHR object this Reference is pointing to.
   */
  set reference(reference) {
    this._reference = reference;
  }

  toJSON() {
    return {
      '_ShrId': this._shrId,
      '_EntryId': this._entryId,
      '_EntryType': this._entryType
    };
  }

  toFHIR() {
    return this._entryId;
  }
}

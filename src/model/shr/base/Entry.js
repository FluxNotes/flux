import { setPropertiesFromJSON } from '../../json-helper';

import Any from './Any';

/**
 * Generated class for shr.base.Entry.
 * @extends Any
 */
class Entry extends Any {

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
   * Get the PersonOfRecord.
   * @returns {PersonOfRecord} The shr.base.PersonOfRecord
   */
  get personOfRecord() {
    return this._personOfRecord;
  }

  /**
   * Set the PersonOfRecord.
   * @param {PersonOfRecord} personOfRecord - The shr.base.PersonOfRecord
   */
  set personOfRecord(personOfRecord) {
    this._personOfRecord = personOfRecord;
  }

  /**
   * Get the Version.
   * @returns {Version} The shr.core.Version
   */
  get version() {
    return this._version;
  }

  /**
   * Set the Version.
   * @param {Version} version - The shr.core.Version
   */
  set version(version) {
    this._version = version;
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

  /**
   * Get the CreationTime.
   * @returns {CreationTime} The shr.core.CreationTime
   */
  get creationTime() {
    return this._creationTime;
  }

  /**
   * Set the CreationTime.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   */
  set creationTime(creationTime) {
    this._creationTime = creationTime;
  }

  /**
   * Get the LastUpdated.
   * @returns {LastUpdated} The shr.base.LastUpdated
   */
  get lastUpdated() {
    return this._lastUpdated;
  }

  /**
   * Set the LastUpdated.
   * @param {LastUpdated} lastUpdated - The shr.base.LastUpdated
   */
  set lastUpdated(lastUpdated) {
    this._lastUpdated = lastUpdated;
  }

  /**
   * Get the Narrative.
   * @returns {Narrative} The shr.base.Narrative
   */
  get narrative() {
    return this._narrative;
  }

  /**
   * Set the Narrative.
   * @param {Narrative} narrative - The shr.base.Narrative
   */
  set narrative(narrative) {
    this._narrative = narrative;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.base.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.base.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Get the SecurityLabel array.
   * @returns {Array<SecurityLabel>} The shr.base.SecurityLabel array
   */
  get securityLabel() {
    return this._securityLabel;
  }

  /**
   * Set the SecurityLabel array.
   * @param {Array<SecurityLabel>} securityLabel - The shr.base.SecurityLabel array
   */
  set securityLabel(securityLabel) {
    this._securityLabel = securityLabel;
  }

  /**
   * Get the Tag array.
   * @returns {Array<Tag>} The shr.base.Tag array
   */
  get tag() {
    return this._tag;
  }

  /**
   * Set the Tag array.
   * @param {Array<Tag>} tag - The shr.base.Tag array
   */
  set tag(tag) {
    this._tag = tag;
  }

  /**
   * Get the SourceClinicalNote.
   * @returns {SourceClinicalNote} The shr.base.SourceClinicalNote
   */
  get sourceClinicalNote() {
    return this._sourceClinicalNote;
  }

  /**
   * Set the SourceClinicalNote.
   * @param {SourceClinicalNote} sourceClinicalNote - The shr.base.SourceClinicalNote
   */
  set sourceClinicalNote(sourceClinicalNote) {
    this._sourceClinicalNote = sourceClinicalNote;
  }

  /**
   * Deserializes JSON data to an instance of the Entry class.
   * The JSON must be valid against the Entry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Entry} An instance of Entry populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Entry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Entry;

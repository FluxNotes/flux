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
   * This field/value is required.
   * @param {ShrId} shrId - The shr.base.ShrId
   */
  set shrId(shrId) {
    this._shrId = shrId;
  }

  /**
   * Set the ShrId and return 'this' for chaining.
   * This field/value is required.
   * @param {ShrId} shrId - The shr.base.ShrId
   * @returns {Entry} this.
   */
  withShrId(shrId) {
    this.shrId = shrId; return this;
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
   * This field/value is required.
   * @param {EntryId} entryId - The shr.base.EntryId
   */
  set entryId(entryId) {
    this._entryId = entryId;
  }

  /**
   * Set the EntryId and return 'this' for chaining.
   * This field/value is required.
   * @param {EntryId} entryId - The shr.base.EntryId
   * @returns {Entry} this.
   */
  withEntryId(entryId) {
    this.entryId = entryId; return this;
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
   * Set the PersonOfRecord and return 'this' for chaining.
   * @param {PersonOfRecord} personOfRecord - The shr.base.PersonOfRecord
   * @returns {Entry} this.
   */
  withPersonOfRecord(personOfRecord) {
    this.personOfRecord = personOfRecord; return this;
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
   * Set the Version and return 'this' for chaining.
   * @param {Version} version - The shr.core.Version
   * @returns {Entry} this.
   */
  withVersion(version) {
    this.version = version; return this;
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
   * This field/value is required.
   * @param {EntryType} entryType - The shr.base.EntryType
   */
  set entryType(entryType) {
    this._entryType = entryType;
  }

  /**
   * Set the EntryType and return 'this' for chaining.
   * This field/value is required.
   * @param {EntryType} entryType - The shr.base.EntryType
   * @returns {Entry} this.
   */
  withEntryType(entryType) {
    this.entryType = entryType; return this;
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
   * This field/value is required.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   */
  set creationTime(creationTime) {
    this._creationTime = creationTime;
  }

  /**
   * Set the CreationTime and return 'this' for chaining.
   * This field/value is required.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   * @returns {Entry} this.
   */
  withCreationTime(creationTime) {
    this.creationTime = creationTime; return this;
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
   * This field/value is required.
   * @param {LastUpdated} lastUpdated - The shr.base.LastUpdated
   */
  set lastUpdated(lastUpdated) {
    this._lastUpdated = lastUpdated;
  }

  /**
   * Set the LastUpdated and return 'this' for chaining.
   * This field/value is required.
   * @param {LastUpdated} lastUpdated - The shr.base.LastUpdated
   * @returns {Entry} this.
   */
  withLastUpdated(lastUpdated) {
    this.lastUpdated = lastUpdated; return this;
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
   * Set the Narrative and return 'this' for chaining.
   * @param {Narrative} narrative - The shr.base.Narrative
   * @returns {Entry} this.
   */
  withNarrative(narrative) {
    this.narrative = narrative; return this;
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
   * Set the Language and return 'this' for chaining.
   * @param {Language} language - The shr.base.Language
   * @returns {Entry} this.
   */
  withLanguage(language) {
    this.language = language; return this;
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
   * Set the SecurityLabel array and return 'this' for chaining.
   * @param {Array<SecurityLabel>} securityLabel - The shr.base.SecurityLabel array
   * @returns {Entry} this.
   */
  withSecurityLabel(securityLabel) {
    this.securityLabel = securityLabel; return this;
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
   * Set the Tag array and return 'this' for chaining.
   * @param {Array<Tag>} tag - The shr.base.Tag array
   * @returns {Entry} this.
   */
  withTag(tag) {
    this.tag = tag; return this;
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
  /**
   * Serializes an instance of the Entry class to a JSON object.
   * The JSON is expected to be valid against the Entry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Entry' } };
    if (this.shrId != null) {
      inst['ShrId'] = typeof this.shrId.toJSON === 'function' ? this.shrId.toJSON() : this.shrId;
    }
    if (this.entryId != null) {
      inst['EntryId'] = typeof this.entryId.toJSON === 'function' ? this.entryId.toJSON() : this.entryId;
    }
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.version != null) {
      inst['Version'] = typeof this.version.toJSON === 'function' ? this.version.toJSON() : this.version;
    }
    if (this.entryType != null) {
      inst['EntryType'] = typeof this.entryType.toJSON === 'function' ? this.entryType.toJSON() : this.entryType;
    }
    if (this.creationTime != null) {
      inst['CreationTime'] = typeof this.creationTime.toJSON === 'function' ? this.creationTime.toJSON() : this.creationTime;
    }
    if (this.lastUpdated != null) {
      inst['LastUpdated'] = typeof this.lastUpdated.toJSON === 'function' ? this.lastUpdated.toJSON() : this.lastUpdated;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.securityLabel != null) {
      inst['SecurityLabel'] = this.securityLabel.map(f => f.toJSON());
    }
    if (this.tag != null) {
      inst['Tag'] = this.tag.map(f => f.toJSON());
    }
    return inst;
  }
}
export default Entry;

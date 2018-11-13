import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Entry.
 */
class Entry {

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
   * Set the ShrId and return 'this' for chaining.
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
   * Get the RecordStatus.
   * @returns {RecordStatus} The shr.base.RecordStatus
   */
  get recordStatus() {
    return this._recordStatus;
  }

  /**
   * Set the RecordStatus.
   * @param {RecordStatus} recordStatus - The shr.base.RecordStatus
   */
  set recordStatus(recordStatus) {
    this._recordStatus = recordStatus;
  }

  /**
   * Set the RecordStatus and return 'this' for chaining.
   * @param {RecordStatus} recordStatus - The shr.base.RecordStatus
   * @returns {Entry} this.
   */
  withRecordStatus(recordStatus) {
    this.recordStatus = recordStatus; return this;
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
   * @returns {Language} The shr.core.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.core.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Set the Language and return 'this' for chaining.
   * @param {Language} language - The shr.core.Language
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
   * Get the DerivedFrom array.
   * @returns {Array<DerivedFrom>} The shr.base.DerivedFrom array
   */
  get derivedFrom() {
    return this._derivedFrom;
  }

  /**
   * Set the DerivedFrom array.
   * @param {Array<DerivedFrom>} derivedFrom - The shr.base.DerivedFrom array
   */
  set derivedFrom(derivedFrom) {
    this._derivedFrom = derivedFrom;
  }

  /**
   * Set the DerivedFrom array and return 'this' for chaining.
   * @param {Array<DerivedFrom>} derivedFrom - The shr.base.DerivedFrom array
   * @returns {Entry} this.
   */
  withDerivedFrom(derivedFrom) {
    this.derivedFrom = derivedFrom; return this;
  }

  /**
   * Get the RecordedBy.
   * @returns {RecordedBy} The shr.base.RecordedBy
   */
  get recordedBy() {
    return this._recordedBy;
  }

  /**
   * Set the RecordedBy.
   * @param {RecordedBy} recordedBy - The shr.base.RecordedBy
   */
  set recordedBy(recordedBy) {
    this._recordedBy = recordedBy;
  }

  /**
   * Set the RecordedBy and return 'this' for chaining.
   * @param {RecordedBy} recordedBy - The shr.base.RecordedBy
   * @returns {Entry} this.
   */
  withRecordedBy(recordedBy) {
    this.recordedBy = recordedBy; return this;
  }

  /**
   * Get the SignedBy.
   * @returns {SignedBy} The shr.base.SignedBy
   */
  get signedBy() {
    return this._signedBy;
  }

  /**
   * Set the SignedBy.
   * @param {SignedBy} signedBy - The shr.base.SignedBy
   */
  set signedBy(signedBy) {
    this._signedBy = signedBy;
  }

  /**
   * Set the SignedBy and return 'this' for chaining.
   * @param {SignedBy} signedBy - The shr.base.SignedBy
   * @returns {Entry} this.
   */
  withSignedBy(signedBy) {
    this.signedBy = signedBy; return this;
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
    if (this.recordStatus != null) {
      inst['RecordStatus'] = typeof this.recordStatus.toJSON === 'function' ? this.recordStatus.toJSON() : this.recordStatus;
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
    if (this.derivedFrom != null) {
      inst['DerivedFrom'] = this.derivedFrom.map(f => f.toJSON());
    }
    if (this.recordedBy != null) {
      inst['RecordedBy'] = typeof this.recordedBy.toJSON === 'function' ? this.recordedBy.toJSON() : this.recordedBy;
    }
    if (this.signedBy != null) {
      inst['SignedBy'] = typeof this.signedBy.toJSON === 'function' ? this.signedBy.toJSON() : this.signedBy;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Entry class to a FHIR object.
   * The FHIR is expected to be valid against the Entry FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.entryId != null) {
      inst['id'] = typeof this.entryId.toFHIR === 'function' ? this.entryId.toFHIR() : this.entryId;
    }
    if (this.version != null) {
      if(inst['meta'] === undefined) {
        inst['meta'] = {};
      }
      inst['meta']['versionId'] = typeof this.version.toFHIR === 'function' ? this.version.toFHIR() : this.version;
    }
    if (this.lastUpdated != null) {
      if(inst['meta'] === undefined) {
        inst['meta'] = {};
      }
      inst['meta']['lastUpdated'] = typeof this.lastUpdated.toFHIR === 'function' ? this.lastUpdated.toFHIR() : this.lastUpdated;
    }
    if (this.entryType != null) {
      if(inst['meta'] === undefined) {
        inst['meta'] = {};
      }
      inst['meta']['profile'] = typeof this.entryType.toFHIR === 'function' ? this.entryType.toFHIR() : this.entryType;
    }
    if (this.securityLabel != null) {
      if(inst['meta'] === undefined) {
        inst['meta'] = {};
      }
      inst['meta']['security'] = inst ['meta']['security'] || [];
      inst['meta']['security'] = inst['meta']['security'].concat(this.securityLabel.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.tag != null) {
      if(inst['meta'] === undefined) {
        inst['meta'] = {};
      }
      inst['meta']['tag'] = inst ['meta']['tag'] || [];
      inst['meta']['tag'] = inst['meta']['tag'].concat(this.tag.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.language != null) {
      inst['language'] = typeof this.language.toFHIR === 'function' ? this.language.toFHIR() : this.language;
    }
    if (this.narrative != null) {
      inst['text'] = typeof this.narrative.toFHIR === 'function' ? this.narrative.toFHIR() : this.narrative;
    }
    if (this.shrId != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.shrId.toFHIR === 'function' ? this.shrId.toFHIR(true) : this.shrId);
    }
    if (this.creationTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.creationTime.toFHIR === 'function' ? this.creationTime.toFHIR(true) : this.creationTime);
    }
    if (this.recordStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.recordStatus.toFHIR === 'function' ? this.recordStatus.toFHIR(true) : this.recordStatus);
    }
    if (this.derivedFrom != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.derivedFrom.toFHIR === 'function' ? this.derivedFrom.toFHIR(true) : this.derivedFrom);
    }
    if (this.recordedBy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.recordedBy.toFHIR === 'function' ? this.recordedBy.toFHIR(true) : this.recordedBy);
    }
    if (this.signedBy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.signedBy.toFHIR === 'function' ? this.signedBy.toFHIR(true) : this.signedBy);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Entry class.
   * The FHIR must be valid against the Entry FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Entry} An instance of Entry populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Entry();
    if (fhir['id'] != null) {
      inst.entryId = createInstanceFromFHIR('shr.base.EntryId', fhir['id']);
    }
    if (fhir['meta'] != null && fhir['meta']['versionId'] != null) {
      inst.version = createInstanceFromFHIR('shr.core.Version', fhir['meta']['versionId']);
    }
    if (fhir['meta'] != null && fhir['meta']['lastUpdated'] != null) {
      inst.lastUpdated = createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated']);
    }
    if (fhir['meta'] != null && fhir['meta']['profile'] != null) {
      inst.entryType = createInstanceFromFHIR('shr.base.EntryType', fhir['meta']['profile']);
    }
    if (fhir['meta'] != null && fhir['meta']['security'] != null) {
      inst.securityLabel = inst.securityLabel || [];
      inst.securityLabel = inst.securityLabel.concat(fhir['meta']['security'].map(f => createInstanceFromFHIR('shr.base.SecurityLabel', f)));
    }
    if (fhir['meta'] != null && fhir['meta']['tag'] != null) {
      inst.tag = inst.tag || [];
      inst.tag = inst.tag.concat(fhir['meta']['tag'].map(f => createInstanceFromFHIR('shr.base.Tag', f)));
    }
    if (fhir['language'] != null) {
      inst.language = createInstanceFromFHIR('shr.core.Language', fhir['language']);
    }
    if (fhir['text'] != null) {
      inst.narrative = createInstanceFromFHIR('shr.base.Narrative', fhir['text']);
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ShrId-extension');
      if (match != null) {
        inst.shrId = createInstanceFromFHIR('shr.base.ShrId', match, true);
      }
    }
    return inst;
  }

}
export default Entry;

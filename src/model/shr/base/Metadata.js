import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.base.Metadata.
 */
class Metadata {

  /**
   * Get the VersionId.
   * @returns {VersionId} The shr.core.VersionId
   */
  get versionId() {
    return this._versionId;
  }

  /**
   * Set the VersionId.
   * @param {VersionId} versionId - The shr.core.VersionId
   */
  set versionId(versionId) {
    this._versionId = versionId;
  }

  /**
   * Set the VersionId and return 'this' for chaining.
   * @param {VersionId} versionId - The shr.core.VersionId
   * @returns {Metadata} this.
   */
  withVersionId(versionId) {
    this.versionId = versionId; return this;
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
   * Set the LastUpdated and return 'this' for chaining.
   * @param {LastUpdated} lastUpdated - The shr.base.LastUpdated
   * @returns {Metadata} this.
   */
  withLastUpdated(lastUpdated) {
    this.lastUpdated = lastUpdated; return this;
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
   * @returns {Metadata} this.
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
   * @returns {Metadata} this.
   */
  withTag(tag) {
    this.tag = tag; return this;
  }

  /**
   * Get the InformationSource.
   * @returns {InformationSource} The shr.base.InformationSource
   */
  get informationSource() {
    return this._informationSource;
  }

  /**
   * Set the InformationSource.
   * @param {InformationSource} informationSource - The shr.base.InformationSource
   */
  set informationSource(informationSource) {
    this._informationSource = informationSource;
  }

  /**
   * Set the InformationSource and return 'this' for chaining.
   * @param {InformationSource} informationSource - The shr.base.InformationSource
   * @returns {Metadata} this.
   */
  withInformationSource(informationSource) {
    this.informationSource = informationSource; return this;
  }

  /**
   * Get the InformationRecorder.
   * @returns {InformationRecorder} The shr.base.InformationRecorder
   */
  get informationRecorder() {
    return this._informationRecorder;
  }

  /**
   * Set the InformationRecorder.
   * @param {InformationRecorder} informationRecorder - The shr.base.InformationRecorder
   */
  set informationRecorder(informationRecorder) {
    this._informationRecorder = informationRecorder;
  }

  /**
   * Set the InformationRecorder and return 'this' for chaining.
   * @param {InformationRecorder} informationRecorder - The shr.base.InformationRecorder
   * @returns {Metadata} this.
   */
  withInformationRecorder(informationRecorder) {
    this.informationRecorder = informationRecorder; return this;
  }

  /**
   * Get the AuthoredDateTime.
   * @returns {AuthoredDateTime} The shr.base.AuthoredDateTime
   */
  get authoredDateTime() {
    return this._authoredDateTime;
  }

  /**
   * Set the AuthoredDateTime.
   * @param {AuthoredDateTime} authoredDateTime - The shr.base.AuthoredDateTime
   */
  set authoredDateTime(authoredDateTime) {
    this._authoredDateTime = authoredDateTime;
  }

  /**
   * Set the AuthoredDateTime and return 'this' for chaining.
   * @param {AuthoredDateTime} authoredDateTime - The shr.base.AuthoredDateTime
   * @returns {Metadata} this.
   */
  withAuthoredDateTime(authoredDateTime) {
    this.authoredDateTime = authoredDateTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Metadata class.
   * The JSON must be valid against the Metadata JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Metadata} An instance of Metadata populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Metadata();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Metadata class to a JSON object.
   * The JSON is expected to be valid against the Metadata JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Metadata' } };
    if (this.versionId != null) {
      inst['VersionId'] = typeof this.versionId.toJSON === 'function' ? this.versionId.toJSON() : this.versionId;
    }
    if (this.lastUpdated != null) {
      inst['LastUpdated'] = typeof this.lastUpdated.toJSON === 'function' ? this.lastUpdated.toJSON() : this.lastUpdated;
    }
    if (this.securityLabel != null) {
      inst['SecurityLabel'] = this.securityLabel.map(f => f.toJSON());
    }
    if (this.tag != null) {
      inst['Tag'] = this.tag.map(f => f.toJSON());
    }
    if (this.informationSource != null) {
      inst['InformationSource'] = typeof this.informationSource.toJSON === 'function' ? this.informationSource.toJSON() : this.informationSource;
    }
    if (this.informationRecorder != null) {
      inst['InformationRecorder'] = typeof this.informationRecorder.toJSON === 'function' ? this.informationRecorder.toJSON() : this.informationRecorder;
    }
    if (this.authoredDateTime != null) {
      inst['AuthoredDateTime'] = typeof this.authoredDateTime.toJSON === 'function' ? this.authoredDateTime.toJSON() : this.authoredDateTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Metadata class.
   * The FHIR must be valid against the Metadata FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Metadata} An instance of Metadata populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Metadata();
    return inst;
  }

}
export default Metadata;

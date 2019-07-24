// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Metadata.
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
   * @returns {LastUpdated} The shr.core.LastUpdated
   */
  get lastUpdated() {
    return this._lastUpdated;
  }

  /**
   * Set the LastUpdated.
   * @param {LastUpdated} lastUpdated - The shr.core.LastUpdated
   */
  set lastUpdated(lastUpdated) {
    this._lastUpdated = lastUpdated;
  }

  /**
   * Set the LastUpdated and return 'this' for chaining.
   * @param {LastUpdated} lastUpdated - The shr.core.LastUpdated
   * @returns {Metadata} this.
   */
  withLastUpdated(lastUpdated) {
    this.lastUpdated = lastUpdated; return this;
  }

  /**
   * Get the Profile array.
   * @returns {Array<Profile>} The shr.core.Profile array
   */
  get profile() {
    return this._profile;
  }

  /**
   * Set the Profile array.
   * @param {Array<Profile>} profile - The shr.core.Profile array
   */
  set profile(profile) {
    this._profile = profile;
  }

  /**
   * Set the Profile array and return 'this' for chaining.
   * @param {Array<Profile>} profile - The shr.core.Profile array
   * @returns {Metadata} this.
   */
  withProfile(profile) {
    this.profile = profile; return this;
  }

  /**
   * Get the SecurityLabel array.
   * @returns {Array<SecurityLabel>} The shr.core.SecurityLabel array
   */
  get securityLabel() {
    return this._securityLabel;
  }

  /**
   * Set the SecurityLabel array.
   * @param {Array<SecurityLabel>} securityLabel - The shr.core.SecurityLabel array
   */
  set securityLabel(securityLabel) {
    this._securityLabel = securityLabel;
  }

  /**
   * Set the SecurityLabel array and return 'this' for chaining.
   * @param {Array<SecurityLabel>} securityLabel - The shr.core.SecurityLabel array
   * @returns {Metadata} this.
   */
  withSecurityLabel(securityLabel) {
    this.securityLabel = securityLabel; return this;
  }

  /**
   * Get the Tag array.
   * @returns {Array<Tag>} The shr.core.Tag array
   */
  get tag() {
    return this._tag;
  }

  /**
   * Set the Tag array.
   * @param {Array<Tag>} tag - The shr.core.Tag array
   */
  set tag(tag) {
    this._tag = tag;
  }

  /**
   * Set the Tag array and return 'this' for chaining.
   * @param {Array<Tag>} tag - The shr.core.Tag array
   * @returns {Metadata} this.
   */
  withTag(tag) {
    this.tag = tag; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Metadata class.
   * The JSON must be valid against the Metadata JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Metadata} An instance of Metadata populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Metadata');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Metadata class to a JSON object.
   * The JSON is expected to be valid against the Metadata JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Metadata' } };
    if (this.versionId != null) {
      inst['VersionId'] = typeof this.versionId.toJSON === 'function' ? this.versionId.toJSON() : this.versionId;
    }
    if (this.lastUpdated != null) {
      inst['LastUpdated'] = typeof this.lastUpdated.toJSON === 'function' ? this.lastUpdated.toJSON() : this.lastUpdated;
    }
    if (this.profile != null) {
      inst['Profile'] = this.profile.map(f => f.toJSON());
    }
    if (this.securityLabel != null) {
      inst['SecurityLabel'] = this.securityLabel.map(f => f.toJSON());
    }
    if (this.tag != null) {
      inst['Tag'] = this.tag.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Metadata class.
   * The FHIR must be valid against the Metadata FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Metadata} An instance of Metadata populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Metadata');
    const inst = new klass();
    return inst;
  }

}
export default Metadata;

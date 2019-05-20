import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.InformationItem.
 */
class InformationItem {

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
   * @returns {InformationItem} this.
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
   * @returns {InformationItem} this.
   */
  withLanguage(language) {
    this.language = language; return this;
  }

  /**
   * Get the Metadata.
   * @returns {Metadata} The shr.base.Metadata
   */
  get metadata() {
    return this._metadata;
  }

  /**
   * Set the Metadata.
   * @param {Metadata} metadata - The shr.base.Metadata
   */
  set metadata(metadata) {
    this._metadata = metadata;
  }

  /**
   * Set the Metadata and return 'this' for chaining.
   * @param {Metadata} metadata - The shr.base.Metadata
   * @returns {InformationItem} this.
   */
  withMetadata(metadata) {
    this.metadata = metadata; return this;
  }

  /**
   * Deserializes JSON data to an instance of the InformationItem class.
   * The JSON must be valid against the InformationItem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {InformationItem} An instance of InformationItem populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new InformationItem();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the InformationItem class to a JSON object.
   * The JSON is expected to be valid against the InformationItem JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/InformationItem' } };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the InformationItem class.
   * The FHIR must be valid against the InformationItem FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {InformationItem} An instance of InformationItem populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new InformationItem();
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default InformationItem;

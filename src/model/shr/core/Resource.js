// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Resource.
 */
class Resource {

  /**
   * Get the Metadata.
   * @returns {Metadata} The shr.core.Metadata
   */
  get metadata() {
    return this._metadata;
  }

  /**
   * Set the Metadata.
   * @param {Metadata} metadata - The shr.core.Metadata
   */
  set metadata(metadata) {
    this._metadata = metadata;
  }

  /**
   * Set the Metadata and return 'this' for chaining.
   * @param {Metadata} metadata - The shr.core.Metadata
   * @returns {Resource} this.
   */
  withMetadata(metadata) {
    this.metadata = metadata; return this;
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
   * @returns {Resource} this.
   */
  withLanguage(language) {
    this.language = language; return this;
  }

  /**
   * Get the ImplicitRules.
   * @returns {ImplicitRules} The shr.core.ImplicitRules
   */
  get implicitRules() {
    return this._implicitRules;
  }

  /**
   * Set the ImplicitRules.
   * @param {ImplicitRules} implicitRules - The shr.core.ImplicitRules
   */
  set implicitRules(implicitRules) {
    this._implicitRules = implicitRules;
  }

  /**
   * Set the ImplicitRules and return 'this' for chaining.
   * @param {ImplicitRules} implicitRules - The shr.core.ImplicitRules
   * @returns {Resource} this.
   */
  withImplicitRules(implicitRules) {
    this.implicitRules = implicitRules; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Resource class.
   * The JSON must be valid against the Resource JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Resource} An instance of Resource populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Resource');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Resource class to a JSON object.
   * The JSON is expected to be valid against the Resource JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Resource' } };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Resource class.
   * The FHIR must be valid against the Resource FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Resource} An instance of Resource populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Resource');
    const inst = new klass();
    return inst;
  }

}
export default Resource;

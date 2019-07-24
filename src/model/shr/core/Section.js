// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Section.
 */
class Section {

  /**
   * Get the DomainResource array.
   * @returns {Array<DomainResource>} The shr.core.DomainResource array
   */
  get domainResource() {
    return this._domainResource;
  }

  /**
   * Set the DomainResource array.
   * @param {Array<DomainResource>} domainResource - The shr.core.DomainResource array
   */
  set domainResource(domainResource) {
    this._domainResource = domainResource;
  }

  /**
   * Set the DomainResource array and return 'this' for chaining.
   * @param {Array<DomainResource>} domainResource - The shr.core.DomainResource array
   * @returns {Section} this.
   */
  withDomainResource(domainResource) {
    this.domainResource = domainResource; return this;
  }

  /**
   * Get the Section array.
   * @returns {Array<Section>} The shr.core.Section array
   */
  get section() {
    return this._section;
  }

  /**
   * Set the Section array.
   * @param {Array<Section>} section - The shr.core.Section array
   */
  set section(section) {
    this._section = section;
  }

  /**
   * Set the Section array and return 'this' for chaining.
   * @param {Array<Section>} section - The shr.core.Section array
   * @returns {Section} this.
   */
  withSection(section) {
    this.section = section; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Section class.
   * The JSON must be valid against the Section JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Section} An instance of Section populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Section');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Section class to a JSON object.
   * The JSON is expected to be valid against the Section JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Section' } };
    if (this.domainResource != null) {
      inst['DomainResource'] = this.domainResource.map(f => f.toJSON());
    }
    if (this.section != null) {
      inst['Section'] = this.section.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Section class.
   * The FHIR must be valid against the Section FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Section} An instance of Section populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Section');
    const inst = new klass();
    return inst;
  }

}
export default Section;

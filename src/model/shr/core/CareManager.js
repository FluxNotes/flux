// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.CareManager.
 */
class CareManager {

  /**
   * Get the value (aliases practitioner).
   * @returns {Reference} The shr.core.Practitioner reference
   */
  get value() {
    return this._practitioner;
  }

  /**
   * Set the value (aliases practitioner).
   * This field/value is required.
   * @param {Reference} value - The shr.core.Practitioner reference
   */
  set value(value) {
    this._practitioner = value;
  }

  /**
   * Set the value (aliases practitioner) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.core.Practitioner reference
   * @returns {CareManager} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.core.Practitioner reference.
   * @returns {Reference} The shr.core.Practitioner reference
   */
  get practitioner() {
    return this._practitioner;
  }

  /**
   * Set the shr.core.Practitioner reference.
   * This field/value is required.
   * @param {Reference} practitioner - The shr.core.Practitioner reference
   */
  set practitioner(practitioner) {
    this._practitioner = practitioner;
  }

  /**
   * Set the shr.core.Practitioner reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} practitioner - The shr.core.Practitioner reference
   * @returns {CareManager} this.
   */
  withPractitioner(practitioner) {
    this.practitioner = practitioner; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CareManager class.
   * The JSON must be valid against the CareManager JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CareManager} An instance of CareManager populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'CareManager');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CareManager class to a JSON object.
   * The JSON is expected to be valid against the CareManager JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/CareManager' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CareManager class.
   * The FHIR must be valid against the CareManager FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CareManager} An instance of CareManager populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'CareManager');
    const inst = new klass();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', fhir, fhirType, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default CareManager;

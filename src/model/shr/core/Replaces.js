// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Replaces.
 */
class Replaces {

  /**
   * Get the value (aliases actionRequested).
   * @returns {Reference} The shr.core.ActionRequested reference
   */
  get value() {
    return this._actionRequested;
  }

  /**
   * Set the value (aliases actionRequested).
   * This field/value is required.
   * @param {Reference} value - The shr.core.ActionRequested reference
   */
  set value(value) {
    this._actionRequested = value;
  }

  /**
   * Set the value (aliases actionRequested) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.core.ActionRequested reference
   * @returns {Replaces} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.core.ActionRequested reference.
   * @returns {Reference} The shr.core.ActionRequested reference
   */
  get actionRequested() {
    return this._actionRequested;
  }

  /**
   * Set the shr.core.ActionRequested reference.
   * This field/value is required.
   * @param {Reference} actionRequested - The shr.core.ActionRequested reference
   */
  set actionRequested(actionRequested) {
    this._actionRequested = actionRequested;
  }

  /**
   * Set the shr.core.ActionRequested reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} actionRequested - The shr.core.ActionRequested reference
   * @returns {Replaces} this.
   */
  withActionRequested(actionRequested) {
    this.actionRequested = actionRequested; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Replaces class.
   * The JSON must be valid against the Replaces JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Replaces} An instance of Replaces populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Replaces');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Replaces class to a JSON object.
   * The JSON is expected to be valid against the Replaces JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Replaces' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Replaces class.
   * The FHIR must be valid against the Replaces FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Replaces} An instance of Replaces populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Replaces');
    const inst = new klass();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.ActionRequested', fhir, fhirType, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Replaces;

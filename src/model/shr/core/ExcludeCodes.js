// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ExcludeCodes.
 */
class ExcludeCodes {

  /**
   * Get the value (aliases codeSet).
   * @returns {CodeSet} The shr.core.CodeSet
   */
  get value() {
    return this._codeSet;
  }

  /**
   * Set the value (aliases codeSet).
   * This field/value is required.
   * @param {CodeSet} value - The shr.core.CodeSet
   */
  set value(value) {
    this._codeSet = value;
  }

  /**
   * Set the value (aliases codeSet) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeSet} value - The shr.core.CodeSet
   * @returns {ExcludeCodes} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeSet.
   * @returns {CodeSet} The shr.core.CodeSet
   */
  get codeSet() {
    return this._codeSet;
  }

  /**
   * Set the CodeSet.
   * This field/value is required.
   * @param {CodeSet} codeSet - The shr.core.CodeSet
   */
  set codeSet(codeSet) {
    this._codeSet = codeSet;
  }

  /**
   * Set the CodeSet and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeSet} codeSet - The shr.core.CodeSet
   * @returns {ExcludeCodes} this.
   */
  withCodeSet(codeSet) {
    this.codeSet = codeSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExcludeCodes class.
   * The JSON must be valid against the ExcludeCodes JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExcludeCodes} An instance of ExcludeCodes populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ExcludeCodes');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ExcludeCodes class to a JSON object.
   * The JSON is expected to be valid against the ExcludeCodes JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ExcludeCodes' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ExcludeCodes class.
   * The FHIR must be valid against the ExcludeCodes FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ExcludeCodes} An instance of ExcludeCodes populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ExcludeCodes');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeSet-extension');
      if (match_3 != null) {
        inst.codeSet = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSet', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSet', fhir, fhirType, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default ExcludeCodes;

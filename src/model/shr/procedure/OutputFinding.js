/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.procedure.OutputFinding.
 */
class OutputFinding {

  /**
   * Get the value (aliases finding).
   * @returns {Reference} The shr.base.Finding reference
   */
  get value() {
    return this._finding;
  }

  /**
   * Set the value (aliases finding).
   * This field/value is required.
   * @param {Reference} value - The shr.base.Finding reference
   */
  set value(value) {
    this._finding = value;
  }

  /**
   * Set the value (aliases finding) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.Finding reference
   * @returns {OutputFinding} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.Finding reference.
   * @returns {Reference} The shr.base.Finding reference
   */
  get finding() {
    return this._finding;
  }

  /**
   * Set the shr.base.Finding reference.
   * This field/value is required.
   * @param {Reference} finding - The shr.base.Finding reference
   */
  set finding(finding) {
    this._finding = finding;
  }

  /**
   * Set the shr.base.Finding reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} finding - The shr.base.Finding reference
   * @returns {OutputFinding} this.
   */
  withFinding(finding) {
    this.finding = finding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OutputFinding class.
   * The JSON must be valid against the OutputFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OutputFinding} An instance of OutputFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OutputFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the OutputFinding class to a JSON object.
   * The JSON is expected to be valid against the OutputFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/OutputFinding' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the OutputFinding class.
   * The FHIR must be valid against the OutputFinding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {OutputFinding} An instance of OutputFinding populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new OutputFinding();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.base.Finding', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default OutputFinding;

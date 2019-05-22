/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.ShrId.
 */
class ShrId {

  /**
   * Get the value (aliases id).
   * @returns {id} The id
   */
  get value() {
    return this._id;
  }

  /**
   * Set the value (aliases id).
   * This field/value is required.
   * @param {id} value - The id
   */
  set value(value) {
    this._id = value;
  }

  /**
   * Set the value (aliases id) and return 'this' for chaining.
   * This field/value is required.
   * @param {id} value - The id
   * @returns {ShrId} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the id.
   * @returns {id} The id
   */
  get id() {
    return this._id;
  }

  /**
   * Set the id.
   * This field/value is required.
   * @param {id} id - The id
   */
  set id(id) {
    this._id = id;
  }

  /**
   * Set the id and return 'this' for chaining.
   * This field/value is required.
   * @param {id} id - The id
   * @returns {ShrId} this.
   */
  withId(id) {
    this.id = id; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ShrId class.
   * The JSON must be valid against the ShrId JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ShrId} An instance of ShrId populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ShrId();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ShrId class to a JSON object.
   * The JSON is expected to be valid against the ShrId JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ShrId' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ShrId class.
   * The FHIR must be valid against the ShrId FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ShrId} An instance of ShrId populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ShrId();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default ShrId;

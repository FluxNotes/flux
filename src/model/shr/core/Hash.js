import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Hash.
 */
class Hash {

  /**
   * Get the value (aliases base64Binary).
   * @returns {base64Binary} The base64Binary
   */
  get value() {
    return this._base64Binary;
  }

  /**
   * Set the value (aliases base64Binary).
   * This field/value is required.
   * @param {base64Binary} value - The base64Binary
   */
  set value(value) {
    this._base64Binary = value;
  }

  /**
   * Set the value (aliases base64Binary) and return 'this' for chaining.
   * This field/value is required.
   * @param {base64Binary} value - The base64Binary
   * @returns {Hash} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the base64Binary.
   * @returns {base64Binary} The base64Binary
   */
  get base64Binary() {
    return this._base64Binary;
  }

  /**
   * Set the base64Binary.
   * This field/value is required.
   * @param {base64Binary} base64Binary - The base64Binary
   */
  set base64Binary(base64Binary) {
    this._base64Binary = base64Binary;
  }

  /**
   * Set the base64Binary and return 'this' for chaining.
   * This field/value is required.
   * @param {base64Binary} base64Binary - The base64Binary
   * @returns {Hash} this.
   */
  withBase64Binary(base64Binary) {
    this.base64Binary = base64Binary; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Hash class.
   * The JSON must be valid against the Hash JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Hash} An instance of Hash populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Hash();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Hash class to a JSON object.
   * The JSON is expected to be valid against the Hash JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Hash' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Hash class.
   * The FHIR must be valid against the Hash FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Hash} An instance of Hash populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Hash();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default Hash;

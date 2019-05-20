import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.EntryType.
 */
class EntryType {

  /**
   * Get the value (aliases uri).
   * @returns {uri} The uri
   */
  get value() {
    return this._uri;
  }

  /**
   * Set the value (aliases uri).
   * This field/value is required.
   * @param {uri} value - The uri
   */
  set value(value) {
    this._uri = value;
  }

  /**
   * Set the value (aliases uri) and return 'this' for chaining.
   * This field/value is required.
   * @param {uri} value - The uri
   * @returns {EntryType} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the uri.
   * @returns {uri} The uri
   */
  get uri() {
    return this._uri;
  }

  /**
   * Set the uri.
   * This field/value is required.
   * @param {uri} uri - The uri
   */
  set uri(uri) {
    this._uri = uri;
  }

  /**
   * Set the uri and return 'this' for chaining.
   * This field/value is required.
   * @param {uri} uri - The uri
   * @returns {EntryType} this.
   */
  withUri(uri) {
    this.uri = uri; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EntryType class.
   * The JSON must be valid against the EntryType JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EntryType} An instance of EntryType populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EntryType();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EntryType class to a JSON object.
   * The JSON is expected to be valid against the EntryType JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = {};
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EntryType class.
   * The FHIR must be valid against the EntryType FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EntryType} An instance of EntryType populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new EntryType();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default EntryType;

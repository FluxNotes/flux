/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.AuthoredDateTime.
 */
class AuthoredDateTime {

  /**
   * Get the value (aliases dateTime).
   * @returns {dateTime} The dateTime
   */
  get value() {
    return this._dateTime;
  }

  /**
   * Set the value (aliases dateTime).
   * This field/value is required.
   * @param {dateTime} value - The dateTime
   */
  set value(value) {
    this._dateTime = value;
  }

  /**
   * Set the value (aliases dateTime) and return 'this' for chaining.
   * This field/value is required.
   * @param {dateTime} value - The dateTime
   * @returns {AuthoredDateTime} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the dateTime.
   * @returns {dateTime} The dateTime
   */
  get dateTime() {
    return this._dateTime;
  }

  /**
   * Set the dateTime.
   * This field/value is required.
   * @param {dateTime} dateTime - The dateTime
   */
  set dateTime(dateTime) {
    this._dateTime = dateTime;
  }

  /**
   * Set the dateTime and return 'this' for chaining.
   * This field/value is required.
   * @param {dateTime} dateTime - The dateTime
   * @returns {AuthoredDateTime} this.
   */
  withDateTime(dateTime) {
    this.dateTime = dateTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AuthoredDateTime class.
   * The JSON must be valid against the AuthoredDateTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AuthoredDateTime} An instance of AuthoredDateTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AuthoredDateTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AuthoredDateTime class to a JSON object.
   * The JSON is expected to be valid against the AuthoredDateTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/AuthoredDateTime' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AuthoredDateTime class.
   * The FHIR must be valid against the AuthoredDateTime FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AuthoredDateTime} An instance of AuthoredDateTime populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AuthoredDateTime();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default AuthoredDateTime;

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.WhenClinicallyRecognized.
 */
class WhenClinicallyRecognized {

  /**
   * Get the value (aliases date).
   * @returns {date} The date
   */
  get value() {
    return this._date;
  }

  /**
   * Set the value (aliases date).
   * This field/value is required.
   * @param {date} value - The date
   */
  set value(value) {
    this._date = value;
  }

  /**
   * Set the value (aliases date) and return 'this' for chaining.
   * This field/value is required.
   * @param {date} value - The date
   * @returns {WhenClinicallyRecognized} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the date.
   * @returns {date} The date
   */
  get date() {
    return this._date;
  }

  /**
   * Set the date.
   * This field/value is required.
   * @param {date} date - The date
   */
  set date(date) {
    this._date = date;
  }

  /**
   * Set the date and return 'this' for chaining.
   * This field/value is required.
   * @param {date} date - The date
   * @returns {WhenClinicallyRecognized} this.
   */
  withDate(date) {
    this.date = date; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WhenClinicallyRecognized class.
   * The JSON must be valid against the WhenClinicallyRecognized JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WhenClinicallyRecognized} An instance of WhenClinicallyRecognized populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WhenClinicallyRecognized();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the WhenClinicallyRecognized class to a JSON object.
   * The JSON is expected to be valid against the WhenClinicallyRecognized JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/WhenClinicallyRecognized' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the WhenClinicallyRecognized class.
   * The FHIR must be valid against the WhenClinicallyRecognized FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {WhenClinicallyRecognized} An instance of WhenClinicallyRecognized populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new WhenClinicallyRecognized();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default WhenClinicallyRecognized;

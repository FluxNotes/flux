/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.RecurrenceInterval.
 */
class RecurrenceInterval {

  /**
   * Get the value (aliases duration).
   * @returns {Duration} The shr.core.Duration
   */
  get value() {
    return this._duration;
  }

  /**
   * Set the value (aliases duration).
   * This field/value is required.
   * @param {Duration} value - The shr.core.Duration
   */
  set value(value) {
    this._duration = value;
  }

  /**
   * Set the value (aliases duration) and return 'this' for chaining.
   * This field/value is required.
   * @param {Duration} value - The shr.core.Duration
   * @returns {RecurrenceInterval} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Duration.
   * @returns {Duration} The shr.core.Duration
   */
  get duration() {
    return this._duration;
  }

  /**
   * Set the Duration.
   * This field/value is required.
   * @param {Duration} duration - The shr.core.Duration
   */
  set duration(duration) {
    this._duration = duration;
  }

  /**
   * Set the Duration and return 'this' for chaining.
   * This field/value is required.
   * @param {Duration} duration - The shr.core.Duration
   * @returns {RecurrenceInterval} this.
   */
  withDuration(duration) {
    this.duration = duration; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RecurrenceInterval class.
   * The JSON must be valid against the RecurrenceInterval JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecurrenceInterval} An instance of RecurrenceInterval populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RecurrenceInterval();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RecurrenceInterval class to a JSON object.
   * The JSON is expected to be valid against the RecurrenceInterval JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/RecurrenceInterval' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RecurrenceInterval class.
   * The FHIR must be valid against the RecurrenceInterval FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RecurrenceInterval} An instance of RecurrenceInterval populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new RecurrenceInterval();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Duration', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default RecurrenceInterval;

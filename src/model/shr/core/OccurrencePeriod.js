/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import OccurrenceTimeOrPeriod from './OccurrenceTimeOrPeriod';

/**
 * Generated class for shr.core.OccurrencePeriod.
 * @extends OccurrenceTimeOrPeriod
 */
class OccurrencePeriod extends OccurrenceTimeOrPeriod {

  /**
   * Get the value (aliases timePeriod).
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get value() {
    return this._timePeriod;
  }

  /**
   * Set the value (aliases timePeriod).
   * This field/value is required.
   * @param {TimePeriod} value - The shr.core.TimePeriod
   */
  set value(value) {
    this._timePeriod = value;
  }

  /**
   * Set the value (aliases timePeriod) and return 'this' for chaining.
   * This field/value is required.
   * @param {TimePeriod} value - The shr.core.TimePeriod
   * @returns {OccurrencePeriod} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * This field/value is required.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {OccurrencePeriod} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OccurrencePeriod class.
   * The JSON must be valid against the OccurrencePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccurrencePeriod} An instance of OccurrencePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OccurrencePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the OccurrencePeriod class to a JSON object.
   * The JSON is expected to be valid against the OccurrencePeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/OccurrencePeriod' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the OccurrencePeriod class.
   * The FHIR must be valid against the OccurrencePeriod FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {OccurrencePeriod} An instance of OccurrencePeriod populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new OccurrencePeriod();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default OccurrencePeriod;

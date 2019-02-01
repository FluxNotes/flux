import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.TimePeriod.
 */
class TimePeriod {

  /**
   * Get the BeginDateTime.
   * @returns {BeginDateTime} The shr.core.BeginDateTime
   */
  get beginDateTime() {
    return this._beginDateTime;
  }

  /**
   * Set the BeginDateTime.
   * @param {BeginDateTime} beginDateTime - The shr.core.BeginDateTime
   */
  set beginDateTime(beginDateTime) {
    this._beginDateTime = beginDateTime;
  }

  /**
   * Set the BeginDateTime and return 'this' for chaining.
   * @param {BeginDateTime} beginDateTime - The shr.core.BeginDateTime
   * @returns {TimePeriod} this.
   */
  withBeginDateTime(beginDateTime) {
    this.beginDateTime = beginDateTime; return this;
  }

  /**
   * Get the EndDateTime.
   * @returns {EndDateTime} The shr.core.EndDateTime
   */
  get endDateTime() {
    return this._endDateTime;
  }

  /**
   * Set the EndDateTime.
   * @param {EndDateTime} endDateTime - The shr.core.EndDateTime
   */
  set endDateTime(endDateTime) {
    this._endDateTime = endDateTime;
  }

  /**
   * Set the EndDateTime and return 'this' for chaining.
   * @param {EndDateTime} endDateTime - The shr.core.EndDateTime
   * @returns {TimePeriod} this.
   */
  withEndDateTime(endDateTime) {
    this.endDateTime = endDateTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TimePeriod class.
   * The JSON must be valid against the TimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimePeriod} An instance of TimePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the TimePeriod class to a JSON object.
   * The JSON is expected to be valid against the TimePeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/TimePeriod' } };
    if (this.beginDateTime != null) {
      inst['BeginDateTime'] = typeof this.beginDateTime.toJSON === 'function' ? this.beginDateTime.toJSON() : this.beginDateTime;
    }
    if (this.endDateTime != null) {
      inst['EndDateTime'] = typeof this.endDateTime.toJSON === 'function' ? this.endDateTime.toJSON() : this.endDateTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the TimePeriod class.
   * The FHIR must be valid against the TimePeriod FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {TimePeriod} An instance of TimePeriod populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new TimePeriod();
    if (fhir['start'] != null) {
      inst.beginDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.BeginDateTime', fhir['start'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['end'] != null) {
      inst.endDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.EndDateTime', fhir['end'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valuePeriod'];
    }
    return inst;
  }

}
export default TimePeriod;

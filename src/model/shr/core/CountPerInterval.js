import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.core.CountPerInterval.
 */
class CountPerInterval {

  /**
   * Get the MinCount.
   * @returns {MinCount} The shr.core.MinCount
   */
  get minCount() {
    return this._minCount;
  }

  /**
   * Set the MinCount.
   * @param {MinCount} minCount - The shr.core.MinCount
   */
  set minCount(minCount) {
    this._minCount = minCount;
  }

  /**
   * Set the MinCount and return 'this' for chaining.
   * @param {MinCount} minCount - The shr.core.MinCount
   * @returns {CountPerInterval} this.
   */
  withMinCount(minCount) {
    this.minCount = minCount; return this;
  }

  /**
   * Get the MaxCount.
   * @returns {MaxCount} The shr.core.MaxCount
   */
  get maxCount() {
    return this._maxCount;
  }

  /**
   * Set the MaxCount.
   * @param {MaxCount} maxCount - The shr.core.MaxCount
   */
  set maxCount(maxCount) {
    this._maxCount = maxCount;
  }

  /**
   * Set the MaxCount and return 'this' for chaining.
   * @param {MaxCount} maxCount - The shr.core.MaxCount
   * @returns {CountPerInterval} this.
   */
  withMaxCount(maxCount) {
    this.maxCount = maxCount; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CountPerInterval class.
   * The JSON must be valid against the CountPerInterval JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CountPerInterval} An instance of CountPerInterval populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CountPerInterval();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CountPerInterval class to a JSON object.
   * The JSON is expected to be valid against the CountPerInterval JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/CountPerInterval' } };
    if (this.minCount != null) {
      inst['MinCount'] = typeof this.minCount.toJSON === 'function' ? this.minCount.toJSON() : this.minCount;
    }
    if (this.maxCount != null) {
      inst['MaxCount'] = typeof this.maxCount.toJSON === 'function' ? this.maxCount.toJSON() : this.maxCount;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CountPerInterval class.
   * The FHIR must be valid against the CountPerInterval FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CountPerInterval} An instance of CountPerInterval populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new CountPerInterval();
    return inst;
  }

}
export default CountPerInterval;

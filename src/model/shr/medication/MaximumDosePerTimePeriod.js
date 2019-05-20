import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.medication.MaximumDosePerTimePeriod.
 */
class MaximumDosePerTimePeriod {

  /**
   * Get the value (aliases ratio).
   * @returns {Ratio} The shr.core.Ratio
   */
  get value() {
    return this._ratio;
  }

  /**
   * Set the value (aliases ratio).
   * This field/value is required.
   * @param {Ratio} value - The shr.core.Ratio
   */
  set value(value) {
    this._ratio = value;
  }

  /**
   * Set the value (aliases ratio) and return 'this' for chaining.
   * This field/value is required.
   * @param {Ratio} value - The shr.core.Ratio
   * @returns {MaximumDosePerTimePeriod} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Ratio.
   * @returns {Ratio} The shr.core.Ratio
   */
  get ratio() {
    return this._ratio;
  }

  /**
   * Set the Ratio.
   * This field/value is required.
   * @param {Ratio} ratio - The shr.core.Ratio
   */
  set ratio(ratio) {
    this._ratio = ratio;
  }

  /**
   * Set the Ratio and return 'this' for chaining.
   * This field/value is required.
   * @param {Ratio} ratio - The shr.core.Ratio
   * @returns {MaximumDosePerTimePeriod} this.
   */
  withRatio(ratio) {
    this.ratio = ratio; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MaximumDosePerTimePeriod class.
   * The JSON must be valid against the MaximumDosePerTimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MaximumDosePerTimePeriod} An instance of MaximumDosePerTimePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MaximumDosePerTimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MaximumDosePerTimePeriod class to a JSON object.
   * The JSON is expected to be valid against the MaximumDosePerTimePeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MaximumDosePerTimePeriod' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MaximumDosePerTimePeriod class.
   * The FHIR must be valid against the MaximumDosePerTimePeriod FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MaximumDosePerTimePeriod} An instance of MaximumDosePerTimePeriod populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MaximumDosePerTimePeriod();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Ratio', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default MaximumDosePerTimePeriod;

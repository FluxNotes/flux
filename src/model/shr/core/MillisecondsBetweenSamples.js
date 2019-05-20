import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.MillisecondsBetweenSamples.
 */
class MillisecondsBetweenSamples {

  /**
   * Get the value (aliases decimal).
   * @returns {decimal} The decimal
   */
  get value() {
    return this._decimal;
  }

  /**
   * Set the value (aliases decimal).
   * This field/value is required.
   * @param {decimal} value - The decimal
   */
  set value(value) {
    this._decimal = value;
  }

  /**
   * Set the value (aliases decimal) and return 'this' for chaining.
   * This field/value is required.
   * @param {decimal} value - The decimal
   * @returns {MillisecondsBetweenSamples} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the decimal.
   * @returns {decimal} The decimal
   */
  get decimal() {
    return this._decimal;
  }

  /**
   * Set the decimal.
   * This field/value is required.
   * @param {decimal} decimal - The decimal
   */
  set decimal(decimal) {
    this._decimal = decimal;
  }

  /**
   * Set the decimal and return 'this' for chaining.
   * This field/value is required.
   * @param {decimal} decimal - The decimal
   * @returns {MillisecondsBetweenSamples} this.
   */
  withDecimal(decimal) {
    this.decimal = decimal; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MillisecondsBetweenSamples class.
   * The JSON must be valid against the MillisecondsBetweenSamples JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MillisecondsBetweenSamples} An instance of MillisecondsBetweenSamples populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MillisecondsBetweenSamples();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MillisecondsBetweenSamples class to a JSON object.
   * The JSON is expected to be valid against the MillisecondsBetweenSamples JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/MillisecondsBetweenSamples' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MillisecondsBetweenSamples class.
   * The FHIR must be valid against the MillisecondsBetweenSamples FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MillisecondsBetweenSamples} An instance of MillisecondsBetweenSamples populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MillisecondsBetweenSamples();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default MillisecondsBetweenSamples;

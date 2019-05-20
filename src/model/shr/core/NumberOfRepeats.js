import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.NumberOfRepeats.
 */
class NumberOfRepeats {

  /**
   * Get the value (aliases positiveInt).
   * @returns {positiveInt} The positiveInt
   */
  get value() {
    return this._positiveInt;
  }

  /**
   * Set the value (aliases positiveInt).
   * This field/value is required.
   * @param {positiveInt} value - The positiveInt
   */
  set value(value) {
    this._positiveInt = value;
  }

  /**
   * Set the value (aliases positiveInt) and return 'this' for chaining.
   * This field/value is required.
   * @param {positiveInt} value - The positiveInt
   * @returns {NumberOfRepeats} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the positiveInt.
   * @returns {positiveInt} The positiveInt
   */
  get positiveInt() {
    return this._positiveInt;
  }

  /**
   * Set the positiveInt.
   * This field/value is required.
   * @param {positiveInt} positiveInt - The positiveInt
   */
  set positiveInt(positiveInt) {
    this._positiveInt = positiveInt;
  }

  /**
   * Set the positiveInt and return 'this' for chaining.
   * This field/value is required.
   * @param {positiveInt} positiveInt - The positiveInt
   * @returns {NumberOfRepeats} this.
   */
  withPositiveInt(positiveInt) {
    this.positiveInt = positiveInt; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NumberOfRepeats class.
   * The JSON must be valid against the NumberOfRepeats JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfRepeats} An instance of NumberOfRepeats populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NumberOfRepeats();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the NumberOfRepeats class to a JSON object.
   * The JSON is expected to be valid against the NumberOfRepeats JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/NumberOfRepeats' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the NumberOfRepeats class.
   * The FHIR must be valid against the NumberOfRepeats FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {NumberOfRepeats} An instance of NumberOfRepeats populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new NumberOfRepeats();
    if (asExtension) {
      inst.value = fhir['valuePositiveInt'];
    }
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default NumberOfRepeats;

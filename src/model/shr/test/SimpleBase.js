import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.SimpleBase.
 */
class SimpleBase {

  /**
   * Get the value (aliases simple).
   * @returns {Simple} The shr.test.Simple
   */
  get value() {
    return this._simple;
  }

  /**
   * Set the value (aliases simple).
   * This field/value is required.
   * @param {Simple} value - The shr.test.Simple
   */
  set value(value) {
    this._simple = value;
  }

  /**
   * Set the value (aliases simple) and return 'this' for chaining.
   * This field/value is required.
   * @param {Simple} value - The shr.test.Simple
   * @returns {SimpleBase} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Simple.
   * @returns {Simple} The shr.test.Simple
   */
  get simple() {
    return this._simple;
  }

  /**
   * Set the Simple.
   * This field/value is required.
   * @param {Simple} simple - The shr.test.Simple
   */
  set simple(simple) {
    this._simple = simple;
  }

  /**
   * Set the Simple and return 'this' for chaining.
   * This field/value is required.
   * @param {Simple} simple - The shr.test.Simple
   * @returns {SimpleBase} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleBase class.
   * The JSON must be valid against the SimpleBase JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleBase} An instance of SimpleBase populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SimpleBase();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SimpleBase class to a JSON object.
   * The JSON is expected to be valid against the SimpleBase JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/SimpleBase' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SimpleBase class to a FHIR object.
   * The FHIR is expected to be valid against the SimpleBase FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default SimpleBase;

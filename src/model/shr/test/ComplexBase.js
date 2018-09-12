import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.ComplexBase.
 */
class ComplexBase {

  /**
   * Get the value (aliases complex).
   * @returns {Complex} The shr.test.Complex
   */
  get value() {
    return this._complex;
  }

  /**
   * Set the value (aliases complex).
   * This field/value is required.
   * @param {Complex} value - The shr.test.Complex
   */
  set value(value) {
    this._complex = value;
  }

  /**
   * Set the value (aliases complex) and return 'this' for chaining.
   * This field/value is required.
   * @param {Complex} value - The shr.test.Complex
   * @returns {ComplexBase} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Complex.
   * @returns {Complex} The shr.test.Complex
   */
  get complex() {
    return this._complex;
  }

  /**
   * Set the Complex.
   * This field/value is required.
   * @param {Complex} complex - The shr.test.Complex
   */
  set complex(complex) {
    this._complex = complex;
  }

  /**
   * Set the Complex and return 'this' for chaining.
   * This field/value is required.
   * @param {Complex} complex - The shr.test.Complex
   * @returns {ComplexBase} this.
   */
  withComplex(complex) {
    this.complex = complex; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ComplexBase class.
   * The JSON must be valid against the ComplexBase JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ComplexBase} An instance of ComplexBase populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ComplexBase();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ComplexBase class to a JSON object.
   * The JSON is expected to be valid against the ComplexBase JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/ComplexBase' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ComplexBase class to a FHIR object.
   * The FHIR is expected to be valid against the ComplexBase FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default ComplexBase;

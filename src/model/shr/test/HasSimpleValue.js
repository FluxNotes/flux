import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.HasSimpleValue.
 */
class HasSimpleValue {

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
   * @returns {HasSimpleValue} this.
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
   * @returns {HasSimpleValue} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Deserializes JSON data to an instance of the HasSimpleValue class.
   * The JSON must be valid against the HasSimpleValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HasSimpleValue} An instance of HasSimpleValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new HasSimpleValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the HasSimpleValue class to a JSON object.
   * The JSON is expected to be valid against the HasSimpleValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/HasSimpleValue' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the HasSimpleValue class to a FHIR object.
   * The FHIR is expected to be valid against the HasSimpleValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simple.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-test-HasSimpleValue-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default HasSimpleValue;

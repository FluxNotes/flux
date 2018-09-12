import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.IntegerValueElement.
 */
class IntegerValueElement {

  /**
   * Get the value (aliases integer).
   * @returns {integer} The integer
   */
  get value() {
    return this._integer;
  }

  /**
   * Set the value (aliases integer).
   * This field/value is required.
   * @param {integer} value - The integer
   */
  set value(value) {
    this._integer = value;
  }

  /**
   * Set the value (aliases integer) and return 'this' for chaining.
   * This field/value is required.
   * @param {integer} value - The integer
   * @returns {IntegerValueElement} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the integer.
   * @returns {integer} The integer
   */
  get integer() {
    return this._integer;
  }

  /**
   * Set the integer.
   * This field/value is required.
   * @param {integer} integer - The integer
   */
  set integer(integer) {
    this._integer = integer;
  }

  /**
   * Set the integer and return 'this' for chaining.
   * This field/value is required.
   * @param {integer} integer - The integer
   * @returns {IntegerValueElement} this.
   */
  withInteger(integer) {
    this.integer = integer; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IntegerValueElement class.
   * The JSON must be valid against the IntegerValueElement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IntegerValueElement} An instance of IntegerValueElement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new IntegerValueElement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the IntegerValueElement class to a JSON object.
   * The JSON is expected to be valid against the IntegerValueElement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/IntegerValueElement' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the IntegerValueElement class to a FHIR object.
   * The FHIR is expected to be valid against the IntegerValueElement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-simple-IntegerValueElement-extension';
      inst['valueInteger'] = this.value;
    }
    return inst;
  }
}
export default IntegerValueElement;

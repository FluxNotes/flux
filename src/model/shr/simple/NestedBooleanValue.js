import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.NestedBooleanValue.
 */
class NestedBooleanValue {

  /**
   * Get the BooleanValue.
   * @returns {BooleanValue} The shr.simple.BooleanValue
   */
  get booleanValue() {
    return this._booleanValue;
  }

  /**
   * Set the BooleanValue.
   * This field/value is required.
   * @param {BooleanValue} booleanValue - The shr.simple.BooleanValue
   */
  set booleanValue(booleanValue) {
    this._booleanValue = booleanValue;
  }

  /**
   * Set the BooleanValue and return 'this' for chaining.
   * This field/value is required.
   * @param {BooleanValue} booleanValue - The shr.simple.BooleanValue
   * @returns {NestedBooleanValue} this.
   */
  withBooleanValue(booleanValue) {
    this.booleanValue = booleanValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NestedBooleanValue class.
   * The JSON must be valid against the NestedBooleanValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NestedBooleanValue} An instance of NestedBooleanValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new NestedBooleanValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NestedBooleanValue class to a JSON object.
   * The JSON is expected to be valid against the NestedBooleanValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/NestedBooleanValue' } };
    if (this.booleanValue != null) {
      inst['BooleanValue'] = typeof this.booleanValue.toJSON === 'function' ? this.booleanValue.toJSON() : this.booleanValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the NestedBooleanValue class to a FHIR object.
   * The FHIR is expected to be valid against the NestedBooleanValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default NestedBooleanValue;

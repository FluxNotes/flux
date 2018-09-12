import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.DoubleNestedBooleanValue.
 */
class DoubleNestedBooleanValue {

  /**
   * Get the NestedBooleanValue.
   * @returns {NestedBooleanValue} The shr.simple.NestedBooleanValue
   */
  get nestedBooleanValue() {
    return this._nestedBooleanValue;
  }

  /**
   * Set the NestedBooleanValue.
   * This field/value is required.
   * @param {NestedBooleanValue} nestedBooleanValue - The shr.simple.NestedBooleanValue
   */
  set nestedBooleanValue(nestedBooleanValue) {
    this._nestedBooleanValue = nestedBooleanValue;
  }

  /**
   * Set the NestedBooleanValue and return 'this' for chaining.
   * This field/value is required.
   * @param {NestedBooleanValue} nestedBooleanValue - The shr.simple.NestedBooleanValue
   * @returns {DoubleNestedBooleanValue} this.
   */
  withNestedBooleanValue(nestedBooleanValue) {
    this.nestedBooleanValue = nestedBooleanValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DoubleNestedBooleanValue class.
   * The JSON must be valid against the DoubleNestedBooleanValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DoubleNestedBooleanValue} An instance of DoubleNestedBooleanValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new DoubleNestedBooleanValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DoubleNestedBooleanValue class to a JSON object.
   * The JSON is expected to be valid against the DoubleNestedBooleanValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/DoubleNestedBooleanValue' } };
    if (this.nestedBooleanValue != null) {
      inst['NestedBooleanValue'] = typeof this.nestedBooleanValue.toJSON === 'function' ? this.nestedBooleanValue.toJSON() : this.nestedBooleanValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the DoubleNestedBooleanValue class to a FHIR object.
   * The FHIR is expected to be valid against the DoubleNestedBooleanValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default DoubleNestedBooleanValue;

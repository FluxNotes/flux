import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.BinaryData.
 */
class BinaryData {

  /**
   * Get the value (aliases base64Binary).
   * @returns {base64Binary} The base64Binary
   */
  get value() {
    return this._base64Binary;
  }

  /**
   * Set the value (aliases base64Binary).
   * This field/value is required.
   * @param {base64Binary} value - The base64Binary
   */
  set value(value) {
    this._base64Binary = value;
  }

  /**
   * Set the value (aliases base64Binary) and return 'this' for chaining.
   * This field/value is required.
   * @param {base64Binary} value - The base64Binary
   * @returns {BinaryData} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the base64Binary.
   * @returns {base64Binary} The base64Binary
   */
  get base64Binary() {
    return this._base64Binary;
  }

  /**
   * Set the base64Binary.
   * This field/value is required.
   * @param {base64Binary} base64Binary - The base64Binary
   */
  set base64Binary(base64Binary) {
    this._base64Binary = base64Binary;
  }

  /**
   * Set the base64Binary and return 'this' for chaining.
   * This field/value is required.
   * @param {base64Binary} base64Binary - The base64Binary
   * @returns {BinaryData} this.
   */
  withBase64Binary(base64Binary) {
    this.base64Binary = base64Binary; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BinaryData class.
   * The JSON must be valid against the BinaryData JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BinaryData} An instance of BinaryData populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BinaryData();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BinaryData class to a JSON object.
   * The JSON is expected to be valid against the BinaryData JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/BinaryData' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default BinaryData;

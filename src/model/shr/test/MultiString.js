import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.MultiString.
 */
class MultiString {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {MultiString} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases string) array.
   * @returns {Array<string>} The string array
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string) array.
   * This field/value is required.
   * @param {Array<string>} value - The string array
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<string>} value - The string array
   * @returns {MultiString} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string array.
   * @returns {Array<string>} The string array
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string array.
   * This field/value is required.
   * @param {Array<string>} string - The string array
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<string>} string - The string array
   * @returns {MultiString} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MultiString class.
   * The JSON must be valid against the MultiString JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MultiString} An instance of MultiString populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MultiString();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MultiString class to a JSON object.
   * The JSON is expected to be valid against the MultiString JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/MultiString' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MultiString class to a FHIR object.
   * The FHIR is expected to be valid against the MultiString FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default MultiString;

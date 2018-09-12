import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.ElementValueEntry.
 */
class ElementValueEntry {

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
   * @returns {ElementValueEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases stringValue).
   * @returns {StringValue} The shr.simple.StringValue
   */
  get value() {
    return this._stringValue;
  }

  /**
   * Set the value (aliases stringValue).
   * This field/value is required.
   * @param {StringValue} value - The shr.simple.StringValue
   */
  set value(value) {
    this._stringValue = value;
  }

  /**
   * Set the value (aliases stringValue) and return 'this' for chaining.
   * This field/value is required.
   * @param {StringValue} value - The shr.simple.StringValue
   * @returns {ElementValueEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the StringValue.
   * @returns {StringValue} The shr.simple.StringValue
   */
  get stringValue() {
    return this._stringValue;
  }

  /**
   * Set the StringValue.
   * This field/value is required.
   * @param {StringValue} stringValue - The shr.simple.StringValue
   */
  set stringValue(stringValue) {
    this._stringValue = stringValue;
  }

  /**
   * Set the StringValue and return 'this' for chaining.
   * This field/value is required.
   * @param {StringValue} stringValue - The shr.simple.StringValue
   * @returns {ElementValueEntry} this.
   */
  withStringValue(stringValue) {
    this.stringValue = stringValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ElementValueEntry class.
   * The JSON must be valid against the ElementValueEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ElementValueEntry} An instance of ElementValueEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ElementValueEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ElementValueEntry class to a JSON object.
   * The JSON is expected to be valid against the ElementValueEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/ElementValueEntry' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ElementValueEntry class to a FHIR object.
   * The FHIR is expected to be valid against the ElementValueEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default ElementValueEntry;

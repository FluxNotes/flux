import { setPropertiesFromJSON } from '../../json-helper';

import IntegerValueElement from './IntegerValueElement';

/**
 * Generated class for shr.simple.BasedOnIntegerValueElementEntry.
 * @extends IntegerValueElement
 */
class BasedOnIntegerValueElementEntry extends IntegerValueElement {

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
   * @returns {BasedOnIntegerValueElementEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {BasedOnIntegerValueElementEntry} this.
   */
  withStringValue(stringValue) {
    this.stringValue = stringValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BasedOnIntegerValueElementEntry class.
   * The JSON must be valid against the BasedOnIntegerValueElementEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BasedOnIntegerValueElementEntry} An instance of BasedOnIntegerValueElementEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BasedOnIntegerValueElementEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BasedOnIntegerValueElementEntry class to a JSON object.
   * The JSON is expected to be valid against the BasedOnIntegerValueElementEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/BasedOnIntegerValueElementEntry' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.stringValue != null) {
      inst['StringValue'] = typeof this.stringValue.toJSON === 'function' ? this.stringValue.toJSON() : this.stringValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BasedOnIntegerValueElementEntry class to a FHIR object.
   * The FHIR is expected to be valid against the BasedOnIntegerValueElementEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.stringValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.stringValue.toFHIR(true));
    }
    return inst;
  }
}
export default BasedOnIntegerValueElementEntry;

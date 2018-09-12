import { setPropertiesFromJSON } from '../../json-helper';

import BasedOnIntegerValueElementEntry from './BasedOnIntegerValueElementEntry';

/**
 * Generated class for shr.simple.OverrideBasedOnIntegerValueElementEntry.
 * @extends BasedOnIntegerValueElementEntry
 */
class OverrideBasedOnIntegerValueElementEntry extends BasedOnIntegerValueElementEntry {

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
   * @returns {OverrideBasedOnIntegerValueElementEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the StringValueChild.
   * @returns {StringValueChild} The shr.simple.StringValueChild
   */
  get stringValue() {
    return this._stringValue;
  }

  /**
   * Set the StringValueChild.
   * This field/value is required.
   * @param {StringValueChild} stringValue - The shr.simple.StringValueChild
   */
  set stringValue(stringValue) {
    this._stringValue = stringValue;
  }

  /**
   * Set the StringValueChild and return 'this' for chaining.
   * This field/value is required.
   * @param {StringValueChild} stringValue - The shr.simple.StringValueChild
   * @returns {OverrideBasedOnIntegerValueElementEntry} this.
   */
  withStringValue(stringValue) {
    this.stringValue = stringValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OverrideBasedOnIntegerValueElementEntry class.
   * The JSON must be valid against the OverrideBasedOnIntegerValueElementEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OverrideBasedOnIntegerValueElementEntry} An instance of OverrideBasedOnIntegerValueElementEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OverrideBasedOnIntegerValueElementEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OverrideBasedOnIntegerValueElementEntry class to a JSON object.
   * The JSON is expected to be valid against the OverrideBasedOnIntegerValueElementEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/OverrideBasedOnIntegerValueElementEntry' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.stringValue != null) {
      inst['StringValue'] = typeof this.stringValue.toJSON === 'function' ? this.stringValue.toJSON() : this.stringValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the OverrideBasedOnIntegerValueElementEntry class to a FHIR object.
   * The FHIR is expected to be valid against the OverrideBasedOnIntegerValueElementEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default OverrideBasedOnIntegerValueElementEntry;

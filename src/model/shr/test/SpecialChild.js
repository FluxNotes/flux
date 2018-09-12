import { setPropertiesFromJSON } from '../../json-helper';

import SpecialParent from './SpecialParent';

/**
 * Generated class for shr.test.SpecialChild.
 * @extends SpecialParent
 */
class SpecialChild extends SpecialParent {

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
   * @returns {SpecialChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {SpecialChild} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {SpecialChild} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Get the _Entry.
   * @returns {_Entry} The _Entry
   */
  get _Entry() {
    return this.__Entry;
  }

  /**
   * Set the _Entry.
   * This field/value is required.
   * @param {_Entry} _Entry - The _Entry
   */
  set _Entry(_Entry) {
    this.__Entry = _Entry;
  }

  /**
   * Set the _Entry and return 'this' for chaining.
   * This field/value is required.
   * @param {_Entry} _Entry - The _Entry
   * @returns {SpecialChild} this.
   */
  with_Entry(_Entry) {
    this._Entry = _Entry; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecialChild class.
   * The JSON must be valid against the SpecialChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecialChild} An instance of SpecialChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SpecialChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecialChild class to a JSON object.
   * The JSON is expected to be valid against the SpecialChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/SpecialChild' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this._Entry != null) {
      inst['_Entry'] = typeof this._Entry.toJSON === 'function' ? this._Entry.toJSON() : this._Entry;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SpecialChild class to a FHIR object.
   * The FHIR is expected to be valid against the SpecialChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this._Entry != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this._Entry.toFHIR(true));
    }
    return inst;
  }
}
export default SpecialChild;

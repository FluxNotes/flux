import { setPropertiesFromJSON } from '../../json-helper';

import BasedOnIntegerValueElementEntry from './BasedOnIntegerValueElementEntry';

/**
 * Generated class for shr.simple.InheritBasedOnIntegerValueElementEntry.
 * @extends BasedOnIntegerValueElementEntry
 */
class InheritBasedOnIntegerValueElementEntry extends BasedOnIntegerValueElementEntry {

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
   * @returns {InheritBasedOnIntegerValueElementEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Deserializes JSON data to an instance of the InheritBasedOnIntegerValueElementEntry class.
   * The JSON must be valid against the InheritBasedOnIntegerValueElementEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {InheritBasedOnIntegerValueElementEntry} An instance of InheritBasedOnIntegerValueElementEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new InheritBasedOnIntegerValueElementEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the InheritBasedOnIntegerValueElementEntry class to a JSON object.
   * The JSON is expected to be valid against the InheritBasedOnIntegerValueElementEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/InheritBasedOnIntegerValueElementEntry' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.stringValue != null) {
      inst['StringValue'] = typeof this.stringValue.toJSON === 'function' ? this.stringValue.toJSON() : this.stringValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the InheritBasedOnIntegerValueElementEntry class to a FHIR object.
   * The FHIR is expected to be valid against the InheritBasedOnIntegerValueElementEntry FHIR profile, but no validation checks are performed.
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
export default InheritBasedOnIntegerValueElementEntry;

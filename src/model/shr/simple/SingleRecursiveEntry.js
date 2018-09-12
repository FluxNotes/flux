import { setPropertiesFromJSON } from '../../json-helper';

import RecursiveEntry from './RecursiveEntry';

/**
 * Generated class for shr.simple.SingleRecursiveEntry.
 * @extends RecursiveEntry
 */
class SingleRecursiveEntry extends RecursiveEntry {

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
   * @returns {SingleRecursiveEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the RecursiveEntry array.
   * @returns {Array<RecursiveEntry>} The shr.simple.RecursiveEntry array
   */
  get recursiveEntry() {
    return this._recursiveEntry;
  }

  /**
   * Set the RecursiveEntry array.
   * @param {Array<RecursiveEntry>} recursiveEntry - The shr.simple.RecursiveEntry array
   */
  set recursiveEntry(recursiveEntry) {
    this._recursiveEntry = recursiveEntry;
  }

  /**
   * Set the RecursiveEntry array and return 'this' for chaining.
   * @param {Array<RecursiveEntry>} recursiveEntry - The shr.simple.RecursiveEntry array
   * @returns {SingleRecursiveEntry} this.
   */
  withRecursiveEntry(recursiveEntry) {
    this.recursiveEntry = recursiveEntry; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SingleRecursiveEntry class.
   * The JSON must be valid against the SingleRecursiveEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SingleRecursiveEntry} An instance of SingleRecursiveEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SingleRecursiveEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SingleRecursiveEntry class to a JSON object.
   * The JSON is expected to be valid against the SingleRecursiveEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/SingleRecursiveEntry' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.recursiveEntry != null) {
      inst['RecursiveEntry'] = this.recursiveEntry.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SingleRecursiveEntry class to a FHIR object.
   * The FHIR is expected to be valid against the SingleRecursiveEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.recursiveEntry != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.recursiveEntry.toFHIR(true));
    }
    return inst;
  }
}
export default SingleRecursiveEntry;

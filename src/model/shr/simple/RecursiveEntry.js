import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.RecursiveEntry.
 */
class RecursiveEntry {

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
   * @returns {RecursiveEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases integer).
   * @returns {integer} The integer
   */
  get value() {
    return this._integer;
  }

  /**
   * Set the value (aliases integer).
   * This field/value is required.
   * @param {integer} value - The integer
   */
  set value(value) {
    this._integer = value;
  }

  /**
   * Set the value (aliases integer) and return 'this' for chaining.
   * This field/value is required.
   * @param {integer} value - The integer
   * @returns {RecursiveEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the integer.
   * @returns {integer} The integer
   */
  get integer() {
    return this._integer;
  }

  /**
   * Set the integer.
   * This field/value is required.
   * @param {integer} integer - The integer
   */
  set integer(integer) {
    this._integer = integer;
  }

  /**
   * Set the integer and return 'this' for chaining.
   * This field/value is required.
   * @param {integer} integer - The integer
   * @returns {RecursiveEntry} this.
   */
  withInteger(integer) {
    this.integer = integer; return this;
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
   * @returns {RecursiveEntry} this.
   */
  withRecursiveEntry(recursiveEntry) {
    this.recursiveEntry = recursiveEntry; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RecursiveEntry class.
   * The JSON must be valid against the RecursiveEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecursiveEntry} An instance of RecursiveEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new RecursiveEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the RecursiveEntry class to a JSON object.
   * The JSON is expected to be valid against the RecursiveEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/RecursiveEntry' };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.recursiveEntry != null) {
      inst['RecursiveEntry'] = this.recursiveEntry.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the RecursiveEntry class to a FHIR object.
   * The FHIR is expected to be valid against the RecursiveEntry FHIR profile, but no validation checks are performed.
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
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-simple-RecursiveEntry-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default RecursiveEntry;

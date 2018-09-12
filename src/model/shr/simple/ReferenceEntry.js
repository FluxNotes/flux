import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.ReferenceEntry.
 */
class ReferenceEntry {

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
   * @returns {ReferenceEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases stringValueEntry).
   * @returns {Reference} The shr.simple.StringValueEntry reference
   */
  get value() {
    return this._stringValueEntry;
  }

  /**
   * Set the value (aliases stringValueEntry).
   * This field/value is required.
   * @param {Reference} value - The shr.simple.StringValueEntry reference
   */
  set value(value) {
    this._stringValueEntry = value;
  }

  /**
   * Set the value (aliases stringValueEntry) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.simple.StringValueEntry reference
   * @returns {ReferenceEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.simple.StringValueEntry reference.
   * @returns {Reference} The shr.simple.StringValueEntry reference
   */
  get stringValueEntry() {
    return this._stringValueEntry;
  }

  /**
   * Set the shr.simple.StringValueEntry reference.
   * This field/value is required.
   * @param {Reference} stringValueEntry - The shr.simple.StringValueEntry reference
   */
  set stringValueEntry(stringValueEntry) {
    this._stringValueEntry = stringValueEntry;
  }

  /**
   * Set the shr.simple.StringValueEntry reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} stringValueEntry - The shr.simple.StringValueEntry reference
   * @returns {ReferenceEntry} this.
   */
  withStringValueEntry(stringValueEntry) {
    this.stringValueEntry = stringValueEntry; return this;
  }

  /**
   * Get the shr.simple.CodeValueEntry reference array.
   * @returns {Array<Reference>} The shr.simple.CodeValueEntry reference array
   */
  get codeValueEntry() {
    return this._codeValueEntry;
  }

  /**
   * Set the shr.simple.CodeValueEntry reference array.
   * @param {Array<Reference>} codeValueEntry - The shr.simple.CodeValueEntry reference array
   */
  set codeValueEntry(codeValueEntry) {
    this._codeValueEntry = codeValueEntry;
  }

  /**
   * Set the shr.simple.CodeValueEntry reference array and return 'this' for chaining.
   * @param {Array<Reference>} codeValueEntry - The shr.simple.CodeValueEntry reference array
   * @returns {ReferenceEntry} this.
   */
  withCodeValueEntry(codeValueEntry) {
    this.codeValueEntry = codeValueEntry; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ReferenceEntry class.
   * The JSON must be valid against the ReferenceEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReferenceEntry} An instance of ReferenceEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ReferenceEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ReferenceEntry class to a JSON object.
   * The JSON is expected to be valid against the ReferenceEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/ReferenceEntry' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.codeValueEntry != null) {
      inst['CodeValueEntry'] = this.codeValueEntry.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ReferenceEntry class to a FHIR object.
   * The FHIR is expected to be valid against the ReferenceEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.codeValueEntry != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codeValueEntry.toFHIR(true));
    }
    return inst;
  }
}
export default ReferenceEntry;

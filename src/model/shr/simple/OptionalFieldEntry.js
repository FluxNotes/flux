import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.OptionalFieldEntry.
 */
class OptionalFieldEntry {

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
   * @returns {OptionalFieldEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the IntegerValueElement.
   * @returns {IntegerValueElement} The shr.simple.IntegerValueElement
   */
  get integerValueElement() {
    return this._integerValueElement;
  }

  /**
   * Set the IntegerValueElement.
   * @param {IntegerValueElement} integerValueElement - The shr.simple.IntegerValueElement
   */
  set integerValueElement(integerValueElement) {
    this._integerValueElement = integerValueElement;
  }

  /**
   * Set the IntegerValueElement and return 'this' for chaining.
   * @param {IntegerValueElement} integerValueElement - The shr.simple.IntegerValueElement
   * @returns {OptionalFieldEntry} this.
   */
  withIntegerValueElement(integerValueElement) {
    this.integerValueElement = integerValueElement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OptionalFieldEntry class.
   * The JSON must be valid against the OptionalFieldEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OptionalFieldEntry} An instance of OptionalFieldEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OptionalFieldEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OptionalFieldEntry class to a JSON object.
   * The JSON is expected to be valid against the OptionalFieldEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/OptionalFieldEntry' };
    if (this.integerValueElement != null) {
      inst['IntegerValueElement'] = typeof this.integerValueElement.toJSON === 'function' ? this.integerValueElement.toJSON() : this.integerValueElement;
    }
    return inst;
  }
  /**
   * Serializes an instance of the OptionalFieldEntry class to a FHIR object.
   * The FHIR is expected to be valid against the OptionalFieldEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.integerValueElement != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.integerValueElement.toFHIR(true));
    }
    return inst;
  }
}
export default OptionalFieldEntry;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.OptionalElementValueEntry.
 */
class OptionalElementValueEntry {

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
   * @returns {OptionalElementValueEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases integerValueElement).
   * @returns {IntegerValueElement} The shr.simple.IntegerValueElement
   */
  get value() {
    return this._integerValueElement;
  }

  /**
   * Set the value (aliases integerValueElement).
   * @param {IntegerValueElement} value - The shr.simple.IntegerValueElement
   */
  set value(value) {
    this._integerValueElement = value;
  }

  /**
   * Set the value (aliases integerValueElement) and return 'this' for chaining.
   * @param {IntegerValueElement} value - The shr.simple.IntegerValueElement
   * @returns {OptionalElementValueEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * @returns {OptionalElementValueEntry} this.
   */
  withIntegerValueElement(integerValueElement) {
    this.integerValueElement = integerValueElement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OptionalElementValueEntry class.
   * The JSON must be valid against the OptionalElementValueEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OptionalElementValueEntry} An instance of OptionalElementValueEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OptionalElementValueEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OptionalElementValueEntry class to a JSON object.
   * The JSON is expected to be valid against the OptionalElementValueEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/OptionalElementValueEntry' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the OptionalElementValueEntry class to a FHIR object.
   * The FHIR is expected to be valid against the OptionalElementValueEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default OptionalElementValueEntry;

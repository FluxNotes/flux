import { setPropertiesFromJSON } from '../../../json-helper';

/**
 * Generated class for shr.test.one.One.
 */
class One {

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
   * @returns {One} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases two).
   * @returns {Two} The shr.test.two.Two
   */
  get value() {
    return this._two;
  }

  /**
   * Set the value (aliases two).
   * This field/value is required.
   * @param {Two} value - The shr.test.two.Two
   */
  set value(value) {
    this._two = value;
  }

  /**
   * Set the value (aliases two) and return 'this' for chaining.
   * This field/value is required.
   * @param {Two} value - The shr.test.two.Two
   * @returns {One} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Two.
   * @returns {Two} The shr.test.two.Two
   */
  get two() {
    return this._two;
  }

  /**
   * Set the Two.
   * This field/value is required.
   * @param {Two} two - The shr.test.two.Two
   */
  set two(two) {
    this._two = two;
  }

  /**
   * Set the Two and return 'this' for chaining.
   * This field/value is required.
   * @param {Two} two - The shr.test.two.Two
   * @returns {One} this.
   */
  withTwo(two) {
    this.two = two; return this;
  }

  /**
   * Deserializes JSON data to an instance of the One class.
   * The JSON must be valid against the One JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {One} An instance of One populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new One();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the One class to a JSON object.
   * The JSON is expected to be valid against the One JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test.one/One' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the One class to a FHIR object.
   * The FHIR is expected to be valid against the One FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default One;

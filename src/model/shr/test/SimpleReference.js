import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.SimpleReference.
 */
class SimpleReference {

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
   * @returns {SimpleReference} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases simple).
   * @returns {Reference} The shr.test.Simple reference
   */
  get value() {
    return this._simple;
  }

  /**
   * Set the value (aliases simple).
   * This field/value is required.
   * @param {Reference} value - The shr.test.Simple reference
   */
  set value(value) {
    this._simple = value;
  }

  /**
   * Set the value (aliases simple) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.test.Simple reference
   * @returns {SimpleReference} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.test.Simple reference.
   * @returns {Reference} The shr.test.Simple reference
   */
  get simple() {
    return this._simple;
  }

  /**
   * Set the shr.test.Simple reference.
   * This field/value is required.
   * @param {Reference} simple - The shr.test.Simple reference
   */
  set simple(simple) {
    this._simple = simple;
  }

  /**
   * Set the shr.test.Simple reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} simple - The shr.test.Simple reference
   * @returns {SimpleReference} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleReference class.
   * The JSON must be valid against the SimpleReference JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleReference} An instance of SimpleReference populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SimpleReference();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SimpleReference class to a JSON object.
   * The JSON is expected to be valid against the SimpleReference JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/SimpleReference' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SimpleReference class to a FHIR object.
   * The FHIR is expected to be valid against the SimpleReference FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default SimpleReference;

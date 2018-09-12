import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.VSConstraintOnValueChild.
 */
class VSConstraintOnValueChild {

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
   * @returns {VSConstraintOnValueChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases complex).
   * @returns {Complex} The shr.test.Complex
   */
  get value() {
    return this._complex;
  }

  /**
   * Set the value (aliases complex).
   * This field/value is required.
   * @param {Complex} value - The shr.test.Complex
   */
  set value(value) {
    this._complex = value;
  }

  /**
   * Set the value (aliases complex) and return 'this' for chaining.
   * This field/value is required.
   * @param {Complex} value - The shr.test.Complex
   * @returns {VSConstraintOnValueChild} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Complex.
   * @returns {Complex} The shr.test.Complex
   */
  get complex() {
    return this._complex;
  }

  /**
   * Set the Complex.
   * This field/value is required.
   * @param {Complex} complex - The shr.test.Complex
   */
  set complex(complex) {
    this._complex = complex;
  }

  /**
   * Set the Complex and return 'this' for chaining.
   * This field/value is required.
   * @param {Complex} complex - The shr.test.Complex
   * @returns {VSConstraintOnValueChild} this.
   */
  withComplex(complex) {
    this.complex = complex; return this;
  }

  /**
   * Deserializes JSON data to an instance of the VSConstraintOnValueChild class.
   * The JSON must be valid against the VSConstraintOnValueChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {VSConstraintOnValueChild} An instance of VSConstraintOnValueChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new VSConstraintOnValueChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the VSConstraintOnValueChild class to a JSON object.
   * The JSON is expected to be valid against the VSConstraintOnValueChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/VSConstraintOnValueChild' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the VSConstraintOnValueChild class to a FHIR object.
   * The FHIR is expected to be valid against the VSConstraintOnValueChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default VSConstraintOnValueChild;

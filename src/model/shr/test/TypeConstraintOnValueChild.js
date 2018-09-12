import { setPropertiesFromJSON } from '../../json-helper';

import ComplexBase from './ComplexBase';

/**
 * Generated class for shr.test.TypeConstraintOnValueChild.
 * @extends ComplexBase
 */
class TypeConstraintOnValueChild extends ComplexBase {

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
   * @returns {TypeConstraintOnValueChild} this.
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
   * @returns {TypeConstraintOnValueChild} this.
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
   * @returns {TypeConstraintOnValueChild} this.
   */
  withComplex(complex) {
    this.complex = complex; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TypeConstraintOnValueChild class.
   * The JSON must be valid against the TypeConstraintOnValueChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TypeConstraintOnValueChild} An instance of TypeConstraintOnValueChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new TypeConstraintOnValueChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnValueChild class to a JSON object.
   * The JSON is expected to be valid against the TypeConstraintOnValueChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/TypeConstraintOnValueChild' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnValueChild class to a FHIR object.
   * The FHIR is expected to be valid against the TypeConstraintOnValueChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default TypeConstraintOnValueChild;

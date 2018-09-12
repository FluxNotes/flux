import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.VSConstraintOnValue.
 */
class VSConstraintOnValue {

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
   * @returns {VSConstraintOnValue} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codedFromValueSet).
   * @returns {CodedFromValueSet} The shr.test.CodedFromValueSet
   */
  get value() {
    return this._codedFromValueSet;
  }

  /**
   * Set the value (aliases codedFromValueSet).
   * This field/value is required.
   * @param {CodedFromValueSet} value - The shr.test.CodedFromValueSet
   */
  set value(value) {
    this._codedFromValueSet = value;
  }

  /**
   * Set the value (aliases codedFromValueSet) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodedFromValueSet} value - The shr.test.CodedFromValueSet
   * @returns {VSConstraintOnValue} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodedFromValueSet.
   * @returns {CodedFromValueSet} The shr.test.CodedFromValueSet
   */
  get codedFromValueSet() {
    return this._codedFromValueSet;
  }

  /**
   * Set the CodedFromValueSet.
   * This field/value is required.
   * @param {CodedFromValueSet} codedFromValueSet - The shr.test.CodedFromValueSet
   */
  set codedFromValueSet(codedFromValueSet) {
    this._codedFromValueSet = codedFromValueSet;
  }

  /**
   * Set the CodedFromValueSet and return 'this' for chaining.
   * This field/value is required.
   * @param {CodedFromValueSet} codedFromValueSet - The shr.test.CodedFromValueSet
   * @returns {VSConstraintOnValue} this.
   */
  withCodedFromValueSet(codedFromValueSet) {
    this.codedFromValueSet = codedFromValueSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the VSConstraintOnValue class.
   * The JSON must be valid against the VSConstraintOnValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {VSConstraintOnValue} An instance of VSConstraintOnValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new VSConstraintOnValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the VSConstraintOnValue class to a JSON object.
   * The JSON is expected to be valid against the VSConstraintOnValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/VSConstraintOnValue' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the VSConstraintOnValue class to a FHIR object.
   * The FHIR is expected to be valid against the VSConstraintOnValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default VSConstraintOnValue;

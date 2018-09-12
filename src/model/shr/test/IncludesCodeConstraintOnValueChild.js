import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.IncludesCodeConstraintOnValueChild.
 */
class IncludesCodeConstraintOnValueChild {

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
   * @returns {IncludesCodeConstraintOnValueChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases multiCodedFromValueSet).
   * @returns {MultiCodedFromValueSet} The shr.test.MultiCodedFromValueSet
   */
  get value() {
    return this._multiCodedFromValueSet;
  }

  /**
   * Set the value (aliases multiCodedFromValueSet).
   * This field/value is required.
   * @param {MultiCodedFromValueSet} value - The shr.test.MultiCodedFromValueSet
   */
  set value(value) {
    this._multiCodedFromValueSet = value;
  }

  /**
   * Set the value (aliases multiCodedFromValueSet) and return 'this' for chaining.
   * This field/value is required.
   * @param {MultiCodedFromValueSet} value - The shr.test.MultiCodedFromValueSet
   * @returns {IncludesCodeConstraintOnValueChild} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the MultiCodedFromValueSet.
   * @returns {MultiCodedFromValueSet} The shr.test.MultiCodedFromValueSet
   */
  get multiCodedFromValueSet() {
    return this._multiCodedFromValueSet;
  }

  /**
   * Set the MultiCodedFromValueSet.
   * This field/value is required.
   * @param {MultiCodedFromValueSet} multiCodedFromValueSet - The shr.test.MultiCodedFromValueSet
   */
  set multiCodedFromValueSet(multiCodedFromValueSet) {
    this._multiCodedFromValueSet = multiCodedFromValueSet;
  }

  /**
   * Set the MultiCodedFromValueSet and return 'this' for chaining.
   * This field/value is required.
   * @param {MultiCodedFromValueSet} multiCodedFromValueSet - The shr.test.MultiCodedFromValueSet
   * @returns {IncludesCodeConstraintOnValueChild} this.
   */
  withMultiCodedFromValueSet(multiCodedFromValueSet) {
    this.multiCodedFromValueSet = multiCodedFromValueSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IncludesCodeConstraintOnValueChild class.
   * The JSON must be valid against the IncludesCodeConstraintOnValueChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IncludesCodeConstraintOnValueChild} An instance of IncludesCodeConstraintOnValueChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new IncludesCodeConstraintOnValueChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnValueChild class to a JSON object.
   * The JSON is expected to be valid against the IncludesCodeConstraintOnValueChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/IncludesCodeConstraintOnValueChild' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnValueChild class to a FHIR object.
   * The FHIR is expected to be valid against the IncludesCodeConstraintOnValueChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default IncludesCodeConstraintOnValueChild;

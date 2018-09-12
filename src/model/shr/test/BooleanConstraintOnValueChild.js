import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.BooleanConstraintOnValueChild.
 */
class BooleanConstraintOnValueChild {

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
   * @returns {BooleanConstraintOnValueChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases simpleBoolean).
   * @returns {SimpleBoolean} The shr.test.SimpleBoolean
   */
  get value() {
    return this._simpleBoolean;
  }

  /**
   * Set the value (aliases simpleBoolean).
   * This field/value is required.
   * @param {SimpleBoolean} value - The shr.test.SimpleBoolean
   */
  set value(value) {
    this._simpleBoolean = value;
  }

  /**
   * Set the value (aliases simpleBoolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleBoolean} value - The shr.test.SimpleBoolean
   * @returns {BooleanConstraintOnValueChild} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the SimpleBoolean.
   * @returns {SimpleBoolean} The shr.test.SimpleBoolean
   */
  get simpleBoolean() {
    return this._simpleBoolean;
  }

  /**
   * Set the SimpleBoolean.
   * This field/value is required.
   * @param {SimpleBoolean} simpleBoolean - The shr.test.SimpleBoolean
   */
  set simpleBoolean(simpleBoolean) {
    this._simpleBoolean = simpleBoolean;
  }

  /**
   * Set the SimpleBoolean and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleBoolean} simpleBoolean - The shr.test.SimpleBoolean
   * @returns {BooleanConstraintOnValueChild} this.
   */
  withSimpleBoolean(simpleBoolean) {
    this.simpleBoolean = simpleBoolean; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BooleanConstraintOnValueChild class.
   * The JSON must be valid against the BooleanConstraintOnValueChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BooleanConstraintOnValueChild} An instance of BooleanConstraintOnValueChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BooleanConstraintOnValueChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BooleanConstraintOnValueChild class to a JSON object.
   * The JSON is expected to be valid against the BooleanConstraintOnValueChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/BooleanConstraintOnValueChild' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BooleanConstraintOnValueChild class to a FHIR object.
   * The FHIR is expected to be valid against the BooleanConstraintOnValueChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default BooleanConstraintOnValueChild;

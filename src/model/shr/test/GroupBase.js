import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.GroupBase.
 */
class GroupBase {

  /**
   * Get the Simple.
   * @returns {Simple} The shr.test.Simple
   */
  get simple() {
    return this._simple;
  }

  /**
   * Set the Simple.
   * @param {Simple} simple - The shr.test.Simple
   */
  set simple(simple) {
    this._simple = simple;
  }

  /**
   * Set the Simple and return 'this' for chaining.
   * @param {Simple} simple - The shr.test.Simple
   * @returns {GroupBase} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
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
   * @param {CodedFromValueSet} codedFromValueSet - The shr.test.CodedFromValueSet
   */
  set codedFromValueSet(codedFromValueSet) {
    this._codedFromValueSet = codedFromValueSet;
  }

  /**
   * Set the CodedFromValueSet and return 'this' for chaining.
   * @param {CodedFromValueSet} codedFromValueSet - The shr.test.CodedFromValueSet
   * @returns {GroupBase} this.
   */
  withCodedFromValueSet(codedFromValueSet) {
    this.codedFromValueSet = codedFromValueSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GroupBase class.
   * The JSON must be valid against the GroupBase JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GroupBase} An instance of GroupBase populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new GroupBase();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GroupBase class to a JSON object.
   * The JSON is expected to be valid against the GroupBase JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/GroupBase' } };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.codedFromValueSet != null) {
      inst['CodedFromValueSet'] = typeof this.codedFromValueSet.toJSON === 'function' ? this.codedFromValueSet.toJSON() : this.codedFromValueSet;
    }
    return inst;
  }
  /**
   * Serializes an instance of the GroupBase class to a FHIR object.
   * The FHIR is expected to be valid against the GroupBase FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.simple != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simple.toFHIR(true));
    }
    if (this.codedFromValueSet != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codedFromValueSet.toFHIR(true));
    }
    return inst;
  }
}
export default GroupBase;

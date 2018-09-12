import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.Group2.
 */
class Group2 {

  /**
   * Get the HasSimpleValue.
   * @returns {HasSimpleValue} The shr.test.HasSimpleValue
   */
  get hasSimpleValue() {
    return this._hasSimpleValue;
  }

  /**
   * Set the HasSimpleValue.
   * @param {HasSimpleValue} hasSimpleValue - The shr.test.HasSimpleValue
   */
  set hasSimpleValue(hasSimpleValue) {
    this._hasSimpleValue = hasSimpleValue;
  }

  /**
   * Set the HasSimpleValue and return 'this' for chaining.
   * @param {HasSimpleValue} hasSimpleValue - The shr.test.HasSimpleValue
   * @returns {Group2} this.
   */
  withHasSimpleValue(hasSimpleValue) {
    this.hasSimpleValue = hasSimpleValue; return this;
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
   * @returns {Group2} this.
   */
  withCodedFromValueSet(codedFromValueSet) {
    this.codedFromValueSet = codedFromValueSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Group2 class.
   * The JSON must be valid against the Group2 JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Group2} An instance of Group2 populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Group2();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Group2 class to a JSON object.
   * The JSON is expected to be valid against the Group2 JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/Group2' } };
    if (this.hasSimpleValue != null) {
      inst['HasSimpleValue'] = typeof this.hasSimpleValue.toJSON === 'function' ? this.hasSimpleValue.toJSON() : this.hasSimpleValue;
    }
    if (this.codedFromValueSet != null) {
      inst['CodedFromValueSet'] = typeof this.codedFromValueSet.toJSON === 'function' ? this.codedFromValueSet.toJSON() : this.codedFromValueSet;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Group2 class to a FHIR object.
   * The FHIR is expected to be valid against the Group2 FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.hasSimpleValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.hasSimpleValue.toFHIR(true));
    }
    if (this.codedFromValueSet != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codedFromValueSet.toFHIR(true));
    }
    return inst;
  }
}
export default Group2;

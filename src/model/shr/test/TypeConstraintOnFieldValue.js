import { setPropertiesFromJSON } from '../../json-helper';

import Group2 from './Group2';

/**
 * Generated class for shr.test.TypeConstraintOnFieldValue.
 * @extends Group2
 */
class TypeConstraintOnFieldValue extends Group2 {

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
   * @returns {TypeConstraintOnFieldValue} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TypeConstraintOnFieldValue class.
   * The JSON must be valid against the TypeConstraintOnFieldValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TypeConstraintOnFieldValue} An instance of TypeConstraintOnFieldValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new TypeConstraintOnFieldValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnFieldValue class to a JSON object.
   * The JSON is expected to be valid against the TypeConstraintOnFieldValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/TypeConstraintOnFieldValue' };
    if (this.hasSimpleValue != null) {
      inst['HasSimpleValue'] = typeof this.hasSimpleValue.toJSON === 'function' ? this.hasSimpleValue.toJSON() : this.hasSimpleValue;
    }
    if (this.codedFromValueSet != null) {
      inst['CodedFromValueSet'] = typeof this.codedFromValueSet.toJSON === 'function' ? this.codedFromValueSet.toJSON() : this.codedFromValueSet;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnFieldValue class to a FHIR object.
   * The FHIR is expected to be valid against the TypeConstraintOnFieldValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
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
export default TypeConstraintOnFieldValue;

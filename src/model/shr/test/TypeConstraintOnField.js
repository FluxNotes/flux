import { setPropertiesFromJSON } from '../../json-helper';

import GroupBase from './GroupBase';

/**
 * Generated class for shr.test.TypeConstraintOnField.
 * @extends GroupBase
 */
class TypeConstraintOnField extends GroupBase {

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
   * @returns {TypeConstraintOnField} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TypeConstraintOnField class.
   * The JSON must be valid against the TypeConstraintOnField JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TypeConstraintOnField} An instance of TypeConstraintOnField populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new TypeConstraintOnField();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnField class to a JSON object.
   * The JSON is expected to be valid against the TypeConstraintOnField JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/TypeConstraintOnField' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.codedFromValueSet != null) {
      inst['CodedFromValueSet'] = typeof this.codedFromValueSet.toJSON === 'function' ? this.codedFromValueSet.toJSON() : this.codedFromValueSet;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnField class to a FHIR object.
   * The FHIR is expected to be valid against the TypeConstraintOnField FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
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
export default TypeConstraintOnField;

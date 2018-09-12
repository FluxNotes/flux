import { setPropertiesFromJSON } from '../../json-helper';

import SimpleBase from './SimpleBase';

/**
 * Generated class for shr.test.TypeConstraintOnValue.
 * @extends SimpleBase
 */
class TypeConstraintOnValue extends SimpleBase {

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
   * @returns {TypeConstraintOnValue} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TypeConstraintOnValue class.
   * The JSON must be valid against the TypeConstraintOnValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TypeConstraintOnValue} An instance of TypeConstraintOnValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new TypeConstraintOnValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnValue class to a JSON object.
   * The JSON is expected to be valid against the TypeConstraintOnValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/TypeConstraintOnValue' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnValue class to a FHIR object.
   * The FHIR is expected to be valid against the TypeConstraintOnValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default TypeConstraintOnValue;

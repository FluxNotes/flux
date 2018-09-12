import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.IncludesCodeConstraintOnValue.
 */
class IncludesCodeConstraintOnValue {

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
   * @returns {IncludesCodeConstraintOnValue} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept) array.
   * @returns {Array<CodeableConcept>} The shr.core.CodeableConcept array
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept) array.
   * This field/value is required.
   * @param {Array<CodeableConcept>} value - The shr.core.CodeableConcept array
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<CodeableConcept>} value - The shr.core.CodeableConcept array
   * @returns {IncludesCodeConstraintOnValue} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept array.
   * @returns {Array<CodeableConcept>} The shr.core.CodeableConcept array
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept array.
   * This field/value is required.
   * @param {Array<CodeableConcept>} codeableConcept - The shr.core.CodeableConcept array
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<CodeableConcept>} codeableConcept - The shr.core.CodeableConcept array
   * @returns {IncludesCodeConstraintOnValue} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IncludesCodeConstraintOnValue class.
   * The JSON must be valid against the IncludesCodeConstraintOnValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IncludesCodeConstraintOnValue} An instance of IncludesCodeConstraintOnValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new IncludesCodeConstraintOnValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnValue class to a JSON object.
   * The JSON is expected to be valid against the IncludesCodeConstraintOnValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/IncludesCodeConstraintOnValue' };
    if (this.value != null) {
      inst['Value'] = this.value.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnValue class to a FHIR object.
   * The FHIR is expected to be valid against the IncludesCodeConstraintOnValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default IncludesCodeConstraintOnValue;

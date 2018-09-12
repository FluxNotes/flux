import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.IncludesCodeConstraintOnField.
 */
class IncludesCodeConstraintOnField {

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
   * @returns {IncludesCodeConstraintOnField} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

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
   * @returns {IncludesCodeConstraintOnField} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
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
   * @returns {IncludesCodeConstraintOnField} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IncludesCodeConstraintOnField class.
   * The JSON must be valid against the IncludesCodeConstraintOnField JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IncludesCodeConstraintOnField} An instance of IncludesCodeConstraintOnField populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new IncludesCodeConstraintOnField();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnField class to a JSON object.
   * The JSON is expected to be valid against the IncludesCodeConstraintOnField JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/IncludesCodeConstraintOnField' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.codeableConcept != null) {
      inst['CodeableConcept'] = this.codeableConcept.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnField class to a FHIR object.
   * The FHIR is expected to be valid against the IncludesCodeConstraintOnField FHIR profile, but no validation checks are performed.
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
    if (this.codeableConcept != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codeableConcept.toFHIR(true));
    }
    return inst;
  }
}
export default IncludesCodeConstraintOnField;

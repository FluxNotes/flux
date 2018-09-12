import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.CodeConstraintOnField.
 */
class CodeConstraintOnField {

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
   * @returns {CodeConstraintOnField} this.
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
   * @returns {CodeConstraintOnField} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the Coding.
   * @returns {Coding} The shr.core.Coding
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the Coding.
   * @param {Coding} coding - The shr.core.Coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding and return 'this' for chaining.
   * @param {Coding} coding - The shr.core.Coding
   * @returns {CodeConstraintOnField} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodeConstraintOnField class.
   * The JSON must be valid against the CodeConstraintOnField JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeConstraintOnField} An instance of CodeConstraintOnField populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CodeConstraintOnField();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CodeConstraintOnField class to a JSON object.
   * The JSON is expected to be valid against the CodeConstraintOnField JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/CodeConstraintOnField' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.coding != null) {
      inst['Coding'] = typeof this.coding.toJSON === 'function' ? this.coding.toJSON() : this.coding;
    }
    return inst;
  }
  /**
   * Serializes an instance of the CodeConstraintOnField class to a FHIR object.
   * The FHIR is expected to be valid against the CodeConstraintOnField FHIR profile, but no validation checks are performed.
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
    if (this.coding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.coding.toFHIR(true));
    }
    return inst;
  }
}
export default CodeConstraintOnField;

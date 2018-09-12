import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.TypeConstraintOnFieldChild.
 */
class TypeConstraintOnFieldChild {

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
   * @returns {TypeConstraintOnFieldChild} this.
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
   * @returns {TypeConstraintOnFieldChild} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the Complex.
   * @returns {Complex} The shr.test.Complex
   */
  get complex() {
    return this._complex;
  }

  /**
   * Set the Complex.
   * @param {Complex} complex - The shr.test.Complex
   */
  set complex(complex) {
    this._complex = complex;
  }

  /**
   * Set the Complex and return 'this' for chaining.
   * @param {Complex} complex - The shr.test.Complex
   * @returns {TypeConstraintOnFieldChild} this.
   */
  withComplex(complex) {
    this.complex = complex; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TypeConstraintOnFieldChild class.
   * The JSON must be valid against the TypeConstraintOnFieldChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TypeConstraintOnFieldChild} An instance of TypeConstraintOnFieldChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new TypeConstraintOnFieldChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnFieldChild class to a JSON object.
   * The JSON is expected to be valid against the TypeConstraintOnFieldChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/TypeConstraintOnFieldChild' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.complex != null) {
      inst['Complex'] = typeof this.complex.toJSON === 'function' ? this.complex.toJSON() : this.complex;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TypeConstraintOnFieldChild class to a FHIR object.
   * The FHIR is expected to be valid against the TypeConstraintOnFieldChild FHIR profile, but no validation checks are performed.
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
    if (this.complex != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.complex.toFHIR(true));
    }
    return inst;
  }
}
export default TypeConstraintOnFieldChild;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.Complex.
 */
class Complex {

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
   * @returns {Complex} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the CodedFromValueSet array.
   * @returns {Array<CodedFromValueSet>} The shr.test.CodedFromValueSet array
   */
  get codedFromValueSet() {
    return this._codedFromValueSet;
  }

  /**
   * Set the CodedFromValueSet array.
   * This field/value is required.
   * @param {Array<CodedFromValueSet>} codedFromValueSet - The shr.test.CodedFromValueSet array
   */
  set codedFromValueSet(codedFromValueSet) {
    this._codedFromValueSet = codedFromValueSet;
  }

  /**
   * Set the CodedFromValueSet array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<CodedFromValueSet>} codedFromValueSet - The shr.test.CodedFromValueSet array
   * @returns {Complex} this.
   */
  withCodedFromValueSet(codedFromValueSet) {
    this.codedFromValueSet = codedFromValueSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Complex class.
   * The JSON must be valid against the Complex JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Complex} An instance of Complex populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Complex();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Complex class to a JSON object.
   * The JSON is expected to be valid against the Complex JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/Complex' } };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.codedFromValueSet != null) {
      inst['CodedFromValueSet'] = this.codedFromValueSet.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Complex class to a FHIR object.
   * The FHIR is expected to be valid against the Complex FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simple.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codedFromValueSet.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-test-Complex-extension';
    }
    return inst;
  }
}
export default Complex;

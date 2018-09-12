import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.DerivedFrom.
 */
class DerivedFrom {

  /**
   * Get the value (aliases clinicalStatement).
   * @returns {Reference} The cimi.statement.ClinicalStatement reference
   */
  get value() {
    return this._clinicalStatement;
  }

  /**
   * Set the value (aliases clinicalStatement).
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ClinicalStatement reference
   */
  set value(value) {
    this._clinicalStatement = value;
  }

  /**
   * Set the value (aliases clinicalStatement) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The cimi.statement.ClinicalStatement reference
   * @returns {DerivedFrom} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the cimi.statement.ClinicalStatement reference.
   * @returns {Reference} The cimi.statement.ClinicalStatement reference
   */
  get clinicalStatement() {
    return this._clinicalStatement;
  }

  /**
   * Set the cimi.statement.ClinicalStatement reference.
   * This field/value is required.
   * @param {Reference} clinicalStatement - The cimi.statement.ClinicalStatement reference
   */
  set clinicalStatement(clinicalStatement) {
    this._clinicalStatement = clinicalStatement;
  }

  /**
   * Set the cimi.statement.ClinicalStatement reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} clinicalStatement - The cimi.statement.ClinicalStatement reference
   * @returns {DerivedFrom} this.
   */
  withClinicalStatement(clinicalStatement) {
    this.clinicalStatement = clinicalStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DerivedFrom class.
   * The JSON must be valid against the DerivedFrom JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DerivedFrom} An instance of DerivedFrom populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new DerivedFrom();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the DerivedFrom class to a JSON object.
   * The JSON is expected to be valid against the DerivedFrom JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/base/DerivedFrom' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the DerivedFrom class to a FHIR object.
   * The FHIR is expected to be valid against the DerivedFrom FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-DerivedFrom-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default DerivedFrom;

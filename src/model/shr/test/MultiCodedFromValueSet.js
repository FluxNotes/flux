import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.MultiCodedFromValueSet.
 */
class MultiCodedFromValueSet {

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
   * @returns {MultiCodedFromValueSet} this.
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
   * @returns {MultiCodedFromValueSet} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MultiCodedFromValueSet class.
   * The JSON must be valid against the MultiCodedFromValueSet JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MultiCodedFromValueSet} An instance of MultiCodedFromValueSet populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MultiCodedFromValueSet();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MultiCodedFromValueSet class to a JSON object.
   * The JSON is expected to be valid against the MultiCodedFromValueSet JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/MultiCodedFromValueSet' } };
    if (this.value != null) {
      inst['Value'] = this.value.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the MultiCodedFromValueSet class to a FHIR object.
   * The FHIR is expected to be valid against the MultiCodedFromValueSet FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.codeableConcept.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-test-MultiCodedFromValueSet-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = this.value.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
      }
    }
    return inst;
  }
}
export default MultiCodedFromValueSet;

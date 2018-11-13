import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import Interpretation from '../shr/base/Interpretation';

/**
 * Generated class for sw.WoundAssessmentInterpretation.
 * @extends Interpretation
 */
class WoundAssessmentInterpretation extends Interpretation {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {WoundAssessmentInterpretation} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {WoundAssessmentInterpretation} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundAssessmentInterpretation class.
   * The JSON must be valid against the WoundAssessmentInterpretation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundAssessmentInterpretation} An instance of WoundAssessmentInterpretation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundAssessmentInterpretation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the WoundAssessmentInterpretation class to a JSON object.
   * The JSON is expected to be valid against the WoundAssessmentInterpretation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/sw/WoundAssessmentInterpretation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the WoundAssessmentInterpretation class to a FHIR object.
   * The FHIR is expected to be valid against the WoundAssessmentInterpretation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the WoundAssessmentInterpretation class.
   * The FHIR must be valid against the WoundAssessmentInterpretation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {WoundAssessmentInterpretation} An instance of WoundAssessmentInterpretation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new WoundAssessmentInterpretation();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir);
    }
    return inst;
  }

}
export default WoundAssessmentInterpretation;

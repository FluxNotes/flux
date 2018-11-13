import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import NonIndependentFinding from '../shr/base/NonIndependentFinding';

/**
 * Generated class for mcode.PrimaryTumorIndicator.
 * @extends NonIndependentFinding
 */
class PrimaryTumorIndicator extends NonIndependentFinding {

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
   * @returns {PrimaryTumorIndicator} this.
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
   * @returns {PrimaryTumorIndicator} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the FindingTopicCode.
   * @returns {FindingTopicCode} The shr.base.FindingTopicCode
   */
  get findingTopicCode() {
    return this._findingTopicCode;
  }

  /**
   * Set the FindingTopicCode.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   */
  set findingTopicCode(findingTopicCode) {
    this._findingTopicCode = findingTopicCode;
  }

  /**
   * Set the FindingTopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   * @returns {PrimaryTumorIndicator} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the ReferenceRange.
   * @returns {ReferenceRange} The shr.base.ReferenceRange
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange.
   * @param {ReferenceRange} referenceRange - The shr.base.ReferenceRange
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange and return 'this' for chaining.
   * @param {ReferenceRange} referenceRange - The shr.base.ReferenceRange
   * @returns {PrimaryTumorIndicator} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PrimaryTumorIndicator class.
   * The JSON must be valid against the PrimaryTumorIndicator JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PrimaryTumorIndicator} An instance of PrimaryTumorIndicator populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PrimaryTumorIndicator();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PrimaryTumorIndicator class to a JSON object.
   * The JSON is expected to be valid against the PrimaryTumorIndicator JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/mcode/PrimaryTumorIndicator' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    return inst;
  }

  /**
   * Serializes an instance of the PrimaryTumorIndicator class to a FHIR object.
   * The FHIR is expected to be valid against the PrimaryTumorIndicator FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.findingTopicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR(true) : this.findingTopicCode);
    }
    if (this.exceptionValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR(true) : this.exceptionValue);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PrimaryTumorIndicator class.
   * The FHIR must be valid against the PrimaryTumorIndicator FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {PrimaryTumorIndicator} An instance of PrimaryTumorIndicator populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new PrimaryTumorIndicator();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    return inst;
  }

}
export default PrimaryTumorIndicator;

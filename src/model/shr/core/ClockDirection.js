import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import NonIndependentFinding from '../base/NonIndependentFinding';

/**
 * Generated class for shr.core.ClockDirection.
 * @extends NonIndependentFinding
 */
class ClockDirection extends NonIndependentFinding {

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
   * @returns {ClockDirection} this.
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
   * @returns {ClockDirection} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClockDirection class.
   * The JSON must be valid against the ClockDirection JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClockDirection} An instance of ClockDirection populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ClockDirection();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ClockDirection class to a JSON object.
   * The JSON is expected to be valid against the ClockDirection JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ClockDirection' } };
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
   * Serializes an instance of the ClockDirection class to a FHIR object.
   * The FHIR is expected to be valid against the ClockDirection FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
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
    if (this.referenceRange != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.referenceRange.toFHIR === 'function' ? this.referenceRange.toFHIR(true) : this.referenceRange);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ClockDirection class.
   * The FHIR must be valid against the ClockDirection FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ClockDirection} An instance of ClockDirection populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ClockDirection();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension');
      if (match != null) {
        inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExceptionValue-extension');
      if (match != null) {
        inst.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ReferenceRange-extension');
      if (match != null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', match, true);
      }
    }
    return inst;
  }

}
export default ClockDirection;

import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import InformationItem from './InformationItem';

/**
 * Generated class for shr.base.NonIndependentFinding.
 * @extends InformationItem
 */
class NonIndependentFinding extends InformationItem {

  /**
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod.
   * @returns {(Quantity|CodeableConcept|string|Range|Ratio|time|dateTime|TimePeriod)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|time|dateTime|TimePeriod)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod and return 'this' for chaining.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|time|dateTime|TimePeriod)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, time, dateTime, shr.core.TimePeriod
   * @returns {NonIndependentFinding} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * @returns {NonIndependentFinding} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the ExceptionValue.
   * @returns {ExceptionValue} The shr.base.ExceptionValue
   */
  get exceptionValue() {
    return this._exceptionValue;
  }

  /**
   * Set the ExceptionValue.
   * @param {ExceptionValue} exceptionValue - The shr.base.ExceptionValue
   */
  set exceptionValue(exceptionValue) {
    this._exceptionValue = exceptionValue;
  }

  /**
   * Set the ExceptionValue and return 'this' for chaining.
   * @param {ExceptionValue} exceptionValue - The shr.base.ExceptionValue
   * @returns {NonIndependentFinding} this.
   */
  withExceptionValue(exceptionValue) {
    this.exceptionValue = exceptionValue; return this;
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
   * @returns {NonIndependentFinding} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NonIndependentFinding class.
   * The JSON must be valid against the NonIndependentFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NonIndependentFinding} An instance of NonIndependentFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NonIndependentFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the NonIndependentFinding class to a JSON object.
   * The JSON is expected to be valid against the NonIndependentFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/NonIndependentFinding' } };
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
   * Serializes an instance of the NonIndependentFinding class to a FHIR object.
   * The FHIR is expected to be valid against the NonIndependentFinding FHIR profile, but no validation checks are performed.
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
    if (this.referenceRange != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.referenceRange.toFHIR === 'function' ? this.referenceRange.toFHIR(true) : this.referenceRange);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the NonIndependentFinding class.
   * The FHIR must be valid against the NonIndependentFinding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {NonIndependentFinding} An instance of NonIndependentFinding populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new NonIndependentFinding();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension');
      if (match != null) {
        inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', match, true);
      }
    }
    return inst;
  }

}
export default NonIndependentFinding;

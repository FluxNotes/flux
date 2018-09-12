import { setPropertiesFromJSON } from '../../json-helper';

import CodedEvaluationComponent from '../../cimi/topic/CodedEvaluationComponent';

/**
 * Generated class for shr.oncology.LymphNodeSamplingMethod.
 * @extends CodedEvaluationComponent
 */
class LymphNodeSamplingMethod extends CodedEvaluationComponent {

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
   * @returns {LymphNodeSamplingMethod} this.
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
   * @returns {LymphNodeSamplingMethod} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LymphNodeSamplingMethod class.
   * The JSON must be valid against the LymphNodeSamplingMethod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LymphNodeSamplingMethod} An instance of LymphNodeSamplingMethod populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new LymphNodeSamplingMethod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LymphNodeSamplingMethod class to a JSON object.
   * The JSON is expected to be valid against the LymphNodeSamplingMethod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/LymphNodeSamplingMethod' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.topicCode != null) {
      inst['cimi.topic.TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.exceptionValue != null) {
      inst['cimi.context.ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.interpretation != null) {
      inst['cimi.context.Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.referenceRange != null) {
      inst['cimi.topic.ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the LymphNodeSamplingMethod class to a FHIR object.
   * The FHIR is expected to be valid against the LymphNodeSamplingMethod FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default LymphNodeSamplingMethod;

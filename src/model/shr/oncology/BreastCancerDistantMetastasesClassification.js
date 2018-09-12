import { setPropertiesFromJSON } from '../../json-helper';

import CodedEvaluationComponent from '../../cimi/topic/CodedEvaluationComponent';

/**
 * Generated class for shr.oncology.BreastCancerDistantMetastasesClassification.
 * @extends CodedEvaluationComponent
 */
class BreastCancerDistantMetastasesClassification extends CodedEvaluationComponent {

  /**
   * Deserializes JSON data to an instance of the BreastCancerDistantMetastasesClassification class.
   * The JSON must be valid against the BreastCancerDistantMetastasesClassification JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerDistantMetastasesClassification} An instance of BreastCancerDistantMetastasesClassification populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastCancerDistantMetastasesClassification();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastCancerDistantMetastasesClassification class to a JSON object.
   * The JSON is expected to be valid against the BreastCancerDistantMetastasesClassification JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastCancerDistantMetastasesClassification' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    return inst;
  }
}
export default BreastCancerDistantMetastasesClassification;

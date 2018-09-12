import { setPropertiesFromJSON } from '../../json-helper';

import CodedEvaluationComponent from '../../cimi/topic/CodedEvaluationComponent';

/**
 * Generated class for shr.oncology.BreastCancerRegionalNodesClassification.
 * @extends CodedEvaluationComponent
 */
class BreastCancerRegionalNodesClassification extends CodedEvaluationComponent {

  /**
   * Get the StageSuffix.
   * @returns {StageSuffix} The shr.oncology.StageSuffix
   */
  get stageSuffix() {
    return this._stageSuffix;
  }

  /**
   * Set the StageSuffix.
   * @param {StageSuffix} stageSuffix - The shr.oncology.StageSuffix
   */
  set stageSuffix(stageSuffix) {
    this._stageSuffix = stageSuffix;
  }

  /**
   * Set the StageSuffix and return 'this' for chaining.
   * @param {StageSuffix} stageSuffix - The shr.oncology.StageSuffix
   * @returns {BreastCancerRegionalNodesClassification} this.
   */
  withStageSuffix(stageSuffix) {
    this.stageSuffix = stageSuffix; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancerRegionalNodesClassification class.
   * The JSON must be valid against the BreastCancerRegionalNodesClassification JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerRegionalNodesClassification} An instance of BreastCancerRegionalNodesClassification populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastCancerRegionalNodesClassification();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastCancerRegionalNodesClassification class to a JSON object.
   * The JSON is expected to be valid against the BreastCancerRegionalNodesClassification JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastCancerRegionalNodesClassification' } };
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
    if (this.stageSuffix != null) {
      inst['StageSuffix'] = typeof this.stageSuffix.toJSON === 'function' ? this.stageSuffix.toJSON() : this.stageSuffix;
    }
    return inst;
  }
}
export default BreastCancerRegionalNodesClassification;

import { setPropertiesFromJSON } from '../../json-helper';

import EvaluationComponent from '../../cimi/topic/EvaluationComponent';

/**
 * Generated class for shr.oncology.NumberOfLymphNodesWithMicrometastases.
 * @extends EvaluationComponent
 */
class NumberOfLymphNodesWithMicrometastases extends EvaluationComponent {

  /**
   * Get the value (aliases quantity).
   * @returns {IntegerQuantity} The shr.core.IntegerQuantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * This field/value is required.
   * @param {IntegerQuantity} value - The shr.core.IntegerQuantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Set the value (aliases quantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {IntegerQuantity} value - The shr.core.IntegerQuantity
   * @returns {NumberOfLymphNodesWithMicrometastases} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the IntegerQuantity.
   * @returns {IntegerQuantity} The shr.core.IntegerQuantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the IntegerQuantity.
   * This field/value is required.
   * @param {IntegerQuantity} quantity - The shr.core.IntegerQuantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Set the IntegerQuantity and return 'this' for chaining.
   * This field/value is required.
   * @param {IntegerQuantity} quantity - The shr.core.IntegerQuantity
   * @returns {NumberOfLymphNodesWithMicrometastases} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NumberOfLymphNodesWithMicrometastases class.
   * The JSON must be valid against the NumberOfLymphNodesWithMicrometastases JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfLymphNodesWithMicrometastases} An instance of NumberOfLymphNodesWithMicrometastases populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new NumberOfLymphNodesWithMicrometastases();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NumberOfLymphNodesWithMicrometastases class to a JSON object.
   * The JSON is expected to be valid against the NumberOfLymphNodesWithMicrometastases JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'shr.base.EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/NumberOfLymphNodesWithMicrometastases' } };
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
   * Serializes an instance of the NumberOfLymphNodesWithMicrometastases class to a FHIR object.
   * The FHIR is expected to be valid against the NumberOfLymphNodesWithMicrometastases FHIR profile, but no validation checks are performed.
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
export default NumberOfLymphNodesWithMicrometastases;

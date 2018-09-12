import { setPropertiesFromJSON } from '../../json-helper';

import EvaluationComponent from '../../cimi/topic/EvaluationComponent';

/**
 * Generated class for shr.occupation.ServiceConnectedDisability.
 * @extends EvaluationComponent
 */
class ServiceConnectedDisability extends EvaluationComponent {

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Set the value (aliases quantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   * @returns {ServiceConnectedDisability} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Set the Quantity and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   * @returns {ServiceConnectedDisability} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Get the ReferenceRange array.
   * @returns {Array<ReferenceRange>} The cimi.topic.ReferenceRange array
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange array.
   * @param {Array<ReferenceRange>} referenceRange - The cimi.topic.ReferenceRange array
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange array and return 'this' for chaining.
   * @param {Array<ReferenceRange>} referenceRange - The cimi.topic.ReferenceRange array
   * @returns {ServiceConnectedDisability} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ServiceConnectedDisability class.
   * The JSON must be valid against the ServiceConnectedDisability JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ServiceConnectedDisability} An instance of ServiceConnectedDisability populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ServiceConnectedDisability();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ServiceConnectedDisability class to a JSON object.
   * The JSON is expected to be valid against the ServiceConnectedDisability JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/ServiceConnectedDisability' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
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
export default ServiceConnectedDisability;

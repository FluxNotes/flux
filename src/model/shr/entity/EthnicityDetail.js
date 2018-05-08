import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.EthnicityDetail.
 */
class EthnicityDetail {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept.
   * @returns {CodeableConcept} The choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} value - The choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The choice value; one of: shr.core.CodeableConcept, shr.core.CodeableConcept
   * @returns {EthnicityDetail} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EthnicityDetail class.
   * The JSON must be valid against the EthnicityDetail JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EthnicityDetail} An instance of EthnicityDetail populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EthnicityDetail();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EthnicityDetail class to a JSON object.
   * The JSON is expected to be valid against the EthnicityDetail JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/EthnicityDetail' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default EthnicityDetail;

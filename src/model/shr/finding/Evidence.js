import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.Evidence.
 */
class Evidence {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.base.Content reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.base.Content reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.base.Content reference.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.base.Content reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.base.Content reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.base.Content reference
   * @returns {Evidence} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Evidence class.
   * The JSON must be valid against the Evidence JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Evidence} An instance of Evidence populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Evidence();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Evidence class to a JSON object.
   * The JSON is expected to be valid against the Evidence JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/Evidence' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Evidence;

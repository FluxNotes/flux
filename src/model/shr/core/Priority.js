import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Priority.
 */
class Priority {

  /**
   * Get the choice value; one of: positiveInt, shr.core.CodeableConcept.
   * @returns {(positiveInt|CodeableConcept)} The choice value; one of: positiveInt, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: positiveInt, shr.core.CodeableConcept.
   * This field/value is required.
   * @param {(positiveInt|CodeableConcept)} value - The choice value; one of: positiveInt, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: positiveInt, shr.core.CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {(positiveInt|CodeableConcept)} value - The choice value; one of: positiveInt, shr.core.CodeableConcept
   * @returns {Priority} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Priority class.
   * The JSON must be valid against the Priority JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Priority} An instance of Priority populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Priority();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Priority class to a JSON object.
   * The JSON is expected to be valid against the Priority JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Priority' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Priority;

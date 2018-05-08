import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Reason.
 */
class Reason {

  /**
   * Get the choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference.
   * @returns {(string|CodeableConcept|Reference)} The choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference.
   * This field/value is required.
   * @param {(string|CodeableConcept|Reference)} value - The choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(string|CodeableConcept|Reference)} value - The choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference
   * @returns {Reason} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Reason class.
   * The JSON must be valid against the Reason JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Reason} An instance of Reason populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Reason();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Reason class to a JSON object.
   * The JSON is expected to be valid against the Reason JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Reason' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Reason;

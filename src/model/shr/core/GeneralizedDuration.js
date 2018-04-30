import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedDuration.
 */
class GeneralizedDuration {

  /**
   * Get the choice value; one of: shr.core.Duration, shr.core.SemiquantDuration.
   * @returns {(Duration|SemiquantDuration)} The choice value; one of: shr.core.Duration, shr.core.SemiquantDuration
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Duration, shr.core.SemiquantDuration.
   * This field/value is required.
   * @param {(Duration|SemiquantDuration)} value - The choice value; one of: shr.core.Duration, shr.core.SemiquantDuration
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Duration, shr.core.SemiquantDuration and return 'this' for chaining.
   * This field/value is required.
   * @param {(Duration|SemiquantDuration)} value - The choice value; one of: shr.core.Duration, shr.core.SemiquantDuration
   * @returns {GeneralizedDuration} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedDuration class.
   * The JSON must be valid against the GeneralizedDuration JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedDuration} An instance of GeneralizedDuration populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedDuration();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GeneralizedDuration class to a JSON object.
   * The JSON is expected to be valid against the GeneralizedDuration JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/GeneralizedDuration' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default GeneralizedDuration;

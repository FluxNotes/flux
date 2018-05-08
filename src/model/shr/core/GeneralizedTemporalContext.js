import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedTemporalContext.
 */
class GeneralizedTemporalContext {

  /**
   * Get the choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext.
   * @returns {(GeneralizedDateTime|GeneralizedAge|GestationalTemporalContext)} The choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext.
   * This field/value is required.
   * @param {(GeneralizedDateTime|GeneralizedAge|GestationalTemporalContext)} value - The choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext and return 'this' for chaining.
   * This field/value is required.
   * @param {(GeneralizedDateTime|GeneralizedAge|GestationalTemporalContext)} value - The choice value; one of: shr.core.GeneralizedDateTime, shr.core.GeneralizedAge, shr.core.GestationalTemporalContext
   * @returns {GeneralizedTemporalContext} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedTemporalContext class.
   * The JSON must be valid against the GeneralizedTemporalContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedTemporalContext} An instance of GeneralizedTemporalContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedTemporalContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GeneralizedTemporalContext class to a JSON object.
   * The JSON is expected to be valid against the GeneralizedTemporalContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/GeneralizedTemporalContext' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default GeneralizedTemporalContext;

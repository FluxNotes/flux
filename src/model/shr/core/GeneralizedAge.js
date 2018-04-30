import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedAge.
 */
class GeneralizedAge {

  /**
   * Get the choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup.
   * @returns {(Age|AgeRange|AgeGroup)} The choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup.
   * This field/value is required.
   * @param {(Age|AgeRange|AgeGroup)} value - The choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup and return 'this' for chaining.
   * This field/value is required.
   * @param {(Age|AgeRange|AgeGroup)} value - The choice value; one of: shr.core.Age, shr.core.AgeRange, shr.core.AgeGroup
   * @returns {GeneralizedAge} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedAge class.
   * The JSON must be valid against the GeneralizedAge JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedAge} An instance of GeneralizedAge populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedAge();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GeneralizedAge class to a JSON object.
   * The JSON is expected to be valid against the GeneralizedAge JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/GeneralizedAge' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default GeneralizedAge;

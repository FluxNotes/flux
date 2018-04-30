import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Units.
 */
class Units {

  /**
   * Get the choice value; one of: shr.core.Coding, shr.core.Coding.
   * @returns {Coding} The choice value; one of: shr.core.Coding, shr.core.Coding
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Coding, shr.core.Coding.
   * This field/value is required.
   * @param {Coding} value - The choice value; one of: shr.core.Coding, shr.core.Coding
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Coding, shr.core.Coding and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} value - The choice value; one of: shr.core.Coding, shr.core.Coding
   * @returns {Units} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Units class.
   * The JSON must be valid against the Units JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Units} An instance of Units populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Units();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Units class to a JSON object.
   * The JSON is expected to be valid against the Units JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Units' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Units;

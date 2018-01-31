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
   * @param {Coding} value - The choice value; one of: shr.core.Coding, shr.core.Coding
   */
  set value(value) {
    this._value = value;
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
}
export default Units;

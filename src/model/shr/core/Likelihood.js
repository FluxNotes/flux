import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Likelihood.
 */
class Likelihood {

  /**
   * Get the value (aliases positiveInt).
   * @returns {positiveInt} The positiveInt
   */
  get value() {
    return this._positiveInt;
  }

  /**
   * Set the value (aliases positiveInt).
   * @param {positiveInt} value - The positiveInt
   */
  set value(value) {
    this._positiveInt = value;
  }

  /**
   * Get the positiveInt.
   * @returns {positiveInt} The positiveInt
   */
  get positiveInt() {
    return this._positiveInt;
  }

  /**
   * Set the positiveInt.
   * @param {positiveInt} positiveInt - The positiveInt
   */
  set positiveInt(positiveInt) {
    this._positiveInt = positiveInt;
  }

  /**
   * Deserializes JSON data to an instance of the Likelihood class.
   * The JSON must be valid against the Likelihood JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Likelihood} An instance of Likelihood populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Likelihood();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Likelihood;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.NumberOfRefillsAllowed.
 */
class NumberOfRefillsAllowed {

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
   * Deserializes JSON data to an instance of the NumberOfRefillsAllowed class.
   * The JSON must be valid against the NumberOfRefillsAllowed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfRefillsAllowed} An instance of NumberOfRefillsAllowed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NumberOfRefillsAllowed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NumberOfRefillsAllowed;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.NumberOfRepeats.
 */
class NumberOfRepeats {

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
   * Deserializes JSON data to an instance of the NumberOfRepeats class.
   * The JSON must be valid against the NumberOfRepeats JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfRepeats} An instance of NumberOfRepeats populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NumberOfRepeats();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NumberOfRepeats;

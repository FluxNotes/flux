import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MultipleBirthOrder.
 */
class MultipleBirthOrder {

  /**
   * Get the value (aliases integer).
   * @returns {integer} The integer
   */
  get value() {
    return this._integer;
  }

  /**
   * Set the value (aliases integer).
   * @param {integer} value - The integer
   */
  set value(value) {
    this._integer = value;
  }

  /**
   * Get the integer.
   * @returns {integer} The integer
   */
  get integer() {
    return this._integer;
  }

  /**
   * Set the integer.
   * @param {integer} integer - The integer
   */
  set integer(integer) {
    this._integer = integer;
  }

  /**
   * Deserializes JSON data to an instance of the MultipleBirthOrder class.
   * The JSON must be valid against the MultipleBirthOrder JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MultipleBirthOrder} An instance of MultipleBirthOrder populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MultipleBirthOrder();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MultipleBirthOrder;

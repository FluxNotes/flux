import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Altitude.
 */
class Altitude {

  /**
   * Get the value (aliases decimal).
   * @returns {decimal} The decimal
   */
  get value() {
    return this._decimal;
  }

  /**
   * Set the value (aliases decimal).
   * @param {decimal} value - The decimal
   */
  set value(value) {
    this._decimal = value;
  }

  /**
   * Get the decimal.
   * @returns {decimal} The decimal
   */
  get decimal() {
    return this._decimal;
  }

  /**
   * Set the decimal.
   * @param {decimal} decimal - The decimal
   */
  set decimal(decimal) {
    this._decimal = decimal;
  }

  /**
   * Deserializes JSON data to an instance of the Altitude class.
   * The JSON must be valid against the Altitude JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Altitude} An instance of Altitude populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Altitude();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Altitude;

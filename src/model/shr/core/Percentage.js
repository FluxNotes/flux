import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Percentage.
 */
class Percentage {

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Deserializes JSON data to an instance of the Percentage class.
   * The JSON must be valid against the Percentage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Percentage} An instance of Percentage populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Percentage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Percentage;

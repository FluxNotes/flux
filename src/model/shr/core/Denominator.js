import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Denominator.
 */
class Denominator {

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
   * Deserializes JSON data to an instance of the Denominator class.
   * The JSON must be valid against the Denominator JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Denominator} An instance of Denominator populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Denominator();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Denominator;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.QuantityPerDispense.
 */
class QuantityPerDispense {

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
   * Deserializes JSON data to an instance of the QuantityPerDispense class.
   * The JSON must be valid against the QuantityPerDispense JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {QuantityPerDispense} An instance of QuantityPerDispense populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new QuantityPerDispense();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default QuantityPerDispense;

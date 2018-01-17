import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.lifehistory.ServiceConnectedDisability.
 * @extends QuestionAnswer
 */
class ServiceConnectedDisability extends QuestionAnswer {

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
   * Deserializes JSON data to an instance of the ServiceConnectedDisability class.
   * The JSON must be valid against the ServiceConnectedDisability JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ServiceConnectedDisability} An instance of ServiceConnectedDisability populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ServiceConnectedDisability();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ServiceConnectedDisability;

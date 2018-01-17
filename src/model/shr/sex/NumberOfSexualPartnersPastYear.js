import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.sex.NumberOfSexualPartnersPastYear.
 * @extends QuestionAnswer
 */
class NumberOfSexualPartnersPastYear extends QuestionAnswer {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

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
   * Deserializes JSON data to an instance of the NumberOfSexualPartnersPastYear class.
   * The JSON must be valid against the NumberOfSexualPartnersPastYear JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfSexualPartnersPastYear} An instance of NumberOfSexualPartnersPastYear populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NumberOfSexualPartnersPastYear();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NumberOfSexualPartnersPastYear;

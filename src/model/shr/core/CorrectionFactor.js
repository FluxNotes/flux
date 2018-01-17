import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.CorrectionFactor.
 */
class CorrectionFactor {

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
   * Deserializes JSON data to an instance of the CorrectionFactor class.
   * The JSON must be valid against the CorrectionFactor JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CorrectionFactor} An instance of CorrectionFactor populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CorrectionFactor();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CorrectionFactor;

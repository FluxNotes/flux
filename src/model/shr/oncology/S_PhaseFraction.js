import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.oncology.S-PhaseFraction.
 * @extends Observation
 */
class S_PhaseFraction extends Observation {

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
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Deserializes JSON data to an instance of the S_PhaseFraction class.
   * The JSON must be valid against the S_PhaseFraction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {S_PhaseFraction} An instance of S_PhaseFraction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new S_PhaseFraction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default S_PhaseFraction;

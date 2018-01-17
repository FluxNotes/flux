import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.AverageCEP17SignalsPerCell.
 * @extends ObservationComponent
 */
class AverageCEP17SignalsPerCell extends ObservationComponent {

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
   * Deserializes JSON data to an instance of the AverageCEP17SignalsPerCell class.
   * The JSON must be valid against the AverageCEP17SignalsPerCell JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AverageCEP17SignalsPerCell} An instance of AverageCEP17SignalsPerCell populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AverageCEP17SignalsPerCell();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AverageCEP17SignalsPerCell;

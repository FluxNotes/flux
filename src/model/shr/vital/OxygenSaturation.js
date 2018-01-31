import { setPropertiesFromJSON } from '../../json-helper';

import VitalSign from './VitalSign';

/**
 * Generated class for shr.vital.OxygenSaturation.
 * @extends VitalSign
 */
class OxygenSaturation extends VitalSign {

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
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Deserializes JSON data to an instance of the OxygenSaturation class.
   * The JSON must be valid against the OxygenSaturation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OxygenSaturation} An instance of OxygenSaturation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OxygenSaturation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OxygenSaturation;

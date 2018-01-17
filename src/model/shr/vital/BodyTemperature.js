import { setPropertiesFromJSON } from '../../json-helper';

import VitalSign from './VitalSign';

/**
 * Generated class for shr.vital.BodyTemperature.
 * @extends VitalSign
 */
class BodyTemperature extends VitalSign {

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
   * Get the ObservationQualifier array.
   * @returns {Array<ObservationQualifier>} The shr.finding.ObservationQualifier array
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Set the ObservationQualifier array.
   * @param {Array<ObservationQualifier>} observationQualifier - The shr.finding.ObservationQualifier array
   */
  set observationQualifier(observationQualifier) {
    this._observationQualifier = observationQualifier;
  }

  /**
   * Deserializes JSON data to an instance of the BodyTemperature class.
   * The JSON must be valid against the BodyTemperature JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodyTemperature} An instance of BodyTemperature populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BodyTemperature();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BodyTemperature;

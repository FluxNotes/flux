import { setPropertiesFromJSON } from '../../json-helper';

import BodyHeight from './BodyHeight';

/**
 * Generated class for shr.vital.BodyLength.
 * @extends BodyHeight
 */
class BodyLength extends BodyHeight {

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
   * Deserializes JSON data to an instance of the BodyLength class.
   * The JSON must be valid against the BodyLength JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodyLength} An instance of BodyLength populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BodyLength();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BodyLength;

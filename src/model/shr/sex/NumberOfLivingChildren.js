import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.sex.NumberOfLivingChildren.
 * @extends QuestionAnswer
 */
class NumberOfLivingChildren extends QuestionAnswer {

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
   * Deserializes JSON data to an instance of the NumberOfLivingChildren class.
   * The JSON must be valid against the NumberOfLivingChildren JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfLivingChildren} An instance of NumberOfLivingChildren populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NumberOfLivingChildren();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NumberOfLivingChildren;

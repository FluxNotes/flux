import { setPropertiesFromJSON } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.finding.QuestionAnswer.
 * @extends Observation
 */
class QuestionAnswer extends Observation {

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
   * Get the shr.entity.Specimen reference.
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the shr.entity.Specimen reference.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Get the shr.device.Device reference.
   * @returns {Reference} The shr.device.Device reference
   */
  get device() {
    return this._device;
  }

  /**
   * Set the shr.device.Device reference.
   * @param {Reference} device - The shr.device.Device reference
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Get the ReferenceRange array.
   * @returns {Array<ReferenceRange>} The shr.finding.ReferenceRange array
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange array.
   * @param {Array<ReferenceRange>} referenceRange - The shr.finding.ReferenceRange array
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Get the Members.
   * @returns {Members} The shr.finding.Members
   */
  get members() {
    return this._members;
  }

  /**
   * Set the Members.
   * @param {Members} members - The shr.finding.Members
   */
  set members(members) {
    this._members = members;
  }

  /**
   * Deserializes JSON data to an instance of the QuestionAnswer class.
   * The JSON must be valid against the QuestionAnswer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {QuestionAnswer} An instance of QuestionAnswer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new QuestionAnswer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default QuestionAnswer;

import { setPropertiesFromJSON } from '../../json-helper';

import BehavioralFinding from './BehavioralFinding';

/**
 * Generated class for shr.behavior.ReligiousCongregation.
 * @extends BehavioralFinding
 */
class ReligiousCongregation extends BehavioralFinding {

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
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Deserializes JSON data to an instance of the ReligiousCongregation class.
   * The JSON must be valid against the ReligiousCongregation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReligiousCongregation} An instance of ReligiousCongregation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ReligiousCongregation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ReligiousCongregation;

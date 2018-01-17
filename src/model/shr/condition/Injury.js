import { setPropertiesFromJSON } from '../../json-helper';

import Condition from './Condition';

/**
 * Generated class for shr.condition.Injury.
 * @extends Condition
 */
class Injury extends Condition {

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
   * Get the Setting.
   * @returns {Setting} The shr.core.Setting
   */
  get setting() {
    return this._setting;
  }

  /**
   * Set the Setting.
   * @param {Setting} setting - The shr.core.Setting
   */
  set setting(setting) {
    this._setting = setting;
  }

  /**
   * Get the Location.
   * @returns {Location} The shr.core.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Set the Location.
   * @param {Location} location - The shr.core.Location
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Deserializes JSON data to an instance of the Injury class.
   * The JSON must be valid against the Injury JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Injury} An instance of Injury populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Injury();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Injury;

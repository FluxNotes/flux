import { setPropertiesFromJSON } from '../../json-helper';

import OccurrenceTimeOrPeriod from './OccurrenceTimeOrPeriod';

/**
 * Generated class for shr.core.OccurrenceTime.
 * @extends OccurrenceTimeOrPeriod
 */
class OccurrenceTime extends OccurrenceTimeOrPeriod {

  /**
   * Get the value (aliases dateTime).
   * @returns {dateTime} The dateTime
   */
  get value() {
    return this._dateTime;
  }

  /**
   * Set the value (aliases dateTime).
   * @param {dateTime} value - The dateTime
   */
  set value(value) {
    this._dateTime = value;
  }

  /**
   * Get the dateTime.
   * @returns {dateTime} The dateTime
   */
  get dateTime() {
    return this._dateTime;
  }

  /**
   * Set the dateTime.
   * @param {dateTime} dateTime - The dateTime
   */
  set dateTime(dateTime) {
    this._dateTime = dateTime;
  }

  /**
   * Deserializes JSON data to an instance of the OccurrenceTime class.
   * The JSON must be valid against the OccurrenceTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccurrenceTime} An instance of OccurrenceTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OccurrenceTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OccurrenceTime;

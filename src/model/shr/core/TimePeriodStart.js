import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.TimePeriodStart.
 */
class TimePeriodStart {

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
   * Deserializes JSON data to an instance of the TimePeriodStart class.
   * The JSON must be valid against the TimePeriodStart JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimePeriodStart} An instance of TimePeriodStart populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TimePeriodStart();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default TimePeriodStart;

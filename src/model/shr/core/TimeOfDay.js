import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.TimeOfDay.
 */
class TimeOfDay {

  /**
   * Get the value (aliases time).
   * @returns {time} The time
   */
  get value() {
    return this._time;
  }

  /**
   * Set the value (aliases time).
   * @param {time} value - The time
   */
  set value(value) {
    this._time = value;
  }

  /**
   * Get the time.
   * @returns {time} The time
   */
  get time() {
    return this._time;
  }

  /**
   * Set the time.
   * @param {time} time - The time
   */
  set time(time) {
    this._time = time;
  }

  /**
   * Deserializes JSON data to an instance of the TimeOfDay class.
   * The JSON must be valid against the TimeOfDay JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimeOfDay} An instance of TimeOfDay populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TimeOfDay();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default TimeOfDay;

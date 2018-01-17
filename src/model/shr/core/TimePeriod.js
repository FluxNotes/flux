import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.TimePeriod.
 */
class TimePeriod {

  /**
   * Get the TimePeriodStart.
   * @returns {TimePeriodStart} The shr.core.TimePeriodStart
   */
  get timePeriodStart() {
    return this._timePeriodStart;
  }

  /**
   * Set the TimePeriodStart.
   * @param {TimePeriodStart} timePeriodStart - The shr.core.TimePeriodStart
   */
  set timePeriodStart(timePeriodStart) {
    this._timePeriodStart = timePeriodStart;
  }

  /**
   * Get the TimePeriodEnd.
   * @returns {TimePeriodEnd} The shr.core.TimePeriodEnd
   */
  get timePeriodEnd() {
    return this._timePeriodEnd;
  }

  /**
   * Set the TimePeriodEnd.
   * @param {TimePeriodEnd} timePeriodEnd - The shr.core.TimePeriodEnd
   */
  set timePeriodEnd(timePeriodEnd) {
    this._timePeriodEnd = timePeriodEnd;
  }

  /**
   * Deserializes JSON data to an instance of the TimePeriod class.
   * The JSON must be valid against the TimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimePeriod} An instance of TimePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default TimePeriod;

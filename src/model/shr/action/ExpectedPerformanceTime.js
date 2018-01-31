import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ExpectedPerformanceTime.
 */
class ExpectedPerformanceTime {

  /**
   * Get the choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing.
   * @returns {(dateTime|date|TimePeriod|Timing)} The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing.
   * @param {(dateTime|date|TimePeriod|Timing)} value - The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectedPerformanceTime class.
   * The JSON must be valid against the ExpectedPerformanceTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectedPerformanceTime} An instance of ExpectedPerformanceTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectedPerformanceTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ExpectedPerformanceTime;

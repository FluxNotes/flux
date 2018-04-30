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
   * This field/value is required.
   * @param {(dateTime|date|TimePeriod|Timing)} value - The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|date|TimePeriod|Timing)} value - The choice value; one of: dateTime, date, shr.core.TimePeriod, shr.core.Timing
   * @returns {ExpectedPerformanceTime} this.
   */
  withValue(value) {
    this.value = value; return this;
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
  /**
   * Serializes an instance of the ExpectedPerformanceTime class to a JSON object.
   * The JSON is expected to be valid against the ExpectedPerformanceTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/ExpectedPerformanceTime' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default ExpectedPerformanceTime;

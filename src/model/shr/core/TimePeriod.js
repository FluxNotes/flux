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
   * Set the TimePeriodStart and return 'this' for chaining.
   * @param {TimePeriodStart} timePeriodStart - The shr.core.TimePeriodStart
   * @returns {TimePeriod} this.
   */
  withTimePeriodStart(timePeriodStart) {
    this.timePeriodStart = timePeriodStart; return this;
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
   * Set the TimePeriodEnd and return 'this' for chaining.
   * @param {TimePeriodEnd} timePeriodEnd - The shr.core.TimePeriodEnd
   * @returns {TimePeriod} this.
   */
  withTimePeriodEnd(timePeriodEnd) {
    this.timePeriodEnd = timePeriodEnd; return this;
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
  /**
   * Serializes an instance of the TimePeriod class to a JSON object.
   * The JSON is expected to be valid against the TimePeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/TimePeriod' } };
    if (this.timePeriodStart != null) {
      inst['TimePeriodStart'] = typeof this.timePeriodStart.toJSON === 'function' ? this.timePeriodStart.toJSON() : this.timePeriodStart;
    }
    if (this.timePeriodEnd != null) {
      inst['TimePeriodEnd'] = typeof this.timePeriodEnd.toJSON === 'function' ? this.timePeriodEnd.toJSON() : this.timePeriodEnd;
    }
    return inst;
  }
}
export default TimePeriod;

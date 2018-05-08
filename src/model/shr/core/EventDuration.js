import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.EventDuration.
 */
class EventDuration {

  /**
   * Get the value (aliases durationRange).
   * @returns {DurationRange} The shr.core.DurationRange
   */
  get value() {
    return this._durationRange;
  }

  /**
   * Set the value (aliases durationRange).
   * This field/value is required.
   * @param {DurationRange} value - The shr.core.DurationRange
   */
  set value(value) {
    this._durationRange = value;
  }

  /**
   * Set the value (aliases durationRange) and return 'this' for chaining.
   * This field/value is required.
   * @param {DurationRange} value - The shr.core.DurationRange
   * @returns {EventDuration} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the DurationRange.
   * @returns {DurationRange} The shr.core.DurationRange
   */
  get durationRange() {
    return this._durationRange;
  }

  /**
   * Set the DurationRange.
   * This field/value is required.
   * @param {DurationRange} durationRange - The shr.core.DurationRange
   */
  set durationRange(durationRange) {
    this._durationRange = durationRange;
  }

  /**
   * Set the DurationRange and return 'this' for chaining.
   * This field/value is required.
   * @param {DurationRange} durationRange - The shr.core.DurationRange
   * @returns {EventDuration} this.
   */
  withDurationRange(durationRange) {
    this.durationRange = durationRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EventDuration class.
   * The JSON must be valid against the EventDuration JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EventDuration} An instance of EventDuration populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EventDuration();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EventDuration class to a JSON object.
   * The JSON is expected to be valid against the EventDuration JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EventDuration' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default EventDuration;

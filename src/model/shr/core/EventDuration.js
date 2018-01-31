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
   * @param {DurationRange} value - The shr.core.DurationRange
   */
  set value(value) {
    this._durationRange = value;
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
   * @param {DurationRange} durationRange - The shr.core.DurationRange
   */
  set durationRange(durationRange) {
    this._durationRange = durationRange;
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
}
export default EventDuration;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Timing.
 */
class Timing {

  /**
   * Get the OccurrenceTime array.
   * @returns {Array<OccurrenceTime>} The shr.core.OccurrenceTime array
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime array.
   * @param {Array<OccurrenceTime>} occurrenceTime - The shr.core.OccurrenceTime array
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Get the TimingCode.
   * @returns {TimingCode} The shr.core.TimingCode
   */
  get timingCode() {
    return this._timingCode;
  }

  /**
   * Set the TimingCode.
   * @param {TimingCode} timingCode - The shr.core.TimingCode
   */
  set timingCode(timingCode) {
    this._timingCode = timingCode;
  }

  /**
   * Get the EventDuration.
   * @returns {EventDuration} The shr.core.EventDuration
   */
  get eventDuration() {
    return this._eventDuration;
  }

  /**
   * Set the EventDuration.
   * @param {EventDuration} eventDuration - The shr.core.EventDuration
   */
  set eventDuration(eventDuration) {
    this._eventDuration = eventDuration;
  }

  /**
   * Get the RecurrencePattern.
   * @returns {RecurrencePattern} The shr.core.RecurrencePattern
   */
  get recurrencePattern() {
    return this._recurrencePattern;
  }

  /**
   * Set the RecurrencePattern.
   * @param {RecurrencePattern} recurrencePattern - The shr.core.RecurrencePattern
   */
  set recurrencePattern(recurrencePattern) {
    this._recurrencePattern = recurrencePattern;
  }

  /**
   * Get the RecurrenceRange.
   * @returns {RecurrenceRange} The shr.core.RecurrenceRange
   */
  get recurrenceRange() {
    return this._recurrenceRange;
  }

  /**
   * Set the RecurrenceRange.
   * @param {RecurrenceRange} recurrenceRange - The shr.core.RecurrenceRange
   */
  set recurrenceRange(recurrenceRange) {
    this._recurrenceRange = recurrenceRange;
  }

  /**
   * Deserializes JSON data to an instance of the Timing class.
   * The JSON must be valid against the Timing JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Timing} An instance of Timing populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Timing();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Timing;

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
   * Set the OccurrenceTime array and return 'this' for chaining.
   * @param {Array<OccurrenceTime>} occurrenceTime - The shr.core.OccurrenceTime array
   * @returns {Timing} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
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
   * Set the TimingCode and return 'this' for chaining.
   * @param {TimingCode} timingCode - The shr.core.TimingCode
   * @returns {Timing} this.
   */
  withTimingCode(timingCode) {
    this.timingCode = timingCode; return this;
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
   * Set the EventDuration and return 'this' for chaining.
   * @param {EventDuration} eventDuration - The shr.core.EventDuration
   * @returns {Timing} this.
   */
  withEventDuration(eventDuration) {
    this.eventDuration = eventDuration; return this;
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
   * Set the RecurrencePattern and return 'this' for chaining.
   * @param {RecurrencePattern} recurrencePattern - The shr.core.RecurrencePattern
   * @returns {Timing} this.
   */
  withRecurrencePattern(recurrencePattern) {
    this.recurrencePattern = recurrencePattern; return this;
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
   * Set the RecurrenceRange and return 'this' for chaining.
   * @param {RecurrenceRange} recurrenceRange - The shr.core.RecurrenceRange
   * @returns {Timing} this.
   */
  withRecurrenceRange(recurrenceRange) {
    this.recurrenceRange = recurrenceRange; return this;
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
  /**
   * Serializes an instance of the Timing class to a JSON object.
   * The JSON is expected to be valid against the Timing JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Timing' } };
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = this.occurrenceTime.map(f => f.toJSON());
    }
    if (this.timingCode != null) {
      inst['TimingCode'] = typeof this.timingCode.toJSON === 'function' ? this.timingCode.toJSON() : this.timingCode;
    }
    if (this.eventDuration != null) {
      inst['EventDuration'] = typeof this.eventDuration.toJSON === 'function' ? this.eventDuration.toJSON() : this.eventDuration;
    }
    if (this.recurrencePattern != null) {
      inst['RecurrencePattern'] = typeof this.recurrencePattern.toJSON === 'function' ? this.recurrencePattern.toJSON() : this.recurrencePattern;
    }
    if (this.recurrenceRange != null) {
      inst['RecurrenceRange'] = typeof this.recurrenceRange.toJSON === 'function' ? this.recurrenceRange.toJSON() : this.recurrenceRange;
    }
    return inst;
  }
}
export default Timing;

import TimePeriod from '../core/TimePeriod';

/** Generated from SHR definition for shr.core.OccurrenceTime */
class OccurrenceTime {
    constructor(json) {
        if (json.timePeriodStart) {
            this._value = new TimePeriod(json);
        } else {
            this._value = json;
        }
    }

  /**
   * Getter for choice value
   * - dateTime
   * - date
   * - shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - dateTime
   * - date
   * - shr.core.TimePeriod
   */
  set value(val) {
    this._value = val;
  }

}

export default OccurrenceTime;

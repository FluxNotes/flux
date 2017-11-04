/** Generated from SHR definition for shr.core.TimePeriodStart */
class TimePeriodStart {
    constructor(json) {
        this._value = json;
    }

  /**
   * Getter for choice value
   * - dateTime
   * - date
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - dateTime
   * - date
   */
  set value(val) {
    this._value = val;
  }

}

export default TimePeriodStart;

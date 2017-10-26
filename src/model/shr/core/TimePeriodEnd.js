/** Generated from SHR definition for shr.core.TimePeriodEnd */
class TimePeriodEnd {
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

export default TimePeriodEnd;

/** Generated from SHR definition for shr.base.RequestedPerformanceTime */
class RequestedPerformanceTime {

  /**
   * Getter for choice value
   * - dateTime
   * - date
   * - shr.core.TimePeriod
   * - TBD<Timing>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - dateTime
   * - date
   * - shr.core.TimePeriod
   * - TBD<Timing>
   */
  set value(val) {
    this._value = val;
  }

}

export default RequestedPerformanceTime;

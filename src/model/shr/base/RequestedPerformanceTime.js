import Lang from 'lodash';
import TimePeriod from '../core/TimePeriod';

/** Generated from SHR definition for shr.base.RequestedPerformanceTime */
class RequestedPerformanceTime {
    constructor(json) {
        if (Lang.isString(json)) {
            this._value = json;
        } else {
            this._value = new TimePeriod(json);
        }
    }

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

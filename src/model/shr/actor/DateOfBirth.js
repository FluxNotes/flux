import Lang from 'lodash';
import TimePeriod from '../core/TimePeriod';

/** Generated from SHR definition for shr.actor.DateOfBirth */
class DateOfBirth {
    constructor(json) {
        if (Lang.isString(json)) {
            this._value = json;
        } else {
            this._value = new TimePeriod(json);
        }
    }

  /**
   * Getter for choice value
   * - date
   * - shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - date
   * - shr.core.TimePeriod
   */
  set value(val) {
    this._value = val;
  }

}

export default DateOfBirth;

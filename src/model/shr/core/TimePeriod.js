import TimePeriodEnd from './TimePeriodEnd';
import TimePeriodStart from './TimePeriodStart';

/** Generated from SHR definition for shr.core.TimePeriod */
class TimePeriod {
    constructor(json) {
        this._timePeriodStart = new TimePeriodStart(json.timePeriodStart);
        this._timePeriodEnd = new TimePeriodEnd(json.timePeriodEnd);
    }

  /**
   * Getter for shr.core.TimePeriodStart
   */
  get timePeriodStart() {
    return this._timePeriodStart;
  }

  /**
   * Setter for shr.core.TimePeriodStart
   */
  set timePeriodStart(timePeriodStartVal) {
    this._timePeriodStart = timePeriodStartVal;
  }

  /**
   * Getter for shr.core.TimePeriodEnd
   */
  get timePeriodEnd() {
    return this._timePeriodEnd;
  }

  /**
   * Setter for shr.core.TimePeriodEnd
   */
  set timePeriodEnd(timePeriodEndVal) {
    this._timePeriodEnd = timePeriodEndVal;
  }

}

export default TimePeriod;

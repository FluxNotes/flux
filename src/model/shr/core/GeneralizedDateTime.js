import Lang from 'lodash';
import TimePeriod from './TimePeriod';
import QualitativeDateTime from './QualitativeDateTime';

/** Generated from SHR definition for shr.core.GeneralizedDateTime */
class GeneralizedDateTime {
    constructor(json) {
        if (Lang.isString(json)) {
            this._value = json;
        } else if (json.timePeriodStart) {
            this._value = new TimePeriod(json);
        } else {
            this._value = new QualitativeDateTime(json);
        }
    }

  /**
   * Getter for choice value
   * - dateTime
   * - shr.core.TimePeriod
   * - shr.core.QualitativeDateTime
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - dateTime
   * - shr.core.TimePeriod
   * - shr.core.QualitativeDateTime
   */
  set value(val) {
    this._value = val;
  }

}

export default GeneralizedDateTime;

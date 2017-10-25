/** Generated from SHR definition for shr.core.GeneralizedDateTime */
class GeneralizedDateTime {

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

/** Generated from SHR definition for shr.core.GeneralizedDuration */
class GeneralizedDuration {

  /**
   * Getter for choice value
   * - shr.core.Duration
   * - shr.core.SemiquantDuration
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Duration
   * - shr.core.SemiquantDuration
   */
  set value(val) {
    this._value = val;
  }

}

export default GeneralizedDuration;

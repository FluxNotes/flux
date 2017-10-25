/** Generated from SHR definition for shr.core.GeneralizedTemporalContext */
class GeneralizedTemporalContext {

  /**
   * Getter for choice value
   * - shr.core.GeneralizedDateTime
   * - shr.core.GeneralizedAge
   * - shr.core.GestationalTemporalContext
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.GeneralizedDateTime
   * - shr.core.GeneralizedAge
   * - shr.core.GestationalTemporalContext
   */
  set value(val) {
    this._value = val;
  }

}

export default GeneralizedTemporalContext;

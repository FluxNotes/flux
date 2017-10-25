/** Generated from SHR definition for shr.core.GeneralizedFrequency */
class GeneralizedFrequency {

  /**
   * Getter for choice value
   * - shr.core.Frequency
   * - shr.core.SemiquantFrequency
   * - shr.core.QualitativeFrequency
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Frequency
   * - shr.core.SemiquantFrequency
   * - shr.core.QualitativeFrequency
   */
  set value(val) {
    this._value = val;
  }

}

export default GeneralizedFrequency;

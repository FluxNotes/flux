//import GeneralizedAge from './GeneralizedAge';
import GeneralizedDateTime from './GeneralizedDateTime';

/** Generated from SHR definition for shr.core.GeneralizedTemporalContext */
class GeneralizedTemporalContext {
    constructor(json) {
        this._value = new GeneralizedDateTime(json);
    }

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

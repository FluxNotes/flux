import GeneralizedTemporalContext from '../core/GeneralizedTemporalContext';
import Lang from 'lodash';
import moment from 'moment';

/** Generated from SHR definition for shr.condition.WhenClinicallyRecognized */
class WhenClinicallyRecognized {
    constructor(json) {
        if (json) {
            this.generalizedTemporalContext = new GeneralizedTemporalContext(json.generalizedTemporalContext);
            this._generalizedTemporalContext = this.generalizedTemporalContext;
        }
    }

    fromFHIR(dateTime) {
        this._generalizedTemporalContext = new GeneralizedTemporalContext(new moment(dateTime).format('D MMM YYYY'));
    }

    get time() {
        if (Lang.isUndefined(this._generalizedTemporalContext.value.value.timePeriodStart)) return this._generalizedTemporalContext.value.value;
        return this._generalizedTemporalContext.value.value.timePeriodStart.value;
      }

  /**
   * Convenience getter for value (accesses this.generalizedTemporalContext)
   */
  get value() {
    return this.generalizedTemporalContext;
  }

  /**
   * Convenience setter for value (sets this.generalizedTemporalContext)
   */
  set value(val) {
    this.generalizedTemporalContext = val;
  }

  /**
   * Getter for shr.core.GeneralizedTemporalContext
   */
  get generalizedTemporalContext() {
    return this._generalizedTemporalContext;
  }

  /**
   * Setter for shr.core.GeneralizedTemporalContext
   */
  set generalizedTemporalContext(generalizedTemporalContextVal) {
    this._generalizedTemporalContext = generalizedTemporalContextVal;
  }

}

export default WhenClinicallyRecognized;

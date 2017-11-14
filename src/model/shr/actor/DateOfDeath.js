import GeneralizedDateTime from '../core/GeneralizedDateTime';

/** Generated from SHR definition for shr.actor.DateOfDeath */
class DateOfDeath {
    constructor(json) {
        if (json) {
            this.generalizedDateTime = new GeneralizedDateTime(json);
        } else {
            this.generalizedDateTime = new GeneralizedDateTime();
        }
        this._generalizedDateTime = this.generalizedDateTime;
    }

  /**
   * Convenience getter for value (accesses this.generalizedDateTime)
   */
  get value() {
    return this.generalizedDateTime;
  }

  /**
   * Convenience setter for value (sets this.generalizedDateTime)
   */
  set value(val) {
    this.generalizedDateTime = val;
  }

  /**
   * Getter for shr.core.GeneralizedDateTime
   */
  get generalizedDateTime() {
    return this._generalizedDateTime;
  }

  /**
   * Setter for shr.core.GeneralizedDateTime
   */
  set generalizedDateTime(generalizedDateTimeVal) {
    this._generalizedDateTime = generalizedDateTimeVal;
  }

}

export default DateOfDeath;

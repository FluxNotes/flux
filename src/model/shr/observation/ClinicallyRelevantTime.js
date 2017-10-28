/** Generated from SHR definition for shr.observation.ClinicallyRelevantTime */
class ClinicallyRelevantTime {
    constructor(json) {
        if (json) {
            this.generalizedTemporalContext = new GeneralizedTemporalContext(json);
            this._generalizedTemporalContext = this.generalizedTemporalContext;
        }
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

export default ClinicallyRelevantTime;

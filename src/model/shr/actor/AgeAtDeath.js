import GeneralizedAge from '../core/GeneralizedAge';

/** Generated from SHR definition for shr.actor.AgeAtDeath */
class AgeAtDeath {
    constructor(json) {
        if (json) {
            this.generalizedAge = new GeneralizedAge(json.value);
            this._generalizedAge = this.generalizedAge;
        }
    }

  /**
   * Convenience getter for value (accesses this.generalizedAge)
   */
  get value() {
    return this.generalizedAge;
  }

  /**
   * Convenience setter for value (sets this.generalizedAge)
   */
  set value(val) {
    this.generalizedAge = val;
  }

  /**
   * Getter for shr.core.GeneralizedAge
   */
  get generalizedAge() {
    return this._generalizedAge;
  }

  /**
   * Setter for shr.core.GeneralizedAge
   */
  set generalizedAge(generalizedAgeVal) {
    this._generalizedAge = generalizedAgeVal;
  }

}

export default AgeAtDeath;

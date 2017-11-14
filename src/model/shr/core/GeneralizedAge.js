import Age from './Age';
import AgeGroup from './AgeGroup';
import AgeRange from './AgeRange';

/** Generated from SHR definition for shr.core.GeneralizedAge */
class GeneralizedAge {
    constructor(json) {
        if (json) {
            if (json.value && json.value.upperAgeBound) {
                this._value = new AgeRange(json.value);
            } else if (json.value && json.value.coding) {
                this._value = new AgeGroup(json.value);
            } else {
                this._value = new Age(json.value);
            }
        }
    }

  /**
   * Getter for choice value
   * - shr.core.Age
   * - shr.core.AgeRange
   * - shr.core.AgeGroup
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Age
   * - shr.core.AgeRange
   * - shr.core.AgeGroup
   */
  set value(val) {
    this._value = val;
  }

}

export default GeneralizedAge;

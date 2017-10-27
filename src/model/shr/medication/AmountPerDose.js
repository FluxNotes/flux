import Quantity from '../core/Quantity';
import Range from '../core/Range';

/** Generated from SHR definition for shr.medication.AmountPerDose */
class AmountPerDose {
    constructor(json) {
        if (json.lowerBound || json.upperBound) {
            this._value = new Range(json);
        } else {
            this._value = new Quantity(json);
        }
    }

  /**
   * Getter for choice value
   * - shr.core.Quantity
   * - shr.core.Range
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Quantity
   * - shr.core.Range
   */
  set value(val) {
    this._value = val;
  }

}

export default AmountPerDose;

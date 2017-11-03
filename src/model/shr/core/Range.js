import LowerBound from './LowerBound';
import UpperBound from './UpperBound';

/** Generated from SHR definition for shr.core.Range */
class Range {
    constructor(json) {
        if (json.lowerBound) this._lowerBound = new LowerBound(json.lowerBound);
        if (json.upperBound) this._upperBound = new UpperBound(json.upperBound);
    }
  /**
   * Getter for shr.core.LowerBound
   */
  get lowerBound() {
    return this._lowerBound;
  }

  /**
   * Setter for shr.core.LowerBound
   */
  set lowerBound(lowerBoundVal) {
    this._lowerBound = lowerBoundVal;
  }

  /**
   * Getter for shr.core.UpperBound
   */
  get upperBound() {
    return this._upperBound;
  }

  /**
   * Setter for shr.core.UpperBound
   */
  set upperBound(upperBoundVal) {
    this._upperBound = upperBoundVal;
  }

}

export default Range;

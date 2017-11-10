import Quantity from './Quantity';

/** Generated from SHR definition for shr.core.Duration */
class Duration extends Quantity {
  /**
   * Getter for shr.core.Units
   */
  get units() {
    return this._units;
  }

  /**
   * Setter for shr.core.Units
   */
  set units(unitsVal) {
    this._units = unitsVal;
  }

}

export default Duration;

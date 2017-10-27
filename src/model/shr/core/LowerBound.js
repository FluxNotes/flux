import BoundType from './BoundType';
import Quantity from '../core/Quantity';

/** Generated from SHR definition for shr.core.LowerBound */
class LowerBound {
    constructor(json) {
        this.quantity = new Quantity(json.value);
        this._quantity = this.quantity;
        if (json.boundType) this._boundType = new BoundType(json.boundType);
    }
  /**
   * Convenience getter for value (accesses this.quantity)
   */
  get value() {
    return this.quantity;
  }

  /**
   * Convenience setter for value (sets this.quantity)
   */
  set value(val) {
    this.quantity = val;
  }

  /**
   * Getter for shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Setter for shr.core.Quantity
   */
  set quantity(quantityVal) {
    this._quantity = quantityVal;
  }

  /**
   * Getter for shr.core.BoundType
   */
  get boundType() {
    return this._boundType;
  }

  /**
   * Setter for shr.core.BoundType
   */
  set boundType(boundTypeVal) {
    this._boundType = boundTypeVal;
  }

}

export default LowerBound;

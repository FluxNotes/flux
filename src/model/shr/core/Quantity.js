import Units from '../core/Units';

/** Generated from SHR definition for shr.core.Quantity */
class Quantity {
    constructor(json) {
        this.decimal = json.value;
        this._decimal = json.value;
        this._units = new Units(json.units);
    }

  /**
   * Convenience getter for value (accesses this.decimal)
   */
  get value() {
    return this.decimal;
  }

  /**
   * Convenience setter for value (sets this.decimal)
   */
  set value(val) {
    this.decimal = val;
  }

  /**
   * Getter for decimal
   */
  get decimal() {
    return this._decimal;
  }

  /**
   * Setter for decimal
   */
  set decimal(decimalVal) {
    this._decimal = decimalVal;
  }

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

export default Quantity;

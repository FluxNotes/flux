import VitalSign from './VitalSign';

/** Generated from SHR definition for shr.vital.BodyMassIndex */
class BodyMassIndex extends VitalSign {

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
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
   * Getter for Reference<shr.vital.BodyWeight>
   */
  get bodyWeight() {
    return this._bodyWeight;
  }

  /**
   * Setter for Reference<shr.vital.BodyWeight>
   */
  set bodyWeight(bodyWeightVal) {
    this._bodyWeight = bodyWeightVal;
  }

  /**
   * Getter for Reference<shr.vital.BodyHeight>
   */
  get bodyHeight() {
    return this._bodyHeight;
  }

  /**
   * Setter for Reference<shr.vital.BodyHeight>
   */
  set bodyHeight(bodyHeightVal) {
    this._bodyHeight = bodyHeightVal;
  }

}

export default BodyMassIndex;

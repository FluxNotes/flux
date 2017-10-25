import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.lifehistory.ServiceConnectedDisability */
class ServiceConnectedDisability extends Observation {

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

}

export default ServiceConnectedDisability;

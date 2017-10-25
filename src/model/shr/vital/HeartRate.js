import VitalSign from './VitalSign';

/** Generated from SHR definition for shr.vital.HeartRate */
class HeartRate extends VitalSign {

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
   * Getter for shr.observation.ObservationQualifier
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Setter for shr.observation.ObservationQualifier
   */
  set observationQualifier(observationQualifierVal) {
    this._observationQualifier = observationQualifierVal;
  }

  /**
   * Getter for shr.lab.TestMethod
   */
  get testMethod() {
    return this._testMethod;
  }

  /**
   * Setter for shr.lab.TestMethod
   */
  set testMethod(testMethodVal) {
    this._testMethod = testMethodVal;
  }

}

export default HeartRate;

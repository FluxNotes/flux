/** Generated from SHR definition for shr.device.Device */
class Device {

  /**
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.device.DeviceUdi[]
   */
  get deviceUdi() {
    return this._deviceUdi;
  }

  /**
   * Setter for shr.device.DeviceUdi[]
   */
  set deviceUdi(deviceUdiVal) {
    this._deviceUdi = deviceUdiVal;
  }

  /**
   * Getter for shr.device.VendorModelNumber
   */
  get vendorModelNumber() {
    return this._vendorModelNumber;
  }

  /**
   * Setter for shr.device.VendorModelNumber
   */
  set vendorModelNumber(vendorModelNumberVal) {
    this._vendorModelNumber = vendorModelNumberVal;
  }

}

export default Device;

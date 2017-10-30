/** Generated from SHR definition for shr.device.DeviceUse */
class DeviceUse {

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
   * Getter for shr.device.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Setter for shr.device.Device
   */
  set device(deviceVal) {
    this._device = deviceVal;
  }

  /**
   * Getter for shr.device.DeviceUseStatus
   */
  get deviceUseStatus() {
    return this._deviceUseStatus;
  }

  /**
   * Setter for shr.device.DeviceUseStatus
   */
  set deviceUseStatus(deviceUseStatusVal) {
    this._deviceUseStatus = deviceUseStatusVal;
  }

  /**
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
  }

  /**
   * Getter for shr.device.Implanted
   */
  get implanted() {
    return this._implanted;
  }

  /**
   * Setter for shr.device.Implanted
   */
  set implanted(implantedVal) {
    this._implanted = implantedVal;
  }

  /**
   * Getter for shr.core.Reason[]
   */
  get reason() {
    return this._reason;
  }

  /**
   * Setter for shr.core.Reason[]
   */
  set reason(reasonVal) {
    this._reason = reasonVal;
  }

  /**
   * Getter for shr.core.PeriodOfUse
   */
  get periodOfUse() {
    return this._periodOfUse;
  }

  /**
   * Setter for shr.core.PeriodOfUse
   */
  set periodOfUse(periodOfUseVal) {
    this._periodOfUse = periodOfUseVal;
  }

}

export default DeviceUse;

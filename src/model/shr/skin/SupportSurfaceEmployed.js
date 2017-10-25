import DeviceUse from '../device/DeviceUse';

/** Generated from SHR definition for shr.skin.SupportSurfaceEmployed */
class SupportSurfaceEmployed extends DeviceUse {

  /**
   * Convenience getter for value (accesses this.device)
   */
  get value() {
    return this.device;
  }

  /**
   * Convenience setter for value (sets this.device)
   */
  set value(val) {
    this.device = val;
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
   * Getter for shr.skin.ImmersionDepth
   */
  get immersionDepth() {
    return this._immersionDepth;
  }

  /**
   * Setter for shr.skin.ImmersionDepth
   */
  set immersionDepth(immersionDepthVal) {
    this._immersionDepth = immersionDepthVal;
  }

}

export default SupportSurfaceEmployed;

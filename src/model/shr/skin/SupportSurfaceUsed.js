import { setPropertiesFromJSON } from '../../json-helper';

import DeviceUsed from '../device/DeviceUsed';

/**
 * Generated class for shr.skin.SupportSurfaceUsed.
 * @extends DeviceUsed
 */
class SupportSurfaceUsed extends DeviceUsed {

  /**
   * Get the value (aliases device).
   * @returns {SupportSurface} The shr.skin.SupportSurface
   */
  get value() {
    return this._device;
  }

  /**
   * Set the value (aliases device).
   * @param {SupportSurface} value - The shr.skin.SupportSurface
   */
  set value(value) {
    this._device = value;
  }

  /**
   * Get the SupportSurface.
   * @returns {SupportSurface} The shr.skin.SupportSurface
   */
  get device() {
    return this._device;
  }

  /**
   * Set the SupportSurface.
   * @param {SupportSurface} device - The shr.skin.SupportSurface
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Get the Implanted.
   * @returns {Implanted} The shr.device.Implanted
   */
  get implanted() {
    return this._implanted;
  }

  /**
   * Set the Implanted.
   * @param {Implanted} implanted - The shr.device.Implanted
   */
  set implanted(implanted) {
    this._implanted = implanted;
  }

  /**
   * Get the ImmersionDepth.
   * @returns {ImmersionDepth} The shr.skin.ImmersionDepth
   */
  get immersionDepth() {
    return this._immersionDepth;
  }

  /**
   * Set the ImmersionDepth.
   * @param {ImmersionDepth} immersionDepth - The shr.skin.ImmersionDepth
   */
  set immersionDepth(immersionDepth) {
    this._immersionDepth = immersionDepth;
  }

  /**
   * Deserializes JSON data to an instance of the SupportSurfaceUsed class.
   * The JSON must be valid against the SupportSurfaceUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SupportSurfaceUsed} An instance of SupportSurfaceUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SupportSurfaceUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SupportSurfaceUsed;

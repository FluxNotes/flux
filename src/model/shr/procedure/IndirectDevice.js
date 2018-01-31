import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.IndirectDevice.
 */
class IndirectDevice {

  /**
   * Get the value (aliases device).
   * @returns {Device} The shr.device.Device
   */
  get value() {
    return this._device;
  }

  /**
   * Set the value (aliases device).
   * @param {Device} value - The shr.device.Device
   */
  set value(value) {
    this._device = value;
  }

  /**
   * Get the Device.
   * @returns {Device} The shr.device.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Set the Device.
   * @param {Device} device - The shr.device.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Deserializes JSON data to an instance of the IndirectDevice class.
   * The JSON must be valid against the IndirectDevice JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IndirectDevice} An instance of IndirectDevice populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new IndirectDevice();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default IndirectDevice;

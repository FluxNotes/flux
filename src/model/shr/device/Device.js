import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.device.Device.
 * @extends Entity
 */
class Device extends Entity {

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the DeviceUdi array.
   * @returns {Array<DeviceUdi>} The shr.device.DeviceUdi array
   */
  get deviceUdi() {
    return this._deviceUdi;
  }

  /**
   * Set the DeviceUdi array.
   * @param {Array<DeviceUdi>} deviceUdi - The shr.device.DeviceUdi array
   */
  set deviceUdi(deviceUdi) {
    this._deviceUdi = deviceUdi;
  }

  /**
   * Get the VendorModelNumber.
   * @returns {VendorModelNumber} The shr.device.VendorModelNumber
   */
  get vendorModelNumber() {
    return this._vendorModelNumber;
  }

  /**
   * Set the VendorModelNumber.
   * @param {VendorModelNumber} vendorModelNumber - The shr.device.VendorModelNumber
   */
  set vendorModelNumber(vendorModelNumber) {
    this._vendorModelNumber = vendorModelNumber;
  }

  /**
   * Deserializes JSON data to an instance of the Device class.
   * The JSON must be valid against the Device JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Device} An instance of Device populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Device();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Device;

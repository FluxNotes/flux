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
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {Device} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Set the DeviceUdi array and return 'this' for chaining.
   * @param {Array<DeviceUdi>} deviceUdi - The shr.device.DeviceUdi array
   * @returns {Device} this.
   */
  withDeviceUdi(deviceUdi) {
    this.deviceUdi = deviceUdi; return this;
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
   * Set the VendorModelNumber and return 'this' for chaining.
   * @param {VendorModelNumber} vendorModelNumber - The shr.device.VendorModelNumber
   * @returns {Device} this.
   */
  withVendorModelNumber(vendorModelNumber) {
    this.vendorModelNumber = vendorModelNumber; return this;
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
  /**
   * Serializes an instance of the Device class to a JSON object.
   * The JSON is expected to be valid against the Device JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/device/Device' } };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.deviceUdi != null) {
      inst['DeviceUdi'] = this.deviceUdi.map(f => f.toJSON());
    }
    if (this.vendorModelNumber != null) {
      inst['VendorModelNumber'] = typeof this.vendorModelNumber.toJSON === 'function' ? this.vendorModelNumber.toJSON() : this.vendorModelNumber;
    }
    return inst;
  }
}
export default Device;

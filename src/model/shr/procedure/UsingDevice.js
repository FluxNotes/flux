import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.UsingDevice.
 */
class UsingDevice {

  /**
   * Get the value (aliases device).
   * @returns {Device} The shr.device.Device
   */
  get value() {
    return this._device;
  }

  /**
   * Set the value (aliases device).
   * This field/value is required.
   * @param {Device} value - The shr.device.Device
   */
  set value(value) {
    this._device = value;
  }

  /**
   * Set the value (aliases device) and return 'this' for chaining.
   * This field/value is required.
   * @param {Device} value - The shr.device.Device
   * @returns {UsingDevice} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Device} device - The shr.device.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the Device and return 'this' for chaining.
   * This field/value is required.
   * @param {Device} device - The shr.device.Device
   * @returns {UsingDevice} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Deserializes JSON data to an instance of the UsingDevice class.
   * The JSON must be valid against the UsingDevice JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UsingDevice} An instance of UsingDevice populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UsingDevice();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the UsingDevice class to a JSON object.
   * The JSON is expected to be valid against the UsingDevice JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/UsingDevice' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default UsingDevice;

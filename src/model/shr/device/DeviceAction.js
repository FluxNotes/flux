import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.device.DeviceAction.
 * @extends Action
 */
class DeviceAction extends Action {

  /**
   * Get the Subject.
   * @returns {Subject} The shr.base.Subject
   */
  get subject() {
    return this._subject;
  }

  /**
   * Set the Subject.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
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
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Deserializes JSON data to an instance of the DeviceAction class.
   * The JSON must be valid against the DeviceAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DeviceAction} An instance of DeviceAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DeviceAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DeviceAction;

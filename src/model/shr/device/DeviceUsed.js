import { setPropertiesFromJSON } from '../../json-helper';

import DeviceAction from './DeviceAction';

/**
 * Generated class for shr.device.DeviceUsed.
 * @extends DeviceAction
 */
class DeviceUsed extends DeviceAction {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Get the PerformedContext.
   * @returns {PerformedContext} The shr.action.PerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the PerformedContext.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Deserializes JSON data to an instance of the DeviceUsed class.
   * The JSON must be valid against the DeviceUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DeviceUsed} An instance of DeviceUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DeviceUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DeviceUsed;

import { setPropertiesFromJSON } from '../../json-helper';

import DeviceAction from './DeviceAction';

/**
 * Generated class for shr.device.DeviceNotUsed.
 * @extends DeviceAction
 */
class DeviceNotUsed extends DeviceAction {

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
   * Get the NotPerformedContext.
   * @returns {NotPerformedContext} The shr.action.NotPerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the NotPerformedContext.
   * @param {NotPerformedContext} actionContext - The shr.action.NotPerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Deserializes JSON data to an instance of the DeviceNotUsed class.
   * The JSON must be valid against the DeviceNotUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DeviceNotUsed} An instance of DeviceNotUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DeviceNotUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DeviceNotUsed;

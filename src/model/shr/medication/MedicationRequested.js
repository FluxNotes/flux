import { setPropertiesFromJSON } from '../../json-helper';

import MedicationDispenseAction from './MedicationDispenseAction';

/**
 * Generated class for shr.medication.MedicationRequested.
 * @extends MedicationDispenseAction
 */
class MedicationRequested extends MedicationDispenseAction {

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
   * Get the RequestedContext.
   * @returns {RequestedContext} The shr.action.RequestedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedContext.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationRequested class.
   * The JSON must be valid against the MedicationRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationRequested} An instance of MedicationRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationRequested;

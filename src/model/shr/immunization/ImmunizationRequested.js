import { setPropertiesFromJSON } from '../../json-helper';

import ImmunizationAction from './ImmunizationAction';

/**
 * Generated class for shr.immunization.ImmunizationRequested.
 * @extends ImmunizationAction
 */
class ImmunizationRequested extends ImmunizationAction {

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

  // Ommitting getter/setter for TBD: DoseSequenceNumber

  /**
   * Deserializes JSON data to an instance of the ImmunizationRequested class.
   * The JSON must be valid against the ImmunizationRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationRequested} An instance of ImmunizationRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImmunizationRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImmunizationRequested;

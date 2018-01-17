import { setPropertiesFromJSON } from '../../json-helper';

import ImmunizationAction from './ImmunizationAction';

/**
 * Generated class for shr.immunization.ImmunizationNotGiven.
 * @extends ImmunizationAction
 */
class ImmunizationNotGiven extends ImmunizationAction {

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

  // Ommitting getter/setter for TBD: DoseSequenceNumber

  /**
   * Deserializes JSON data to an instance of the ImmunizationNotGiven class.
   * The JSON must be valid against the ImmunizationNotGiven JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationNotGiven} An instance of ImmunizationNotGiven populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImmunizationNotGiven();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImmunizationNotGiven;

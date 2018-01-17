import { setPropertiesFromJSON } from '../../json-helper';

import ImmunizationAction from './ImmunizationAction';

/**
 * Generated class for shr.immunization.ImmunizationGiven.
 * @extends ImmunizationAction
 */
class ImmunizationGiven extends ImmunizationAction {

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

  // Ommitting getter/setter for TBD: DoseSequenceNumber

  /**
   * Deserializes JSON data to an instance of the ImmunizationGiven class.
   * The JSON must be valid against the ImmunizationGiven JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationGiven} An instance of ImmunizationGiven populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImmunizationGiven();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImmunizationGiven;

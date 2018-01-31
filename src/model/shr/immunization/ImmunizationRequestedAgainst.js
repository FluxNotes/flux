import { setPropertiesFromJSON } from '../../json-helper';

import ImmunizationAction from './ImmunizationAction';

/**
 * Generated class for shr.immunization.ImmunizationRequestedAgainst.
 * @extends ImmunizationAction
 */
class ImmunizationRequestedAgainst extends ImmunizationAction {

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
   * Get the RequestedAgainstContext.
   * @returns {RequestedAgainstContext} The shr.action.RequestedAgainstContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedAgainstContext.
   * @param {RequestedAgainstContext} actionContext - The shr.action.RequestedAgainstContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  // Ommitting getter/setter for TBD: DoseSequenceNumber

  /**
   * Deserializes JSON data to an instance of the ImmunizationRequestedAgainst class.
   * The JSON must be valid against the ImmunizationRequestedAgainst JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationRequestedAgainst} An instance of ImmunizationRequestedAgainst populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImmunizationRequestedAgainst();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImmunizationRequestedAgainst;

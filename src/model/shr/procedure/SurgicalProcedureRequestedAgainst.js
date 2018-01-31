import { setPropertiesFromJSON } from '../../json-helper';

import SurgicalProcedure from './SurgicalProcedure';

/**
 * Generated class for shr.procedure.SurgicalProcedureRequestedAgainst.
 * @extends SurgicalProcedure
 */
class SurgicalProcedureRequestedAgainst extends SurgicalProcedure {

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

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedureRequestedAgainst class.
   * The JSON must be valid against the SurgicalProcedureRequestedAgainst JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedureRequestedAgainst} An instance of SurgicalProcedureRequestedAgainst populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedureRequestedAgainst();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SurgicalProcedureRequestedAgainst;

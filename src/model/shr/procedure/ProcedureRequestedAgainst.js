import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.ProcedureRequestedAgainst.
 * @extends ProcedureAction
 */
class ProcedureRequestedAgainst extends ProcedureAction {

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
   * Deserializes JSON data to an instance of the ProcedureRequestedAgainst class.
   * The JSON must be valid against the ProcedureRequestedAgainst JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureRequestedAgainst} An instance of ProcedureRequestedAgainst populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedureRequestedAgainst();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ProcedureRequestedAgainst;

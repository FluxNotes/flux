import { setPropertiesFromJSON } from '../../json-helper';

import ContraceptiveAction from './ContraceptiveAction';

/**
 * Generated class for shr.sex.ContraceptiveMethodRequestedAgainst.
 * @extends ContraceptiveAction
 */
class ContraceptiveMethodRequestedAgainst extends ContraceptiveAction {

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
   * Deserializes JSON data to an instance of the ContraceptiveMethodRequestedAgainst class.
   * The JSON must be valid against the ContraceptiveMethodRequestedAgainst JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContraceptiveMethodRequestedAgainst} An instance of ContraceptiveMethodRequestedAgainst populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ContraceptiveMethodRequestedAgainst();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ContraceptiveMethodRequestedAgainst;

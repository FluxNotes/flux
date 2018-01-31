import { setPropertiesFromJSON } from '../../json-helper';

import ContraceptiveAction from './ContraceptiveAction';

/**
 * Generated class for shr.sex.ContraceptiveMethodRequested.
 * @extends ContraceptiveAction
 */
class ContraceptiveMethodRequested extends ContraceptiveAction {

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
   * Deserializes JSON data to an instance of the ContraceptiveMethodRequested class.
   * The JSON must be valid against the ContraceptiveMethodRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContraceptiveMethodRequested} An instance of ContraceptiveMethodRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ContraceptiveMethodRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ContraceptiveMethodRequested;

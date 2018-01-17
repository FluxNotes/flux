import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.ProcedureNotPerformed.
 * @extends ProcedureAction
 */
class ProcedureNotPerformed extends ProcedureAction {

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
   * Deserializes JSON data to an instance of the ProcedureNotPerformed class.
   * The JSON must be valid against the ProcedureNotPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureNotPerformed} An instance of ProcedureNotPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedureNotPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ProcedureNotPerformed;

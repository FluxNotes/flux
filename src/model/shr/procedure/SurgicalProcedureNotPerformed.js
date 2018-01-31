import { setPropertiesFromJSON } from '../../json-helper';

import SurgicalProcedure from './SurgicalProcedure';

/**
 * Generated class for shr.procedure.SurgicalProcedureNotPerformed.
 * @extends SurgicalProcedure
 */
class SurgicalProcedureNotPerformed extends SurgicalProcedure {

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
   * Deserializes JSON data to an instance of the SurgicalProcedureNotPerformed class.
   * The JSON must be valid against the SurgicalProcedureNotPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedureNotPerformed} An instance of SurgicalProcedureNotPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedureNotPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SurgicalProcedureNotPerformed;

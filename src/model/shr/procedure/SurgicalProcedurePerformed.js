import { setPropertiesFromJSON } from '../../json-helper';

import SurgicalProcedure from './SurgicalProcedure';

/**
 * Generated class for shr.procedure.SurgicalProcedurePerformed.
 * @extends SurgicalProcedure
 */
class SurgicalProcedurePerformed extends SurgicalProcedure {

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

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedurePerformed class.
   * The JSON must be valid against the SurgicalProcedurePerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedurePerformed} An instance of SurgicalProcedurePerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedurePerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SurgicalProcedurePerformed;

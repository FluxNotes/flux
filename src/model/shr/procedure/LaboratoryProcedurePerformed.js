import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryProcedure from './LaboratoryProcedure';

/**
 * Generated class for shr.procedure.LaboratoryProcedurePerformed.
 * @extends LaboratoryProcedure
 */
class LaboratoryProcedurePerformed extends LaboratoryProcedure {

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
   * Deserializes JSON data to an instance of the LaboratoryProcedurePerformed class.
   * The JSON must be valid against the LaboratoryProcedurePerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryProcedurePerformed} An instance of LaboratoryProcedurePerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryProcedurePerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default LaboratoryProcedurePerformed;

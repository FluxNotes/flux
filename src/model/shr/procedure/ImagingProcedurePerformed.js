import { setPropertiesFromJSON } from '../../json-helper';

import ImagingAction from './ImagingAction';

/**
 * Generated class for shr.procedure.ImagingProcedurePerformed.
 * @extends ImagingAction
 */
class ImagingProcedurePerformed extends ImagingAction {

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
   * Deserializes JSON data to an instance of the ImagingProcedurePerformed class.
   * The JSON must be valid against the ImagingProcedurePerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingProcedurePerformed} An instance of ImagingProcedurePerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImagingProcedurePerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImagingProcedurePerformed;

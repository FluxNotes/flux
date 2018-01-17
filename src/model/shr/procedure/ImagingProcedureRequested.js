import { setPropertiesFromJSON } from '../../json-helper';

import ImagingAction from './ImagingAction';

/**
 * Generated class for shr.procedure.ImagingProcedureRequested.
 * @extends ImagingAction
 */
class ImagingProcedureRequested extends ImagingAction {

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
   * Deserializes JSON data to an instance of the ImagingProcedureRequested class.
   * The JSON must be valid against the ImagingProcedureRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingProcedureRequested} An instance of ImagingProcedureRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImagingProcedureRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImagingProcedureRequested;

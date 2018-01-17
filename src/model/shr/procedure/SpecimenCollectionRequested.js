import { setPropertiesFromJSON } from '../../json-helper';

import SpecimenCollectionAction from './SpecimenCollectionAction';

/**
 * Generated class for shr.procedure.SpecimenCollectionRequested.
 * @extends SpecimenCollectionAction
 */
class SpecimenCollectionRequested extends SpecimenCollectionAction {

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
   * Deserializes JSON data to an instance of the SpecimenCollectionRequested class.
   * The JSON must be valid against the SpecimenCollectionRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionRequested} An instance of SpecimenCollectionRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SpecimenCollectionRequested;

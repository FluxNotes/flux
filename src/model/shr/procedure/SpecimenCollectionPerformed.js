import { setPropertiesFromJSON } from '../../json-helper';

import SpecimenCollectionAction from './SpecimenCollectionAction';

/**
 * Generated class for shr.procedure.SpecimenCollectionPerformed.
 * @extends SpecimenCollectionAction
 */
class SpecimenCollectionPerformed extends SpecimenCollectionAction {

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
   * Get the BodySite array.
   * @returns {Array<BodySite>} The shr.entity.BodySite array
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite array.
   * @param {Array<BodySite>} bodySite - The shr.entity.BodySite array
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionPerformed class.
   * The JSON must be valid against the SpecimenCollectionPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionPerformed} An instance of SpecimenCollectionPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SpecimenCollectionPerformed;

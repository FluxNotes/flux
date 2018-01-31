import { setPropertiesFromJSON } from '../../json-helper';

import MedicationAction from './MedicationAction';

/**
 * Generated class for shr.medication.MedicationUsed.
 * @extends MedicationAction
 */
class MedicationUsed extends MedicationAction {

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
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
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
   * Deserializes JSON data to an instance of the MedicationUsed class.
   * The JSON must be valid against the MedicationUsed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationUsed} An instance of MedicationUsed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationUsed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationUsed;

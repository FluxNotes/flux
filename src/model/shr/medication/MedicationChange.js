import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.medication.MedicationChange.
 * @extends Action
 */
class MedicationChange extends Action {

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
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
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
   * Get the MedicationBeforeChange array.
   * @returns {Array<MedicationBeforeChange>} The shr.medication.MedicationBeforeChange array
   */
  get medicationBeforeChange() {
    return this._medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   */
  set medicationBeforeChange(medicationBeforeChange) {
    this._medicationBeforeChange = medicationBeforeChange;
  }

  /**
   * Get the MedicationAfterChange array.
   * @returns {Array<MedicationAfterChange>} The shr.medication.MedicationAfterChange array
   */
  get medicationAfterChange() {
    return this._medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   */
  set medicationAfterChange(medicationAfterChange) {
    this._medicationAfterChange = medicationAfterChange;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationChange class.
   * The JSON must be valid against the MedicationChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationChange} An instance of MedicationChange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationChange;

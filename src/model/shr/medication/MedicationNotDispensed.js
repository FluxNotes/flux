import { setPropertiesFromJSON } from '../../json-helper';

import MedicationDispenseAction from './MedicationDispenseAction';

/**
 * Generated class for shr.medication.MedicationNotDispensed.
 * @extends MedicationDispenseAction
 */
class MedicationNotDispensed extends MedicationDispenseAction {

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
   * Deserializes JSON data to an instance of the MedicationNotDispensed class.
   * The JSON must be valid against the MedicationNotDispensed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotDispensed} An instance of MedicationNotDispensed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotDispensed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationNotDispensed;

import { setPropertiesFromJSON } from '../../json-helper';

import MedicationDispenseAction from './MedicationDispenseAction';

/**
 * Generated class for shr.medication.MedicationDispensed.
 * @extends MedicationDispenseAction
 */
class MedicationDispensed extends MedicationDispenseAction {

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
   * Deserializes JSON data to an instance of the MedicationDispensed class.
   * The JSON must be valid against the MedicationDispensed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationDispensed} An instance of MedicationDispensed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationDispensed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationDispensed;

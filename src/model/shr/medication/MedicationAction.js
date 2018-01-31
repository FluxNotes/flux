import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.medication.MedicationAction.
 * @extends Action
 */
class MedicationAction extends Action {

  /**
   * Get the MedicationOrCode.
   * @returns {MedicationOrCode} The shr.entity.MedicationOrCode
   */
  get medicationOrCode() {
    return this._medicationOrCode;
  }

  /**
   * Set the MedicationOrCode.
   * @param {MedicationOrCode} medicationOrCode - The shr.entity.MedicationOrCode
   */
  set medicationOrCode(medicationOrCode) {
    this._medicationOrCode = medicationOrCode;
  }

  /**
   * Get the Dosage.
   * @returns {Dosage} The shr.medication.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Set the Dosage.
   * @param {Dosage} dosage - The shr.medication.Dosage
   */
  set dosage(dosage) {
    this._dosage = dosage;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationAction class.
   * The JSON must be valid against the MedicationAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationAction} An instance of MedicationAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationAction;

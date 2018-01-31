import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.adverse.ActionTaken.
 */
class ActionTaken {

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the shr.medication.MedicationChange reference.
   * @returns {Reference} The shr.medication.MedicationChange reference
   */
  get medicationChange() {
    return this._medicationChange;
  }

  /**
   * Set the shr.medication.MedicationChange reference.
   * @param {Reference} medicationChange - The shr.medication.MedicationChange reference
   */
  set medicationChange(medicationChange) {
    this._medicationChange = medicationChange;
  }

  /**
   * Deserializes JSON data to an instance of the ActionTaken class.
   * The JSON must be valid against the ActionTaken JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionTaken} An instance of ActionTaken populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionTaken();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ActionTaken;

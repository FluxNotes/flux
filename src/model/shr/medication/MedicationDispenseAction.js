import { setPropertiesFromJSON } from '../../json-helper';

import MedicationAction from './MedicationAction';

/**
 * Generated class for shr.medication.MedicationDispenseAction.
 * @extends MedicationAction
 */
class MedicationDispenseAction extends MedicationAction {

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
   * Get the NumberOfRefillsAllowed.
   * @returns {NumberOfRefillsAllowed} The shr.medication.NumberOfRefillsAllowed
   */
  get numberOfRefillsAllowed() {
    return this._numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The shr.medication.NumberOfRefillsAllowed
   */
  set numberOfRefillsAllowed(numberOfRefillsAllowed) {
    this._numberOfRefillsAllowed = numberOfRefillsAllowed;
  }

  /**
   * Get the QuantityPerDispense.
   * @returns {QuantityPerDispense} The shr.medication.QuantityPerDispense
   */
  get quantityPerDispense() {
    return this._quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense.
   * @param {QuantityPerDispense} quantityPerDispense - The shr.medication.QuantityPerDispense
   */
  set quantityPerDispense(quantityPerDispense) {
    this._quantityPerDispense = quantityPerDispense;
  }

  /**
   * Get the SupplyDuration.
   * @returns {SupplyDuration} The shr.medication.SupplyDuration
   */
  get supplyDuration() {
    return this._supplyDuration;
  }

  /**
   * Set the SupplyDuration.
   * @param {SupplyDuration} supplyDuration - The shr.medication.SupplyDuration
   */
  set supplyDuration(supplyDuration) {
    this._supplyDuration = supplyDuration;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationDispenseAction class.
   * The JSON must be valid against the MedicationDispenseAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationDispenseAction} An instance of MedicationDispenseAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationDispenseAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationDispenseAction;

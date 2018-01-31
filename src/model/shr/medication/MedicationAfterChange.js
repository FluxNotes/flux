import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.MedicationAfterChange.
 */
class MedicationAfterChange {

  /**
   * Get the choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference.
   * @returns {Reference} The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference.
   * @param {Reference} value - The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationAfterChange class.
   * The JSON must be valid against the MedicationAfterChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationAfterChange} An instance of MedicationAfterChange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationAfterChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationAfterChange;

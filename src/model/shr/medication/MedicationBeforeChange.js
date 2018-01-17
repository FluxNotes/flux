import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.MedicationBeforeChange.
 */
class MedicationBeforeChange {

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
   * Deserializes JSON data to an instance of the MedicationBeforeChange class.
   * The JSON must be valid against the MedicationBeforeChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationBeforeChange} An instance of MedicationBeforeChange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationBeforeChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationBeforeChange;

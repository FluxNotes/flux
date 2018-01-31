import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicationOrCode.
 */
class MedicationOrCode {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Medication.
   * @returns {(CodeableConcept|Medication)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Medication
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Medication.
   * @param {(CodeableConcept|Medication)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Medication
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationOrCode class.
   * The JSON must be valid against the MedicationOrCode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationOrCode} An instance of MedicationOrCode populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationOrCode();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationOrCode;

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
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationUsed reference
   * @returns {MedicationBeforeChange} this.
   */
  withValue(value) {
    this.value = value; return this;
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
  /**
   * Serializes an instance of the MedicationBeforeChange class to a JSON object.
   * The JSON is expected to be valid against the MedicationBeforeChange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationBeforeChange' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default MedicationBeforeChange;

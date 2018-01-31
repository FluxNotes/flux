import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.PersonOfRecord.
 */
class PersonOfRecord {

  /**
   * Get the value (aliases patient).
   * @returns {Reference} The shr.entity.Patient reference
   */
  get value() {
    return this._patient;
  }

  /**
   * Set the value (aliases patient).
   * @param {Reference} value - The shr.entity.Patient reference
   */
  set value(value) {
    this._patient = value;
  }

  /**
   * Get the shr.entity.Patient reference.
   * @returns {Reference} The shr.entity.Patient reference
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the shr.entity.Patient reference.
   * @param {Reference} patient - The shr.entity.Patient reference
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Deserializes JSON data to an instance of the PersonOfRecord class.
   * The JSON must be valid against the PersonOfRecord JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PersonOfRecord} An instance of PersonOfRecord populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PersonOfRecord();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PersonOfRecord;

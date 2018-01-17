import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicalInterpreterNeeded.
 */
class MedicalInterpreterNeeded {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.base.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.base.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Deserializes JSON data to an instance of the MedicalInterpreterNeeded class.
   * The JSON must be valid against the MedicalInterpreterNeeded JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicalInterpreterNeeded} An instance of MedicalInterpreterNeeded populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicalInterpreterNeeded();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicalInterpreterNeeded;

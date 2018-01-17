import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ParticipationType.
 */
class ParticipationType {

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
   * Deserializes JSON data to an instance of the ParticipationType class.
   * The JSON must be valid against the ParticipationType JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ParticipationType} An instance of ParticipationType populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ParticipationType();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ParticipationType;

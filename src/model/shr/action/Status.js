import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.Status.
 */
class Status {

  /**
   * Get the choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept.
   * @returns {(code|Coding|CodeableConcept)} The choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept.
   * @param {(code|Coding|CodeableConcept)} value - The choice value; one of: code, shr.core.Coding, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Status class.
   * The JSON must be valid against the Status JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Status} An instance of Status populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Status();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Status;

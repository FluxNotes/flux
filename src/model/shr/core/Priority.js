import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Priority.
 */
class Priority {

  /**
   * Get the choice value; one of: positiveInt, shr.core.CodeableConcept.
   * @returns {(positiveInt|CodeableConcept)} The choice value; one of: positiveInt, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: positiveInt, shr.core.CodeableConcept.
   * @param {(positiveInt|CodeableConcept)} value - The choice value; one of: positiveInt, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Priority class.
   * The JSON must be valid against the Priority JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Priority} An instance of Priority populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Priority();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Priority;

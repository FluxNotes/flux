import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Reason.
 */
class Reason {

  /**
   * Get the choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference.
   * @returns {(string|CodeableConcept|Reference)} The choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference.
   * @param {(string|CodeableConcept|Reference)} value - The choice value; one of: string, shr.core.CodeableConcept, shr.base.Content reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Reason class.
   * The JSON must be valid against the Reason JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Reason} An instance of Reason populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Reason();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Reason;

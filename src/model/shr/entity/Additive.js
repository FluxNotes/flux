import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Additive.
 */
class Additive {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Additive class.
   * The JSON must be valid against the Additive JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Additive} An instance of Additive populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Additive();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Additive;

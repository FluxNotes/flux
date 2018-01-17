import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.Evidence.
 */
class Evidence {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.base.Content reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.base.Content reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.base.Content reference.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.base.Content reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Evidence class.
   * The JSON must be valid against the Evidence JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Evidence} An instance of Evidence populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Evidence();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Evidence;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.AsNeededIndicator.
 */
class AsNeededIndicator {

  /**
   * Get the choice value; one of: boolean, shr.core.CodeableConcept.
   * @returns {(boolean|CodeableConcept)} The choice value; one of: boolean, shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: boolean, shr.core.CodeableConcept.
   * @param {(boolean|CodeableConcept)} value - The choice value; one of: boolean, shr.core.CodeableConcept
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the AsNeededIndicator class.
   * The JSON must be valid against the AsNeededIndicator JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AsNeededIndicator} An instance of AsNeededIndicator populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AsNeededIndicator();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AsNeededIndicator;

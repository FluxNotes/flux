import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.DoseAmount.
 */
class DoseAmount {

  /**
   * Get the choice value; one of: shr.core.SimpleQuantity, shr.core.Range.
   * @returns {(SimpleQuantity|Range)} The choice value; one of: shr.core.SimpleQuantity, shr.core.Range
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.SimpleQuantity, shr.core.Range.
   * @param {(SimpleQuantity|Range)} value - The choice value; one of: shr.core.SimpleQuantity, shr.core.Range
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the DoseAmount class.
   * The JSON must be valid against the DoseAmount JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DoseAmount} An instance of DoseAmount populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DoseAmount();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DoseAmount;

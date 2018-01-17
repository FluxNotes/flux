import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.careplan.ResultTargeted.
 */
class ResultTargeted {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity.
   * @returns {(CodeableConcept|Range|Quantity)} The choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity.
   * @param {(CodeableConcept|Range|Quantity)} value - The choice value; one of: shr.core.CodeableConcept, shr.core.Range, shr.core.Quantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the ResultTargeted class.
   * The JSON must be valid against the ResultTargeted JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResultTargeted} An instance of ResultTargeted populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ResultTargeted();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ResultTargeted;

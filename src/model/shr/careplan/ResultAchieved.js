import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.careplan.ResultAchieved.
 */
class ResultAchieved {

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
   * Deserializes JSON data to an instance of the ResultAchieved class.
   * The JSON must be valid against the ResultAchieved JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResultAchieved} An instance of ResultAchieved populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ResultAchieved();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ResultAchieved;

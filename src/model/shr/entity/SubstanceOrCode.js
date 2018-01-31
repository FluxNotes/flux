import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.SubstanceOrCode.
 */
class SubstanceOrCode {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance.
   * @returns {(CodeableConcept|Substance)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance.
   * @param {(CodeableConcept|Substance)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the SubstanceOrCode class.
   * The JSON must be valid against the SubstanceOrCode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SubstanceOrCode} An instance of SubstanceOrCode populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SubstanceOrCode();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SubstanceOrCode;

import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicationIngredient.
 */
class MedicationIngredient {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Get the IngredientAmount.
   * @returns {IngredientAmount} The shr.entity.IngredientAmount
   */
  get ingredientAmount() {
    return this._ingredientAmount;
  }

  /**
   * Set the IngredientAmount.
   * @param {IngredientAmount} ingredientAmount - The shr.entity.IngredientAmount
   */
  set ingredientAmount(ingredientAmount) {
    this._ingredientAmount = ingredientAmount;
  }

  /**
   * Get the IsActiveIngredient.
   * @returns {IsActiveIngredient} The shr.entity.IsActiveIngredient
   */
  get isActiveIngredient() {
    return this._isActiveIngredient;
  }

  /**
   * Set the IsActiveIngredient.
   * @param {IsActiveIngredient} isActiveIngredient - The shr.entity.IsActiveIngredient
   */
  set isActiveIngredient(isActiveIngredient) {
    this._isActiveIngredient = isActiveIngredient;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationIngredient class.
   * The JSON must be valid against the MedicationIngredient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationIngredient} An instance of MedicationIngredient populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationIngredient();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MedicationIngredient;

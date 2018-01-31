import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Ingredient.
 */
class Ingredient {

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
   * Deserializes JSON data to an instance of the Ingredient class.
   * The JSON must be valid against the Ingredient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ingredient} An instance of Ingredient populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Ingredient();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Ingredient;

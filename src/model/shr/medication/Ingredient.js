/** Generated from SHR definition for shr.medication.Ingredient */
class Ingredient {

  /**
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.medication.IngredientAmount
   */
  get ingredientAmount() {
    return this._ingredientAmount;
  }

  /**
   * Setter for shr.medication.IngredientAmount
   */
  set ingredientAmount(ingredientAmountVal) {
    this._ingredientAmount = ingredientAmountVal;
  }

  /**
   * Getter for shr.medication.AmountOfMedication
   */
  get amountOfMedication() {
    return this._amountOfMedication;
  }

  /**
   * Setter for shr.medication.AmountOfMedication
   */
  set amountOfMedication(amountOfMedicationVal) {
    this._amountOfMedication = amountOfMedicationVal;
  }

  /**
   * Getter for shr.medication.IsActiveIngredient
   */
  get isActiveIngredient() {
    return this._isActiveIngredient;
  }

  /**
   * Setter for shr.medication.IsActiveIngredient
   */
  set isActiveIngredient(isActiveIngredientVal) {
    this._isActiveIngredient = isActiveIngredientVal;
  }

}

export default Ingredient;

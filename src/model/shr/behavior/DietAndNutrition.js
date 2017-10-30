import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.behavior.DietAndNutrition */
class DietAndNutrition extends Panel {

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

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
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
  }

  /**
   * Getter for Reference<shr.behavior.SpecialDietFollowed>[]
   */
  get specialDietFollowed() {
    return this._specialDietFollowed;
  }

  /**
   * Setter for Reference<shr.behavior.SpecialDietFollowed>[]
   */
  set specialDietFollowed(specialDietFollowedVal) {
    this._specialDietFollowed = specialDietFollowedVal;
  }

  /**
   * Getter for Reference<shr.behavior.HasSufficientFood>
   */
  get hasSufficientFood() {
    return this._hasSufficientFood;
  }

  /**
   * Setter for Reference<shr.behavior.HasSufficientFood>
   */
  set hasSufficientFood(hasSufficientFoodVal) {
    this._hasSufficientFood = hasSufficientFoodVal;
  }

  /**
   * Getter for Reference<shr.behavior.DietNutritionConcern>[]
   */
  get dietNutritionConcern() {
    return this._dietNutritionConcern;
  }

  /**
   * Setter for Reference<shr.behavior.DietNutritionConcern>[]
   */
  set dietNutritionConcern(dietNutritionConcernVal) {
    this._dietNutritionConcern = dietNutritionConcernVal;
  }

  /**
   * Getter for Reference<shr.allergy.FoodAllergy>[]
   */
  get foodAllergy() {
    return this._foodAllergy;
  }

  /**
   * Setter for Reference<shr.allergy.FoodAllergy>[]
   */
  set foodAllergy(foodAllergyVal) {
    this._foodAllergy = foodAllergyVal;
  }

}

export default DietAndNutrition;

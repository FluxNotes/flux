import AllergyIntolerance from './AllergyIntolerance';

/** Generated from SHR definition for shr.allergy.FoodAllergy */
class FoodAllergy extends AllergyIntolerance {

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
   * Getter for shr.allergy.SubstanceCategory
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Setter for shr.allergy.SubstanceCategory
   */
  set substanceCategory(substanceCategoryVal) {
    this._substanceCategory = substanceCategoryVal;
  }

  /**
   * Getter for shr.allergy.AdverseReactionType
   */
  get adverseReactionType() {
    return this._adverseReactionType;
  }

  /**
   * Setter for shr.allergy.AdverseReactionType
   */
  set adverseReactionType(adverseReactionTypeVal) {
    this._adverseReactionType = adverseReactionTypeVal;
  }

}

export default FoodAllergy;

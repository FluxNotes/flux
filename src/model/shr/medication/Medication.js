/** Generated from SHR definition for shr.medication.Medication */
class Medication {

  /**
   * Convenience getter for value (accesses this.specificType)
   */
  get value() {
    return this.specificType;
  }

  /**
   * Convenience setter for value (sets this.specificType)
   */
  set value(val) {
    this.specificType = val;
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
   * Getter for shr.medication.DoseForm
   */
  get doseForm() {
    return this._doseForm;
  }

  /**
   * Setter for shr.medication.DoseForm
   */
  set doseForm(doseFormVal) {
    this._doseForm = doseFormVal;
  }

  /**
   * Getter for shr.medication.Ingredient[]
   */
  get ingredient() {
    return this._ingredient;
  }

  /**
   * Setter for shr.medication.Ingredient[]
   */
  set ingredient(ingredientVal) {
    this._ingredient = ingredientVal;
  }

  /**
   * Getter for shr.medication.Brand
   */
  get brand() {
    return this._brand;
  }

  /**
   * Setter for shr.medication.Brand
   */
  set brand(brandVal) {
    this._brand = brandVal;
  }

  /**
   * Getter for shr.medication.OverTheCounter
   */
  get overTheCounter() {
    return this._overTheCounter;
  }

  /**
   * Setter for shr.medication.OverTheCounter
   */
  set overTheCounter(overTheCounterVal) {
    this._overTheCounter = overTheCounterVal;
  }

}

export default Medication;

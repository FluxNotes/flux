import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.environment.FinancialSituation */
class FinancialSituation extends Panel {

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
   * Getter for Reference<shr.environment.AnnualIncome>
   */
  get annualIncome() {
    return this._annualIncome;
  }

  /**
   * Setter for Reference<shr.environment.AnnualIncome>
   */
  set annualIncome(annualIncomeVal) {
    this._annualIncome = annualIncomeVal;
  }

  /**
   * Getter for Reference<shr.environment.IncomeSource>[]
   */
  get incomeSource() {
    return this._incomeSource;
  }

  /**
   * Setter for Reference<shr.environment.IncomeSource>[]
   */
  set incomeSource(incomeSourceVal) {
    this._incomeSource = incomeSourceVal;
  }

  /**
   * Getter for Reference<shr.environment.IncomeStability>
   */
  get incomeStability() {
    return this._incomeStability;
  }

  /**
   * Setter for Reference<shr.environment.IncomeStability>
   */
  set incomeStability(incomeStabilityVal) {
    this._incomeStability = incomeStabilityVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordFood>
   */
  get canAffordFood() {
    return this._canAffordFood;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordFood>
   */
  set canAffordFood(canAffordFoodVal) {
    this._canAffordFood = canAffordFoodVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordHousing>
   */
  get canAffordHousing() {
    return this._canAffordHousing;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordHousing>
   */
  set canAffordHousing(canAffordHousingVal) {
    this._canAffordHousing = canAffordHousingVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordClothing>
   */
  get canAffordClothing() {
    return this._canAffordClothing;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordClothing>
   */
  set canAffordClothing(canAffordClothingVal) {
    this._canAffordClothing = canAffordClothingVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordUtilities>
   */
  get canAffordUtilities() {
    return this._canAffordUtilities;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordUtilities>
   */
  set canAffordUtilities(canAffordUtilitiesVal) {
    this._canAffordUtilities = canAffordUtilitiesVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordTransportation>
   */
  get canAffordTransportation() {
    return this._canAffordTransportation;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordTransportation>
   */
  set canAffordTransportation(canAffordTransportationVal) {
    this._canAffordTransportation = canAffordTransportationVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordMedication>
   */
  get canAffordMedication() {
    return this._canAffordMedication;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordMedication>
   */
  set canAffordMedication(canAffordMedicationVal) {
    this._canAffordMedication = canAffordMedicationVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordDentalCare>
   */
  get canAffordDentalCare() {
    return this._canAffordDentalCare;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordDentalCare>
   */
  set canAffordDentalCare(canAffordDentalCareVal) {
    this._canAffordDentalCare = canAffordDentalCareVal;
  }

  /**
   * Getter for Reference<shr.environment.CanAffordChildCare>
   */
  get canAffordChildCare() {
    return this._canAffordChildCare;
  }

  /**
   * Setter for Reference<shr.environment.CanAffordChildCare>
   */
  set canAffordChildCare(canAffordChildCareVal) {
    this._canAffordChildCare = canAffordChildCareVal;
  }

  /**
   * Getter for Reference<shr.environment.NonCashBenefit>[]
   */
  get nonCashBenefit() {
    return this._nonCashBenefit;
  }

  /**
   * Setter for Reference<shr.environment.NonCashBenefit>[]
   */
  set nonCashBenefit(nonCashBenefitVal) {
    this._nonCashBenefit = nonCashBenefitVal;
  }

}

export default FinancialSituation;

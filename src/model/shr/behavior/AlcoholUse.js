import SubstanceUse from './SubstanceUse';

/** Generated from SHR definition for shr.behavior.AlcoholUse */
class AlcoholUse extends SubstanceUse {

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
   * Getter for shr.core.Substance
   */
  get substance() {
    return this._substance;
  }

  /**
   * Setter for shr.core.Substance
   */
  set substance(substanceVal) {
    this._substance = substanceVal;
  }

  /**
   * Getter for shr.behavior.AssessmentTool
   */
  get assessmentTool() {
    return this._assessmentTool;
  }

  /**
   * Setter for shr.behavior.AssessmentTool
   */
  set assessmentTool(assessmentToolVal) {
    this._assessmentTool = assessmentToolVal;
  }

  /**
   * Getter for shr.behavior.AlcoholBingeFrequency
   */
  get alcoholBingeFrequency() {
    return this._alcoholBingeFrequency;
  }

  /**
   * Setter for shr.behavior.AlcoholBingeFrequency
   */
  set alcoholBingeFrequency(alcoholBingeFrequencyVal) {
    this._alcoholBingeFrequency = alcoholBingeFrequencyVal;
  }

}

export default AlcoholUse;

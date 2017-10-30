import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.behavior.PhysicalActivityLevel */
class PhysicalActivityLevel extends Panel {

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
   * Getter for Reference<shr.behavior.ExerciseHoursPerWeek>
   */
  get exerciseHoursPerWeek() {
    return this._exerciseHoursPerWeek;
  }

  /**
   * Setter for Reference<shr.behavior.ExerciseHoursPerWeek>
   */
  set exerciseHoursPerWeek(exerciseHoursPerWeekVal) {
    this._exerciseHoursPerWeek = exerciseHoursPerWeekVal;
  }

  /**
   * Getter for Reference<shr.behavior.PhysicalActivityLimitation>[]
   */
  get physicalActivityLimitation() {
    return this._physicalActivityLimitation;
  }

  /**
   * Setter for Reference<shr.behavior.PhysicalActivityLimitation>[]
   */
  set physicalActivityLimitation(physicalActivityLimitationVal) {
    this._physicalActivityLimitation = physicalActivityLimitationVal;
  }

  // Ommitting getter/setter for field: TBD<MetabolicEquivalent>

}

export default PhysicalActivityLevel;

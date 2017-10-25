/** Generated from SHR definition for shr.assessment.AssessmentFocus */
class AssessmentFocus {

  /**
   * Getter for choice value
   * - shr.core.CodeableConcept
   * - Reference<shr.procedure.Procedure>
   * - Reference<shr.observation.Observation>
   * - Reference<shr.condition.Condition>
   * - Reference<shr.allergy.AllergyIntolerance>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.CodeableConcept
   * - Reference<shr.procedure.Procedure>
   * - Reference<shr.observation.Observation>
   * - Reference<shr.condition.Condition>
   * - Reference<shr.allergy.AllergyIntolerance>
   */
  set value(val) {
    this._value = val;
  }

}

export default AssessmentFocus;

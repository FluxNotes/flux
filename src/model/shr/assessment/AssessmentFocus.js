import CodeableConcept from '../core/CodeableConcept';
import Reference from '../../Reference';

/** Generated from SHR definition for shr.assessment.AssessmentFocus */
class AssessmentFocus {
    constructor(json) {
        if (json.shrId) {
            this._value = new Reference(json.shrId, json.entryId, json.entryType);
        } else if (json.coding) {
            this._value = new CodeableConcept(json);
        } else {
            throw new Error("unrecognized assessment focus value: " + json);
        }
    }

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

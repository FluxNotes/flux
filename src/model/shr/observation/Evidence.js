import CodeableConcept from '../core/CodeableConcept';
import Reference from '../../Reference';

/** Generated from SHR definition for shr.observation.Evidence */
class Evidence {
    constructor(json) {
        if (json.coding) {
            this._value = new CodeableConcept(json);
        } else {
            this._value = new Reference(json.shrId, json.entryId, json.entryType);
        }
    }

  /**
   * Getter for choice value
   * - shr.core.CodeableConcept
   * - Reference<shr.observation.Observation>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.CodeableConcept
   * - Reference<shr.observation.Observation>
   */
  set value(val) {
    this._value = val;
  }

}

export default Evidence;

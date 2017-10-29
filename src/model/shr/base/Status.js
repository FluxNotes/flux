import Coding from '../core/Coding';
import CodeableConcept from '../core/CodeableConcept';

/** Generated from SHR definition for shr.base.Status */
class Status {
    constructor(json) {
        if (json) {
            if (json.code) {
                this._value = new Coding(json);
            } else if (json.coding) {
                this._value = new CodeableConcept(json);
            } else {
                this._value = json;
            }
        }
    }

  /**
   * Getter for choice value
   * - code
   * - shr.core.Coding
   * - shr.core.CodeableConcept
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - code
   * - shr.core.Coding
   * - shr.core.CodeableConcept
   */
  set value(val) {
    this._value = val;
  }

}

export default Status;

import Lang from 'lodash';
import CodeableConcept from './CodeableConcept';
import Reference from '../../Reference';

/** Generated from SHR definition for shr.core.Reason */
class Reason {
    constructor(json) {
        if (Lang.isString(json)) {
            this._value = json;
        } else {
            if (!Lang.isUndefined(json.coding)) {
                this._value = new CodeableConcept(json);
            } else {
                this._value = new Reference(json.shrId, json.entryId, json.entryType);
            }
        }
    }

  /**
   * Getter for choice value
   * - string
   * - shr.core.CodeableConcept
   * - Reference<shr.condition.Condition>
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - string
   * - shr.core.CodeableConcept
   * - Reference<shr.condition.Condition>
   */
  set value(val) {
    this._value = val;
  }

}

export default Reason;

import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.lifehistory.MilitaryStatus.
 * @extends QuestionAnswer
 */
class MilitaryStatus extends QuestionAnswer {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Deserializes JSON data to an instance of the MilitaryStatus class.
   * The JSON must be valid against the MilitaryStatus JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MilitaryStatus} An instance of MilitaryStatus populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MilitaryStatus();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MilitaryStatus;

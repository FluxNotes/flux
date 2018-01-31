import { setPropertiesFromJSON } from '../../json-helper';

import Condition from '../condition/Condition';

/**
 * Generated class for shr.oncology.BreastCancer.
 * @extends Condition
 */
class BreastCancer extends Condition {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

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
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the Stage.
   * @returns {Stage} The shr.condition.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Set the Stage.
   * @param {Stage} stage - The shr.condition.Stage
   */
  set stage(stage) {
    this._stage = stage;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancer class.
   * The JSON must be valid against the BreastCancer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancer} An instance of BreastCancer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BreastCancer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BreastCancer;

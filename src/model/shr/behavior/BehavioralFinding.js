import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.behavior.BehavioralFinding.
 * @extends QuestionAnswer
 */
class BehavioralFinding extends QuestionAnswer {

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
   * Get the ReasonForBehavior array.
   * @returns {Array<ReasonForBehavior>} The shr.behavior.ReasonForBehavior array
   */
  get reasonForBehavior() {
    return this._reasonForBehavior;
  }

  /**
   * Set the ReasonForBehavior array.
   * @param {Array<ReasonForBehavior>} reasonForBehavior - The shr.behavior.ReasonForBehavior array
   */
  set reasonForBehavior(reasonForBehavior) {
    this._reasonForBehavior = reasonForBehavior;
  }

  /**
   * Get the ReadinessToChange.
   * @returns {ReadinessToChange} The shr.behavior.ReadinessToChange
   */
  get readinessToChange() {
    return this._readinessToChange;
  }

  /**
   * Set the ReadinessToChange.
   * @param {ReadinessToChange} readinessToChange - The shr.behavior.ReadinessToChange
   */
  set readinessToChange(readinessToChange) {
    this._readinessToChange = readinessToChange;
  }

  /**
   * Get the Outcome array.
   * @returns {Array<Outcome>} The shr.action.Outcome array
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome array.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Deserializes JSON data to an instance of the BehavioralFinding class.
   * The JSON must be valid against the BehavioralFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BehavioralFinding} An instance of BehavioralFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BehavioralFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BehavioralFinding;

import { setPropertiesFromJSON } from '../../json-helper';

import BehavioralFinding from './BehavioralFinding';

/**
 * Generated class for shr.behavior.ExerciseHoursPerWeek.
 * @extends BehavioralFinding
 */
class ExerciseHoursPerWeek extends BehavioralFinding {

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
   * Get the value (aliases quantity).
   * @returns {IntegerQuantity} The shr.core.IntegerQuantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * @param {IntegerQuantity} value - The shr.core.IntegerQuantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Get the IntegerQuantity.
   * @returns {IntegerQuantity} The shr.core.IntegerQuantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the IntegerQuantity.
   * @param {IntegerQuantity} quantity - The shr.core.IntegerQuantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
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
   * Deserializes JSON data to an instance of the ExerciseHoursPerWeek class.
   * The JSON must be valid against the ExerciseHoursPerWeek JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExerciseHoursPerWeek} An instance of ExerciseHoursPerWeek populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExerciseHoursPerWeek();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ExerciseHoursPerWeek;

import { setPropertiesFromJSON } from '../../json-helper';

import Goal from './Goal';

/**
 * Generated class for shr.careplan.Objective.
 * @extends Goal
 */
class Objective extends Goal {

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
   * Get the ResultTargeted.
   * @returns {ResultTargeted} The shr.careplan.ResultTargeted
   */
  get resultTargeted() {
    return this._resultTargeted;
  }

  /**
   * Set the ResultTargeted.
   * @param {ResultTargeted} resultTargeted - The shr.careplan.ResultTargeted
   */
  set resultTargeted(resultTargeted) {
    this._resultTargeted = resultTargeted;
  }

  /**
   * Get the ResultAchieved array.
   * @returns {Array<ResultAchieved>} The shr.careplan.ResultAchieved array
   */
  get resultAchieved() {
    return this._resultAchieved;
  }

  /**
   * Set the ResultAchieved array.
   * @param {Array<ResultAchieved>} resultAchieved - The shr.careplan.ResultAchieved array
   */
  set resultAchieved(resultAchieved) {
    this._resultAchieved = resultAchieved;
  }

  /**
   * Get the RelatedFinding array.
   * @returns {Array<RelatedFinding>} The shr.finding.RelatedFinding array
   */
  get relatedFinding() {
    return this._relatedFinding;
  }

  /**
   * Set the RelatedFinding array.
   * @param {Array<RelatedFinding>} relatedFinding - The shr.finding.RelatedFinding array
   */
  set relatedFinding(relatedFinding) {
    this._relatedFinding = relatedFinding;
  }

  /**
   * Deserializes JSON data to an instance of the Objective class.
   * The JSON must be valid against the Objective JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Objective} An instance of Objective populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Objective();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Objective;

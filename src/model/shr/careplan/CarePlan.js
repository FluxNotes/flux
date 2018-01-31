import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.careplan.CarePlan.
 */
class CarePlan {

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
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
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
   * Get the Goal array.
   * @returns {Array<Goal>} The shr.careplan.Goal array
   */
  get goal() {
    return this._goal;
  }

  /**
   * Set the Goal array.
   * @param {Array<Goal>} goal - The shr.careplan.Goal array
   */
  set goal(goal) {
    this._goal = goal;
  }

  /**
   * Deserializes JSON data to an instance of the CarePlan class.
   * The JSON must be valid against the CarePlan JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CarePlan} An instance of CarePlan populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CarePlan();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CarePlan;

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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {CarePlan} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {CarePlan} this.
   */
  withTitle(title) {
    this.title = title; return this;
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
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {CarePlan} this.
   */
  withDetails(details) {
    this.details = details; return this;
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
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   * @returns {CarePlan} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {CarePlan} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * Set the Goal array and return 'this' for chaining.
   * @param {Array<Goal>} goal - The shr.careplan.Goal array
   * @returns {CarePlan} this.
   */
  withGoal(goal) {
    this.goal = goal; return this;
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
  /**
   * Serializes an instance of the CarePlan class to a JSON object.
   * The JSON is expected to be valid against the CarePlan JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/careplan/CarePlan' };
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.goal != null) {
      inst['Goal'] = this.goal.map(f => f.toJSON());
    }
    return inst;
  }
}
export default CarePlan;

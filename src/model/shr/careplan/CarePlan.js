import Action from '../base/Action';

/** Generated from SHR definition for shr.careplan.CarePlan */
class CarePlan extends Action {

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Setter for shr.core.Title
   */
  set title(titleVal) {
    this._title = titleVal;
  }

  /**
   * Getter for shr.core.Description
   */
  get description() {
    return this._description;
  }

  /**
   * Setter for shr.core.Description
   */
  set description(descriptionVal) {
    this._description = descriptionVal;
  }

  /**
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.base.Category[]
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category[]
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.core.Reason[]
   */
  get reason() {
    return this._reason;
  }

  /**
   * Setter for shr.core.Reason[]
   */
  set reason(reasonVal) {
    this._reason = reasonVal;
  }

  /**
   * Getter for shr.careplan.Goal[]
   */
  get goal() {
    return this._goal;
  }

  /**
   * Setter for shr.careplan.Goal[]
   */
  set goal(goalVal) {
    this._goal = goalVal;
  }

  /**
   * Getter for shr.base.Action[]
   */
  get action() {
    return this._action;
  }

  /**
   * Setter for shr.base.Action[]
   */
  set action(actionVal) {
    this._action = actionVal;
  }

}

export default CarePlan;

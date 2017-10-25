import Action from '../base/Action';

/** Generated from SHR definition for shr.careplan.Goal */
class Goal extends Action {

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
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
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
   * Getter for shr.base.RequestedPerformanceTime
   */
  get requestedPerformanceTime() {
    return this._requestedPerformanceTime;
  }

  /**
   * Setter for shr.base.RequestedPerformanceTime
   */
  set requestedPerformanceTime(requestedPerformanceTimeVal) {
    this._requestedPerformanceTime = requestedPerformanceTimeVal;
  }

  /**
   * Getter for shr.core.Reason
   */
  get reason() {
    return this._reason;
  }

  /**
   * Setter for shr.core.Reason
   */
  set reason(reasonVal) {
    this._reason = reasonVal;
  }

  /**
   * Getter for shr.careplan.ResultAchieved
   */
  get resultAchieved() {
    return this._resultAchieved;
  }

  /**
   * Setter for shr.careplan.ResultAchieved
   */
  set resultAchieved(resultAchievedVal) {
    this._resultAchieved = resultAchievedVal;
  }

  /**
   * Getter for shr.core.Annotation[]
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Setter for shr.core.Annotation[]
   */
  set annotation(annotationVal) {
    this._annotation = annotationVal;
  }

  /**
   * Getter for shr.careplan.Objective[]
   */
  get objective() {
    return this._objective;
  }

  /**
   * Setter for shr.careplan.Objective[]
   */
  set objective(objectiveVal) {
    this._objective = objectiveVal;
  }

}

export default Goal;

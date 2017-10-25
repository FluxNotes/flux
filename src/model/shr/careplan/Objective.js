import Action from '../base/Action';

/** Generated from SHR definition for shr.careplan.Objective */
class Objective extends Action {

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
   * Getter for shr.careplan.AssociatedGoal
   */
  get associatedGoal() {
    return this._associatedGoal;
  }

  /**
   * Setter for shr.careplan.AssociatedGoal
   */
  set associatedGoal(associatedGoalVal) {
    this._associatedGoal = associatedGoalVal;
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
   * Getter for shr.careplan.ResultTargeted
   */
  get resultTargeted() {
    return this._resultTargeted;
  }

  /**
   * Setter for shr.careplan.ResultTargeted
   */
  set resultTargeted(resultTargetedVal) {
    this._resultTargeted = resultTargetedVal;
  }

  /**
   * Getter for shr.careplan.ResultAchieved[]
   */
  get resultAchieved() {
    return this._resultAchieved;
  }

  /**
   * Setter for shr.careplan.ResultAchieved[]
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
   * Getter for shr.observation.Evidence[]
   */
  get evidence() {
    return this._evidence;
  }

  /**
   * Setter for shr.observation.Evidence[]
   */
  set evidence(evidenceVal) {
    this._evidence = evidenceVal;
  }

}

export default Objective;

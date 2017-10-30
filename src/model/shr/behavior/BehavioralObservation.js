import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.behavior.BehavioralObservation */
class BehavioralObservation extends Observation {

  /**
   * Getter for shr.base.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  // Ommitting getter/setter for field: TBD<Impact>[]

  /**
   * Getter for shr.behavior.ReadinessToChange
   */
  get readinessToChange() {
    return this._readinessToChange;
  }

  /**
   * Setter for shr.behavior.ReadinessToChange
   */
  set readinessToChange(readinessToChangeVal) {
    this._readinessToChange = readinessToChangeVal;
  }

  /**
   * Getter for shr.observation.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Setter for shr.observation.Method
   */
  set method(methodVal) {
    this._method = methodVal;
  }

}

export default BehavioralObservation;

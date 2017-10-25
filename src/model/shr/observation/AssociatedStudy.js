/** Generated from SHR definition for shr.observation.AssociatedStudy */
class AssociatedStudy {

  /**
   * Convenience getter for value (accesses this.study)
   */
  get value() {
    return this.study;
  }

  /**
   * Convenience setter for value (sets this.study)
   */
  set value(val) {
    this.study = val;
  }

  /**
   * Getter for Reference<shr.base.Study>
   */
  get study() {
    return this._study;
  }

  /**
   * Setter for Reference<shr.base.Study>
   */
  set study(studyVal) {
    this._study = studyVal;
  }

}

export default AssociatedStudy;

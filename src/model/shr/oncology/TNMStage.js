import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.oncology.TNMStage */
class TNMStage extends Observation {

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
   * Convenience getter for value (accesses this.codeableConcept)
   */
  get value() {
    return this.codeableConcept;
  }

  /**
   * Convenience setter for value (sets this.codeableConcept)
   */
  set value(val) {
    this.codeableConcept = val;
  }

  /**
   * Getter for shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Setter for shr.core.CodeableConcept
   */
  set codeableConcept(codeableConceptVal) {
    this._codeableConcept = codeableConceptVal;
  }

  /**
   * Getter for shr.oncology.StagingSystem
   */
  get stagingSystem() {
    return this._stagingSystem;
  }

  /**
   * Setter for shr.oncology.StagingSystem
   */
  set stagingSystem(stagingSystemVal) {
    this._stagingSystem = stagingSystemVal;
  }

  /**
   * Getter for shr.oncology.StagingTiming
   */
  get stagingTiming() {
    return this._stagingTiming;
  }

  /**
   * Setter for shr.oncology.StagingTiming
   */
  set stagingTiming(stagingTimingVal) {
    this._stagingTiming = stagingTimingVal;
  }

  /**
   * Getter for shr.oncology.T-Stage
   */
  get t-Stage() {
    return this._t-Stage;
  }

  /**
   * Setter for shr.oncology.T-Stage
   */
  set t-Stage(t-StageVal) {
    this._t-Stage = t-StageVal;
  }

  /**
   * Getter for shr.oncology.N-Stage
   */
  get n-Stage() {
    return this._n-Stage;
  }

  /**
   * Setter for shr.oncology.N-Stage
   */
  set n-Stage(n-StageVal) {
    this._n-Stage = n-StageVal;
  }

  /**
   * Getter for shr.oncology.M-Stage
   */
  get m-Stage() {
    return this._m-Stage;
  }

  /**
   * Setter for shr.oncology.M-Stage
   */
  set m-Stage(m-StageVal) {
    this._m-Stage = m-StageVal;
  }

}

export default TNMStage;
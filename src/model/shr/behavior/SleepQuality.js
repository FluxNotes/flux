import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.behavior.SleepQuality */
class SleepQuality extends Panel {

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
   * Getter for Reference<shr.behavior.TroubleFallingAsleep>
   */
  get troubleFallingAsleep() {
    return this._troubleFallingAsleep;
  }

  /**
   * Setter for Reference<shr.behavior.TroubleFallingAsleep>
   */
  set troubleFallingAsleep(troubleFallingAsleepVal) {
    this._troubleFallingAsleep = troubleFallingAsleepVal;
  }

  /**
   * Getter for Reference<shr.behavior.TroubleStayingAsleep>
   */
  get troubleStayingAsleep() {
    return this._troubleStayingAsleep;
  }

  /**
   * Setter for Reference<shr.behavior.TroubleStayingAsleep>
   */
  set troubleStayingAsleep(troubleStayingAsleepVal) {
    this._troubleStayingAsleep = troubleStayingAsleepVal;
  }

  /**
   * Getter for Reference<shr.behavior.WakeFeelingRested>
   */
  get wakeFeelingRested() {
    return this._wakeFeelingRested;
  }

  /**
   * Setter for Reference<shr.behavior.WakeFeelingRested>
   */
  set wakeFeelingRested(wakeFeelingRestedVal) {
    this._wakeFeelingRested = wakeFeelingRestedVal;
  }

  /**
   * Getter for Reference<shr.behavior.HoursSleepPerNight>
   */
  get hoursSleepPerNight() {
    return this._hoursSleepPerNight;
  }

  /**
   * Setter for Reference<shr.behavior.HoursSleepPerNight>
   */
  set hoursSleepPerNight(hoursSleepPerNightVal) {
    this._hoursSleepPerNight = hoursSleepPerNightVal;
  }

  /**
   * Getter for Reference<shr.behavior.SleepQualityReason>[]
   */
  get sleepQualityReason() {
    return this._sleepQualityReason;
  }

  /**
   * Setter for Reference<shr.behavior.SleepQualityReason>[]
   */
  set sleepQualityReason(sleepQualityReasonVal) {
    this._sleepQualityReason = sleepQualityReasonVal;
  }

}

export default SleepQuality;

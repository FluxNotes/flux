/** Generated from SHR definition for shr.medication.Adherence */
class Adherence {


  /**
   * Getter for shr.medication.AdherenceLevel
   */
  get adherenceLevel() {
    return this._adherenceLevel;
  }

  /**
   * Setter for shr.medication.AdherenceLevel
   */
  set adherenceLevel(adherenceLevelVal) {
    this._adherenceLevel = adherenceLevelVal;
  }

  /**
   * Getter for shr.medication.NonAdherenceReason[]
   */
  get nonAdherenceReason() {
    return this._nonAdherenceReason;
  }

  /**
   * Setter for shr.medication.NonAdherenceReason[]
   */
  set nonAdherenceReason(nonAdherenceReasonVal) {
    this._nonAdherenceReason = nonAdherenceReasonVal;
  }

  /**
   * Getter for shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Setter for shr.core.Details
   */
  set details(detailsVal) {
    this._details = detailsVal;
  }

}

export default Adherence;

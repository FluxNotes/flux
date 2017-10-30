/** Generated from SHR definition for shr.base.Action */
class Action {

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
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
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
   * Getter for shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Setter for shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTimeVal) {
    this._occurrenceTime = occurrenceTimeVal;
  }

  /**
   * Getter for shr.actor.Participant[]
   */
  get participant() {
    return this._participant;
  }

  /**
   * Setter for shr.actor.Participant[]
   */
  set participant(participantVal) {
    this._participant = participantVal;
  }

}

export default Action;

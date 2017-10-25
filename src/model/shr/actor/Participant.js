/** Generated from SHR definition for shr.actor.Participant */
class Participant {

  /**
   * Getter for choice value
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Practitioner
   * - shr.actor.RelatedPerson
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.demographics.PersonOfRecord
   * - shr.actor.Practitioner
   * - shr.actor.RelatedPerson
   */
  set value(val) {
    this._value = val;
  }

  /**
   * Getter for shr.actor.ParticipationType
   */
  get participationType() {
    return this._participationType;
  }

  /**
   * Setter for shr.actor.ParticipationType
   */
  set participationType(participationTypeVal) {
    this._participationType = participationTypeVal;
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

}

export default Participant;

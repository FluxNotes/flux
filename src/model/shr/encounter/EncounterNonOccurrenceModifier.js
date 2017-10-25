import NonOccurrenceModifier from '../base/NonOccurrenceModifier';

/** Generated from SHR definition for shr.encounter.EncounterNonOccurrenceModifier */
class EncounterNonOccurrenceModifier extends NonOccurrenceModifier {

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

}

export default EncounterNonOccurrenceModifier;

import AdverseReaction from '../adverse/AdverseReaction';

/** Generated from SHR definition for shr.oncology.ToxicReactionToTreatment */
class ToxicReactionToTreatment extends AdverseReaction {

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
   * Getter for shr.adverse.AdverseEvent
   */
  get adverseEvent() {
    return this._adverseEvent;
  }

  /**
   * Setter for shr.adverse.AdverseEvent
   */
  set adverseEvent(adverseEventVal) {
    this._adverseEvent = adverseEventVal;
  }

}

export default ToxicReactionToTreatment;

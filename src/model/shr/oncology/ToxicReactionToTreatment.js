import AdverseEvent from '../adverse/AdverseEvent';
import AdverseReaction from '../adverse/AdverseReaction';
import Entry from '../base/Entry';

/** Generated from SHR definition for shr.oncology.ToxicReactionToTreatment */
class ToxicReactionToTreatment extends AdverseReaction {
    constructor(json) {
        super(json);
        if (json) {
            this._entryInfo = new Entry(json);
            if (json.adverseEvent) this._adverseEvent = new AdverseEvent(json.adverseEvent);
        } else {
            this._entryInfo = Entry.createEntry(    "http://standardhealthrecord.org/oncology/ToxicReactionToTreatment",
                                                    "http://standardhealthrecord.org/adverse/AdverseReaction");
        }
    }

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

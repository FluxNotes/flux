import FluxAdverseEvent from './FluxAdverseEvent';
import ToxicReaction from '../shr/adverse/ToxicReaction';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding.js';

// FluxToxicReaction class to hide codeableconcepts
class FluxToxicReaction extends FluxAdverseEvent {
    constructor(json, patientRecord) {
        super(json, patientRecord);

        this._entry = this._adverseEvent = ToxicReaction.fromJSON(json);
        if (!this._adverseEvent.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/adverse/ToxicReaction';
            this._adverseEvent.entryInfo = entry;
        }
    }

    get specificFocusOfFinding() {
        if (this._adverseEvent.specificFocusOfFinding) {
            return this._adverseEvent.specificFocusOfFinding;
        }
        return null;
    }

    set specificFocusOfFinding(val) {
        this._adverseEvent.specificFocusOfFinding = val;
    }

    setSpecificFocusOfFinding(obj) {
        if (!obj) {
            this.specificFocusOfFinding = null;
        } else {
            let ref = new Reference(obj.entryInfo.shrId, obj.entryInfo.entryId, obj.entryInfo.entryType);
            let sff = new SpecificFocusOfFinding();
            sff.value = ref;
            this.specificFocusOfFinding = sff;
        }
    }

    toJSON() {
        return this._adverseEvent.toJSON();
    }
}

export default FluxToxicReaction;
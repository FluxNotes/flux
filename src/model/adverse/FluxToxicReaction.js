import FluxAdverseEvent from './FluxAdverseEvent';
import ToxicReaction from '../shr/adverse/ToxicReaction';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';

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

    toJSON() {
        return this._adverseEvent.toJSON();
    }
}

export default FluxToxicReaction;
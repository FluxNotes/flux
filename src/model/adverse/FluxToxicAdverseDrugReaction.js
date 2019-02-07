import ToxicAdverseDrugReaction from '../shr/adverse/ToxicAdverseDrugReaction';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import Reference from '../Reference';
import SpecificFocusOfFinding from '../shr/base/SpecificFocusOfFinding.js';

class FluxToxicAdverseDrugReaction {
    constructor(json, patientRecord) {
        this._entry = this._toxicAdverseDrugReaction = ToxicAdverseDrugReaction.fromJSON(json);
        if (!this._toxicAdverseDrugReaction.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/adverse/ToxicAdverseDrugReaction';
            this._toxicAdverseDrugReaction.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._toxicAdverseDrugReaction.entryInfo;
    }

    get metadata() {
        return this._toxicAdverseDrugReaction.metadata;
    }

    get adverseEventCondition() {
        if (!this._toxicAdverseDrugReaction.adverseEventCondition || this._toxicAdverseDrugReaction.adverseEventCondition.length === 0) return null;
        return this._toxicAdverseDrugReaction.adverseEventCondition[0];
    }

    get seriousness() {
        if (!this._toxicAdverseDrugReaction.seriousness) return null;
        return this._toxicAdverseDrugReaction.seriousness.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._toxicAdverseDrugReaction.toJSON();
    }
}

export default FluxToxicAdverseDrugReaction;
import FindingResult from '../shr/base/FindingResult';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import TNMStagePanelMember from './TNMStagePanelMember';

class FluxTNMStagePanelMember {
    constructor(json) {
        this._tnmStagePanelMember = TNMStagePanelMember.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            const entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMStagePanelMember';
            this._tnmStagePanelMember.entryInfo = entry;
        }
    }

    get entryInfo() {
        return this._tnmStagePanelMember.entryInfo;
    }

    get metadata() {
        return this._tnmStagePanelMember.metadata;
    }

    set metadata(metadata) {
        this._tnmStagePanelMember.metadata = metadata;
    }

    get value() {
        if (!this._tnmStagePanelMember.findingResult || !this._tnmStagePanelMember.findingResult.value) return null;
        return this._tnmStagePanelMember.findingResult.value.coding[0].displayText.value;
    }

    set value(val) {
        this._tnmStagePanelMember.findingResult = new FindingResult();
        this._tnmStagePanelMember.findingResult.value = val;
    }

    toJSON() {
        return this._tnmStagePanelMember.toJSON();
    }
}

export default FluxTNMStagePanelMember;

import FluxEntry from '../base/FluxEntry';
import FindingResult from '../shr/base/FindingResult';
import TNMStagePanelMember from './TNMStagePanelMember';

class FluxTNMStagePanelMember extends FluxEntry {
    constructor(json) {
        super(json);
        this._tnmStagePanelMember = TNMStagePanelMember.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            this._tnmStagePanelMember.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/oncocore/TNMStagePanelMember');
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

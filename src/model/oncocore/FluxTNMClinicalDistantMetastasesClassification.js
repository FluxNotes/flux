import FindingResult from '../shr/base/FindingResult';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import TNMClinicalDistantMetastasesClassification from './TNMClinicalDistantMetastasesClassification';
import FluxTNMStagePanelMember from './FluxTNMStagePanelMember';

class FluxTNMClinicalDistantMetastasesClassification extends FluxTNMStagePanelMember {
    constructor(json) {
        super(json)
        this._tnmStagePanelMember = TNMClinicalDistantMetastasesClassification.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            const entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalDistantMetastasesClassification';
            this._tnmStagePanelMember.entryInfo = entry;
        }
    }
}

export default FluxTNMClinicalDistantMetastasesClassification;

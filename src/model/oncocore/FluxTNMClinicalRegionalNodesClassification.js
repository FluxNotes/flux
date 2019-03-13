import TNMClinicalRegionalNodesClassification from './TNMClinicalRegionalNodesClassification';
import FindingResult from '../shr/base/FindingResult';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import FluxTNMStagePanelMember from './FluxTNMStagePanelMember';

class FluxTNMClinicalRegionalNodesClassification extends FluxTNMStagePanelMember {
    constructor(json) {
        super(json)
        this._tnmStagePanelMember = TNMClinicalRegionalNodesClassification.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            const entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalRegionalNodesClassification';
            this._tnmStagePanelMember.entryInfo = entry;
        }
    }
}

export default FluxTNMClinicalRegionalNodesClassification;

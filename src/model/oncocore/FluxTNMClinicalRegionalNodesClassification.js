import TNMClinicalRegionalNodesClassification from './TNMClinicalRegionalNodesClassification';
import FindingResult from '../shr/base/FindingResult';
import FluxTNMStagePanelMember from './FluxTNMStagePanelMember';

class FluxTNMClinicalRegionalNodesClassification extends FluxTNMStagePanelMember {
    constructor(json) {
        super(json)
        this._tnmStagePanelMember = TNMClinicalRegionalNodesClassification.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            this._tnmStagePanelMember.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/oncocore/TNMClinicalRegionalNodesClassification');
        }
    }
}

export default FluxTNMClinicalRegionalNodesClassification;

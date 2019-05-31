import TNMClinicalPrimaryTumorClassification from './TNMClinicalPrimaryTumorClassification';
import FindingResult from '../shr/base/FindingResult';
import FluxTNMStagePanelMember from './FluxTNMStagePanelMember';

class FluxTNMClinicalPrimaryTumorClassification extends FluxTNMStagePanelMember {
    constructor(json) {
        super(json)
        this._tnmStagePanelMember = TNMClinicalPrimaryTumorClassification.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            this._tnmStagePanelMember.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/oncocore/TNMClinicalPrimaryTumorClassification');
        }
    }
}

export default FluxTNMClinicalPrimaryTumorClassification;

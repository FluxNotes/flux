import FindingResult from '../shr/base/FindingResult';
import TNMClinicalDistantMetastasesClassification from './TNMClinicalDistantMetastasesClassification';
import FluxTNMStagePanelMember from './FluxTNMStagePanelMember';

class FluxTNMClinicalDistantMetastasesClassification extends FluxTNMStagePanelMember {
    constructor(json) {
        super(json)
        this._tnmStagePanelMember = TNMClinicalDistantMetastasesClassification.fromJSON(json);
        if (!this._tnmStagePanelMember.entryInfo) {
            this._tnmStagePanelMember.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/oncocore/TNMClinicalDistantMetastasesClassification');
        }
    }
}

export default FluxTNMClinicalDistantMetastasesClassification;

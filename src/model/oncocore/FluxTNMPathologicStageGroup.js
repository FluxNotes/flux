import TNMPathologicStageGroup from './TNMPathologicStageGroup';
import PanelMembers from '../shr/base/PanelMembers';
import FluxTNMStageGroup from './FluxTNMStageGroup';

class FluxTNMPathologicStageGroup extends FluxTNMStageGroup {
    constructor(json, patientRecord) {
        super();
        this._entry = this._tnmStageGroup = TNMPathologicStageGroup.fromJSON(json);
        if (!this._tnmStageGroup.entryInfo) {
            this._tnmStageGroup.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/oncocore/TNMPathologicStageGroup');
            this._tnmStageGroup.panelMembers = new PanelMembers();
            this._tnmStageGroup.panelMembers.observation = [];
        }
        this._patientRecord = patientRecord;
    }
}

export default FluxTNMPathologicStageGroup;

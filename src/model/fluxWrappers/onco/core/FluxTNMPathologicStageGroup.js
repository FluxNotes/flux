import TNMPathologicStageGroup from '../../../onco/core/TNMPathologicStageGroup';
import PanelMembers from '../../../shr/core/PanelMembers';
import FluxTNMStageGroup from './FluxTNMStageGroup';

class FluxTNMPathologicStageGroup extends FluxTNMStageGroup {
    constructor(json, patientRecord) {
        super();
        this._entry = this._tnmStageGroup = TNMPathologicStageGroup.fromJSON(json);
        if (!this._tnmStageGroup.entryInfo) {
            this._tnmStageGroup.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TNMPathologicStageGroup');
            this._tnmStageGroup.panelMembers = new PanelMembers();
            this._tnmStageGroup.panelMembers.observation = [];
        }
        this._patientRecord = patientRecord;
    }
}

export default FluxTNMPathologicStageGroup;

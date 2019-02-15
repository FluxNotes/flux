import TNMPathologicStageGroup from './TNMPathologicStageGroup';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import PanelMembers from '../shr/base/PanelMembers';
import FluxTNMStageGroup from './FluxTNMStageGroup';

class FluxTNMPathologicStageGroup extends FluxTNMStageGroup {
    constructor(json, patientRecord) {
        super();
        this._entry = this._tnmStageGroup = TNMPathologicStageGroup.fromJSON(json);
        if (!this._tnmStageGroup.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMPathologicStageGroup';
            this._tnmStageGroup.entryInfo = entry;
            this._tnmStageGroup.panelMembers = new PanelMembers();
            this._tnmStageGroup.panelMembers.observation = [];
        }
        this._patientRecord = patientRecord;
    }
}

export default FluxTNMPathologicStageGroup;

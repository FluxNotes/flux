import TNMClinicalStageGroup from './TNMClinicalStageGroup';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import PanelMembers from '../shr/base/PanelMembers';
import FluxTNMStageGroup from './FluxTNMStageGroup';
import moment from 'moment';

class FluxTNMClinicalStageGroup extends FluxTNMStageGroup {
    constructor(json, patientRecord) {
        super();
        this._entry = this._tnmStageGroup = TNMClinicalStageGroup.fromJSON(json);
        if (!this._tnmStageGroup.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/oncocore/TNMClinicalStageGroup';
            this._tnmStageGroup.entryInfo = entry;
            this._tnmStageGroup.panelMembers = new PanelMembers();
            this._tnmStageGroup.panelMembers.observation = [];
        }
        if (!this._tnmStageGroup.relevantTime) {
            const today = new moment().format('D MMM YYYY');
            this.relevantTime = today;
        }
        this._patientRecord = patientRecord;
    }
}

export default FluxTNMClinicalStageGroup;

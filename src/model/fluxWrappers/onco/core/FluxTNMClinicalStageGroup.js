import TNMClinicalStageGroup from '../../../onco/core/TNMClinicalStageGroup';
import PanelMembers from '../../../shr/core/PanelMembers';
import FluxTNMStageGroup from './FluxTNMStageGroup';
import moment from 'moment';

class FluxTNMClinicalStageGroup extends FluxTNMStageGroup {
    constructor(json, patientRecord) {
        super();
        this._entry = this._tnmStageGroup = TNMClinicalStageGroup.fromJSON(json);
        if (!this._tnmStageGroup.entryInfo) {
            this._tnmStageGroup.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/onco/core/TNMClinicalStageGroup');
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

import Observation from '../shr/base/Observation';

class FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel {
    constructor(json, patientRecord) {
        this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel = Observation.fromJSON(json);
        this._patientRecord = patientRecord;
    }
    
    get entryInfo() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.entryInfo;
    }

    get relevantTime() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.relevantTime.value;
    }
    
    get members() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.panelMembers.observation.map(m => this._patientRecord.getEntryFromReference(m));
    }

    toJSON() {
        const inst = this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/GastrointestinalStromalTumorCancerGeneticAnalysisPanel' };
        return inst;
    }
}

export default FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel;
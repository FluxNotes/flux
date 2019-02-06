import Observation from '../shr/base/Observation';

class FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel {
    constructor(json) {
        this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel = Observation.fromJSON(json);
    }
    
    get entryInfo() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.entryInfo;
    }

    get relevantTime() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.relevantTime.value;
    }
    
    get members() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.panelMembers.observation;
    }

    toJSON() {
        const inst = this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.toJSON();
        inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/GastrointestinalStromalTumorCancerGeneticAnalysisPanel' };
        return inst;
    }
}

export default FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel;
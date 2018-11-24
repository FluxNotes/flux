import Observation from '../shr/base/Observation';

class FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel {
    constructor(json) {
        this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel = Observation.fromJSON(json);
    }
    
    get entryInfo() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.entryInfo;
    }

    get clinicallyRelevantTime() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.clinicallyRelevantTime.value;
    }
    
    get members() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.panelMembers.observation;
    }

    toJSON() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.toJSON();
    }
}

export default FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel;
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
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.toJSON();
    }
}

export default FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel;
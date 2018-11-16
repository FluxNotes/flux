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
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.members.value;
    }

    toJSON() {
        return this._gastrointestinalStromalTumorCancerGeneticAnalysisPanel.toJSON();
    }
}

export default FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel;
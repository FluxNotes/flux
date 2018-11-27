import BreastCancerGeneticAnalysisPanel from '../shr/oncology/BreastCancerGeneticAnalysisPanel';

class FluxBreastCancerGeneticAnalysisPanel {
    constructor(json) {
        this._breastCancerGeneticAnalysisPanel = BreastCancerGeneticAnalysisPanel.fromJSON(json);
    }
    
    get entryInfo() {
        return this._breastCancerGeneticAnalysisPanel.entryInfo;
    }

    get relevantTime() {
        return this._breastCancerGeneticAnalysisPanel.relevantTime.value;
    }
    
    get members() {
        return this._breastCancerGeneticAnalysisPanel.panelMembers.observation;
    }

    toJSON() {
        return this._breastCancerGeneticAnalysisPanel.toJSON();
    }
}

export default FluxBreastCancerGeneticAnalysisPanel;
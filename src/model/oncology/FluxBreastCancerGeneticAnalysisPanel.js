import BreastCancerGeneticAnalysisPanel from '../shr/oncology/BreastCancerGeneticAnalysisPanel';

class FluxBreastCancerGeneticAnalysisPanel {
    constructor(json) {
        this._breastCancerGeneticAnalysisPanel = BreastCancerGeneticAnalysisPanel.fromJSON(json);
    }
    
    get entryInfo() {
        return this._breastCancerGeneticAnalysisPanel.entryInfo;
    }

    get clinicallyRelevantTime() {
        return this._breastCancerGeneticAnalysisPanel.clinicallyRelevantTime.value;
    }
    
    get members() {
        return this._breastCancerGeneticAnalysisPanel.panelMembers.value;
    }

    toJSON() {
        return this._breastCancerGeneticAnalysisPanel.toJSON();
    }
}

export default FluxBreastCancerGeneticAnalysisPanel;
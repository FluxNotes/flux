import BreastCancerGeneticAnalysisPanel from '../shr/oncology/BreastCancerGeneticAnalysisPanel';
import FluxObject from '../base/FluxObject';

class FluxBreastCancerGeneticAnalysisPanel extends FluxObject {
    constructor(json) {
        super();
        this._breastCancerGeneticAnalysisPanel = BreastCancerGeneticAnalysisPanel.fromJSON(json);
    }
    
    get entryInfo() {
        return this._breastCancerGeneticAnalysisPanel.entryInfo;
    }

    get clinicallyRelevantTime() {
        return this._breastCancerGeneticAnalysisPanel.clinicallyRelevantTime.value;
    }
    
    get members() {
        return this._breastCancerGeneticAnalysisPanel.members.value;
    }
}

export default FluxBreastCancerGeneticAnalysisPanel;
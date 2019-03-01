import BreastCancerGeneticAnalysisPanel from '../shr/oncology/BreastCancerGeneticAnalysisPanel';

class FluxBreastCancerGeneticAnalysisPanel {
    constructor(json, patientRecord) {
        this._breastCancerGeneticAnalysisPanel = BreastCancerGeneticAnalysisPanel.fromJSON(json);
        this._patientRecord = patientRecord;
    }
    
    get entryInfo() {
        return this._breastCancerGeneticAnalysisPanel.entryInfo;
    }

    get relevantTime() {
        return this._breastCancerGeneticAnalysisPanel.relevantTime.value;
    }
    
    get members() {
        return this._breastCancerGeneticAnalysisPanel.panelMembers.observation.map(m => this._patientRecord.getEntryFromReference(m));
    }

    toJSON() {
        return this._breastCancerGeneticAnalysisPanel.toJSON();
    }
}

export default FluxBreastCancerGeneticAnalysisPanel;

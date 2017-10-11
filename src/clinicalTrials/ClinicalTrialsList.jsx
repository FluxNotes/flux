class ClinicalTrialsList {
    constructor() {
        this.clinicalTrials = [
            {id: 'patina', name: 'PATINA', description: 'A Randomized, Open Label, Phase III Trial to Evaluate the Efficacy and Safety of Palbociclib + Anti-HER2 Therapy + Endocrine Therapy vs. Anti-HER2 Therapy + Endocrine Therapy after Induction Treatment for Hormone Receptor Positive (HR+)/HER2-Positive Metastatic Breast Cancer'}
        ];
    }
    
    getAllTrials() {
        return this.clinicalTrials;
    }
    
    static getDescription(dataElement){
        switch(dataElement) {
            case "clinicalTrial":
                return "Clinical trial enrollment includes the title of a clinical trial, an enrollment date, and possibly an end date.";
            case "trial":
                return "Clinical trial the patient is enrolled in.";
            case "enrollmentDate":
                return "Date the patient was enrolled in the chosen clinical trial.";
            case "endDate":
                return "Date the patient left the clinical trial.";
            default:
                return null;
        }
    }
}

export default ClinicalTrialsList;
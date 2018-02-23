class ClinicalTrialsList {
    constructor() {
        this.clinicalTrials = [
            {
                id: 'patina', 
                name: 'PATINA', 
                description: 'A Randomized, Open Label, Phase III Trial to Evaluate the Efficacy and Safety of Palbociclib + Anti-HER2 Therapy + Endocrine Therapy vs. Anti-HER2 Therapy + Endocrine Therapy after Induction Treatment for Hormone Receptor Positive (HR+)/HER2-Positive Metastatic Breast Cancer'
            }
        ];
    }
    
    getAllTrials() {
        return this.clinicalTrials;
    }
    
    static getDescription(dataElement){
        switch(dataElement) {
            case "clinicalTrialEnrollment":
                return "Clinical trial enrollment includes the title of a clinical trial and an enrollment date.";
            case "clinicalTrialUnenrolled":
                return "Unenrolling from a clinical trial includes the title of a clinical trial and an end date."
            case "trialEnrollment":
                return "Clinical trial the patient is enrolled in.";
            case "trialUnenrolled":
                return "Clinical trial the patient unenrolled from.";
            case "enrollmentDate":
                return "Date the patient was enrolled in the chosen clinical trial.";
            case "endDate":
                return "Date the patient left the clinical trial.";
            default:
                return null;
        }
    }
    
    getClinicalTrialByName(name){
        let clinicalTrials = this.clinicalTrials.filter((trial) => {
            return trial.name === name;
        });
        if (clinicalTrials.length === 0){
            return null;
        }

        return clinicalTrials[0];
    }
}

export default ClinicalTrialsList;
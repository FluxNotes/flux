import IActiveTreatmentSummary from './IActiveTreatmentSummary'

class SolidTumorActiveTreatmentSummary extends IActiveTreatmentSummary {
    constructor(patient, currentConditionEntry) { 
        super(patient, currentConditionEntry)
        this._patient = patient;
        this._currentConditionEntry = currentConditionEntry;
    }
    getActiveTreatmentSummary() { 
        console.log("SolidTumorActiveTreatmentSummary")
        return null;
    }
}

export default SolidTumorActiveTreatmentSummary;
import _ from 'lodash';
import IActiveTreatmentSummary from './IActiveTreatmentSummary';
import FluxSolidTumorCancer from '../../model/oncology/FluxSolidTumorCancer';

class SolidTumorActiveTreatmentSummary extends IActiveTreatmentSummary {
    constructor() { 
        super()
        this._possibleActiveTreatmentOptions = { 
            "adjuvant": {
                type: "adjuvant",
                displayText: "Adjuvant",
                medications: []
            },
            "neo-adjuvant": {
                type: "neo-adjuvant",
                displayText: "Neo-adjuvant",
                medications: []
            },
            "early-stage": {
                type: "early-stage",
                displayText: "Early stages of diagnosis"
            },
            "no-active-treatment": { 
                type: "no-active-treatment",
                displayText: "No active treatment",
            },
            "medication": { 
                type: "medication",
                displayText: "Medication",
                medications: []
            }
        }
    }

    getActiveTreatmentSummary(patient, currentConditionEntry) { 
        // If the condition isn't a cancer, return null - this algorithm cannot provide information about 
        if (!currentConditionEntry instanceof FluxSolidTumorCancer) return null;
        let activeTreatment = {};
        // Get all relevant medications
        const activeNonOTCMeds = this._getActiveNonOTCMedsForCondition(patient, currentConditionEntry);
        const patientHasActiveNonOTCMeds = activeNonOTCMeds && activeNonOTCMeds.length > 0;
        // 
        const allPlannedSurgeries = this._getAllSurgeriesPlannedForCondition(patient, currentConditionEntry);
        const patientHasSurgeryPlanned = allPlannedSurgeries && allPlannedSurgeries.length > 0;
        // 
        const allSurgeriesPreviouslyPerformed = this._getAllSurgeriesPreviouslyPerformedForCondition(patient, currentConditionEntry);
        const patientHasSurgicalHistory = allSurgeriesPreviouslyPerformed && allSurgeriesPreviouslyPerformed.length > 0;
        if (patientHasActiveNonOTCMeds) { 
            activeTreatment.medications = activeNonOTCMeds;
            // If the patient has nonOTC medications (i.e. they're related to their current condition),
            // Then the description of their treatment depends on their surgical history/planned surgeries
            if (patientHasSurgeryPlanned) { 
                // If they are on a medication related to their cancer 
                // And if they have a surgery planned 
                // Then we can describe their treatment as neo-adjuvant
                activeTreatment = { ...this._possibleActiveTreatmentOptions["neo-adjuvant"], ...activeTreatment};
            } else { 
                if (patientHasSurgicalHistory) { 
                    // If they are on a medication related to their cancer 
                    // And if they have a previous 
                    // Then we can describe their treatment as neo-adjuvant
                    activeTreatment = { ...this._possibleActiveTreatmentOptions["adjuvant"], ...activeTreatment};
                } else {    
                    // TODO: Define treatment summary based on a description of the current medications 
                    activeTreatment = { ...this._possibleActiveTreatmentOptions["medication"], ...activeTreatment};;
                }
            }
        } else { 
            // If there are no related medications
            // Then the description of their treatment depends on their surgical history/planned surgeries
            if (patientHasSurgicalHistory) {
                // If the patient has no medications related to their cancer 
                // And if they have a surgical history 
                // Then they have no active treatment
                activeTreatment = this._possibleActiveTreatmentOptions["no-active-treatment"];
            } else {
                // If the patient has no medications related to their cancer 
                // And if they have no surgical history 
                // Then we will consider them in the early stages of treatment 
                // Regardless of the planned surgeries
                activeTreatment = this._possibleActiveTreatmentOptions["early-stage"];
            }
        }
        return activeTreatment;
    }

    _getActiveNonOTCMedsForCondition(patient, currentConditionEntry) {
        const allMedsForCondition = patient.getActiveMedicationsForCondition(currentConditionEntry);
        return _.filter(allMedsForCondition, (med) => {
            return !med.overTheCounter;
        });
    }

    _getAllSurgeriesPlannedForCondition(patient, currentConditionEntry) { 
        const allSurgeriesPlanned = patient.getSurgeriesPlannedForCondition(currentConditionEntry);
        return allSurgeriesPlanned;
    }

    _getAllSurgeriesPreviouslyPerformedForCondition(patient, currentConditionEntry) {
        const allSurgeriesPreviouslyPerformed = patient.getSurgeriesPreviouslyPerformedForCondition(currentConditionEntry);
        return allSurgeriesPreviouslyPerformed
    }
}

export default SolidTumorActiveTreatmentSummary;
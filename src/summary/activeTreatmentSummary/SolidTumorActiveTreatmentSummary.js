import _ from 'lodash';
import IActiveTreatmentSummary from './IActiveTreatmentSummary';
import FluxSolidTumorCancer from '../../model/oncology/FluxSolidTumorCancer';

class SolidTumorActiveTreatmentSummary extends IActiveTreatmentSummary {
    constructor(patient, currentConditionEntry) { 
        super(patient, currentConditionEntry)
        this._patient = patient;
        this._currentConditionEntry = currentConditionEntry;

        this._possibleActiveTreatmentOptions = { 
            "adjuvant": {

            },
            "neo-adjuvant": {

            },
            "early-stage": {

            },
            "no-active-treatment": { 

            },
            "medication": { 
                "expected": true
            }
        }
    }

    getActiveTreatmentSummary() { 
        // If the condition isn't a cancer, return null - this algorithm cannot provide information about 
        if (!this._currentConditionEntry instanceof FluxSolidTumorCancer) return null;
        let activeTreatment = "";
        // Get all relevant medications
        const activeNonOTCMeds = this._getActiveNonOTCMeds();
        const patientHasActiveNonOTCMeds = activeNonOTCMeds && activeNonOTCMeds.length > 0;
        //
        const allPlannedSurgeries = this._getAllSurgeriesPlanned();
        const patientHasSurgeryPlanned = allPlannedSurgeries && allPlannedSurgeries.length > 0;
        //
        const allSurgeriesPreviouslyPerformed = this._getAllSurgeriesPreviouslyPerformed()
        const patientHasSurgicalHistory = allSurgeriesPreviouslyPerformed && allSurgeriesPreviouslyPerformed.length > 0;
        if (patientHasActiveNonOTCMeds) { 
            // If the patient has nonOTC medications (i.e. they're related to their current condition),
            // Then the description of their treatment depends on their surgical history/planned surgeries
            if (patientHasSurgeryPlanned) { 
                // If they are on a medication related to their cancer 
                // And if they have a surgery planned 
                // Then we can describe their treatment as neo-adjuvant
                activeTreatment = "neo-adjuvant";
            } else { 
                if (patientHasSurgicalHistory) { 
                    // If they are on a medication related to their cancer 
                    // And if they have a previous 
                    // Then we can describe their treatment as neo-adjuvant
                    activeTreatment = "adjuvant";
                } else {    
                    // TODO: Determine some description of the medication
                    activeTreatment = "medication";
                }
            }
        } else { 
            // If there are no related medications
            // Then the description of their treatment depends on their surgical history/planned surgeries
            if (patientHasSurgicalHistory) {
                // If the patient has no medications related to their cancer 
                // And if they have a surgical history 
                // Then they have no active treatment
                activeTreatment = "no-active-treatment";
            } else {
                // If the patient has no medications related to their cancer 
                // And if they have no surgical history 
                // Then we will consider them in the early stages of treatment 
                // Regardless of the planned surgeries
                activeTreatment = "early-stage";
            }
        }
        console.log('activeTreatment: ', activeTreatment);
        console.log('activeNonOTCMeds: ', activeNonOTCMeds);
        console.log('this._possibleActiveTreatmentOptions[activeTreatment]: ', this._possibleActiveTreatmentOptions[activeTreatment]);
        return this._possibleActiveTreatmentOptions[activeTreatment];
    }

    _getActiveNonOTCMeds() {
        const allMedsForCondition = this._patient.getActiveMedicationsForCondition(this._currentConditionEntry);
        return _.filter(allMedsForCondition, (med) => {
            return !med.overTheCounter;
        });
    }

    _getAllSurgeriesPlanned() { 
        const allSurgeriesPlanned = this._patient.getSurgeriesPlannedForCondition(this._currentConditionEntry);
        console.log('allSurgeriesPlanned: ', allSurgeriesPlanned);
        return allSurgeriesPlanned;
    }

    _getAllSurgeriesPreviouslyPerformed() {
        const allSurgeriesPreviouslyPerformed = this._patient.getSurgeriesPreviouslyPerformedForCondition(this._currentConditionEntry);
        console.log('allSurgeriesPreviouslyPerformed: ', allSurgeriesPreviouslyPerformed);
        return allSurgeriesPreviouslyPerformed
    }
}

export default SolidTumorActiveTreatmentSummary;
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
        console.log("SolidTumorActiveTreatmentSummary")
        // If the condition isn't a cancer, return null - this algorithm cannot provide information about 
        if (!this._currentConditionEntry instanceof FluxSolidTumorCancer) return null;
        let activeTreatment = "";
        const _patientHasActiveNonOTCMedications = this._patientHasActiveNonOTCMedications();
        const _patientHasSurgeryPlanned = this._patientHasSurgeryPlanned();
        const _patientHasSurgicalHistory = this._patientHasSurgicalHistory();
        if (_patientHasActiveNonOTCMedications) { 
            // If the patient has nonOTC medications (i.e. they're related to their current condition),
            // Then the description of their treatment depends on their surgical history/planned surgeries
            if (_patientHasSurgeryPlanned) { 
                // If they are on a medication related to their cancer 
                // And if they have a surgery planned 
                // Then we can describe their treatment as neo-adjuvant
                activeTreatment = "neo-adjuvant";
            } else { 
                if (_patientHasSurgicalHistory) { 
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
            if (_patientHasSurgicalHistory) {
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
        console.log('this._possibleActiveTreatmentOptions[activeTreatment];: ', this._possibleActiveTreatmentOptions[activeTreatment]);
        return this._possibleActiveTreatmentOptions[activeTreatment];
    }

    _patientHasActiveNonOTCMedications() {
        const allMedsForCondition = this._patient.getMedicationsForConditionReverseChronologicalOrder(this._currentConditionEntry);
        return _.some(allMedsForCondition, (med) => {
            return !med.overTheCounter
        });
    }

    _patientHasSurgicalHistory() {
        
        return false;
    }

    _patientHasSurgeryPlanned () {
        return false;
    }
}

export default SolidTumorActiveTreatmentSummary;
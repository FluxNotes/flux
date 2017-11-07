import MedicationPrescription from '../shr/medication/MedicationPrescription';

// FluxMedicationPrescription class to hide codeableconcepts
class FluxMedicationPrescription extends MedicationPrescription {

    /*
     *  Getter for requestedPerformanceTime
     *  Returns object containing timePeriodStart and timePeriodEnd value
     */
    get requestedPerformanceTime() {
        return {
            timePeriodStart: this._requestedPerformanceTime.value.timePeriodStart.value,
            timePeriodEnd: this._requestedPerformanceTime.value.timePeriodEnd.value
        };
    }

    /*
     *  Getter for medication
     *  Returns displayText string for medication
     */
    get medication() {
        return this._medication.value.value.coding[0].displayText.value.value;
    }

    /*
     *  Getter for amountPerDose
     *  Returns object with value and units
     */
    get amountPerDose() {
        return {
            value: this._dosage.amountPerDose.value.value,
            units: this._dosage.amountPerDose.value.units.coding.coding[0].value
        };
    }

    /*
     *  Getter for timingOfDoses
     *  Returns object with value and units
     */
    get timingOfDoses() {
        return {
            value: this._dosage.timingOfDoses.value,
            units: this._dosage.timingOfDoses.units
        };
    }
}

export default FluxMedicationPrescription;
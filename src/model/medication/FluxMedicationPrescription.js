import MedicationPrescription from '../shr/medication/MedicationPrescription';
import moment from 'moment';

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
    
    isActiveAsOf(date) {
        const requestedPerformanceTime = this.requestedPerformanceTime;
        if (!requestedPerformanceTime) return null;
        const start = new moment(requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
        const end = new moment(requestedPerformanceTime.timePeriodEnd, "D MMM YYYY");
        if (start && start > date) return false;
        if (end && end < date) return false;
        return true;
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

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._status.value;
    }
}

export default FluxMedicationPrescription;
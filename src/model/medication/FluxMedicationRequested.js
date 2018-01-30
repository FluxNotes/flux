import MedicationRequested from '../shr/medication/MedicationRequested';
// import moment from 'moment';

class FluxMedicationRequested {
    constructor(json) {
        this._medicationRequested = MedicationRequested.fromJSON(json);
    }

    /*
     *  Getter for requestedPerformanceTime
     *  Returns object containing timePeriodStart and timePeriodEnd value
     */
    get expectedPerformanceTime() {
        return {
            timePeriodStart: this._medicationRequested.actionContext.expectedPerformanceTime.timePeriodStart.value,
            timePeriodEnd: this._medicationRequested.actionContext.expectedPerformanceTime.timePeriodEnd.value
        };
    }
    
    // isActiveAsOf(date) {
    //     const requestedPerformanceTime = this.requestedPerformanceTime;
    //     if (!requestedPerformanceTime) return null;
    //     const start = new moment(requestedPerformanceTime.timePeriodStart, "D MMM YYYY");
    //     const end = new moment(requestedPerformanceTime.timePeriodEnd, "D MMM YYYY");
    //     if (start && start > date) return false;
    //     if (end && end < date) return false;
    //     return true;
    // }

    get entryInfo() {
        return this._medicationRequested.entryInfo;
    }

    /*
     *  Getter for medication
     *  Returns displayText string for medication
     */
    get medication() {
        return this._medicationRequested.medicationOrCode.value.coding[0].displayText.value;
    }

    /*
     *  Getter for amountPerDose
     *  Returns object with value and units
     */
    get amountPerDose() {
        return {
            value: this._medicationRequested.dosage.doseAmount.value.decimal,
            units: this._medicationRequested.dosage.doseAmount.value.units.value.code
        };
    }

    /*
     *  Getter for timingOfDoses
     *  Returns object with value and units
     */
    get timingOfDoses() {
        return {
            value: this._medicationRequested.dosage.timingOfDoses.timing,
            units: this._medicationRequested.dosage.timingOfDoses.units
        };
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._medicationRequested.actionContext.status.value.coding[0].displayText.value.value;
    }
    
    /*
     * Getter for prescribed by, using Author as the prescribing doctor
     * Returns author string
     */
    get prescribedBy() {
        return this._author.value;
    }
    
    /*
     * Getter for when prescribed, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenPrescribed() {
        return this._entryInfo._creationTime.value;
    }

    /*
     *  Getter for reason for this medication
     *  Returns array of reasons
     */
    get reason() {
        return this._medicationRequested.actionContext.reason.value;
    }
}

export default FluxMedicationRequested;
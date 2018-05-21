import MedicationRequested from '../shr/medication/MedicationRequested';
import RecurrencePattern from '../shr/core/RecurrencePattern';
import TimePeriod from '../shr/core/TimePeriod';
import Timing from '../shr/core/Timing';
import moment from 'moment';

class FluxMedicationRequested {
    constructor(json) {
        this._medicationRequested = MedicationRequested.fromJSON(json);
    }

    /*
     *  Getter for requestedPerformanceTime
     *  Returns object containing timePeriodStart and timePeriodEnd value
     */
    get expectedPerformanceTime() {
        if (!this._medicationRequested.actionContext || !this._medicationRequested.actionContext.expectedPerformanceTime) {
            return null;
        }
        // doesn't support Timing option right now
        if (this._medicationRequested.actionContext.expectedPerformanceTime.value instanceof Timing) {
            return null;
        } else if (this._medicationRequested.actionContext.expectedPerformanceTime.value instanceof TimePeriod) {
            return {
                timePeriodStart: (this._medicationRequested.actionContext.expectedPerformanceTime.value.timePeriodStart ? this._medicationRequested.actionContext.expectedPerformanceTime.value.timePeriodStart.value : null),
                timePeriodEnd: (this._medicationRequested.actionContext.expectedPerformanceTime.value.timePeriodEnd ? this._medicationRequested.actionContext.expectedPerformanceTime.value.timePeriodEnd.value : null)
            };
        } else {
            const date = this._medicationRequested.actionContext.expectedPerformanceTime.value;
            return { timePeriodStart: date, timePeriodEnd: date };
        }
    }

    get startDate() {
        return this.expectedPerformanceTime.timePeriodStart || null;
    }

    
    isActiveAsOf(date) {
        const expectedPerformanceTime = this.expectedPerformanceTime;
        if (!expectedPerformanceTime || !(this._medicationRequested.actionContext.expectedPerformanceTime.value instanceof TimePeriod)) return null;
        const start = new moment(expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
        const end = new moment(expectedPerformanceTime.timePeriodEnd, "D MMM YYYY");
        if (start && start > date) return false;
        if (end && end < date) return false;
        return true;
    }

    get entryInfo() {
        return this._medicationRequested.entryInfo;
    }

    /*
     *  Getter for entryId
     *  Returns string corresponding to entryId
     */
    get entryId() {
        return this._medicationRequested.entryInfo.entryId;
    }

    /*
     *  Getter for medication
     *  Returns displayText string for medication
     */
    get medication() {
        return this._displayTextOrCode(this._medicationRequested.medicationOrCode.value.coding[0]);
    }

    /*
     *  Getter for amountPerDose
     *  Returns object with value and units
     */
    get amountPerDose() {
        if (!this._medicationRequested.dosage || !this._medicationRequested.dosage.doseAmount) return null;
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
        if (!this._medicationRequested.dosage) return null;
        let timingOfDoses = this._medicationRequested.dosage.timingOfDoses;
        if (timingOfDoses.timing.recurrencePattern && timingOfDoses.timing.recurrencePattern instanceof RecurrencePattern) {
            let units;
            if (timingOfDoses.timing.recurrencePattern.recurrenceInterval.duration.units.value.code === 'd') {
                units = 'per day';
            }
            return {
                value: timingOfDoses.timing.recurrencePattern.recurrenceInterval.duration.decimal,
                units: units
            };
        } else if (timingOfDoses.timing.recurrenceRange) {
            return {
                value: timingOfDoses.timing.recurrenceRange.value.positiveInt,
                units: 'cycles'
            }
        } else if (timingOfDoses.timing.timingCode) {
            return {
                value: timingOfDoses.timing.timingCode.value.coding[0].displayText.value,
                units: null
            }
        }

        return {
            value: null,
            units: null
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
        return this._medicationRequested.author ? this._medicationRequested.author.value: null;
    }
    
    /*
     * Getter for when prescribed, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenPrescribed() {
        return this._medicationRequested.entryInfo.creationTime.value;
    }

    /*
     *  Getter for reason list for this medication
     *  Returns array of reasons
     */
    get reasons() {
        return this._medicationRequested.actionContext.reason || [];
    }
    
    get code() {
        return this._medicationRequested.medicationOrCode.value.coding[0].code;
    }
    
    get routeIntoBody() {
        if (!this._medicationRequested.dosage || !this._medicationRequested.dosage.routeIntoBody) return null;
        return this._displayTextOrCode(this._medicationRequested.dosage.routeIntoBody.value.coding[0]);
    }
    
    get numberOfRefillsAllowed() {
        if (!this._medicationRequested.numberOfRefillsAllowed) return null;
        return this._medicationRequested.numberOfRefillsAllowed.value;
    }

    /**
     * Extract a human-readable string from a code.
     *
     * @param {Coding} coding
     * @returns {string} the display text if available, otherwise the code.
     * @private
     */
    _displayTextOrCode(coding) {
        return coding.displayText ? coding.displayText.value : coding.value;
    }
    /**
     * Return a JSON representation of medicationRequested
     */
    toJSON() {
        return this._medicationRequested.toJSON();
    }
}

export default FluxMedicationRequested;
import MedicationRequested from '../shr/medication/MedicationRequested';
import Medication from '../shr/entity/Medication';
import RecurrencePattern from '../shr/core/RecurrencePattern';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import TimePeriod from '../shr/core/TimePeriod';
import TimePeriodStart from '../shr/core/TimePeriodStart';
import TimePeriodEnd from '../shr/core/TimePeriodEnd';
import Timing from '../shr/core/Timing';
import ExpectedPerformanceTime from '../shr/base/ExpectedPerformanceTime';
import moment from 'moment';
import lookup from '../../lib/MedicationInformationService.jsx';

class FluxMedicationRequested {
    constructor(json) {
        this._medicationRequested = MedicationRequested.fromJSON(json);
        if (!this._medicationRequested.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/medication/MedicationRequested';
            this._medicationRequested.entryInfo = entry;
          }
    }

    /*
     *  Getter for requestedPerformanceTime
     *  Returns object containing timePeriodStart and timePeriodEnd value
     */
    get expectedPerformanceTime() {
        if (!this._medicationRequested.expectedPerformanceTime) {
            return null;
        }
        // doesn't support Timing option right now
        if (this._medicationRequested.expectedPerformanceTime.value instanceof Timing) {
            return null;
        } else if (this._medicationRequested.expectedPerformanceTime.value instanceof TimePeriod) {
            return {
                timePeriodStart: (this._medicationRequested.expectedPerformanceTime.value.timePeriodStart ? this._medicationRequested.expectedPerformanceTime.value.timePeriodStart.value : null),
                timePeriodEnd: (this._medicationRequested.expectedPerformanceTime.value.timePeriodEnd ? this._medicationRequested.expectedPerformanceTime.value.timePeriodEnd.value : null)
            };
        } else {
            const date = this._medicationRequested.expectedPerformanceTime.value;
            return { timePeriodStart: date, timePeriodEnd: date };
        }
    }

    /*
     *  Getter for start date
     *  Returns object containing timePeriodStart value
     */
    get startDate() {
        return this.expectedPerformanceTime.timePeriodStart || null;
    }

    /**
     *  Set the start date and create new objects on medicationRequested object if none exist so that the timePeriodStart can be set
     */
    set startDate(date) {
        if (!this._medicationRequested.expectedPerformanceTime) {
            this._medicationRequested.expectedPerformanceTime = new ExpectedPerformanceTime();
        }
        if (!this._medicationRequested.expectedPerformanceTime.value) {
            this._medicationRequested.expectedPerformanceTime.value = new TimePeriod();
        }
        const timePeriodStart = new TimePeriodStart();
        timePeriodStart.value = date;
        this._medicationRequested.expectedPerformanceTime.value.timePeriodStart = timePeriodStart;
    }

    get endDate() {
        return this.expectedPerformanceTime.timePeriodEnd || null;
    }

    set endDate(date) {
        if (!this._medicationRequested.expectedPerformanceTime) {
            this._medicationRequested.expectedPerformanceTime = new ExpectedPerformanceTime();
        }
        if (!this._medicationRequested.expectedPerformanceTime.value) {
            this._medicationRequested.expectedPerformanceTime.value = new TimePeriod();
        }
        const timePeriodEnd = new TimePeriodEnd();
        timePeriodEnd.value = date;
        this._medicationRequested.expectedPerformanceTime.value.timePeriodEnd = timePeriodEnd;
    }

    isActiveAsOf(date) {
        const expectedPerformanceTime = this.expectedPerformanceTime;
        if (!expectedPerformanceTime || !(this._medicationRequested.expectedPerformanceTime.value instanceof TimePeriod)) return null;
        const start = new moment(expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
        const end = new moment(expectedPerformanceTime.timePeriodEnd, "D MMM YYYY");
        if (start && start > date) return false;
        if (end && end < date) return false;
        return true;
    }

    isActiveBetween(lowerDate, upperDate) {
        const expectedPerformanceTime = this.expectedPerformanceTime;
        if (!expectedPerformanceTime || !(this._medicationRequested.expectedPerformanceTime.value instanceof TimePeriod)) return null;
        const start = new moment(expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
        const end = new moment(expectedPerformanceTime.timePeriodEnd, "D MMM YYYY");
        
        // If the start date is in the future
        if (start && start > upperDate) return false;

        // If the medication ended before the lowerDate
        if (end && end < lowerDate) return false;

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
        return this._displayTextOrCode(this._medicationRequested.medication.type.coding[0]);
    }

    /**
     *  Setter for medication
     */
    set medication(medicationName) {
        this._medicationRequested.medication = new Medication();
        this._medicationRequested.medication.type = lookup.getCodeableConceptFromName(medicationName);
    }

    /*
     *  Getter for medication over the counter flag
     *  Returns boolean value for medicationsOrCode of medication type. Returns undefined for codeable concepts.
     */
    get overTheCounter() {
        if (this._isMedicationObject(this._medicationRequested.medicationOrCode)) {
            return this._medicationRequested.medicationOrCode.value.overTheCounter;
        }
        // CodeableConcept values do not specify if over the counter or not.
        return undefined;
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

    set dose(amount) {
        if (!this._medicationRequested.dosage || !this._medicationRequested.dosage.doseAmount) return;
        this._medicationRequested.dosage.doseAmount.value.decimal = amount;
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
        return this._medicationRequested.status.value.coding[0].displayText.value.value;
    }

    /*
     * Getter for prescribed by, using Author as the prescribing doctor
     * Returns author string
     */
    get prescribedBy() {
        return this._medicationRequested.author ? this._medicationRequested.author.value : null;
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
        return this._medicationRequested.reason || [];
    }

    get code() {
        if (this._isMedicationObject(this._medicationRequested.medicationOrCode)) {
            return this._medicationRequested.medicationOrCode.value.type.coding[0].code;
        }
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

    get asNeededIndicator() {
        return this._medicationRequested.dosage.asNeededIndicator.value;
    }

    get doseInstructionsText() {
        return this._medicationRequested.dosage.doseInstructionsText ? this._medicationRequested.dosage.doseInstructionsText.value : null;
    }

    _isMedicationObject(medicationOrCode) {
        if (medicationOrCode.value.entryInfo && medicationOrCode.value.entryInfo.entryType
            && medicationOrCode.value.entryInfo.entryType.value === 'http://standardhealthrecord.org/spec/shr/entity/Medication') {
            return true;
        }
        return false;
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
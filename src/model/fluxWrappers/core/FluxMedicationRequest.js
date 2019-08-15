import MedicationCodeOrReference from '../../shr/core/MedicationCodeOrReference';
import RecurrencePattern from '../../shr/core/RecurrencePattern';
import TimePeriod from '../../shr/core/TimePeriod';
import BeginDateTime from '../../shr/core/BeginDateTime';
import EndDateTime from '../../shr/core/EndDateTime';
import MedicationRequest from '../../shr/core/MedicationRequest';
import ExpectedPerformanceTime from '../../shr/core/ExpectedPerformanceTime';
import Type from '../../shr/core/Type';
import FluxEntry from '../base/FluxEntry';
import moment from 'moment';
import * as lookup from '../../../lib/MedicationInformationService.jsx';

class FluxMedicationRequest extends FluxEntry {
    constructor(json, patientRecord) {
        super();
        this._entry = this._medicationRequest = MedicationRequest.fromJSON(json);
        if (!this._medicationRequest.entryInfo) {
            this._medicationRequest.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/core/MedicationRequest');
        }
        this._patientRecord = patientRecord;
    }

    /*
     *  Getter for requestedPerformanceTime
     *  Returns object containing timePeriodStart and timePeriodEnd value
     */
    get expectedPerformanceTime() {
        if (!this._medicationRequest.expectedPerformanceTime) {
            return null;
        }
        // doesn't support Timing option right now
         if (this._medicationRequest.expectedPerformanceTime.value instanceof TimePeriod) {
            return {
                timePeriodStart: (this._medicationRequest.expectedPerformanceTime.value.beginDateTime ? this._medicationRequest.expectedPerformanceTime.value.beginDateTime.value : null),
                timePeriodEnd: (this._medicationRequest.expectedPerformanceTime.value.endDateTime ? this._medicationRequest.expectedPerformanceTime.value.endDateTime.value : null)
            };
        } else {
            const date = this._medicationRequest.expectedPerformanceTime.value;
            return { timePeriodStart: date, timePeriodEnd: date };
        }
    }

    /*
     *  Getter for start date
     *  Returns object containing timePeriodStart value
     */
    get startDate() {
        if (this.expectedPerformanceTime) return this.expectedPerformanceTime.timePeriodStart;

        // fallback to statementDateTime in case expectedPerformanceTime isn't provided
        // statementDateTime maps to dateWritten in FHIR and is required by the argonaut profile,
        //   so we expect it to always be present
        // both statementDateTime and expectedPerformanceTime.timePeriodStart have a value of type dateTime
        // so they should be interchangeable for our purposes
        if (this._medicationRequest.statementDateTime) return this._medicationRequest.statementDateTime;

        return null;
    }

    /**
     *  Set the start date and create new objects on medicationRequested object if none exist so that the timePeriodStart can be set
     */
    set startDate(date) {
        if (!this._medicationRequest.expectedPerformanceTime) {
            this._medicationRequest.expectedPerformanceTime = new ExpectedPerformanceTime();
        }
        if (!this._medicationRequest.expectedPerformanceTime.value) {
            this._medicationRequest.expectedPerformanceTime.value = new TimePeriod();
        }

        const beginDateTime = new BeginDateTime();
        beginDateTime.value = date;
        this._medicationRequest.expectedPerformanceTime.value.beginDateTime = beginDateTime;
    }

    get endDate() {
        if (!this.expectedPerformanceTime) return null;
        return this.expectedPerformanceTime.timePeriodEnd;
    }

    set endDate(date) {
        if (!this._medicationRequest.expectedPerformanceTime) {
            this._medicationRequest.expectedPerformanceTime = new ExpectedPerformanceTime();
        }
        if (!this._medicationRequest.expectedPerformanceTime.value) {
            this._medicationRequest.expectedPerformanceTime.value = new TimePeriod();
        }

        const endDateTime = new EndDateTime();
        endDateTime.value = date;
        this._medicationRequest.expectedPerformanceTime.value.endDateTime = endDateTime;
    }

    isActiveAsOf(date) {
        const start = new moment(this.startDate, "D MMM YYYY");
        const end = new moment(this.endDate, "D MMM YYYY");
        if (start && start > date) return false;
        if (end && end < date) return false;
        return true;
    }

    isActiveBetween(lowerDate, upperDate) {
        const start = new moment(this.startDate, "D MMM YYYY");
        const end = new moment(this.endDate, "D MMM YYYY");

        // If the start date is in the future
        if (start && start > upperDate) return false;

        // If the medication ended before the lowerDate
        if (end && end < lowerDate) return false;

        return true;
    }

    get entryInfo() {
        return this._medicationRequest.entryInfo;
    }

    /*
     *  Getter for entryId
     *  Returns string corresponding to entryId
     */
    get entryId() {
        return this._medicationRequest.entryInfo.entryId;
    }

    /*
     *  Getter for medication
     *  Returns displayText string for medication
     */
    get medication() {
        // TODO: handle reference case
        return this._displayTextOrCode(this._medicationRequest.medicationCodeOrReference.value.coding[0]);
    }

    /**
     *  Setter for medication
     */
    set medication(medicationName) {
        const medicationCodeOrReference = new MedicationCodeOrReference();
        const type = new Type();
        type.value = lookup.getCodeableConceptFromName(medicationName);
        medicationCodeOrReference.type = type;
        this._medicationRequest.medicationCodeOrReference = medicationCodeOrReference;
    }

    /*
     *  Getter for medication over the counter flag
     *  Returns boolean value for medicationsOrCode of medication type. Returns undefined for codeable concepts.
     */
    get overTheCounter() {
        if (!this._medicationRequest.medicationCodeOrReference.overTheCounter) return undefined;
        return this._medicationRequest.medicationCodeOrReference.overTheCounter.value;
    }

    /*
     *  Getter for amountPerDose
     *  Returns object with value and units
     */
    get amountPerDose() {
        if (!this._medicationRequest.dosage
            || !this._medicationRequest.dosage.doseAmount
            || !this._medicationRequest.dosage.doseAmount.value) return null;
        return {
            value: this._medicationRequest.dosage.doseAmount.value.number.decimal,
            units: this._medicationRequest.dosage.doseAmount.value.units.coding.codeValue.value
        };
    }

    set dose(amount) {
        if (!this._medicationRequest.dosage || !this._medicationRequest.dosage.doseAmount) return;
        this._medicationRequest.dosage.doseAmount.value.number.decimal = amount;
    }

    /*
     *  Getter for timingOfDoses
     *  Returns object with value and units
     */
    get timingOfDoses() {
        if (!this._medicationRequest.dosage
            || !this._medicationRequest.dosage.timingOfDoses) return null;
        let timingOfDoses = this._medicationRequest.dosage.timingOfDoses;
        if (timingOfDoses.timing
            && timingOfDoses.timing.recurrencePattern instanceof RecurrencePattern) {
            let units;
            if (timingOfDoses.timing.recurrencePattern.recurrenceInterval.duration.units.value.codeValue.value === 'd') {
                units = 'per day';
            }
            return {
                value: timingOfDoses.timing.recurrencePattern.recurrenceInterval.duration.number.value,
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

        return null;
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._medicationRequest.status.value; //.coding[0].displayText.value.value;
    }

    /*
     * Getter for prescribed by, using Author as the prescribing doctor
     * Returns author string
     */
    get prescribedBy() {
        if (this._medicationRequest.metadata && this._medicationRequest.metadata.informationRecorder) {
            return this._medicationRequest.metadata.informationRecorder; 
        }

        if (this._medicationRequest.medicationRequester && this._medicationRequest.medicationRequester.value) {
            const requester = this._patientRecord.getEntryFromReference(this._medicationRequest.medicationRequester.value);
            if (requester 
                && requester.person 
                && requester.person.humanName 
                && requester.person.humanName[0]
                && requester.person.humanName[0].nameAsText) {
                return requester.person.humanName[0].nameAsText.value;
            }
        } 

        return null;
    }

    /*
     * Getter for when prescribed, using the creation time of the entry as the time prescribed
     * Returns date as a string
     */
    get whenPrescribed() {
        if (this._medicationRequest.metadata
            && this._medicationRequest.metadata.authoredDateTime) {
            return this._medicationRequest.metadata.authoredDateTime.dateTime;
        }
        if (this._medicationRequest.statementDateTime) {
            return this._medicationRequest.statementDateTime.dateTime;
        }
        return null;
    }

    /*
     *  Getter for reason list for this medication
     *  Returns array of reasons
     */
    get reasons() {
        const reasons = [];
        if (this._medicationRequest.reasonCode) reasons.push(...this._medicationRequest.reasonCode);
        if (this._medicationRequest.reasonReference) reasons.push(...this._medicationRequest.reasonReference);
        return reasons;
    }

    get code() {
        // TODO: handle reference case
        return this._medicationRequest.medicationCodeOrReference.value.coding[0].codeValue.value;
    }

    get routeIntoBody() {
        if (!this._medicationRequest.dosage || !this._medicationRequest.dosage.routeIntoBody) return null;
        return this._displayTextOrCode(this._medicationRequest.dosage.routeIntoBody.value.coding[0]);
    }

    get numberOfRefillsAllowed() {
        if (!this._medicationRequest.numberOfRefillsAllowed) return null;
        return this._medicationRequest.numberOfRefillsAllowed.value;
    }

    get asNeededIndicator() {
        if (!this._medicationRequest.dosage
            || !this._medicationRequest.dosage.asNeededIndicator) {
            return null;
        }
        return this._medicationRequest.dosage.asNeededIndicator.value;
    }

    get doseInstructionsText() {
        if (!this._medicationRequest.dosage
            || !this._medicationRequest.dosage.dosageInstructionsText) {
            return null;
        }
        return this._medicationRequest.dosage.dosageInstructionsText.value;
    }

    /**
     * Return a JSON representation of medicationRequested
     */
    toJSON() {
        return this._medicationRequest.toJSON();
    }
}

export default FluxMedicationRequest;

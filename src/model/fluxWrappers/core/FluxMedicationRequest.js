import TimePeriod from '../../shr/core/TimePeriod';
import BeginDateTime from '../../shr/core/BeginDateTime';
import EndDateTime from '../../shr/core/EndDateTime';
import MedicationRequest from '../../shr/core/MedicationRequest';
import ExpectedPerformanceTime from '../../shr/core/ExpectedPerformanceTime';
import moment from 'moment';
import FluxMedicationBase from './FluxMedicationBase';

class FluxMedicationRequest extends FluxMedicationBase {
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
}

export default FluxMedicationRequest;

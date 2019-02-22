import TimePeriod from '../shr/core/TimePeriod';
import ProcedureRequested from '../shr/procedure/ProcedureRequested';

class FluxProcedureRequested {
    constructor(json) {
        this._procedureRequested= ProcedureRequested.fromJSON(json);
    }

    get entryInfo() {
        return this._procedureRequested.entryInfo;
    }

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if (this._procedureRequested.expectedPerformanceTime.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._procedureRequested.expectedPerformanceTime.value.beginDateTime.value,
                timePeriodEnd: this._procedureRequested.expectedPerformanceTime.value.endDateTime.value
            };
        } else {
            return this._procedureRequested.expectedPerformanceTime.value;
        }
    }

    get dateLabel() {
        if (this.occurrenceTime.timePeriodStart) {
            return `${this.occurrenceTime.timePeriodStart}―${this.occurrenceTime.timePeriodEnd}`;
        } else {
            return `${this.occurrenceTime}`;
        }
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._procedureRequested.status.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._displayTextOrCode(this._procedureRequested.procedureCode.value.coding[0]);
    }

    /*
     *  Getter for procedure code
     *  Returns procedure code string
     */
    get code() {
        if (!this._procedureRequested.procedureCode) return null;
        return this._procedureRequested.procedureCode.value.coding[0].code.value;
    }

    /*
     *  Getter for reason list for this procedure
     *  Returns array of reasons
     */
    get reasons() {
        return this._procedureRequested.reason;
    }
    
    get annotation() {
        if (this._procedureRequested.annotation && this._procedureRequested.annotation.length > 0) {
            return this._procedureRequested.annotation[0].text;
        } else {
            return null;
        }
    }

    get expectedPerformer() {
        if (this._procedureRequested.expectedPerformer && this._procedureRequested.expectedPerformer.value && this._procedureRequested.expectedPerformer.value.person) {
            return this._procedureRequested.expectedPerformer.value.person.name;
        } else {
            return null;
        }
    }

    /**
     * Extract a human-readable string from a code.
     *
     * @param {Coding} coding
     * @returns {string} the display text if available, otherwise the code.
     * @private
     */
    _displayTextOrCode(coding) {
        return coding.displayText ? coding.displayText.value : coding.code.value;
    }

    toJSON() {
        return this._procedureRequested.toJSON();
    }
}

export default FluxProcedureRequested;
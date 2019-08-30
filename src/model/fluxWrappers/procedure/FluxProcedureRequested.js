import TimePeriod from '../shr/core/TimePeriod';
import ProcedureRequested from '../shr/procedure/ProcedureRequested';
import FluxEntry from '../base/FluxEntry';

class FluxProcedureRequested extends FluxEntry {
    constructor(json) {
        super();
        this._entry = this._procedureRequested = ProcedureRequested.fromJSON(json);
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
        return this._displayTextOrCode(this._procedureRequested.status.value.coding[0]);
    }

    /*
     *  Getter for statusCodeSystem
     *  Returns statusCodeSystem string or null if there is none
     */
    get statusCodeSystem() {
        if (!this._procedureRequested.status || !this._procedureRequested.status.value.coding[0].codeSystem) return null;
        return this._procedureRequested.status.value.coding[0].codeSystem.value;
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
     *  Getter for the codesystem associated with the procedure code
     *  Returns procedure code string
     */
    get codeSystem() {
        if (!this._procedureRequested.procedureCode) return null;
        return this._procedureRequested.procedureCode.value.coding[0].codeSystem.value;
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
            return this._procedureRequested.annotation[0].text.value;
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

    toJSON() {
        return this._procedureRequested.toJSON();
    }
}

export default FluxProcedureRequested;

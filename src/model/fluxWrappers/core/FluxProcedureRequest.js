import TimePeriod from '../../shr/core/TimePeriod';
import ProcedureRequest from '../../shr/core/ProcedureRequest';
import FluxEntry from '../base/FluxEntry';

class FluxProcedureRequest extends FluxEntry {
    constructor(json) {
        super();
        this._entry = this._procedureRequest = ProcedureRequest.fromJSON(json);
    }

    get entryInfo() {
        return this._procedureRequest.entryInfo;
    }

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if (this._procedureRequest.expectedPerformanceTime.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._procedureRequest.expectedPerformanceTime.value.beginDateTime.value,
                timePeriodEnd: this._procedureRequest.expectedPerformanceTime.value.endDateTime.value
            };
        } else {
            return this._procedureRequest.expectedPerformanceTime.value;
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
        return this._displayTextOrCode(this._procedureRequest.status.value.coding[0]);
    }

    /*
     *  Getter for statusCodeSystem
     *  Returns statusCodeSystem string or null if there is none
     */
    get statusCodeSystem() {
        if (!this._procedureRequest.status || !this._procedureRequest.status.value.coding[0].codeSystem) return null;
        return this._procedureRequest.status.value.coding[0].codeSystem.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._displayTextOrCode(this._procedureRequest.type.value.coding[0]);
    }

    /*
     *  Getter for procedure code
     *  Returns procedure code string
     */
    get code() {
        if (!this._procedureRequest.type) return null;
        return this._procedureRequest.type.value.coding[0].codeValue.value;
    }

    /*
     *  Getter for the codesystem associated with the procedure code
     *  Returns procedure code string
     */
    get codeSystem() {
        if (!this._procedureRequest.type) return null;
        return this._procedureRequest.type.value.coding[0].codeSystem.value;
    }

    /*
     *  Getter for reasonReference list for this procedure
     *  Returns array of reasonReferences
     */
    get reasons() {
        return this._procedureRequest.reasonReference;
    }

    get annotation() {
        if (this._procedureRequest.annotation && this._procedureRequest.annotation.length > 0) {
            return this._procedureRequest.annotation[0].text.value;
        } else {
            return null;
        }
    }

    get expectedPerformer() {
        if (this._procedureRequest.expectedPerformer && this._procedureRequest.expectedPerformer.value && this._procedureRequest.expectedPerformer.value.person) {
            return this._procedureRequest.expectedPerformer.value.person.name;
        } else {
            return null;
        }
    }

    toJSON() {
        return this._procedureRequest.toJSON();
    }
}

export default FluxProcedureRequest;

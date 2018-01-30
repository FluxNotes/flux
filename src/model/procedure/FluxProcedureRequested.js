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
        if(this._procedureRequested.actionContext.expectedPerformanceTime instanceof TimePeriod) {
            return {
                timePeriodStart: this._procedureRequested.actionContext.expectedPerformanceTime.timePeriodStart.value,
                timePeriodEnd: this._procedureRequested.actionContext.expectedPerformanceTime.timePeriodEnd.value
            };
        } else {
            return this._procedureRequested.actionContext.expectedPerformanceTime.value;
        }
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._procedureRequested.actionContext.status.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._procedureRequested.type.value.coding[0].displayText.value;
    }

    /*
     *  Getter for reason for this procedure
     *  Returns array of reasons
     */
    get reason() {
        return this._procedureRequested.actionContext.reason.value;
    }
}

export default FluxProcedureRequested;
import Procedure from '../shr/procedure/ProcedurePerformed';
import TimePeriod from '../shr/core/TimePeriod';
import ProcedurePerformed from '../shr/procedure/ProcedurePerformed';

class FluxProcedurePerformed {
    constructor(json) {
        this._procedurePerformed = ProcedurePerformed.fromJSON(json);
    }

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if(this._procedurePerformed.actionContext.occurenceTimeOrPeriod.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._procedurePerformed.actionContext.occurenceTimeOrPeriod.value.timePeriodStart.value,
                timePeriodEnd: this._procedurePerformed.actionContext.occurenceTimeOrPeriod.value.timePeriodEnd.value
            };
        } else {
            return this._procedurePerformed.actionContext.occurenceTimeOrPeriod.value;
        }
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._procedurePerformed.actionContext.status.value.coding[0].displayText.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._procedurePerformed.type.value.coding[0].displayText.value;
    }
}

export default FluxProcedurePerformed;
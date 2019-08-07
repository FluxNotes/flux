import TimePeriod from '../../shr/core/TimePeriod';
import Procedure from '../../shr/core/Procedure';

class FluxProcedure {
    constructor(json) {
        this._procedure = Procedure.fromJSON(json);
    }

    get entryInfo() {
        return this._procedure.entryInfo;
    }

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if(this._procedure.actionContext.occurenceTimeOrPeriod.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._procedure.actionContext.occurenceTimeOrPeriod.value.timePeriodStart.value,
                timePeriodEnd: this._procedure.actionContext.occurenceTimeOrPeriod.value.timePeriodEnd.value
            };
        } else {
            return this._procedure.actionContext.occurenceTimeOrPeriod.value;
        }
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._procedure.actionContext.status.value.coding[0].displayText.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._procedure.code.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._procedure.toJSON();
    }
}

export default FluxProcedure;

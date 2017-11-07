import Procedure from '../shr/procedure/Procedure';
import TimePeriod from '../shr/core/TimePeriod';

// FluxProcedure class to hide codeableconcepts
class FluxProcedure extends Procedure {

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if(this._occurrenceTime.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._occurrenceTime.value.timePeriodStart.value,
                timePeriodEnd: this._occurrenceTime.value.timePeriodEnd.value
            };
        } else {
            return this._occurrenceTime.value;
        }
    }
}

export default FluxProcedure;
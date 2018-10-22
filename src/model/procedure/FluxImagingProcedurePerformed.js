import TimePeriod from '../shr/core/TimePeriod';
import ImagingProcedurePerformed from '../shr/procedure/ImagingProcedurePerformed';

class FluxImagingProcedurePerformed {
    constructor(json) {
        this._imagingProcedurePerformed = ImagingProcedurePerformed.fromJSON(json);
    }

    get entryInfo() {
        return this._imagingProcedurePerformed.entryInfo;
    }

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if (this._imagingProcedurePerformed.actionContext.occurrenceTimeOrPeriod.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._imagingProcedurePerformed.actionContext.occurrenceTimeOrPeriod.value.timePeriodStart.value,
                timePeriodEnd: this._imagingProcedurePerformed.actionContext.occurrenceTimeOrPeriod.value.timePeriodEnd.value
            };
        } else {
            return this._imagingProcedurePerformed.actionContext.occurrenceTimeOrPeriod.value;
        }
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._imagingProcedurePerformed.actionContext.status.value.coding[0].displayText.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._imagingProcedurePerformed.type.value.coding[0].displayText.value;
    }

    /*
     *  Getter for reason list for this procedure
     *  Returns array of reasons
     */
    get reasons() {
        return this._imagingProcedurePerformed.actionContext.reason;
    }

    toJSON() {
        return this._imagingProcedurePerformed.toJSON();
    }
}

export default FluxImagingProcedurePerformed;

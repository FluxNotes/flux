import TimePeriod from '../../shr/core/TimePeriod';
import ImagingProcedure from '../../shr/core/ImagingProcedure';

class FluxImagingProcedure {
    constructor(json) {
        this._imagingProcedure = ImagingProcedure.fromJSON(json);
    }

    get entryInfo() {
        return this._imagingProcedure.entryInfo;
    }

    /*
     *  Getter for occurrenceTime
     *  Can return object containing timePeriodStart and timePeriodEnd value if a range
     *  Returns a date if a single value
     */
    get occurrenceTime() {
        if (this._imagingProcedure.occurrenceTimeOrPeriod.value instanceof TimePeriod) {
            return {
                timePeriodStart: this._imagingProcedure.occurrenceTimeOrPeriod.value.timePeriodStart.value,
                timePeriodEnd: this._imagingProcedure.occurrenceTimeOrPeriod.value.timePeriodEnd.value
            };
        } else {
            return this._imagingProcedure.occurrenceTimeOrPeriod.value;
        }
    }

    /*
     *  Getter for status
     *  Returns status string
     */
    get status() {
        return this._imagingProcedure.status.value.coding[0].displayText.value;
    }

    /*
     *  Getter for procedure name
     *  Returns procedure name string
     */
    get name() {
        return this._imagingProcedure.code.value.coding[0].displayText.value;
    }

    /*
     *  Getter for reason list for this procedure
     *  Returns array of reasons
     */
    get reasons() {
        return this._imagingProcedure.reasonReference;
    }

    get annotation() {
        if (this._imagingProcedure.annotation && this._imagingProcedure.annotation.length > 0) {
            return this._imagingProcedure.annotation[0].text.value;
        } else {
            return null;
        }
    }

    toJSON() {
        return this._imagingProcedure.toJSON();
    }
}

export default FluxImagingProcedure;

import CancerHistologicGrade from '../../../onco/core/CancerHistologicGrade';
import FluxObservation from '../../core/FluxObservation';

class FluxCancerHistologicGrade extends FluxObservation {
    constructor(json) {
        super();
        this._cancerHistologicGrade = this._observation = this._entry = CancerHistologicGrade.fromJSON(json);
    }

    get entryInfo() {
        return this._cancerHistologicGrade.entryInfo;
    }

    /**
     *  Getter for grade
     *  This will return the displayText string from CodeableConcept Value
     */
    get grade() {
        return this._displayTextOrCode(this._cancerHistologicGrade.dataValue.value.coding[0]);
    }

    getGradeAsSimpleNumber() {
        if (!this._cancerHistologicGrade.dataValue
            || this._cancerHistologicGrade.dataValue.value
            || this._cancerHistologicGrade.dataValue.value.coding
            || this._cancerHistologicGrade.dataValue.value.coding[0]
            || this._cancerHistologicGrade.dataValue.value.coding[0].code
            || this._cancerHistologicGrade.dataValue.value.coding[0].code.value) {
            return null;
        }

        const code = this._cancerHistologicGrade.dataValue.value.coding[0].code.value;
        if (code === "369792005") {
            return 3;
        } else if (code === "369791003") {
            return 2;
        } else if (code === "369790002") {
            return 1;
        } else if (code === "373374006" || code === "258245003") {
            return 4;
        } else if (code === "12619005") {
            return "X";
        } else {
            return null;
        }
    }

    toJSON() {
        return this._cancerHistologicGrade.toJSON();
    }
}

export default FluxCancerHistologicGrade;

import CancerHistologicGrade from './CancerHistologicGrade';
import FluxObservation from '../base/FluxObservation';

class FluxCancerHistologicGrade extends FluxObservation {
    constructor(json) {
        super();
        this._histologicGrade = this._observation = this._entry = CancerHistologicGrade.fromJSON(json);
    }

    get entryInfo() {
        return this._histologicGrade.entryInfo;
    }

    /**
     *  Getter for grade
     *  This will return the displayText string from CodeableConcept Value
     */
    get grade() {
        return this._displayTextOrCode(this._histologicGrade.findingResult.value.coding[0]);
    }

    getGradeAsSimpleNumber() {
        const code = this._histologicGrade.findingResult.value.coding[0].code.value;
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
        return this._histologicGrade.toJSON();
    }
}

export default FluxCancerHistologicGrade;
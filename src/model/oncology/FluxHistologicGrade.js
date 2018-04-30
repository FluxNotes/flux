import HistologicGrade from '../shr/oncology/HistologicGrade';

class FluxHistologicGrade {
    constructor(json) {
        this._histologicGrade = HistologicGrade.fromJSON(json);
    }

    get entryInfo() {
        return this._histologicGrade.entryInfo;
    }

    /**
     *  Getter for grade
     *  This will return the displayText string from CodeableConcept Value
     */
    get grade() {
        return this._displayTextOrCode(this._histologicGrade.value.coding[0]);
    }

    /**
     * Extract a human-readable string from a code.
     *
     * @param {Coding} coding
     * @returns {string} the display text if available, otherwise the code.
     * @private
     */
    _displayTextOrCode(coding) {
        return coding.displayText ? coding.displayText.value : coding.value;
    }

    toJSON() {
        return this._histologicGrade.toJSON();
    }
}

export default FluxHistologicGrade;
import HistologicGrade from '../shr/oncology/HistologicGrade';
import FluxObject from '../base/FluxObject';

class FluxHistologicGrade extends FluxObject {
    constructor(json) {
        super();
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
        return this._histologicGrade.value.coding[0].displayText.value;
    }
}

export default FluxHistologicGrade;
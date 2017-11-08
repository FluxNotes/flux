import HistologicGrade from '../shr/oncology/HistologicGrade';

class FluxHistologicGrade extends HistologicGrade {
    /**
     *  Getter for grade
     *  This will return the displayText string from CodeableConcept Value
     */
    get grade() {
        return this._codeableConcept.coding[0].displayText.value;
    }
}

export default FluxHistologicGrade;
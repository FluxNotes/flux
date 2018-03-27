import Patient from "../shr/entity/Patient";
import Deceased from "../shr/entity/Deceased";

class FluxPatient {
    constructor(json) {
        this._patient = Patient.fromJSON(json);
    }

    get entryInfo() {
        return this._patient.entryInfo;
    }

    get gender() {
        if (this._patient.birthSex) {
            return this._patient.birthSex.value.coding[0].displayText.value;
        }
        return null;
    }

    get person() {
        return this._patient.value;
    }

    get deceased() {
        return this._patient.deceased;
    }

    set deceased(val) {
        let deceased = new Deceased();
        deceased.value = val;
        this._patient.deceased = deceased;
    }
}

export default FluxPatient;
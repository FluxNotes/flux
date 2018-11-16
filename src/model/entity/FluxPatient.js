import Patient from "../shr/entity/Patient";
import IsDeceased from "../shr/entity/IsDeceased";

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

    get race() {
        if (this._patient.race) {
            return this._patient.race.value.coding[0].value;
        }
    }

    get person() {
        return this._patient.value;
    }

    get deceased() {
        return this._patient.deceased;
    }

    set deceased(val) {
        let deceased = new IsDeceased();
        deceased.value = val;
        this._patient.deceased = deceased;
    }

    toJSON() {
        return this._patient.toJSON();
    }
}

export default FluxPatient;
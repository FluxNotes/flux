import Patient from "../../shr/core/Patient";
import Deceased from "../../shr/core/Deceased";
import FluxPerson from './FluxPerson';

class FluxPatient {
    constructor(json, type, patientRecord) {
        this._patient = Patient.fromJSON(json);
        this._patientRecord = patientRecord;
        this._person = new FluxPerson(this._patient.person); // TODO: not ideal
    }

    get entryInfo() {
        return this._patient.entryInfo;
    }

    get gender() {
        return this.person.gender.value;
    }

    get race() {
        return this.person.race;
    }

    get person() {
        return this._person;
    }

    get deceased() {
        return this._patient.deceased;
    }

    set deceased(val) {
        let deceased = new Deceased();
        deceased.value = val;
        this._patient.deceased = deceased;
    }

    toJSON() {
        return this._patient.toJSON();
    }
}

export default FluxPatient;
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
        if (!this.person || !this.person.gender) return null;
        return this.person.gender.value;
    }

    get race() {
        if (!this.person) return null;
        return this.person.race;
    }

    get person() {
        return this._person;
    }

    get deceased() {
        if (!this.person || !this.person.deceased) return null;
        return this.person.deceased.value;
    }

    set deceased(val) {
        if (!val) this.person.deceased = null;
        this.person.deceased = val;
    }

    toJSON() {
        return this._patient.toJSON();
    }
}

export default FluxPatient;

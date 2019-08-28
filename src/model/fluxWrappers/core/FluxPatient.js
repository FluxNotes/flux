import Patient from "../../shr/core/Patient";
import FluxPerson from './FluxPerson';
import FluxEntry from "../base/FluxEntry";

class FluxPatient extends FluxEntry {
    constructor(json, patientRecord) {
        super();
        this._entry = this._patient = Patient.fromJSON(json);
        this._patientRecord = patientRecord;
        this._person = new FluxPerson(this._patient.person); // TODO: not ideal
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

    get mrn() {
        if (this._patient.identifier.length === 0) return null;
        const mrnIdentifier = this._patient.identifier.find((i) => {
            return i.type ? i.type.value.coding[0].codeValue.value === 'MR' : false;
        });
        return mrnIdentifier ? mrnIdentifier.identifierString.value : null;
    }
}

export default FluxPatient;

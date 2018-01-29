import Patient from "../shr/entity/Patient";


class FluxPatient {
    constructor(json) {
        this._patient = Patient.fromJSON(json);
    }

    get entryInfo() {
        return this._patient.entryInfo;
    }

    get name() {
        if (this._patient.party) {
            return this._patient.party.humanName;
        }
        return null;
    }

    get gender() {
        if (this._patient.birthSex) {
            return this._patient.birthSex.value.coding[0].displayText.value;
        }
        return null;
    }

    get dateOfBirth() {
        if (this._patient.party) {
            return this._patient.party.dateOfBirth;
        }
        return null;
    }

    get address() {
        if (this._patient.party) {
            return this._patient.party.address;
        }
        return null;
    }
}

export default FluxPatient;
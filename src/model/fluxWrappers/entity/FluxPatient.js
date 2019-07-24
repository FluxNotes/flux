import Patient from "../shr/entity/Patient";
import IsDeceased from "../shr/entity/IsDeceased";

class FluxPatient {
    constructor(json, type, patientRecord) {
        this._patient = Patient.fromJSON(json);
        this._patientRecord = patientRecord;
    }

    get entryInfo() {
        return this._patient.entryInfo;
    }

    get gender() {
        return this.person.gender;
    }

    get race() {
        return this.person.race;
    }

    get person() {
        return this._patientRecord.getEntryFromReference(this._patient.person);
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
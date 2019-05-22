import Person from "../shr/entity/Person";

class FluxPerson {
    constructor(json) {
        this._person = Person.fromJSON(json);
    }

    get entryInfo() {
        return this._person.entryInfo;
    }

    get name() {
        if (!this._person.humanName
            || this._person.humanName.length < 1
            || !this._person.humanName[0].nameAsText) return null;
        return this._person.humanName[0].nameAsText.value;
    }

    get dateOfBirth() {
        if (!this._person.dateOfBirth) return null;
        return this._person.dateOfBirth.value;
    }

    get address() {
        if (!this._person.address || this._person.address.length < 1) return null;
        return this._person.address[0];
    }

    get headshot() {
        if (!this._person.headshot || !this._person.headshot.media.resourceLocation) return null;
        return this._person.headshot.media.resourceLocation.uri;
    }

    get race() {
        return this._person.race ? this._person.race.raceCode.value.coding[0].code.value : null;
    }

    get gender() {
        if (this._person.administrativeGender) {
            return this._person.administrativeGender.value;
        }
        return null;
    }

    get partOf() {
        if (this._person.partOf) {
            return this._person.partOf.value;
        }
        return null;
    }

    toJSON() {
        return this._person.toJSON();
    }
}

export default FluxPerson;
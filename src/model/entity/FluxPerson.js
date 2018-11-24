import Person from "../shr/entity/Person";

class FluxPerson {
    constructor(json) {
        this._person = Person.fromJSON(json);
    }

    get entryInfo() {
        return this._person.entryInfo;
    }

    get name() {
        if (!this._person.humanName || this._person.humanName.length < 1) return null;
        return this._person.humanName[0].value;
    }

    get dateOfBirth() {
        return this._person.dateOfBirth;
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
        if (this._person.race) {
            return this._person.race.raceCode.value.coding[0].code;
        }
    }

    get gender() {
        if (this._person.birthSex) {
            return this._person.birthSex.value.coding[0].displayText.value;
        }
        return null;
    }

    toJSON() {
        return this._person.toJSON();
    }
}

export default FluxPerson;
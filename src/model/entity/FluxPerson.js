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
        if (!this._person.headshot || !this._person.headshot.attachment.resourceLocation) return null;
        return this._person.headshot.attachment.resourceLocation.uri;
    }

    toJSON() {
        return this._person.toJSON();
    }
}

export default FluxPerson;
import Person from "../shr/entity/Person";

class FluxPerson {
    constructor(json) {
        this._person = Person.fromJSON(json);
    }

    get entryInfo() {
        return this._person.entryInfo;
    }

    get name() {
        return this._person.humanName;
    }

    get dateOfBirth() {
        return this._person.dateOfBirth;
    }

    get address() {
        return this._person.address;
    }

    get headshot() {
        return this._person.headshot.attachment.resourceLocation.uri;
    }
}

export default FluxPerson;
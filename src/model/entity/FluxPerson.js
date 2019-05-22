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
             || this._person.humanName.length < 1) return null;
        const nameObj = this._person.humanName[0];
        if (nameObj.nameAsText) return nameObj.nameAsText.value;

        // The object doesn't contain a canonical text version of the name, so we'll construct one.
        // Note that different cultures have different name schemes.
        // this just uses a western scheme of Given-Family-Suffix

        const namePieces = [];

        if (nameObj.givenName) namePieces.push( ...nameObj.givenName.map(gn => gn.value) );
        if (nameObj.familyName) namePieces.push( ...nameObj.familyName.map(fn => fn.value) );
        if (nameObj.suffix) namePieces.push( ...nameObj.suffix.map(s => s.value) );

        return namePieces.join(' ');
    }

    get dateOfBirth() {
        if (!this._person.dateOfBirth) return null;
        return this._person.dateOfBirth.value;
    }

    get address() {
        if (!this._person.address || this._person.address.length < 1) return null;
        return this._person.address[0];
    }

    get photographicImage() {
        if (!this._person.photographicImage || !this._person.photographicImage[0].resourceLocation) return null;
        return this._person.photographicImage[0].resourceLocation.uri;
    }

    get race() {
        return this._person.race ? this._person.race.raceCode.value.coding[0].code.value : null;
    }

    get gender() {
        if (this._person.administrativeGender) {
            return this._person.administrativeGender.value.coding[0].code.value;
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

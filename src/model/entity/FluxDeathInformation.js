import FluxEntry from '../base/FluxEntry';
import DeathInformation from '../shr/entity/DeathInformation';
import DateOfDeath from '../shr/entity/DateOfDeath';
import IsDeceased from '../shr/entity/IsDeceased';
import Lang from 'lodash';

class FluxDeathInformation extends FluxEntry {
    constructor(json) {
        super(json);
        this._deathInformation = DeathInformation.fromJSON(json);
        if (!this._deathInformation.entryInfo) {
            this._deathInformation.entryInfo = this._constructEntry('http://standardhealthrecord.org/spec/shr/entity/DeathInformation');
        }
    }

    get entryInfo() {
        return this._deathInformation.entryInfo;
    }

    /**
     *  Getter for dateOfDeath
     *  This will return the date value
     */
    get dateOfDeath() {
        if (Lang.isUndefined(this._deathInformation.dateOfDeath)) return null;
        return this._deathInformation.dateOfDeath.value;
    }

    /**
     *  Setter for dateOfDeath
     *  The setter method is expecting a date string
     *  The method will create DateOfDeath and IsDeceased objects.
     */
    set dateOfDeath(date) {
        const dateOfDeath = new DateOfDeath();
        dateOfDeath.value = date;
        this._deathInformation.dateOfDeath = dateOfDeath;
        const isDeceased = new IsDeceased();
        isDeceased.value = (!Lang.isNull(date));
        this._deathInformation.isDeceased = isDeceased;
    }

    toJSON() {
        return this._deathInformation.toJSON();
    }
}

export default FluxDeathInformation;
import DeathInformation from '../shr/entity/DeathInformation';
import DateOfDeath from '../shr/entity/DateOfDeath';
import IsDeceased from '../shr/entity/IsDeceased';
import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import moment from 'moment';
import LastUpdated from '../shr/base/LastUpdated';
import Lang from 'lodash';

class FluxDeathInformation {
    constructor(json) {
        this._deathInformation = DeathInformation.fromJSON(json);       
        if (!this._deathInformation.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/entity/Deceased';
            let today = new moment().format("D MMM YYYY");
            entry.lastUpdated = new LastUpdated();
            entry.lastUpdated.instant = today;
            this._deathInformation.entryInfo = entry;
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
        if (Lang.isUndefined(this._deathInformation.dateOfDeath) || Lang.isUndefined(this._deathInformation.dateOfDeath.dateTime)) return null; 
        return this._deathInformation.dateOfDeath.dateTime.value;
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
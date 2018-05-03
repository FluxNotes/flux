import Deceased from '../shr/entity/Deceased';
import DateOfDeath from '../shr/entity/DateOfDeath';
import GeneralizedDateTime from '../shr/core/GeneralizedDateTime';
import Lang from 'lodash';

class FluxDeceased {
    constructor(json) {
        this._deceased = Deceased.fromJSON(json);
    }

    /**
     *  Getter for dateOfDeath
     *  This will return the date value
     */
    get dateOfDeath() {
        if (Lang.isUndefined(this._deceased.dateOfDeath) || Lang.isUndefined(this._deceased.dateOfDeath.dateTime)) return null; 
        return this._deceased.dateOfDeath.dateTime.value;
    }

    /**
     *  Setter for dateOfDeath
     *  The setter method is expecting a date string
     *  The method will create DateOfDeath and GeneralizedDateTime objects.
     */
    set dateOfDeath(date) {
        let dateOfDeath = new DateOfDeath();
        let generalizedDateTime = new GeneralizedDateTime();
        generalizedDateTime.value = date;
        dateOfDeath.dateTime = generalizedDateTime;
        this._deceased.dateOfDeath = dateOfDeath;
        this._deceased.value = (!Lang.isNull(date));
    }

    toJSON() {
        return this._deceased.toJSON();
    }
}

export default FluxDeceased;
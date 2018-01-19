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
        if (Lang.isUndefined(this._deceased.dateOfDeath)) this._dateOfDeath = new DateOfDeath();
        if (Lang.isUndefined(this._deceased.dateOfDeath.generalizedDateTime)) this._dateOfDeath.generalizedDateTime = new GeneralizedDateTime();
        return this._deceased.dateOfDeath.generalizedDateTime.value;
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
        dateOfDeath.generalizedDateTime = generalizedDateTime;
        this._deceased.dateOfDeath = dateOfDeath;
        this._deceased.value = (!Lang.isNull(date));
    }
}

export default FluxDeceased;
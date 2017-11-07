import Deceased from '../shr/actor/Deceased';
import DateOfDeath from '../shr/actor/DateOfDeath';
import GeneralizedDateTime from '../shr/core/GeneralizedDateTime';

class FluxDeceased extends Deceased {
    constructor(json) {
        super(json);
        if (json) {
            if (json.dateOfDeath) {
                let dateOfDeath = new DateOfDeath();
                let generalizedDateTime = new GeneralizedDateTime();
                generalizedDateTime.value = json.dateOfDeath;
                dateOfDeath.generalizedDateTime = generalizedDateTime;
                this._dateOfDeath = dateOfDeath;
            }
        }   
    }
    /**
     *  Getter for dateOfDeath
     *  This will return the date value
     */
    get dateOfDeath() {
        return this._dateOfDeath.generalizedDateTime.value;
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
        this._dateOfDeath = dateOfDeath;
    }
}

export default FluxDeceased;
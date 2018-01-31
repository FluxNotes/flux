import NoKnownAllergy from '../shr/allergy/NoKnownAllergy';

class FluxNoKnownAllergy {
    constructor(json) {
        this._noKnownAllergy = NoKnownAllergy.fromJSON(json);
        console.log(this._noKnownAllergy.entryInfo)
    }
    
    get entryInfo() {
        return this._noKnownAllergy.entryInfo;
    }
    
    /*
     *  Getter for no known allergy
     *  Returns displayText string for no known allergy
     */
    get noKnownAllergy() {
        return this._noKnownAllergy.value.coding[0].displayText;
    }
}

export default FluxNoKnownAllergy;
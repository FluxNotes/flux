import AllergyIntolerance from '../shr/allergy/AllergyIntolerance';

class FluxAllergyIntolerance {
    constructor(json) {
        this._allergyIntolerance = AllergyIntolerance.fromJSON(json);
    }
    
    get entryInfo() {
        return this._allergyIntolerance.entryInfo;
    }
    
    /*
     *  Getter for allergy
     *  Returns displayText string for allergy
     */
    get allergyIntolerance() {
        return this._allergyIntolerance.value.coding[0].displayText;
    }

}

export default FluxAllergyIntolerance;
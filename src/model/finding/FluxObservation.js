import FluxEntry from '../base/FluxEntry';
import Observation from '../shr/finding/Observation';
import Quantity from '../shr/core/Quantity';

class FluxObservation extends FluxEntry {
    constructor(json) {
        super(json);
        this._entry = this._observation = Observation.fromJSON(json);
    }
    
    get entryInfo() {
        return this._observation.entryInfo;
    }

    /**
     *  Getter for quantity
     *  If _value is an instance of Quantity, will return object with properties number and unit
     *  Otherwise return null;
     */
    get quantity() {
        if (this._observation.value instanceof Quantity) {
            return {
                number: this._observation.value.decimal,
                unit: this._observation.value.units.value.value
            };
        } else {
            return null;
        }
    }

    get name() { 
        if (this._observation.observationCode.coding.length > 0) { 
            return this._observation.observationCode.coding[0].displayText.value;
        } else { 
            return null;
        }        
    }

    get codeableConceptCode() { 
        if (this._observation.observationCode && this._observation.observationCode.coding && this._observation.observationCode.coding.length > 0) { 
            return this._observation.observationCode.coding[0].code;
        } else { 
            return null;
        } 
    }

    get clinicallyRelevantTime() { 
        if (this._observation.clinicallyRelevantTime) { 
            return this._observation.clinicallyRelevantTime.value;
        } else { 
            return null;
        }
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxObservation;
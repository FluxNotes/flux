import FluxObservation from '../base/FluxObservation';
import Observation from '../shr/base/Observation';

class FluxBRCA2Variant extends FluxObservation {
    constructor(json) {
        super();
        this._brca2Variant = Observation.fromJSON(json);
    }

    get abbreviatedName() {
        return 'BRCA2';
    }
    
    get value() {
        return this._brca2Variant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._brca2Variant.toJSON();
    }
}

export default FluxBRCA2Variant;
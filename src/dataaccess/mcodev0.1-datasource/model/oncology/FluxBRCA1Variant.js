import FluxObservation from '../base/FluxObservation';
import Observation from '../shr/base/Observation';

class FluxBRCA1Variant extends FluxObservation {
    constructor(json) {
        super();
        this._brca1Variant = Observation.fromJSON(json);
    }
    
    get abbreviatedName() {
        return 'BRCA1';
    }

    get value() {
        return this._brca1Variant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._brca1Variant.toJSON();
    }
}

export default FluxBRCA1Variant;
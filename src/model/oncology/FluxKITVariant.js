import Observation from '../shr/base/Observation';

class FluxKITVariant {
    constructor(json) {
        this._kitVariant = Observation.fromJSON(json);
    }
    
    get abbreviatedName() {
        return this._kitVariant.specificFocusOfFinding.value.coding[0].displayText.value || 'KIT';
    }

    get value() {
        return this._kitVariant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._kitVariant.toJSON();
    }
}

export default FluxKITVariant;
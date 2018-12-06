import Observation from '../shr/base/Observation';

class FluxPDGFRAVariant {
    constructor(json) {
        this._pdgfraVariant = Observation.fromJSON(json);
    }
    
    get abbreviatedName() {
        return 'PDGFRA';
    }

    get value() {
        return this._pdgfraVariant.value.coding[0].displayText.value;
    }

    toJSON() {
        return this._pdgfraVariant.toJSON();
    }
}

export default FluxPDGFRAVariant;